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
        public playGeneral(): void {
            /*let index: number = 0;
            this.IsPlaying = !this.IsPlaying;
            while (index < this.ScenesSingleton.CurrentScene.Playlists.length) {
                if (!this.IsPlaying) {
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.pause();
                } else {
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement = document.getElementById(this.ScenesSingleton.CurrentScene.Playlists[index].Name + this.ScenesSingleton.CurrentScene.Playlists[index].Id) as HTMLAudioElement;
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = 3;
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.src = this.ScenesSingleton.CurrentScene.Playlists[index].Sounds[0].Path;
                    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.play();
                    //this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.msPlayToSource = this.ScenesSingleton.CurrentScene.Playlists[index].Sounds[1].Path;
                }
                index ++;
            }*/
            this.ScenesSingleton.PlaySceneGeneral();
        }

        // Fonction non testée qui devrait accelerer l'ensemble des playlists chargées.
        public fastGeneral(): void {
            let index: number = 0;
            //while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
            //    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate + 0.5;

            //}

        }

        // Fonction non testée qui devrait ralentir l'ensemble des playlists chargées.
        public slowGeneral(): void {
            let index: number = 0;
            //while (index <= this.ScenesSingleton.CurrentScene.Playlists.length) {
            //    this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate = this.ScenesSingleton.CurrentScene.Playlists[index].DomElement.playbackRate - 0.5;

            //}

        }

        // Appel de la fonction qui permet de retirer la playlist de la scène
        public RemovePlaylist(playlist: Playlist) {
            this.ScenesSingleton.RemovePlaylist(playlist);
        }
    }
    app.controller("ScenesController", ScenesController);
}