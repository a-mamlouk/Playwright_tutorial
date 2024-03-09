/*
URL : ui.vision/demo/webtest/frames
npx playwright test tests/day9-Handle_frames_iFrames_2.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Handle Frames',async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame_3 =await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame_3.locator("input[name='mytext3']").fill("Hello everyone")
    await page.waitForTimeout(1000)

    //nested frame
    const frame_3_childframes=   await frame_3.childFrames()
    //console.log("The child frames are", frame_3_childframes)
    await frame_3_childframes[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check()

    await page.waitForTimeout(5000)
})
