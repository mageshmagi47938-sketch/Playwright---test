import {test} from "@playwright/test";
import {LoginPage} from "../page/loginPage";
import {protoCom} from "../page/protoCom";
import data from "../testdata/data.json";
let loginObj : any

test.only('POM', async ({ page }) =>{

    loginObj = new LoginPage (page);
    const ProtoObj = new protoCom(page);
    
    await loginObj.navigate();
    await loginObj.loginMethod(data.UN,data.PW);
    await loginObj.verifydashBoardPage();
    await ProtoObj.addTheProdcuctTocart();
});

test ("Verify Cat1", async ({ page}) => {

    loginObj = new LoginPage (page);
    const ProtoObj = new protoCom (page);
    await loginObj.
    await loginObj.



});

