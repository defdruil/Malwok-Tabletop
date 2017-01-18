/// <reference path="../definition/angularjs/angular.d.ts" />
var app = angular.module("app", []);

var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            var CategoriesController = (function () {
                function CategoriesController(scenesSingleton) {
                    this._scenesSingleton = scenesSingleton;
                }
                return CategoriesController;
            }());
            //Injection de dépendances
            CategoriesController.$inject = ['ScenesSingleton'];
            Website.CategoriesController = CategoriesController;
            app.controller("CategoriesController", CategoriesController);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));

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
                return MainController;
            }());
            //Injection de dépendances
            MainController.$inject = ['ScenesSingleton'];
            Website.MainController = MainController;
            app.controller("MainController", MainController);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));

var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            var ScenesController = (function () {
                function ScenesController(scenesSingleton) {
                    this._scenesSingleton = scenesSingleton;
                }
                return ScenesController;
            }());
            //Injection de dépendances
            ScenesController.$inject = ['ScenesSingleton'];
            Website.ScenesController = ScenesController;
            app.controller("ScenesController", ScenesController);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));

var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            'use strict';
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));


var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            'use strict';
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));

var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            'use strict';
            var ScenesSingleton = (function () {
                function ScenesSingleton() {
                }
                return ScenesSingleton;
            }());
            Website.ScenesSingleton = ScenesSingleton;
            app.service("ScenesSingleton", ScenesSingleton);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
