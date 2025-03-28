"use strict"

class Page{

    constructor(){

    }

    // Re-usable methods
    navigateTo(url){
        console.log(`>>> Navigating to the given url: ${url}`)
        // TODO - implement the actual steps
    }

    click(ele){
        console.log(`>>> Clicking the given ele: ${ele}`)
    }

}

module.exports = Page