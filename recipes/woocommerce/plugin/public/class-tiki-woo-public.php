<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://myiki.com
 * @since      1.0.0
 *
 * @package    Tiki_Woo
 * @subpackage Tiki_Woo/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Tiki_Woo
 * @subpackage Tiki_Woo/public
 */
class Tiki_Woo_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0

	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0

	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 */
	public function enqueue_scripts() {
		if ( ! wp_script_is( 'tiki-sdk-js' ) ) {
			wp_enqueue_script( 'tiki-sdk-js', 'https://unpkg.com/@mytiki/tiki-sdk-js@' . TIKI_SDK_VERSION . '/dist/index.js', array( 'wp-api', $this->plugin_name ), TIKI_SDK_VERSION, false );
			if ( $this->should_initialize_tiki_sdk() ) {
				wp_add_inline_script( 'tiki-sdk-js', $this->initialize_tiki_sdk() );
			}
		}
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/tiki-woo-public.js', array( 'jquery' ), $this->version, false );
		$options = get_option( 'tiki_sdk_options' );
		if ( $this->should_load_cookie_yes() ) {
			$this->cookie_yes_js_integration();
		}
	}

	/**
	 * Applies the coupon in cart if the user has a valid one.
	 */
	public function apply_coupon_in_cart() {
		$current_user = wp_get_current_user();
		$tiki_user_id = get_user_meta( $current_user->ID, '_tiki_user_id', true );
		$code         = substr( $tiki_user_id, 0, 10 );
		$coupon       = new WC_Coupon( $code );
		if ( empty( $coupon->id ) || 0 === $current_user->ID || WC()->cart->has_discount( $code ) ) {
			return;
		}
		WC()->cart->apply_coupon( $code );
	}

	private function get_default_options( $default ) {
		if ( 'coupons' === $default ) {
			$coupon_options = get_option( 'tiki_woo_coupons', array() );
			if ( ( ! isset( $coupon_options['enable_coupons'] ) || 1 === $coupon_options['enable_coupons'] ) ) {
				return $coupon_options;
			} else {
				$loyalty_options = get_option( 'tiki_woo_loyalty', array() );
				if ( $loyalty_options['enable_points'] ) {
					return $loyalty_options;
				} else {
					return null;
				}
			}
		}
	}

	private function should_load_cookie_yes() {
		$cookies_options = get_option( 'tiki_woo_cookies', array() );
		$plugin_path     = trailingslashit( WP_PLUGIN_DIR ) . 'cookie-law-info/cookie-law-info.php';
		if ( 'cookie_yes' === $cookies_options['cookies_integration'] ) {
			$is_enabled = in_array( $plugin_path, wp_get_active_and_valid_plugins(), true )
			|| ( is_multisite() && in_array( $plugin_path, wp_get_active_network_plugins(), true ) );
			return $is_enabled;
		}
		return false;
	}

	private function initialize_tiki_sdk() {

		$default = array(
			'primary_text_color'         => '#1C0000',
			'secondary_text_color'       => '#1C000099',
			'primary_background_color'   => '#FFFFFF',
			'secondary_background_color' => '#F6F6F6',
			'accent_color'               => '#00b272',
			'font_family'                => '"Space Grotesk", sans-serif',
			'description'                => 'Trade your IDFA (kind of like a serial # for your phone) for a discount.',
			'offer_reward'               => 'https://cdn.mytiki.com/assets/demo-reward.png',
			'offer_bullet1'              => 'Learn how our ads perform',
			'offer_bullet2'              => 'Reach you on other platforms',
			'offer_bullet3'              => 'Sold to other companies',
			'offer_bullet1_cb'           => 'used',
			'offer_bullet2_cb'           => 'not_used',
			'offer_bullet3_cb'           => 'not_used',
			'offer_terms'                => 'https://cdn.mytiki.com/assets/udla/template-1-0-0.md',
			'offer_ptr'                  => get_site_url() . '_TIKI_WOO_COUPON',
			'offer_tag'                  => 'TikiSdk.TitleTag.deviceId()',
			'offer_use'                  => '{ usecases:[TikiSdk.LicenseUsecase.attribution()] }',
			'enable_coupons'             => '1',
		);

		$general_options = get_option( 'tiki_woo_general', array() );
		$offer_options   = $this->get_default_options( $general_options['default_offer'] );

		if ( is_null( $offer_options ) ) {
			return '';
		}

		$options = array_merge(
			$default,
			array_filter(
				array_merge(
					$general_options,
					$offer_options
				)
			)
		);

		$primary_text_color         = $options['primary_text_color'];
		$secondary_text_color       = $options['secondary_text_color'];
		$primary_background_color   = $options['primary_background_color'];
		$secondary_background_color = $options['secondary_background_color'];
		$accent_color               = $options['accent_color'];
		$font_family                = $options['font_family'];
		$description                = $options['description'];
		$offer_reward               = $options['offer_reward'];
		$offer_bullet1              = $this->get_offer_bullet_js( $options['offer_bullet1'], $options['offer_bullet1_cb'] );
		$offer_bullet2              = $this->get_offer_bullet_js( $options['offer_bullet2'], $options['offer_bullet2_cb'] );
		$offer_bullet3              = $this->get_offer_bullet_js( $options['offer_bullet3'], $options['offer_bullet3_cb'] );
		$offer_terms                = $options['offer_terms'];
		$offer_ptr                  = $options['offer_ptr'];
		$offer_tag                  = $options['offer_tag'];
		$offer_use                  = $options['offer_use'];
		$publishing_id              = $general_options['publishing_id'];
		$cookie_yes_integration     = $this->should_load_cookie_yes();

		$current_user = wp_get_current_user();

		if ( ! ( $current_user instanceof WP_User ) ) {
			$user_id = $this->define_anonymous_user_id();
		} else {
			$user_id = $this->define_logged_in_user_id( $current_user );
		}

		return "
		TikiSdk.config()
			.theme
				.primaryTextColor('$primary_text_color')
				.secondaryTextColor('$secondary_text_color')
				.primaryBackgroundColor('$primary_background_color')
				.secondaryBackgroundColor('$secondary_background_color')
				.accentColor('$accent_color')
				.fontFamily('$font_family')
				.and()
			.offer
				.description('$description')
				.reward('$offer_reward')
				.bullet($offer_bullet1)
				.bullet($offer_bullet2)
				.bullet($offer_bullet3)
				.terms('$offer_terms')
				.ptr('$offer_ptr')
				.tag($offer_tag)
				.use($offer_use)
				.add()
			.onAccept(() => {
				debugger
				tikiSetPresentedCookie()
				tikiCreateUserCoupon() 
				" . (
					$cookie_yes_integration ?
					'tikiCookieYesAcceptCallback()
					' : ''
					) . '
			})
			.onDecline(() => {
				debugger
				tikiSetPresentedCookie()
				tikiRemoveUserCoupon()
				' . (
					$cookie_yes_integration ?
					'tikiCookieYesDenyCallback()
					' : ''
					) . "
			})
			.disableDeclineEnding(true)
			.disableAcceptEnding(true)
			.initialize('$publishing_id', '$user_id')
			.then(() => {
				let tiki_user_id = TikiSdk.id()
				tikiSetUserIdCookie(tiki_user_id)
				let presented = document.cookie.match('tiki_presented')
				if( !presented ) {
					TikiSdk.present()
				}
			})";
	}

	public function save_cookie_tiki_id_to_user_meta() {
		if ( isset( $_COOKIE['tiki_user_id'] ) ) {
			$current_user = wp_get_current_user();
			$tiki_user_id = sanitize_text_field( $_COOKIE['tiki_user_id'] );
			update_user_meta( $current_user->ID, '_tiki_user_id', $tiki_user_id );
		}
	}

	private function define_anonymous_user_id() {
		if ( isset( $_COOKIE['tiki_user_id'] ) ) {
			return sanitize_text_field( $_COOKIE['tiki_user_id'] );
		}
		$user_id = hash( 'sha256', get_site_url() . microtime( true ) . wp_Rand() );
		setcookie( 'tiki_user_id', $random_id, strtotime( '+1 year' ), COOKIEPATH, COOKIE_DOMAIN );
		return $user_id;
	}

	private function define_logged_in_user_id( WP_User $user ) {
		$user_id = get_user_meta( $user->ID, '_tiki_user_id', true );
		if ( ! $user_id ) {
			if ( isset( $_COOKIE['tiki_user_id'] ) ) {
				$user_id = sanitize_text_field( $_COOKIE['tiki_user_id'] );
			} else {
				$user_id = hash( 'sha256', get_site_url() . microtime( true ) . wp_Rand() );
			}
			update_user_meta( $user->ID, '_tiki_user_id', $user_id );
		}
		return $user_id;
	}

	private function should_initialize_tiki_sdk() {
		return true;
	}

	private function cookie_yes_js_integration() {
		wp_add_inline_script(
			'cookie-law-info',
			'
            let cookieYesCookie = document.cookie.match(new RegExp("(^| )cookieyes-consent=([^;]+)"));
            if(cookieYesCookie == undefined){
                let expire = new Date()
                let expireTime = expire.setFullYear(expire.getFullYear() + 1)
                expire.setTime(expireTime)        
                document.cookie = `cookieyes-consent=consentid:,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no;expires=${expire.toUTCString()};path=/`
            }',
			'before'
		);
	}

	private function get_offer_bullet_js( $text, $is_used ) {
		$is_used_txt = 'used' === $is_used ? 'true' : 'false';
		return '{ text: "' . $text . '", isUsed : ' . $is_used_txt . '}';
	}
}
