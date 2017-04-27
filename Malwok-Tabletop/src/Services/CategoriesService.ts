module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesService {
        static $inject = ['$http'];
        private _httpService: ng.IHttpService;

        private Categories: Category[];

        constructor(http: ng.IHttpService) {
            this._httpService = http;

            let Ambiances: Sound[] = [
                { Id: 1, Name: "Inn", Path: "../../../Resources/Categories/Ambiances/Inn/tavern_music.mp3" },
                { Id: 2, Name: "ElvesForest", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Forest\ElvesForest.mp3" },
                { Id: 3, Name: "Town", Path: "..\\..\\..\\Resources\\Categories\\Ambiances\\Town\MedievalTown.mp3" },
            ];
            let Swords: Sound[] = [
                { Id: 4, Name: "Sword1", Path: "../../../Resources/Categories/Combats/Sword/sword1.mp3" },
                { Id: 5, Name: "Sword2", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Sword\\sword2.mp3" },
                { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combats\Sword\sword3.mp3" },

            ];
            let Spells: Sound[] = [
                { Id: 7, Name: "FireBall", Path: "..\\..\\..\\Resources\\Categories\\Combats\\Spell\\Fireball.mp3" },
                { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combats\Spell\Lightning.mp3" },
                { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combats\Spell\Blizzard.mp3" },

            ];
            let PlaylistsSet1: Playlist[] = [
                { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 }
            ];
            let PlaylistsSet2: Playlist[] = [
                { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                { Id: 3, Name: "Spell", Sounds: Spells, Volume: 50 }
            ];
            // Initializing
            this.Categories = [];
            let id: number = 1;
            while (id <= 5) {
                if (id == 1 || id == 2) {
                    this.Categories.push(<Category>{
                        Id: id,
                        Name: id + " - Fake category",
                        Playlists: PlaylistsSet1
                    });
                } else {
                    this.Categories.push(<Category>{
                        Id: id,
                        Name: id + " - Fake category",
                        Playlists: PlaylistsSet2
                    });
                }
                id++;
            }
        }

        public getCategories(): ng.IHttpPromise<Category[]> {
            return this._httpService.get("http://localhost:51894/api/categories/all");
        }

        public initCategories(): ng.IHttpPromise<boolean> {
            return this._httpService.get("http://localhost:51894/api/categories/hidden/init/bdd");
        }

        /*public getCategories(): Category[] {
            return this.Categories;
        }*/
    }
    app.service("CategoriesService", CategoriesService);
}