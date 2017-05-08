module Malwok.Tabletop.Website {
    export class PlayListController {
        //Injection de dépendances
        static $inject = [];

        // Playlist en cours, renseignée par le ng-init du html (devrait évoluer vers une directive)
        public playlist: Playlist;

        constructor() {
        }

        //public PlayPauseButtonPressed(audio: HTMLAudioElement): void{
        //    if (audio.paused)
        //        audio.play();
        //    else
        //        audio.pause();
        //}
    }
    app.controller("PlayListController", PlayListController);
}