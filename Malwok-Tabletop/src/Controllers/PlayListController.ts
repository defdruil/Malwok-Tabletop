module Malwok.Tabletop.Website {
    export class PlayListController {
        //Injection de dépendances
        static $inject = [];

        // Playlist en cours, renseignée par le ng-init du html (devrait évoluer vers une directive)
        public playlist: Playlist;

        constructor() {
        }

        public PlayPauseButtonPressed(): void{
            if (this.playlist.DomElement.paused)
                this.playlist.DomElement.play();
            else
                this.playlist.DomElement.pause();
        }
    }
    app.controller("PlayListController", PlayListController);
}