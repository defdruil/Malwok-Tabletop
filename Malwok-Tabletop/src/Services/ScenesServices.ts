module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesService {

        private Scene: Scene;

        constructor() {
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
       
            this.Scene = <Scene>{
                Id: 1,
                Name: "Main Fake Scene",
                Playlists: []
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