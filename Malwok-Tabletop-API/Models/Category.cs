using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models
{
    public class Category
    {
        public Category()
        {

        }

        [Key]
        public int CategoryId { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Playlist> Playlists { get; set; }
    }
}