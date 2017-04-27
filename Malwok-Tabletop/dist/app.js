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
                // Constructeur
                function CategoriesController(categoriesSingleton, scenesSingleton, categoriesService) {
                    var _this = this;
                    // Récupération du static $inject
                    this.CategoriesSingleton = categoriesSingleton;
                    this.ScenesSingleton = scenesSingleton;
                    // Initialisation
                    this.SearchedText = "";
                    // Appel asynchrone, puis après cet appel
                    this.CategoriesSingleton.getCategories().then(function (categories) {
                        // Récupération des catégories chargées
                        _this.DisplayedCategories = _this.CategoriesSingleton.Categories;
                        // Création des propriétés qui gèrent l'affichage
                        _this.CategoriesSingleton.Categories.forEach(function (category) {
                            category.HidePlaylists = true;
                            category.Playlists.forEach(function (playlist) {
                                playlist.IsPlaylistToDisplay = true;
                            });
                        });
                        // Génération du message si la liste est vide (Normalement, ne devrait jamais arriver, sauf erreur ou Server Down (une fois que le service prendra ses infos sur le server))
                        _this.CheckCategoriesDisplayed();
                    });
                }
                // Fonction qui met à jour la liste de catégories/Playlists selon la recherche effectuée
                CategoriesController.prototype.UpdateOnSearch = function () {
                    var _this = this;
                    // Reset de la liste
                    this.DisplayedCategories = [];
                    // Pour chaque catégorie
                    this.CategoriesSingleton.Categories.forEach(function (category) {
                        // On regarde si le nom de la catégorie match la recherche
                        if (category.Name.toLowerCase().indexOf(_this.SearchedText.toLowerCase()) !== -1) {
                            // Si oui, on l'ajoute à la liste des catégories à afficher
                            _this.DisplayedCategories.push(category);
                            category.HidePlaylists = true;
                            // Puis, pour chaque Playlist de la catégorie qui match
                            category.Playlists.forEach(function (playlist) {
                                // On indique que les playlist sont à afficher (ne s'affichera que si la catégorie est "ouverte")
                                playlist.IsPlaylistToDisplay = true;
                            });
                        }
                        else {
                            // Si non, pour chaque playlist
                            category.Playlists.forEach(function (playlist) {
                                // On teste si le nom de la playlist match la recherche
                                if (playlist.Name.toLowerCase().indexOf(_this.SearchedText.toLowerCase()) !== -1) {
                                    // Si oui, on ajoute la catégorie à la liste des catégories à afficher
                                    _this.DisplayedCategories.push(category);
                                    category.HidePlaylists = false;
                                    // Et on indique que les playlist sont à afficher (ne s'affichera que si la catégorie est "ouverte")
                                    playlist.IsPlaylistToDisplay = true;
                                }
                                else {
                                    // Si non, on affiche pas la catégorie, et on cache les playlist (inutile en théorie, mais permet de garder les données de la liste correctes)
                                    playlist.IsPlaylistToDisplay = false;
                                }
                            });
                        }
                    });
                    // A la fin, on vérifie si la liste est vide ou pas
                    this.CheckCategoriesDisplayed();
                };
                // Appelle la fonction d'ajout de la playlist
                CategoriesController.prototype.PlaylistClicked = function (playlist) {
                    this.ScenesSingleton.AddPlaylist(playlist);
                };
                // Regarde si la liste est vide, et génère l'affichage du message d'erreur si elle l'est
                CategoriesController.prototype.CheckCategoriesDisplayed = function () {
                    if (this.DisplayedCategories.length != 0)
                        this.NoCategoryDisplayed = false;
                    else
                        this.NoCategoryDisplayed = true;
                };
                return CategoriesController;
            }());
            //Injection de dépendances
            CategoriesController.$inject = ['CategoriesSingleton', 'ScenesSingleton', 'CategoriesService'];
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
                    this.test = "hello !";
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
                    // Récupération du $inject
                    this.ScenesSingleton = scenesSingleton;
                    // Initialisation
                    this.IsPlaying = false;
                    // Vérification au chargement pour voir si la scène est vide
                    this.ScenesSingleton.CheckIfSceneIsEmpty();
                }
                // Fonction non testée qui devrait lire l'ensemble des playlists chargées.
                ScenesController.prototype.playGeneral = function () {
                    var index = 0;
                    this.IsPlaying = !this.IsPlaying;
                    while (index < this.ScenesSingleton.CurrentScene.Playlists.length) {
                        if (!this.IsPlaying) {
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.pause();
                        }
                        else {
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement = document.getElementById(this.ScenesSingleton.CurrentScene.Playlists[index].Name + this.ScenesSingleton.CurrentScene.Playlists[index].Id);
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = 3;
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.src = this.ScenesSingleton.CurrentScene.Playlists[index].Sounds[0].Path;
                            this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.play();
                        }
                        index++;
                    }
                };
                // Fonction non testée qui devrait accelerer l'ensemble des playlists chargées.
                ScenesController.prototype.fastGeneral = function () {
                    var index = 0;
                    while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
                        this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate + 0.5;
                    }
                };
                // Fonction non testée qui devrait ralentir l'ensemble des playlists chargées.
                ScenesController.prototype.slowGeneral = function () {
                    var index = 0;
                    while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
                        this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate - 0.5;
                    }
                };
                // Appel de la fonction qui permet de retirer la playlist de la scène
                ScenesController.prototype.RemovePlaylist = function (playlist) {
                    this.ScenesSingleton.RemovePlaylist(playlist);
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
                function CategoriesService(http) {
                    this._httpService = http;
                    var Ambiances = [
                        { Id: 1, Name: "Inn", Path: "../../../Resources/Categories/Ambiances/Inn/tavern_music.mp3" },
                        { Id: 2, Name: "ElvesForest", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Forest\ElvesForest.mp3" },
                        { Id: 3, Name: "Town", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Town\MedievalTown.mp3" },
                    ];
                    var Swords = [
                        { Id: 4, Name: "Sword1", Path: "../../../Resources/Categories/Combats/Sword/sword1.mp3" },
                        { Id: 5, Name: "Sword2", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Sword\\sword2.mp3" },
                        { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combats\Sword\sword3.mp3" },
                    ];
                    var Spells = [
                        { Id: 7, Name: "FireBall", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Spell\\Fireball.mp3" },
                        { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combats\Spell\Lightning.mp3" },
                        { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combats\Spell\Blizzard.mp3" },
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
                    return this._httpService.get("http://localhost:51894/api/categories/all");
                };
                CategoriesService.prototype.initCategories = function () {
                    return this._httpService.get("http://localhost:51894/api/categories/hidden/init/bdd");
                };
                return CategoriesService;
            }());
            CategoriesService.$inject = ['$http'];
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
                        { Id: 1, Name: "Inn", Path: "../../../Resources/Categories/Ambiances/Inn/tavern_music.mp3" },
                        { Id: 2, Name: "ElvesForest", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Forest\ElvesForest.mp3" },
                        { Id: 3, Name: "Town", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Town\MedievalTown.mp3" },
                    ];
                    var Swords = [
                        { Id: 4, Name: "Sword1", Path: "../../../Resources/Categories/Combats/Sword/sword1.mp3" },
                        { Id: 5, Name: "Sword2", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Sword\\sword2.mp3" },
                        { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combats\Swords\sword3.mp3" },
                    ];
                    var Spells = [
                        { Id: 7, Name: "FireBall", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Spell\\Fireball.mp3" },
                        { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combats\Spell\Lightning.mp3" },
                        { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combats\Spell\Blizzard.mp3" },
                    ];
                    var playLists = [
                        { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                        { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 }
                    ];
                    this.Scene = {
                        Id: 1,
                        Name: "Main Fake Scene",
                        Playlists: []
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
                }
                CategoriesSingleton.prototype.getCategories = function () {
                    var _this = this;
                    return this._categoriesService.getCategories().then(function (response) {
                        _this.Categories = response.data;
                        return response.data;
                    });
                };
                CategoriesSingleton.prototype.promptForInitCategories = function () {
                    if (confirm("Êtes-vous sûr de vouloir recréer la base de données ?")) {
                        this.initCategories();
                    }
                };
                CategoriesSingleton.prototype.initCategories = function () {
                    return this._categoriesService.initCategories().then(function (response) {
                        return response.data;
                    });
                };
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
                    // Récupération du $inject
                    this._scenesService = scenesService;
                    // Renseignement des listes depuis le service
                    this.CurrentScene = this._scenesService.getCurrentScene();
                    this.Scenes = this._scenesService.getAllScenes();
                }
                // Fonction qui duplique la playlist passée, afin d'éviter les objets dupliqués dans la scène (qui provoquent des erreurs de ng-repeat)
                ScenesSingleton.prototype.AddPlaylist = function (playlist) {
                    // Création d'une nouvelle instance de la playlist
                    var playlistToAdd = {
                        Id: this.CurrentScene.Playlists.length + 1,
                        Name: playlist.Name,
                        Sounds: playlist.Sounds
                    };
                    // Ajout à la scène en cours
                    this.CurrentScene.Playlists.push(playlistToAdd);
                    // Mise à jour du message d'aide si il était affiché
                    this.CheckIfSceneIsEmpty();
                };
                ScenesSingleton.prototype.RemovePlaylist = function (playlist) {
                    // Suppression de la playlist de la scène en cours
                    this.CurrentScene.Playlists.splice(this.CurrentScene.Playlists.indexOf(playlist), 1);
                    // Mise à jour du message d'aide si la liste est désormais vide
                    this.CheckIfSceneIsEmpty();
                };
                // Vérifie si la Scène est vide, et affiche un message indiquant comment ajouter de nouvelles playlists sinon
                ScenesSingleton.prototype.CheckIfSceneIsEmpty = function () {
                    if (this.CurrentScene.Playlists.length != 0)
                        this.CurrentScene.IsEmpty = false;
                    else
                        this.CurrentScene.IsEmpty = true;
                };
                ScenesSingleton.prototype.PlaySceneGeneral = function () {
                    for (var play in this.CurrentScene.Playlists) {
                        this.PlayPlayList(play);
                    }
                };
                ScenesSingleton.prototype.PlayPlayList = function (playlist) {
                    var _this = this;
                    var rnd = Math.floor(Math.random() * playlist.sound.length);
                    var freq = Math.floor(Math.random() * playlist.MaxFrequency) + playlist.MinFrequency;
                    setTimeout(function () {
                        playlist.sound[rnd].play();
                    }, freq);
                    playlist.sound[rnd].DomElement.onended = function () {
                        removeEventListener('onended', playlist.sound[rnd].DomElement);
                        _this.PlayPlayList(playlist);
                    };
                };
                return ScenesSingleton;
            }());
            ScenesSingleton.$inject = ["ScenesService"];
            Website.ScenesSingleton = ScenesSingleton;
            app.service("ScenesSingleton", ScenesSingleton);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
