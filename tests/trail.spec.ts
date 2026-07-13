import { test } from "@playwright/test";
import { Loginpage1 } from "../page/Loginpage1";
import loginData from "../testdata/Loginpage1.json";

for (const data of loginData) {

    test(data.testName, async ({ page }) => {

        const login = new Loginpage1(page);                  // object ------> const reference variable = new 

        await login.navigate();

        await login.login(data.username, data.password);

        if (data.expected === "success") {
            await login.verifyDashboard();
        } else {
            await login.verifyError(data.expected);
        }

    });

}