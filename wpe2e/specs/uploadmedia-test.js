import { loginUser } from '@wordpress/e2e-test-utils';

describe( 'Upload media from activity', () => { 
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

