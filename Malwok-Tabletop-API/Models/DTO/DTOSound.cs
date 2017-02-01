using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models.DTO
{
    public class DTOSound
    {
        public DTOSound()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Path { get; set; }

        public DTOPlaylist Playlist { get; set; }
    }
}