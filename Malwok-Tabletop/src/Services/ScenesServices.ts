module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesService {

        private Scene: Scene;

        constructor() {
            let Ambiances: Sound[] = [
                { Id: 1, Name: "Inn", Path: "\Resources\Categories\Ambiances\Inn\tavern_music.mp3" },
                { Id: 2, Name: "ElvesForest", Path: "\Resources\Categories\Ambiances\Forest\ElvesForest.mp3" },
                { Id: 3, Name: "Town", Path: "\Resources\Categories\Ambiances\Town\MedievalTown.mp3" },

            ];
            let Swords: Sound[] = [
                { Id: 4, Name: "Sword1", Path: "\Resources\Categories\Combat\Sword\sword1.mp3" },
                { Id: 5, Name: "Sword2", Path: "\Resources\Categories\Combat\Sword\sword2.mp3" },
                { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combat\Sword\sword3.mp3" },

            ];
            let Spells: Sound[] = [
                { Id: 7, Name: "FireBall", Path: "\Resources\Categories\Combat\Spell\Fireball.mp3" },
                { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combat\Spell\Lightning.mp3" },
                { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combat\Spell\Blizzard.mp3" },

            ];
            let playLists: Playlist[] = [
                { Id: 1, Name: "Ambiance", Sounds: Ambiances, Volume: 50 },
                { Id: 2, Name: "Sword", Sounds: Swords, Volume: 50 },
                { Id: 3, Name: "Spell", Sounds: Spells, Volume: 50 }
            ];
            this.Scene = <Scene>{
                Id: 1,
                Name: "Main Fake Scene",
                Playlists: playLists
            }
        }
        
        public getCurrentScene(): Scene {
            return this.Scene;
        }

        public getAllScenes(): Scene[] {
            let scenes: Scene[] = [];
            let id: number = 1;
            while (id < 5) {
                let scene: Scene = <Scene>{ Id: id, Name: id + " - Fake Scene", Playlists: this.Scene.Playlists };
                scenes.push(scene);
                id++;
            }
            return scenes;
        }
    }
    app.service("ScenesService", ScenesService);
}