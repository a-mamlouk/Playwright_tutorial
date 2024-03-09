/*
URL : ui.vision/demo/webtest/frames
npx playwright test tests/day9-Handle_frames_iFrames.spec.js --headed --project chromium
*/

const {test, expect}=require('@playwright/test')
test('Handle Frames',async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    const total_frames = page.frames()
    await console.log("Number of frames : ",total_frames.length)

    //approach 1: using name or URL
        // name is available // const frame_1 = page.frame('')

    const frame_1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame_1.fill("[name='mytext1']", 'Hello');
    await page.waitForTimeout(1000)

    //approach2
    const frame_2 = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await frame_2.fill("TEST")

    await page.waitForTimeout(5000)
})
