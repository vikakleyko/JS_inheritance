"use strict";

class First {
    constructor() {}
    hello() {
        console.log("Hi, I am parent method!");
    }
}

class Second extends First {
    constructor() {
        super();
    }
    hello() {
        super.hello();
        console.log("And I am inherited method")
    }
}

const second = new Second();
second.hello();