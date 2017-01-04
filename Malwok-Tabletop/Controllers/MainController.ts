'use strict'
class MainController {

    public HelloWorld: string = "Hello World from Controller !";
    public Data: string = "Je suis une data importante !";
    public classToDisplay: boolean = true;
    public soundList: string[];

    constructor() {

    }

    buttonClick(): void {
        this.HelloWorld = "I've changed !";
    }

    InvertClassToDisplay() {
        this.classToDisplay = !this.classToDisplay;
    }
}
app.controller("MainController", MainController);