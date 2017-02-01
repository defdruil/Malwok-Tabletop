using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models.DTO
{
    public class DTOPlaylist
    {
        public DTOPlaylist()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<DTOSound> Sounds { get; set; }

        public DTOCategory Category { get; set; }
    }
}