=== Plugin Name ===
Contributors: mytiki
Donate link: https://myiki.com
Tags: comments, spam
Requires at least: 3.0.1
Tested up to: 6.2
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
== Description ==

TIKI for WooCommerce Coupons makes it simple to create offers for users that consents the usage of cookies. 

Instead of prompting the users with boring traditional cookies consent banners, you can create compealing offer banners that will encourage users to accept cookies in exchange of special discounts.

TIKI for WooCommerce top features:
* Customizable - Customize the banners using our models or creating your own HTML models.
* Reliable - Uses TIKI's infrastructure for long term storage of the user consents.
* Privacy - All consents are cryptographically stored in TIKI's blockchain. No user data is stored!
* Transparent - TIKI infrastructure and its SDKs are all open source, since the begining and forever.
* Full user control - Users can revoke the license at anytime. And the plugin will automatically update the status.

This plugin does not provide the cookie blocking functionalitty to block cookies and unwanted external content. You can enable it optionally through the integration with [Cookies and Content Security Policy](https://wordpress.org/plugins/cookies-and-content-security-policy/) plugin.

### TIKI API Keys
To enable communication between the plugin and the TIKI infrastructure, you need to obtain API keys.
1. Visit the [TIKI Console](https://console.mytiki.com) to acquire the API keys.
2. Create a new project or select an existing one.
3. Generate a Private Key for the project.
4. Take note of the Private Key ID, Secret, and Publishing ID.

== Installation ==
1. In the WordPress plugins menu, click "Add New" and upload the `tiki-woo.zip` file.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Open the plugin settings by navigating to Marketing -> TIKI in the admin menu.
4. In the General tab, enter the Publishing ID, Private Key ID, and Secret.
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

Before using a custom font family make sure to [set it with @fontface through CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

- Font Family - default "Space Grotesk"

### Offer Configuration
To configure an offer for the user, use each specific tab for Coupons or Loyalty.

#### Coupons
The following options are available to configure the coupons offer:

- **Enable discount coupons**: wether to enable or not the offer of discount coupons in exchange for cookies consent.
- **Discount Type**: The WooCommerce Coupon type of discount. 
- **Discount Value**: The numeric value of the discount. It can be a percentage or a fixed value, depending on the discount type. Accepts up to 2 decimal numbers.	
- **Description**: Small text to add user-friendly details to the Offer. We recommend including details like the type of data the user is trading and participation requirements (like 10% off your next purchase of $10 or more).
- **Offer image**: A 300 x 86 resolution image that ilustrates the offer. We've elected to make this portion of the UI an image so you can get as fancy/detailed as you'd like. We strongly recommend the image to be compelling, easy to understand, and focused on the incentive for the user to participate (hence, why it's called the reward image). The reward always goes hand in hand with the text Description (like a caption), so avoid over crowding it with too much text.
- **Offer use case 1, 2 and 3**: The bullets that will explain to the user how their data will or will NOT be used. When creating your bullets, it's important to use terminology users are familiar with. Words like attribution, lead to confusion and lower opt-in rates.
- **Offer terms**: The terms and conditions for this offer agreement. It should be a URL to a plain text file containing the legal conditions. This file can include simple markdown formatting.
  
#### Loyalty Points

- **Enable loyalty points**: wether to enable or not the offer of loyalty points in exchange for cookies consent.
- **Reward points**: The number of point to be added. Should be a positive integer value.
- **Description**: Small text to add user-friendly details to the Offer. We recommend including details like the type of data the user is trading and participation requirements (like 10% off your next purchase of $10 or more).
- **Offer image**: A 300 x 86 resolution image that ilustrates the offer. We've elected to make this portion of the UI an image so you can get as fancy/detailed as you'd like. We strongly recommend the image to be compelling, easy to understand, and focused on the incentive for the user to participate (hence, why it's called the reward image). The reward always goes hand in hand with the text Description (like a caption), so avoid over crowding it with too much text.
- **Offer use case 1, 2 and 3**: The bullets that will explain to the user how their data will or will NOT be used. When creating your bullets, it's important to use terminology users are familiar with. Words like attribution, lead to confusion and lower opt-in rates.
- **Offer terms**: The terms and conditions for this offer agreement. It should be a URL to a plain text file containing the legal conditions. This file can include simple markdown formatting.

### Cookies Configuration
In this section you can set if the plugin should integrate with Cookie Yes. [The Cookie Yes plugin](https://br.wordpress.org/plugins/cookie-law-info/) should be installed and configured independently for this to work.
