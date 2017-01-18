/// <reference path="../definition/angularjs/angular.d.ts" />
var app = angular.module("app", []);

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
            var CategoriesController = (function () {
                function CategoriesController(categoriesSingleton, scenesSingleton) {
                    this.CategoriesSingleton = categoriesSingleton;
                    this.ScenesSingleton = scenesSingleton;
                    this.SearchedText = "";
                    this.DisplayedCategories = this.CategoriesSingleton.Categories;
                    this.CategoriesSingleton.Categories.forEach(function (category) {
                        category.HidePlaylists = true;
                        category.Playlists.forEach(function (playlist) {
                            playlist.IsPlaylistToDisplay = true;
                        });
                    });
                }
                CategoriesController.prototype.UpdateOnSearch = function () {
                    var _this = this;
                    this.DisplayedCategories = [];
                    this.CategoriesSingleton.Categories.forEach(function (category) {
                        // TODO A améliorer, ne détecte pas si la string recherchée est au début du Name
                        if (category.Name.indexOf(_this.SearchedText) !== -1) {
                            _this.DisplayedCategories.push(category);
                            category.Playlists.forEach(function (playlist) {
                                playlist.IsPlaylistToDisplay = true;
                            });
                        }
                        else {
                            category.Playlists.forEach(function (playlist) {
                                // TODO A améliorer, ne détecte pas si la string recherchée est au début du Name
                                if (playlist.Name.indexOf(_this.SearchedText) !== -1) {
                                    _this.DisplayedCategories.push(category);
                                    playlist.IsPlaylistToDisplay = true;
                                }
                                else {
                                    playlist.IsPlaylistToDisplay = false;
                                }
                            });
                        }
                    });
                };
                CategoriesController.prototype.PlaylistClicked = function (playlist) {
                    this.ScenesSingleton.CurrentScene.Playlists.push(playlist);
                };
                return CategoriesController;
            }());
            //Injection de dépendances
            CategoriesController.$inject = ['CategoriesSingleton', 'ScenesSingleton'];
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
                function MainController(categoriesSingleton, scenesSingleton) {
                    this.CategoriesSingleton = categoriesSingleton;
                    this.ScenesSingleton = scenesSingleton;
                }
                return MainController;
            }());
            //Injection de dépendances
            MainController.$inject = ['CategoriesSingleton', 'ScenesSingleton'];
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
            var PlayListController = (function () {
                function PlayListController() {
                }
                PlayListController.prototype.PlayPauseButtonPressed = function () {
                    if (this.playlist.DomElement.paused)
                        this.playlist.DomElement.play();
                    else
                        this.playlist.DomElement.pause();
                };
                return PlayListController;
            }());
            //Injection de dépendances
            PlayListController.$inject = [];
            Website.PlayListController = PlayListController;
            app.controller("PlayListController", PlayListController);
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
                    this.IsPlaying = false;
                }
                ScenesController.prototype.PlayPauseAllButtonPressed = function () {
                    var index = 0;
                    while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
                        if (this.IsPlaying) {
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.pause();
                            this.IsPlaying = false;
                        }
                        else {
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.play();
                            this.IsPlaying = true;
                        }
                    }
                };
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
            var CategoriesService = (function () {
                function CategoriesService() {
                    var Ambiances = [
                        { Id: 1, Name: "Inn", Path: "\Resources\Categories\Ambiances\Inn\tavern_music.mp3" },
                        { Id: 2, Name: "ElvesForest", Path: "\Resources\Categories\Ambiances\Forest\ElvesForest.mp3" },
                        { Id: 3, Name: "Town", Path: "\Resources\Categories\Ambiances\Town\MedievalTown.mp3" },
                    ];
                    var Swords = [
                        { Id: 4, Name: "Sword1", Path: "\Resources\Categories\Combat\Sword\sword1.mp3" },
                        { Id: 5, Name: "Sword2", Path: "\Resources\Categories\Combat\Sword\sword2.mp3" },
                        { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combat\Sword\sword3.mp3" },
                    ];
                    var Spells = [
                        { Id: 7, Name: "FireBall", Path: "\Resources\Categories\Combat\Spell\Fireball.mp3" },
                        { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combat\Spell\Lightning.mp3" },
                        { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combat\Spell\Blizzard.mp3" },
                    ];
                    var PlaylistsSet1 = [
                        { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                        { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 }
                    ];
                    var PlaylistsSet2 = [
                        { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                        { Id: 3, Name: "Spell", Sounds: Spells, Volume: 50 }
                    ];
                    // Initializing
                    this.Categories = [];
                    var id = 1;
                    while (id <= 5) {
                        if (id == 1 || id == 2) {
                            this.Categories.push({
                                Id: id,
                                Name: id + " - Fake category",
                                Playlists: PlaylistsSet1
                            });
                        }
                        else {
                            this.Categories.push({
                                Id: id,
                                Name: id + " - Fake category",
                                Playlists: PlaylistsSet2
                            });
                        }
                        id++;
                    }
                }
                CategoriesService.prototype.getCategories = function () {
                    return this.Categories;
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
            var ScenesService = (function () {
                function ScenesService() {
                    var Ambiances = [
                        { Id: 1, Name: "Inn", Path: "\Resources\Categories\Ambiances\Inn\tavern_music.mp3" },
                        { Id: 2, Name: "ElvesForest", Path: "\Resources\Categories\Ambiances\Forest\ElvesForest.mp3" },
                        { Id: 3, Name: "Town", Path: "\Resources\Categories\Ambiances\Town\MedievalTown.mp3" },
                    ];
                    var Swords = [
                        { Id: 4, Name: "Sword1", Path: "\Resources\Categories\Combat\Sword\sword1.mp3" },
                        { Id: 5, Name: "Sword2", Path: "\Resources\Categories\Combat\Sword\sword2.mp3" },
                        { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combat\Sword\sword3.mp3" },
                    ];
                    var Spells = [
                        { Id: 7, Name: "FireBall", Path: "\Resources\Categories\Combat\Spell\Fireball.mp3" },
                        { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combat\Spell\Lightning.mp3" },
                        { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combat\Spell\Blizzard.mp3" },
                    ];
                    var playLists = [
                        { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                        { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 },
                        { Id: 3, Name: "Spell", Sounds: Spells, Volume: 50 }
                    ];
                    this.Scene = {
                        Id: 1,
                        Name: "Main Fake Scene",
                        Playlists: playLists
                    };
                }
                ScenesService.prototype.getCurrentScene = function () {
                    return this.Scene;
                };
                ScenesService.prototype.getAllScenes = function () {
                    var scenes = [];
                    var id = 1;
                    while (id < 5) {
                        var scene = { Id: id, Name: id + " - Fake Scene", Playlists: this.Scene.Playlists };
                        scenes.push(scene);
                        id++;
                    }
                    return scenes;
                };
                return ScenesService;
            }());
            Website.ScenesService = ScenesService;
            app.service("ScenesService", ScenesService);
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
            var CategoriesSingleton = (function () {
                function CategoriesSingleton(categoriesService) {
                    this._categoriesService = categoriesService;
                    this.Categories = this._categoriesService.getCategories();
                }
                return CategoriesSingleton;
            }());
            CategoriesSingleton.$inject = ["CategoriesService"];
            Website.CategoriesSingleton = CategoriesSingleton;
            app.service("CategoriesSingleton", CategoriesSingleton);
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
                function ScenesSingleton(scenesService) {
                    this._scenesService = scenesService;
                    this.CurrentScene = this._scenesService.getCurrentScene();
                    this.Scenes = this._scenesService.getAllScenes();
                }
                return ScenesSingleton;
            }());
            ScenesSingleton.$inject = ["ScenesService"];
            Website.ScenesSingleton = ScenesSingleton;
            app.service("ScenesSingleton", ScenesSingleton);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
