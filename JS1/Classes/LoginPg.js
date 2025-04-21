"use strict";

const Page = require("./Page")


class LoginPage extends Page{

    constructor(){
        super()
    }

    // click on login Btn

    clickLoginBtn(){

        this.click("loginBtn")

    }
}

// Object Creation

let loginPg = new LoginPage()
console.log(typeof loginPg)

// Calling a Parents Methods
loginPg.navigateTo('google.com')

// Calling own class Methods
loginPg.clickLoginBtn()