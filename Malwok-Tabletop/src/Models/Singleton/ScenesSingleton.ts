module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesSingleton {
        static $inject = ["ScenesService"];

        // Service qui renvoie les listes
        private _scenesService: ScenesService;

        // Propriétés du Singleton
        public Scenes: Scene[];
        public CurrentScene: Scene;

        constructor(scenesService: ScenesService) {
            // Récupération du $inject
            this._scenesService = scenesService;
            // Renseignement des listes depuis le service
            this.CurrentScene = this._scenesService.getCurrentScene();
            this.Scenes = this._scenesService.getAllScenes();
        }

        // Fonction qui duplique la playlist passée, afin d'éviter les objets dupliqués dans la scène (qui provoquent des erreurs de ng-repeat)
        public AddPlaylist(playlist: Playlist): void {
            // Création d'une nouvelle instance de la playlist
            let playlistToAdd: Playlist = <Playlist>{
                Id: this.CurrentScene.Playlists.length + 1,
                Name: playlist.Name,
                Sounds: playlist.Sounds
            }
            // Ajout à la scène en cours
            this.CurrentScene.Playlists.push(playlistToAdd);
            // Mise à jour du message d'aide si il était affiché
            this.CheckIfSceneIsEmpty();
        }

        public RemovePlaylist(playlist: Playlist): void {
            // Suppression de la playlist de la scène en cours
            this.CurrentScene.Playlists.splice(this.CurrentScene.Playlists.indexOf(playlist), 1);
            // Mise à jour du message d'aide si la liste est désormais vide
            this.CheckIfSceneIsEmpty();
        }

        // Vérifie si la Scène est vide, et affiche un message indiquant comment ajouter de nouvelles playlists sinon
        public CheckIfSceneIsEmpty() :void {
            if (this.CurrentScene.Playlists.length != 0)
                this.CurrentScene.IsEmpty = false;
            else
                this.CurrentScene.IsEmpty = true;
        }

        public PlaySceneGeneral():void {
            for (let play in this.CurrentScene.Playlists) {
                this.PlayPlayList(play);
            }
        }

        public PlayPlayList(playlist):void {
            let rnd: number = Math.floor(Math.random() * playlist.sound.length);
            let freq: number = Math.floor(Math.random() * playlist.MaxFrequency) + playlist.MinFrequency;
            setTimeout(() => {
                playlist.sound[rnd].play();
            }, freq);
            
            playlist.sound[rnd].DomElement.onended = (): void => {
                removeEventListener('onended', playlist.sound[rnd].DomElement);
                this.PlayPlayList(playlist);
            }

        }

    }
    app.service("ScenesSingleton", ScenesSingleton);
}