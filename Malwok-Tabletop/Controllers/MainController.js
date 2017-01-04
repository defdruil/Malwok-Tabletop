'use strict';
var MainController = (function () {
    function MainController() {
        this.HelloWorld = "Hello World from Controller !";
        this.Data = "Je suis une data importante !";
        this.classToDisplay = true;
    }
    MainController.prototype.buttonClick = function () {
        this.HelloWorld = "I've changed !";
    };
    MainController.prototype.InvertClassToDisplay = function () {
        this.classToDisplay = !this.classToDisplay;
    };
    return MainController;
}());
app.controller("MainController", MainController);
//# sourceMappingURL=MainController.js.map