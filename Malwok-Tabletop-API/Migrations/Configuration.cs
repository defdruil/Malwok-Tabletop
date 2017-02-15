namespace Malwok_Tabletop_API.Migrations
{
    using Context;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Malwok_Tabletop_API.Context.MalwokAudioContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "Malwok_Tabletop_API.Context.MalwokAudioContext";
        }

        protected override void Seed(MalwokAudioContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );

            context.Categories.AddOrUpdate(c => c.CategoryId,
                new Category() { CategoryId = 1, Name = "1 Category Set" },
                new Category() { CategoryId = 2, Name = "2 Category Set" },
                new Category() { CategoryId = 3, Name = "3 Category Set" },
                new Category() { CategoryId = 4, Name = "4 Category Set" },
                new Category() { CategoryId = 5, Name = "5 Category Set" }
                );

            context.Playlists.AddOrUpdate(p => p.PlaylistId,
                new Playlist() { PlaylistId = 1, Name = "Swords", CategoryId = 1},
                new Playlist() { PlaylistId = 2, Name = "Spells", CategoryId = 1},
                new Playlist() { PlaylistId = 3, Name = "Swords", CategoryId = 2},
                new Playlist() { PlaylistId = 4, Name = "Birds", CategoryId = 2},
                new Playlist() { PlaylistId = 5, Name = "Spells", CategoryId = 3},
                new Playlist() { PlaylistId = 6, Name = "Wind", CategoryId = 3},
                new Playlist() { PlaylistId = 7, Name = "Thunder", CategoryId = 4},
                new Playlist() { PlaylistId = 8, Name = "People", CategoryId = 4},
                new Playlist() { PlaylistId = 9, Name = "Fire", CategoryId = 5},
                new Playlist() { PlaylistId = 10, Name = "Panic", CategoryId = 5}
                );

            context.Sounds.AddOrUpdate(s => s.SoundId,
                new Sound() { SoundId = 1, Name = "tavern_music", Path = @"\Resources\Categories\Ambiances\Inn\tavern_music.mp3", PlaylistId = 1 },
                new Sound() { SoundId = 2, Name = "tavern_music", Path = @"\Resources\Categories\Ambiances\Inn\tavern_music.mp3", PlaylistId = 2 },
                new Sound() { SoundId = 3, Name = "ElvesForest", Path = @"\Resources\Categories\Ambiances\Forest\ElvesForest.mp3", PlaylistId = 3 },
                new Sound() { SoundId = 4, Name = "ElvesForest", Path = @"\Resources\Categories\Ambiances\Forest\ElvesForest.mp3", PlaylistId = 4 },
                new Sound() { SoundId = 5, Name = "MedievalTown", Path = @"\Resources\Categories\Ambiances\Town\MedievalTown.mp3", PlaylistId = 5 },
                new Sound() { SoundId = 6, Name = "MedievalTown", Path = @"\Resources\Categories\Ambiances\Town\MedievalTown.mp3", PlaylistId = 6 },
                new Sound() { SoundId = 7, Name = "MedievalTown", Path = @"\Resources\Categories\Ambiances\Town\MedievalTown.mp3", PlaylistId = 7 },
                new Sound() { SoundId = 8, Name = "sword1", Path = @"\Resources\Categories\Combat\Sword\sword1.mp3", PlaylistId = 8 },
                new Sound() { SoundId = 9, Name = "sword1", Path = @"\Resources\Categories\Combat\Sword\sword1.mp3", PlaylistId = 9 },
                new Sound() { SoundId = 10, Name = "sword2", Path = @"\Resources\Categories\Combat\Sword\sword2.mp3", PlaylistId = 10 },
                new Sound() { SoundId = 11, Name = "sword2", Path = @"\Resources\Categories\Combat\Sword\sword2.mp3", PlaylistId = 1 },
                new Sound() { SoundId = 12, Name = "sword3", Path = @"\Resources\Categories\Combat\Sword\sword3.mp3", PlaylistId = 2 },
                new Sound() { SoundId = 13, Name = "sword3", Path = @"\Resources\Categories\Combat\Sword\sword3.mp3", PlaylistId = 3 },
                new Sound() { SoundId = 14, Name = "sword3", Path = @"\Resources\Categories\Combat\Sword\sword3.mp3", PlaylistId = 4 },
                new Sound() { SoundId = 15, Name = "Fireball", Path = @"\Resources\Categories\Combat\Spell\Fireball.mp3", PlaylistId = 5 },
                new Sound() { SoundId = 16, Name = "Fireball", Path = @"\Resources\Categories\Combat\Spell\Fireball.mp3", PlaylistId = 6 },
                new Sound() { SoundId = 17, Name = "Fireball", Path = @"\Resources\Categories\Combat\Spell\Fireball.mp3", PlaylistId = 7 },
                new Sound() { SoundId = 18, Name = "Lightning", Path = @"\Resources\Categories\Combat\Spell\Lightning.mp3", PlaylistId = 8 },
                new Sound() { SoundId = 19, Name = "Lightning", Path = @"\Resources\Categories\Combat\Spell\Lightning.mp3", PlaylistId = 9 },
                new Sound() { SoundId = 20, Name = "Lightning", Path = @"\Resources\Categories\Combat\Spell\Lightning.mp3", PlaylistId = 10 },
                new Sound() { SoundId = 21, Name = "Blizzard", Path = @"\Resources\Categories\Combat\Spell\Blizzard.mp3", PlaylistId = 1 },
                new Sound() { SoundId = 22, Name = "Blizzard", Path = @"\Resources\Categories\Combat\Spell\Blizzard.mp3", PlaylistId = 2 },
                new Sound() { SoundId = 23, Name = "Blizzard", Path = @"\Resources\Categories\Combat\Spell\Blizzard.mp3", PlaylistId = 3 },
                new Sound() { SoundId = 24, Name = "Fireball", Path = @"\Resources\Categories\Combat\Spell\Fireball.mp3", PlaylistId = 4 },
                new Sound() { SoundId = 25, Name = "Lightning", Path = @"\Resources\Categories\Combat\Spell\Lightning.mp3", PlaylistId = 5 },
                new Sound() { SoundId = 26, Name = "Blizzard", Path = @"\Resources\Categories\Combat\Spell\Blizzard.mp3", PlaylistId = 6 },
                new Sound() { SoundId = 27, Name = "tavern_music", Path = @"\Resources\Categories\Ambiances\Inn\tavern_music.mp3", PlaylistId = 7 },
                new Sound() { SoundId = 28, Name = "MedievalTown", Path = @"\Resources\Categories\Ambiances\Town\MedievalTown.mp3", PlaylistId = 8 },
                new Sound() { SoundId = 29, Name = "sword1", Path = @"\Resources\Categories\Combat\Sword\sword1.mp3", PlaylistId = 9 },
                new Sound() { SoundId = 30, Name = "sword1", Path = @"\Resources\Categories\Combat\Sword\sword1.mp3", PlaylistId = 10 }
                );
        }
    }
}
