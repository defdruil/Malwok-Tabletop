module Malwok.Tabletop.Website {
    'use strict'
    export class ScenesSingleton {
        static $inject = ["ScenesService"];

        // Service qui renvoie les listes
        private _scenesService: ScenesService;

        // Propriétés du Singleton
        public Scenes: Scene[];
        public CurrentScene: Scene;
        private self: ScenesSingleton;

        constructor(scenesService: ScenesService) {
            // Récupération du $inject
            this._scenesService = scenesService;
            // Renseignement des listes depuis le service
            this.CurrentScene = this._scenesService.getCurrentScene();
            this.Scenes = this._scenesService.getAllScenes();
            this.self = this;
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

        public PlaySceneGeneral(): void {
            for (var i = 0; i < this.CurrentScene.Playlists.length; i++){
                //TODO : faire le systeme de playlist active, stop general
                this.PlayPlayList(this.CurrentScene.Playlists[i]);
            }
        }

        public PlayPlayList(playlist: Playlist): void {
            let rnd: number = Math.floor(Math.random() * playlist.Sounds.length);
            if (playlist.MaxFrequency == undefined){
                playlist.MaxFrequency = 3;
            }
            if (playlist.MinFrequency == undefined){
                playlist.MinFrequency = 1;
            }
            let freq: number = (Math.floor(Math.random() * playlist.MaxFrequency) + playlist.MinFrequency)*1000;
            let audio = document.getElementById(playlist.Sounds[rnd].Id.toString()) as HTMLAudioElement;
            audio.play();
            var that = this;

            audio.onended = function (): void {
                setTimeout(() => {
                    that.PlayPlayList(playlist);
                }, freq);
            }

            audio.onpause = function (): void {
                playlist.Sounds[rnd].DomElement.onended = null;
            }
        }

        public PauseSceneGeneral(): void {
            for (var i = 0; i < this.CurrentScene.Playlists.length; i++) {
                for (var j = 0; j < this.CurrentScene.Playlists[i].Sounds.length; j++){
                    let audio = document.getElementById(this.CurrentScene.Playlists[i].Sounds[j].Id.toString()) as HTMLAudioElement;
                    if (audio.played) {
                        audio.pause();
                        audio.onended = null;
                    }
                }
            }
        }

        public StopSceneGeneral(): void {
            for (var i = 0; i < this.CurrentScene.Playlists.length; i++) {
                for (var j = 0; j < this.CurrentScene.Playlists[i].Sounds.length; j++) {
                    let audio = document.getElementById(this.CurrentScene.Playlists[i].Sounds[j].Id.toString()) as HTMLAudioElement;
                    if (audio.played) {
                        audio.pause();
                        audio.onended = null;
                        audio.currentTime = 0;
                    }
                }
            }
        }
    }
    app.service("ScenesSingleton", ScenesSingleton);
}