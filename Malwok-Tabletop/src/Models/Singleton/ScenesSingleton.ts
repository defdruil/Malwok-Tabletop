module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesSingleton {
        static $inject = ["ScenesService"];

        private _scenesService: ScenesService;

        constructor(scenesService: ScenesService) {
            this._scenesService = scenesService;
            this.CurrentScene = this._scenesService.getCurrentScene();
            this.Scenes = this._scenesService.getAllScenes();
        }

        public AddPlaylist(playlist: Playlist): void {
            let playlistToAdd: Playlist = <Playlist>{
                Id: this.CurrentScene.Playlists.length + 1,
                Name: playlist.Name,
                Sounds: playlist.Sounds
            }
            this.CurrentScene.Playlists.push(playlistToAdd);
        }

        public RemovePlaylist(playlist: Playlist): void {
            this.CurrentScene.Playlists.splice(this.CurrentScene.Playlists.indexOf(playlist), 1);
        }

        public Scenes: Scene[];
        public CurrentScene: Scene;
    }
    app.service("ScenesSingleton", ScenesSingleton);
}