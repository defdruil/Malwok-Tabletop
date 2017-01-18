module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesController {
        //Injection de dépendances
        static $inject = ['CategoriesSingleton', 'ScenesSingleton'];

        // Singleton des scènes (All datas)
        public CategoriesSingleton: CategoriesSingleton;
        public ScenesSingleton: ScenesSingleton;
        public DisplayedCategories: Category[];
        public SearchedText: string;

        constructor(categoriesSingleton: CategoriesSingleton, scenesSingleton: ScenesSingleton) {
            this.CategoriesSingleton = categoriesSingleton;
            this.ScenesSingleton = scenesSingleton;
            this.SearchedText = "";
            this.DisplayedCategories = this.CategoriesSingleton.Categories;
            this.CategoriesSingleton.Categories.forEach((category): void => {
                category.HidePlaylists = true;
                category.Playlists.forEach((playlist): void => {
                    playlist.IsPlaylistToDisplay = true;
                });
            });
        }

        public UpdateOnSearch(): void {
            this.DisplayedCategories = [];
            this.CategoriesSingleton.Categories.forEach((category): void => {
                // TODO A améliorer, ne détecte pas si la string recherchée est au début du Name
                if (category.Name.indexOf(this.SearchedText) !== -1) {
                    this.DisplayedCategories.push(category);
                    category.Playlists.forEach((playlist): void => {
                        playlist.IsPlaylistToDisplay = true;
                    });
                } else {
                    category.Playlists.forEach((playlist): void => {
                        // TODO A améliorer, ne détecte pas si la string recherchée est au début du Name
                        if (playlist.Name.indexOf(this.SearchedText) !== -1) {
                            this.DisplayedCategories.push(category);
                            playlist.IsPlaylistToDisplay = true;
                        } else {
                            playlist.IsPlaylistToDisplay = false;
                        }
                    });
                }
            });
        }

        public PlaylistClicked(playlist: Playlist): void {
            this.ScenesSingleton.AddPlaylist(playlist);
        }
    }
    app.controller("CategoriesController", CategoriesController);
}