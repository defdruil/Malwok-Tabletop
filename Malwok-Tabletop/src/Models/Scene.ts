module Malwok.Tabletop.Website {
    'use strict'
    export interface Scene {
        Name: string;
        Id: number;
        Playlists: Playlist[];
        IsEmpty?: boolean;
    }
}