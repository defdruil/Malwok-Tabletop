module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesSingleton {
        static $inject = ["CategoriesService"];

        private _categoriesService: CategoriesService;

        constructor(categoriesService: CategoriesService) {
            this._categoriesService = categoriesService;
        }

        public getCategories(): ng.IPromise<Category[]> {
            return this._categoriesService.getCategories().then((response): Category[] => {
                this.Categories = response.data;
                return response.data;
            });
        }

        public promptForInitCategories(): void {
            if (confirm("Êtes-vous sûr de vouloir recréer la base de données ?")) {
                this.initCategories();
            }
        }

        public initCategories(): ng.IPromise<boolean> {
            return this._categoriesService.initCategories().then((response): boolean => {
                return response.data;
            });
        }

        public Categories: Category[];
    }
    app.service("CategoriesSingleton", CategoriesSingleton);
}