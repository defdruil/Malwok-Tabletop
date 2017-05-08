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

        // Fonction qui permet de lire l'ensemble des playlists chargées.
        public playGeneral(): void {
            this.ScenesSingleton.PlaySceneGeneral();
        }

        // Fonction qui permet de lire l'ensemble des playlists chargées.
        public pauseGeneral(): void {
            this.ScenesSingleton.PauseSceneGeneral();
        }

        // Appel de la fonction qui permet de retirer la playlist de la scène
        public RemovePlaylist(playlist: Playlist) {
            this.ScenesSingleton.RemovePlaylist(playlist);
        }
    }
    app.controller("ScenesController", ScenesController);
}