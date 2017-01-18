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

        public Scenes: Scene[];
        public CurrentScene: Scene;
    }
    app.service("ScenesSingleton", ScenesSingleton);
}