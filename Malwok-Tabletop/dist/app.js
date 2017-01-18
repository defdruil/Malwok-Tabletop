/// <reference path="../definition/angularjs/angular.d.ts" />
var app = angular.module("app", []);

var Malwok;
(function (Malwok) {
    var Tabletop;
    (function (Tabletop) {
        var Website;
        (function (Website) {
            'use strict';
            var CategoriesController = (function () {
                function CategoriesController(scenesSingleton) {
                    this.ScenesSingleton = scenesSingleton;
                    this.test = "Hello world";
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
            'use strict';
            var MainController = (function () {
                function MainController(scenesSingleton) {
                    this.ScenesSingleton = scenesSingleton;
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
            var PlayListViewController = (function () {
                function PlayListViewController(scenesSingleton) {
                    this.ScenesSingleton = scenesSingleton;
                }
                return PlayListViewController;
            }());
            //Injection de dépendances
            PlayListViewController.$inject = ['ScenesSingleton'];
            Website.PlayListViewController = PlayListViewController;
            app.controller("PlayListViewController", PlayListViewController);
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
                    this.ScenesSingleton = scenesSingleton;
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
            var CategoriesService = (function () {
                function CategoriesService() {
                    this.playLists = [
                        { Id: 1, Name: "Ambiance", Sounds: this.Ambiances, Volume: 50 },
                        { Id: 2, Name: "Sword", Sounds: this.Swords, Volume: 50 },
                        { Id: 3, Name: "Spell", Sounds: this.Spells, Volume: 50 }
                    ];
                    this.Ambiances = [
                        { Id: 1, Name: "Inn", Path: "\Resources\Categories\Ambiances\Inn\tavern_music.mp3" },
                        { Id: 2, Name: "ElvesForest", Path: "\Resources\Categories\Ambiances\Forest\ElvesForest.mp3" },
                        { Id: 3, Name: "Town", Path: "\Resources\Categories\Ambiances\Town\MedievalTown.mp3" },
                    ];
                    this.Swords = [
                        { Id: 4, Name: "Sword1", Path: "\Resources\Categories\Combat\Sword\sword1.mp3" },
                        { Id: 5, Name: "Sword2", Path: "\Resources\Categories\Combat\Sword\sword2.mp3" },
                        { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combat\Sword\sword3.mp3" },
                    ];
                    this.Spells = [
                        { Id: 7, Name: "FireBall", Path: "\Resources\Categories\Combat\Spell\Fireball.mp3" },
                        { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combat\Spell\Lightning.mp3" },
                        { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combat\Spell\Blizzard.mp3" },
                    ];
                }
                CategoriesService.prototype.getPlayLists = function () {
                    return this.playLists;
                };
                return CategoriesService;
            }());
            Website.CategoriesService = CategoriesService;
            app.service("CategoriesService", CategoriesService);
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
                function ScenesSingleton(categoriesService) {
                    this._categoriesService = categoriesService;
                    this.Scenes = this._categoriesService.getPlayLists();
                    this.CurrentScene = { Id: 1, Name: "Main Scene Test", Playlists: [] };
                }
                return ScenesSingleton;
            }());
            ScenesSingleton.$inject = ["CategoriesService"];
            Website.ScenesSingleton = ScenesSingleton;
            app.service("ScenesSingleton", ScenesSingleton);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
