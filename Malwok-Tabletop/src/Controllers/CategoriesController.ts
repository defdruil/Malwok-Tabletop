module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesController {
        //Injection de dépendances
        static $inject = ['CategoriesSingleton', 'ScenesSingleton'];

        // Singletons
        public CategoriesSingleton: CategoriesSingleton;
        public ScenesSingleton: ScenesSingleton;

        // Gestion de la recherche
        public DisplayedCategories: Category[];
        public SearchedText: string;
        public NoCategoryDisplayed: boolean;

        // Constructeur
        constructor(categoriesSingleton: CategoriesSingleton, scenesSingleton: ScenesSingleton) {
            // Récupération du static $inject
            this.CategoriesSingleton = categoriesSingleton;
            this.ScenesSingleton = scenesSingleton;
            // Initialisation
            this.SearchedText = "";
            // Récupération des catégories chargées
            this.DisplayedCategories = this.CategoriesSingleton.Categories;
            // Création des propriétés qui gèrent l'affichage
            this.CategoriesSingleton.Categories.forEach((category): void => {
                category.HidePlaylists = true;
                category.Playlists.forEach((playlist): void => {
                    playlist.IsPlaylistToDisplay = true;
                });
            });
            // Génération du message si la liste est vide (Normalement, ne devrait jamais arriver, sauf erreur ou Server Down (une fois que le service prendra ses infos sur le server))
            this.CheckCategoriesDisplayed();
        }

        // Fonction qui met à jour la liste de catégories/Playlists selon la recherche effectuée
        public UpdateOnSearch(): void {
            // Reset de la liste
            this.DisplayedCategories = [];
            // Pour chaque catégorie
            this.CategoriesSingleton.Categories.forEach((category): void => {
                // On regarde si le nom de la catégorie match la recherche
                if (category.Name.toLowerCase().indexOf(this.SearchedText.toLowerCase()) !== -1) {
                    // Si oui, on l'ajoute à la liste des catégories à afficher
                    this.DisplayedCategories.push(category);
                    // Puis, pour chaque Playlist de la catégorie qui match
                    category.Playlists.forEach((playlist): void => {
                        // On indique que les playlist sont à afficher (ne s'affichera que si la catégorie est "ouverte")
                        playlist.IsPlaylistToDisplay = true;
                    });
                } else {
                    // Si non, pour chaque playlist
                    category.Playlists.forEach((playlist): void => {
                        // On teste si le nom de la playlist match la recherche
                        if (playlist.Name.toLowerCase().indexOf(this.SearchedText.toLowerCase()) !== -1) {
                            // Si oui, on ajoute la catégorie à la liste des catégories à afficher
                            this.DisplayedCategories.push(category);
                            // Et on indique que les playlist sont à afficher (ne s'affichera que si la catégorie est "ouverte")
                            playlist.IsPlaylistToDisplay = true;
                        } else {
                            // Si non, on affiche pas la catégorie, et on cache les playlist (inutile en théorie, mais permet de garder les données de la liste correctes)
                            playlist.IsPlaylistToDisplay = false;
                        }
                    });
                }
            });
            // A la fin, on vérifie si la liste est vide ou pas
            this.CheckCategoriesDisplayed();
        }

        // Appelle la fonction d'ajout de la playlist
        public PlaylistClicked(playlist: Playlist): void {
            this.ScenesSingleton.AddPlaylist(playlist);
        }

        // Regarde si la liste est vide, et génère l'affichage du message d'erreur si elle l'est
        public CheckCategoriesDisplayed() {
            if (this.DisplayedCategories.length != 0)
                this.NoCategoryDisplayed = false;
            else
                this.NoCategoryDisplayed = true;
        }
    }
    app.controller("CategoriesController", CategoriesController);
}