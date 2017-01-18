module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;

        public truc: string = "machin";


        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
            this.truc = "hello";
        }




    }
    app.controller("CategoriesController", CategoriesController);
}