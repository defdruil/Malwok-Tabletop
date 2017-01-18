﻿module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;


        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
        }




    }
    app.controller("CategoriesController", CategoriesController);
}