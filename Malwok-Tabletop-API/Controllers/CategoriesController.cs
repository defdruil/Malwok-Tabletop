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

namespace Malwok_Tabletop_API.Controllers
{
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        [Route("all")]
        [HttpGet]
        public IEnumerable<DTOCategory> GetAllCategories()
        {
            return CategoriesService.GetAllCategories();
        }
    }
}