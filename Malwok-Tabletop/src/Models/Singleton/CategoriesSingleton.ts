module Malwok.Tabletop.Website {
    'use strict'
    export class CategoriesSingleton {
        static $inject = ["CategoriesService"];

        private _categoriesService: CategoriesService;

        constructor(categoriesService: CategoriesService) {
            this._categoriesService = categoriesService;
            this.Categories = this._categoriesService.getCategories();
        }

        public Categories: Category[];
    }
    app.service("CategoriesSingleton", CategoriesSingleton);
}