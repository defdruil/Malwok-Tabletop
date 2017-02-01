using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models
{
    public class Sound
    {
        public Sound()
        {

        }

        [Key]
        public int SoundId { get; set; }

        public string Name { get; set; }

        public string Path { get; set; }

        [ForeignKey("Playlist")]
        public int PlaylistId { get; set; }

        public Playlist Playlist { get; set; }
    }
}