using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Malwok_Tabletop_API.Context;
using Malwok_Tabletop_API.Models;
using Malwok_Tabletop_API.Models.DTO;
using Malwok_Tabletop_API.Services;
using System.Web.Http.Cors;

namespace Malwok_Tabletop_API.Controllers
{
    //[EnableCors(origins: "http://localhost:60234", headers: "*", methods: "*")]
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        [Route("all")]
        [HttpGet]
        public IEnumerable<DTOCategory> GetAllCategories()
        {
            return CategoriesService.GetAllCategories();
        }

        [Route("hidden/init/bdd")]
        [HttpGet]
        public bool InitCategories()
        {
            return CategoriesService.ReinitBDD();
        }
    }
}