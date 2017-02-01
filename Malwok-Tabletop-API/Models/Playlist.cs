using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models
{
    public class Playlist
    {
        public Playlist()
        {

        }

        [Key]
        public int PlaylistId { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Sound> Sounds { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}