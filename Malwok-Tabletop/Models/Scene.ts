module Malwok.Tabletop.Website {
    export interface Scene {
        Name: string;
        Id: number;
        Playlists?: Playlist[];
    }
}