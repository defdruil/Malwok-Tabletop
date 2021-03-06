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
                // Fonction qui permet de lire l'ensemble des playlists chargées.
                ScenesController.prototype.playGeneral = function () {
                    this.ScenesSingleton.PlaySceneGeneral();
                };
                // Fonction qui permet de lire l'ensemble des playlists chargées.
                ScenesController.prototype.pauseGeneral = function () {
                    this.ScenesSingleton.PauseSceneGeneral();
                };
                ScenesController.prototype.stopGeneral = function () {
                    this.ScenesSingleton.StopSceneGeneral();
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
                    //let Ambiances: Sound[] = [
                    //    { Id: 1, Name: "Inn", Path: "../../../Resources/Categories/Ambiances/Inn/tavern_music.mp3", Activate: false },
                    //    { Id: 2, Name: "ElvesForest", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Forest\ElvesForest.mp3", Activate: false },
                    //    { Id: 3, Name: "Town", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Town\MedievalTown.mp3", Activate: false },
                    //];
                    //let Swords: Sound[] = [
                    //    { Id: 4, Name: "Sword1", Path: "../../../Resources/Categories/Combats/Sword/sword1.mp3", Activate: false },
                    //    { Id: 5, Name: "Sword2", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Sword\\sword2.mp3", Activate: false },
                    //    { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combats\Sword\sword3.mp3", Activate: false },
                    //];
                    //let Spells: Sound[] = [
                    //    { Id: 7, Name: "FireBall", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Spell\\Fireball.mp3", Activate: false },
                    //    { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combats\Spell\Lightning.mp3", Activate: false },
                    //    { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combats\Spell\Blizzard.mp3", Activate: false },
                    //];
                    //let PlaylistsSet1: Playlist[] = [
                    //    { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                    //    { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 }
                    //];
                    //let PlaylistsSet2: Playlist[] = [
                    //    { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                    //    { Id: 3, Name: "Spell", Sounds: Spells, Volume: 50 }
                    //];
                    //// Initializing
                    //this.Categories = [];
                    //let id: number = 1;
                    //while (id <= 5) {
                    //    if (id == 1 || id == 2) {
                    //        this.Categories.push(<Category>{
                    //            Id: id,
                    //            Name: id + " - Fake category",
                    //            Playlists: PlaylistsSet1
                    //        });
                    //    } else {
                    //        this.Categories.push(<Category>{
                    //            Id: id,
                    //            Name: id + " - Fake category",
                    //            Playlists: PlaylistsSet2
                    //        });
                    //    }
                    //    id++;
                    //}
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
                    //let Ambiances: Sound[] = [
                    //    { Id: 1, Name: "Inn", Path: "../../../Resources/Categories/Ambiances/Inn/tavern_music.mp3", Activate: false },
                    //    { Id: 2, Name: "ElvesForest", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Forest\ElvesForest.mp3", Activate: false },
                    //    { Id: 3, Name: "Town", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Town\MedievalTown.mp3", Activate: false },
                    //];
                    //let Swords: Sound[] = [
                    //    { Id: 4, Name: "Sword1", Path: "../../../Resources/Categories/Combats/Sword/sword1.mp3", Activate: false },
                    //    { Id: 5, Name: "Sword2", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Sword\\sword2.mp3", Activate: false },
                    //    { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combats\Swords\sword3.mp3", Activate: false },
                    //];
                    //let Spells: Sound[] = [
                    //    { Id: 7, Name: "FireBall", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Spell\\Fireball.mp3", Activate: false },
                    //    { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combats\Spell\Lightning.mp3", Activate: false },
                    //    { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combats\Spell\Blizzard.mp3", Activate: false },
                    //];
                    //let playLists: Playlist[] = [
                    //    { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                    //    { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 }
                    //];
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
                    this.self = this;
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
                    this.PreparePlayListForPlaying(playlist);
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
                    for (var i = 0; i < this.CurrentScene.Playlists.length; i++) {
                        //TODO : faire le systeme de playlist active, stop general
                        this.PlayPlayList(this.CurrentScene.Playlists[i]);
                    }
                };
                ScenesSingleton.prototype.PlayPlayList = function (playlist) {
                    var rnd = Math.floor(Math.random() * playlist.ActivatedSounds.length);
                    if (playlist.MaxFrequency == undefined) {
                        playlist.MaxFrequency = 3;
                    }
                    if (playlist.MinFrequency == undefined) {
                        playlist.MinFrequency = 1;
                    }
                    var freq = (Math.floor(Math.random() * playlist.MaxFrequency) + playlist.MinFrequency) * 1000;
                    var audio = document.getElementById(playlist.ActivatedSounds[rnd].Id.toString());
                    audio.play();
                    var that = this;
                    audio.onended = function () {
                        audio.currentTime = 0;
                        setTimeout(function () {
                            that.PlayPlayList(playlist);
                        }, freq);
                    };
                    audio.onpause = function () {
                        playlist.ActivatedSounds[rnd].DomElement.onended = null;
                    };
                };
                ScenesSingleton.prototype.PauseSceneGeneral = function () {
                    for (var i = 0; i < this.CurrentScene.Playlists.length; i++) {
                        for (var j = 0; j < this.CurrentScene.Playlists[i].ActivatedSounds.length; j++) {
                            var audio = document.getElementById(this.CurrentScene.Playlists[i].ActivatedSounds[j].Id.toString());
                            if (audio.played) {
                                audio.pause();
                                audio.onended = null;
                            }
                        }
                    }
                };
                ScenesSingleton.prototype.StopSceneGeneral = function () {
                    for (var i = 0; i < this.CurrentScene.Playlists.length; i++) {
                        for (var j = 0; j < this.CurrentScene.Playlists[i].ActivatedSounds.length; j++) {
                            var audio = document.getElementById(this.CurrentScene.Playlists[i].ActivatedSounds[j].Id.toString());
                            if (audio.played) {
                                audio.pause();
                                audio.onended = null;
                                audio.currentTime = 0;
                            }
                        }
                    }
                };
                ScenesSingleton.prototype.PreparePlayListForPlaying = function (playlist) {
                    playlist.ActivatedSounds = [];
                    for (var i = 0; i < playlist.Sounds.length; i++) {
                        if (playlist.Sounds[i].Active) {
                            playlist.ActivatedSounds.push(playlist.Sounds[i]);
                        }
                    }
                };
                return ScenesSingleton;
            }());
            ScenesSingleton.$inject = ["ScenesService"];
            Website.ScenesSingleton = ScenesSingleton;
            app.service("ScenesSingleton", ScenesSingleton);
        })(Website = Tabletop.Website || (Tabletop.Website = {}));
    })(Tabletop = Malwok.Tabletop || (Malwok.Tabletop = {}));
})(Malwok || (Malwok = {}));
