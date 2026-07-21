import {test, expect} from "@playwright/test";
import { log } from "node:console";

test ("Getmethod", async ({request})=>{

 const getdata = await request.get("https://restful-booker.herokuapp.com/booking");
    const getstatus = await getdata.status()
    console.log(getstatus);

    const datas = await getdata.json();
    console.log(datas);
})


test ("postmethod", async ({request})=>{
 const postdatas = await request.post("https://restful-booker.herokuapp.com/booking", {headers : {"Content-Type": "application/json"},

        data: {
            firstname: "Magesh",
            lastname : "Waran", 
            totalprice: 1000, 
            depositpaid : true,
            bookingdates: {
            checkin: "2026-01-02", 
            checkout: "2026-01-03",
        },
        additionalneeds: "breakfast",
    },

   },
);
   console.log(postdatas.status());
   console.log(postdatas.statusText());
   const payload = await postdatas.json();
   console.log(payload);
   expect(payload).toHaveProperty("bookingid");
   expect(payload).toHaveProperty("booking");
   expect(payload.booking)
});