import { loginUser, visitAdminPage} from '@wordpress/e2e-test-utils';


var _config = require("../node_modules/@wordpress/e2e-test-utils/build/shared/config");
var siteurl = new URL(_config.WP_BASE_URL);

describe( 'Upload media from activity', () => { 

it( 'enable upload on activity', async () => {

  await page.goto(siteurl + "/wp-login.php");

  await page.type("#user_login", "bob");
  await page.type("#user_pass", "password");
  await page.click("#wp-submit");

    await visitAdminPage("/index.php");
     await page.click("#toplevel_page_rtmedia-settings");
      await page.waitForSelector('#tab-rtmedia-bp', {timeout: 50000});
      await page.click('#tab-rtmedia-bp');
   
      const element = await page.$("#rtmedia-bp-enable-activity");
      const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue();
       if(! isCheckBoxChecked ){
         await element.click();
       }
 
       await page.click("div[class='rtm-button-container top'] input[value='Save Settings']");
      await page.waitForSelector(".rtm-success.rtm-fly-warning.rtm-save-settings-msg");

    } );

	it( ' should upload media from activity successfully', async () => {
      await loginUser();
       const url = page.url();
       await page.goto(url + "/activity");
       await page.click("#whats-new");
       await page.type("#whats-new", "test");
       
       const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click("button[id='rtmedia-add-media-button-post-update'] span[class='dashicons dashicons-admin-media']"),
        ]);
    await fileChooser.accept(['download.png'])

   
      const element = await page.$("#rtmedia_upload_terms_conditions");
      if(element){
        await element.click()
      }
       await page.click("#aw-whats-new-submit");

       await page.waitForSelector(".activity-list.bp-list .activity-item");
       
    } );    
    
} );

