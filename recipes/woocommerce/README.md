# TIKI <> WooCommerce Integration

Instead of prompting the users with boring traditional low converting cookie banners, create compelling offers.

TIKI for WooCommerce makes it simple to create offers in the form of coupons and loyalty points to incentivize users to allow cookies.


### Requires

- A [WordPress](https://wordpress.org) site.
- [WooCommerce Plugin](https://br.wordpress.org/plugins/woocommerce/) installed and active.
- A [TIKI account](https://console.mytiki.com), with a project and corresponding API keys.

## How it works
TIKI for WooCommerce offers website users a discount coupon or loyalty points in exchange for consenting to the use of cookies.

Upon a user's first visit, the plugin presents the offer through a banner. If the user accepts the offer, a license is created in the TIKI infrastructure, and the offered reward is processed for the user.

In the case of a coupon discount, the plugin generates an exclusive coupon for that user. If the user is not logged in, their TIKI ID is saved in the browser's cookies, and the coupon is created upon their first login. The coupon is automatically applied during checkout.

For loyalty points, the plugin records the points in the user's metadata table. If the user is not logged in, this record is made upon their first login. Loyalty plugins can utilize this record to credit points to the user.

### Cookie Yes Integration
To integrate with Cookie Yes, our plugin instructs Cookie Yes to block all cookies and suppress their banner. Instead, TIKI's banner is displayed. If the user accepts the offer, our plugin informs Cookie Yes to unblock all cookies. If the user declines, the Cookie Yes banner is shown, allowing the user to select which cookies they wish to allow.

### Limits
#### Cookies
Our plugin does not block cookies based on user consent. Instead, we focus on seamless integration with specialized plugins that handle this feature. Currently, we offer integration with the Cookie Yes plugin, and we continue to explore further integrations for enhanced functionality.

#### Loyalty Points
Currently, we do not offer integration with loyalty plugins. However, we are actively working on integrating with [WooCommerce Points and Rewards](https://woocommerce.com/pt-br/products/woocommerce-points-and-rewards/). For manual integration please refer to the example section for guidance.

Feel free to [open an issue](https://github.com/tiki/integrations/issues/new) in our repository asking for specific integrations. 

### Example
#### How to retrieve reward points
The reward points are recorded in the `user_metadata` table and can be retrieved with the following code snippet. 
```
    function tiki_get_reward_points( $user_id ) {
        $tiki_points = get_user_meta( 'tiki_woocommerce_loyalty_points', true );
        // use the points
    }
```

## Get Started
### TIKI API Keys
To enable communication between the plugin and the TIKI infrastructure, you need to obtain API keys.
1. Visit the [TIKI Console](https://console.mytiki.com) to acquire the API keys.
2. Create a new project or select an existing one.
3. Generate a Private Key for the project.
4. Take note of the Private Key ID, Private Key Secret, and Publishing ID.

### Installation
1. In the WordPress plugins menu, click "Add New" and upload the `tiki-for-woocommerce.zip` file.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Open the plugin settings by navigating to Marketing -> TIKI in the admin menu.
4. In the General tab, enter the Publishing ID, Private Key ID, and Private Key Secret.
5. Save the settings.

Open a new browser window and go to your website's homepage. If everything is set up correctly, you should see the default offer banner.

### Remove plugin data on uninstall
All plugin configurations are stored in the database during usage. To reset all configurations upon uninstallation, select the "Remove all plugin settings on uninstall" checkbox in the General tab. This will delete the settings from the database.

### Default Offer	
The plugin have two kinds of offers Coupons or Loyalty Points. This options sets the default offer to be used for Cookies consent. If the default option is disabled, the other will be used instead. If both are disabled, no offer will be shown.

### UI Personalization
In the General tab of the plugin settings, you can personalize the look of the banner to match your site colors. The appearance of the UI components is customized using the following settings.

**Colors**
- Primary Text Color - default `#1C0000` ![#1C0000](https://placehold.co/15x15/1C0000/1C0000.png) ,
- Secondary Text Color - default `#9900001C` ![#9900001C](https://placehold.co/15x15/1C0000/1C0000.png) -> with alpha 60%, 
- Primary_background color - default `#FFFFFF` ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) ,
- Secondary_background color - default `#F6F6F6` ![#F6F6F6](https://placehold.co/15x15/F6F6F6/F6F6F6.png),
- Accent color - default ![#00b272](https://placehold.co/15x15/00b272/00b272.png) `#00b272`,

**Font**

Before using a custom font family make sure to [set it with @fontface using CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

- Font Family - default "Space Grotesk"

### Offer Configuration
To configure an offer for the user, use the specific tab for Coupons or Loyalty.

#### Coupons
The following options are available to configure the coupons offer:

- **Enable discount coupons**: enable/disable the offer of discount coupons in exchange for cookies consent.
- **Discount Type**: The WooCommerce Coupon type. 
- **Discount Value**: The numeric value of the discount. It can be a percentage or a fixed value, depending on the discount type. Accepts up to 2 decimal numbers.	
- **Description**: Small text to add user-friendly details to the Offer. We recommend including details like the type of data the user is trading and participation requirements (like 10% off your next purchase of $10 or more).
- **Offer image**: A 300 x 86 resolution image that illustrates the offer. We've elected to make this portion of the UI an image; so you can get as fancy/detailed as you'd like. We strongly recommend the image to be compelling, easy to understand, and focused on the incentive for the user to participate (hence, why it's called the reward image). The reward always goes hand in hand with the text Description (like a caption), so avoid over crowding it with too much text.
- **Offer use case 1, 2 and 3**: The bullets that will explain to the user how their data will or will NOT be used. When creating your bullets, it's important to use terminology users are familiar with. Words like attribution, lead to confusion and lower opt-in rates.
- **Offer terms**: The terms and conditions for this offer agreement. It should be a URL to a plain text file containing the legal conditions. This file can include simple markdown formatting.
  
#### Loyalty Points

- **Enable loyalty points**: enable/disable the offer of loyalty points in exchange for cookies consent.
- **Reward points**: The number of point to be added. Should be a positive integer value.
- **Description**: Small text to add user-friendly details to the Offer. We recommend including details like the type of data the user is trading and participation requirements (like +10pts for your participation).
- **Offer image**: A 300 x 86 resolution image that illustrates the offer. We've elected to make this portion of the UI an image; so you can get as fancy/detailed as you'd like. We strongly recommend the image to be compelling, easy to understand, and focused on the incentive for the user to participate (hence, why it's called the reward image). The reward always goes hand in hand with the text Description (like a caption), so avoid over crowding it with too much text.
- **Offer use case 1, 2 and 3**: The bullets that will explain to the user how their data will or will NOT be used. When creating your bullets, it's important to use terminology users are familiar with. Words like attribution, lead to confusion and lower opt-in rates.
- **Offer terms**: The terms and conditions for this offer agreement. It should be a URL to a plain text file containing the legal conditions. This file can include simple markdown formatting.

### Cookies Configuration
In this section you can set if the plugin should integrate with Cookie Yes. [The Cookie Yes plugin](https://br.wordpress.org/plugins/cookie-law-info/) should be installed and configured independently for this to work.
