module Malwok.Tabletop.Website {
    'use strict'
    export class MainController {
        //Injection de dépendances
        static $inject = ['CategoriesSingleton', 'ScenesSingleton'];

        // Theese functions have no utility, but, well, you know...
        //Singleton des catégories
        public CategoriesSingleton: CategoriesSingleton;
        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;

        public test: string = "hello !";

        constructor(categoriesSingleton: CategoriesSingleton, scenesSingleton: ScenesSingleton) {
            this.CategoriesSingleton = categoriesSingleton;
            this.ScenesSingleton = scenesSingleton;
        }
    }
    app.controller("MainController", MainController);
}