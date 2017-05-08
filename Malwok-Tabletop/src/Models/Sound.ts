﻿module Malwok.Tabletop.Website {
    'use strict'
    export interface Sound {
        Name: string;
        Id: number;
        Path: string;
        DomElement?: HTMLAudioElement;
        Active: Boolean;
    }
}