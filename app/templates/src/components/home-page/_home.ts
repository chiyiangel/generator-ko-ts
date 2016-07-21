/// <amd-dependency path="text!./home.html" />
/// <reference path="./../../references.d.ts" />

import * as ko from "knockout";
export var template: string = require("text!./home.html");

export class viewModel {
    public message = ko.observable("Welcome to <%= longName.replace('"', '\\"') %>!");

    public doSomething() {
        this.message('You invoked doSomething() on the viewmodel.');
    }
}
