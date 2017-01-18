module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;

        public test: string;

        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
            this.test = "Hello world";
        }
    }
    app.controller("CategoriesController", CategoriesController);
}