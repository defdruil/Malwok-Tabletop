using Malwok_Tabletop_API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Context
{
    public class MalwokAudioContext : DbContext
    {
        public MalwokAudioContext() : base()
        {
            Database.SetInitializer<MalwokAudioContext>(new CreateDatabaseIfNotExists<MalwokAudioContext>());
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Playlist> Playlists { get; set; }
        public DbSet<Sound> Sounds { get; set; }
    }
}