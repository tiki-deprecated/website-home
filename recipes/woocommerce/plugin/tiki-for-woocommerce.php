<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://myiki.com
 * @since             1.0.0
 * @package           Tiki_Woo
 *
 * @wordpress-plugin
 * Plugin Name:       TIKI for WooCommerce
 * Plugin URI:        https://mytiki.com
 * Description:       Boost your cookie consent opt-in rates with TIKI for WooCommerce! Offer coupons or loyalty points in exchange for cookies' consent and improve user experiences and conversions.
 * Version:           1.0.0
 * Author:            TIKI Team
 * Author URI:        https://myiki.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tiki-for-woocommerce
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'TIKI_WOO_VERSION', '1.0.0' );


/**
 * Current TIKI SDK JS version.
 */
define( 'TIKI_SDK_VERSION', '1.0.6' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-tiki-woo.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_tiki_woo() {

	$plugin_path = trailingslashit( WP_PLUGIN_DIR ) . 'woocommerce/woocommerce.php';
	if (
		in_array( $plugin_path, wp_get_active_and_valid_plugins(), true )
		|| ( is_multisite() && in_array( $plugin_path, wp_get_active_network_plugins(), true ) )
	) {
		$plugin = new Tiki_Woo();
		$plugin->run();
	} else {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		deactivate_plugins( plugin_basename( __FILE__ ), true );
		$url = admin_url( 'plugins.php?deactivate=true' );
		unset( $_GET['activate'] );
		add_action(
			'admin_notices',
			function() {
				?>
				<div class="notice notice-error">
					<p>Error! <b>TIKI for WooCommerce</b> depends on <b>WooCommerce</b> to work properly. Plugin deactivated. <a href="<?php echo esc_attr( admin_url( '/plugin-install.php?s=woocommerce&tab=search&type=term' ) ); ?>">Click here to install <b>WooCommerce</b></a></p>
				</div>
				<?php
			}
		);
	}

}
run_tiki_woo();
