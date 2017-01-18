var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            var MainController = (function () {
                function MainController(scenesSingleton) {
                    this._scenesSingleton = scenesSingleton;
                }
                //Injection de dépendances
                MainController.$inject = ['ScenesSingleton'];
                return MainController;
            }());
            Website.MainController = MainController;
            app.controller("MainController", MainController);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
//# sourceMappingURL=MainController.js.map