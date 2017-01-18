﻿module Malwok.Tabletop.Website {
    export class MainController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;

        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
        }
    }
    app.controller("MainController", MainController);
}