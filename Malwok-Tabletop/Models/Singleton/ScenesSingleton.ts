module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesSingleton {
        constructor() {
        }

        Scenes: Scene[];
    }
    app.service("ScenesSingleton", ScenesSingleton);
}