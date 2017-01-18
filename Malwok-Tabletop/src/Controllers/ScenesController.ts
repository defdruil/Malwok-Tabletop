module Malwok.Tabletop.Website {
    export class ScenesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes (All datas)
        public ScenesSingleton: ScenesSingleton;
        public IsPlaying: boolean;
        
        constructor(scenesSingleton: ScenesSingleton) {
            this.ScenesSingleton = scenesSingleton;
            this.IsPlaying = false;
        }

        public PlayPauseAllButtonPressed(): void {
            let index: number = 0;
            while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
                if (this.IsPlaying) {
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.pause();
                    this.IsPlaying = false;
                } else {
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.play();
                    this.IsPlaying = true;
                }
            }
        }

        public RemovePlaylist(playlist: Playlist) {
            this.ScenesSingleton.RemovePlaylist(playlist);
        }
    }
    app.controller("ScenesController", ScenesController);
}