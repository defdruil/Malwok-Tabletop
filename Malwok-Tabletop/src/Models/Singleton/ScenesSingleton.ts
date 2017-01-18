module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesSingleton {
        static $inject = ["CategoriesService"];

        private _categoriesService: CategoriesService;

        constructor(categoriesService: CategoriesService) {
            this._categoriesService = categoriesService;
            this.Scenes = this._categoriesService.getPlayLists();
            this.CurrentScene = <Scene>{ Id: 1, Name: "Main Scene Test", Playlists: [] };
        }

        public Scenes: Scene[];
        public CurrentScene: Scene;
    }
    app.service("ScenesSingleton", ScenesSingleton);
}