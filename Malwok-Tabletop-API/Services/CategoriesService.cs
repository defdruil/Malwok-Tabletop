using Malwok_Tabletop_API.Context;
using Malwok_Tabletop_API.Models;
using Malwok_Tabletop_API.Models.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Services
{
    public static class CategoriesService
    {
        public static IEnumerable<DTOCategory> GetAllCategories()
        {
            List<Category> list = new List<Category>();
            List<DTOCategory> listToReturn = new List<DTOCategory>();
            using (var context = new MalwokAudioContext())
            {
                list = context.Categories.Include("Playlists").Include("Playlists.Sounds").ToList();
                foreach (var category in list)
                {
                    listToReturn.Add(category.ToDTO());
                }
            }
            return listToReturn;
        }
    }
}