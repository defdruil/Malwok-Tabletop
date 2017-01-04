module Malwok.Tabletop.Website {
    export class ScenesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public _scenesSingleton: ScenesSingleton;


        constructor(scenesSingleton: ScenesSingleton) {
            this._scenesSingleton = scenesSingleton;
        }


    }
    app.controller("ScenesController", ScenesController);
}