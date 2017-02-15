using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models.DTO
{
    public class DTOCategory
    {
        public DTOCategory()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<DTOPlaylist> Playlists { get; set; }
    }
}