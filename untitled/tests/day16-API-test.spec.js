/*
URL : https://reqres.in/
npx playwright test tests/day16-API-test.spec.js --project chromium
*/
import {test,expect} from "@playwright/test";

var user_id;
test('Get users', async ({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    expect(response.status()).toBe(200)

})
test('Create users', async ({request})=>{
    const response = await request.post("https://reqres.in/api/users",
    {data:{
                    "name": "kouli",
                    "job":"trainee"
                },
            headers:{
                    "Accept":"application/json"
            }});
    console.log(await response.json())
    await expect(response.status()).toBe(201)
    user_id = response.id;
})
test('Update users', async ({request})=>{
    const response = await request.patch("https://reqres.in/api/users/"+user_id,
        {data:{
                "name": "kouli",
                "job":"QA"
            },
            headers:{
                "Accept":"application/json"
            }});
    console.log(await response.json())
    await expect(response.status()).toBe(200)
})
test('Delete users', async ({request})=>{
    const response = await request.delete("https://reqres.in/api/users/"+user_id)
    await expect(response.status()).toBe(204)
    console.log("user delete successfully")
})