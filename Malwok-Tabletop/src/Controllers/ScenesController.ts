module Malwok.Tabletop.Website {
    export class ScenesController {
        //Injection de dépendances
        static $inject = ['ScenesSingleton'];

        // Singleton des scènes
        public ScenesSingleton: ScenesSingleton;

        // Est-ce que la scène est en train de lire globalement (toutes les playlists)
        public IsPlaying: boolean;
        
        constructor(scenesSingleton: ScenesSingleton) {
            // Récupération du $inject
            this.ScenesSingleton = scenesSingleton;
            // Initialisation
            this.IsPlaying = false;
            // Vérification au chargement pour voir si la scène est vide
            this.ScenesSingleton.CheckIfSceneIsEmpty();
        }

        // Fonction non testée qui devrait lire l'ensemble des playlists chargées.
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

        // Appel de la fonction qui permet de retirer la playlist de la scène
        public RemovePlaylist(playlist: Playlist) {
            this.ScenesSingleton.RemovePlaylist(playlist);
        }
    }
    app.controller("ScenesController", ScenesController);
}