import { loginUser } from '@wordpress/e2e-test-utils';

describe( 'Able to create and edit the album', () => { 

  it( 'should be able to create a album', async () => {
    await loginUser();
    const url = page.url();
    await page.goto(url + "/members");

    await page.waitForSelector(".screen-content");
    await page.waitForSelector("#members-list");

    const t2 = await page.$x("//a[contains(text(),'bob')]");
		await t2[0].click();
    

    await page.waitForSelector("#object-nav");
    await page.click("#user-media");
    
  await page.click("#rtmedia-nav-item-albums");

 await page.waitForSelector("#rtm-media-options");
 await page.click(".clicker.rtmedia-action-buttons");

 await page.click("a[title='Create New Album']");

 await page.type("#rtmedia_album_name","test");
 await page.click("#rtmedia_create_new_album");
 await page.waitForSelector(".rtmedia-success.rtmedia-create-album-alert");
 await page.click("button[title='Close (Esc)']");
  
 } );


	it( 'should be able to edit the album', async () => {
       await loginUser();
       const url = page.url();
       await page.goto(url + "/members");

       await page.waitForSelector(".screen-content");
       await page.waitForSelector("#members-list");
       const t2 = await page.$x("//a[contains(text(),'bob')]");
       await t2[0].click();
       await page.waitForSelector("#object-nav");
       await page.click("#user-media");
       
     await page.click("#rtmedia-nav-item-albums-li");

     await page.click("body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > main:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > ul:nth-child(5) > li:nth-child(1)");


    await page.waitForSelector("#rtm-media-options");
    await page.click(".clicker.rtmedia-action-buttons");

    await page.click("a[title='Edit Album']");


    await page.type("#media_title","update");
    await page.type("#description","desc")
    await page.click("input[value='Save Changes']");
    await page.waitForSelector(".rtmedia-container.rtmedia-single-container.rtmedia-media-edit");
      
    } );
    
} );

