module Malwok.Tabletop.Website {
    export class PlayListViewController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;
        public playlist: Playlist;

        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
        }


    }
    app.controller("PlayListViewController", PlayListViewController);
}