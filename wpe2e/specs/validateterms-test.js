import { loginUser } from '@wordpress/e2e-test-utils';

describe( 'validate terms and services', () => { 
	it( 'enable terms and services', async () => {
       await loginUser();
       await page.waitForSelector("#adminmenu");
       await page.click("a[class='wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_rtmedia-settings menu-top-last'] div[class='wp-menu-name']");
      await page.waitForSelector("#bp_media_settings_form");
       await page.waitForSelector("#rtm-settings-tabs");
       await page.click("#tab-rtmedia-general");
       const element = await page.$("label[for='rtm-form-checkbox-24'] span[class='switch-label']");
       const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue();
        if(! isCheckBoxChecked ){
          await element.click()
          await page.type("#rtm-form-text-0", "https://google.com/")
        }
  
        await page.click("div[class='rtm-button-container top'] input[value='Save Settings']");
       await page.waitForSelector(".rtm-success.rtm-fly-warning.rtm-save-settings-msg");
    } );

    it( 'validate terms and service', async () => {
        await loginUser();
        const url = page.url();
        await page.goto(url + "/activity");
        await page.click("#whats-new");
        await page.type("#whats-new", "test");
        await page.click("#aw-whats-new-submit");
 
        await page.waitForSelector(".rt_alert_msg");
       
     } );
    
} );

