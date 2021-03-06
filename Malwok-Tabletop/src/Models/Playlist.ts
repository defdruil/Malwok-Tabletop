﻿module Malwok.Tabletop.Website {
    'use strict'
    export interface Playlist {
        Name: string;
        Id: number;
        Sounds: Sound[];
        ActivatedSounds: Sound[];
        Volume?: number;
        MinFrequency?: number;
        MaxFrequency?: number;
        IsPlaylistToDisplay?: boolean;

    }
}