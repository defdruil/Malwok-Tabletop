module Malwok.Tabletop.Website {
    'use strict'
    export interface Category {
        Name: string;
        Id: number;
        Playlists: Playlist[];
        HidePlaylists?: boolean;
    }
}