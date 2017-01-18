module Malwok.Tabletop.Website {
    export class MainController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public _scenesSingleton: ScenesSingleton;

        constructor(scenesSingleton: ScenesSingleton) {
            this._scenesSingleton = scenesSingleton;
        }
    }
    app.controller("CategoriesController", MainController);
}