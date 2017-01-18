module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesService {
        constructor() {
        }

        public playLists: Playlist[] =
        [
            { Id: 1, Name: "Ambiance", Sounds: this.Ambiances },
            { Id: 2, Name: "Sword", Sounds: this.Swords },
            { Id: 3, Name: "Spell", Sounds: this.Spells },

        ]

        public Ambiances: Sound[] = 
        [
            { Id: 1, Name: "Inn", Path: "\Resources\Categories\Ambiances\Inn\tavern_music.mp3" },
            { Id: 2, Name: "ElvesForest", Path: "\Resources\Categories\Ambiances\Forest\ElvesForest.mp3" },
            { Id: 3, Name: "Town", Path: "\Resources\Categories\Ambiances\Town\MedievalTown.mp3" },

        ]

        public Swords: Sound[] =
        [
            { Id: 4, Name: "Sword1", Path: "\Resources\Categories\Combat\Sword\sword1.mp3" },
            { Id: 5, Name: "Sword2", Path: "\Resources\Categories\Combat\Sword\sword2.mp3" },
            { Id: 6, Name: "Sword3", Path: "\Resources\Categories\Combat\Sword\sword3.mp3" },

        ]

        public Spells: Sound[] =
        [
            { Id: 7, Name: "FireBall", Path: "\Resources\Categories\Combat\Spell\Fireball.mp3" },
            { Id: 8, Name: "Lightning", Path: "\Resources\Categories\Combat\Spell\Lightning.mp3" },
            { Id: 9, Name: "Blizzard", Path: "\Resources\Categories\Combat\Spell\Blizzard.mp3" },

        ]

        public getPlayLists(): Playlist[] {
            return this.playLists;
        }
    }
    app.service("CategoriesService", CategoriesService);
}