using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Malwok_Tabletop_API.Models.DTO
{
    public static class DTOTranscriptions
    {
        // Category Handling
        public static DTOCategory ToDTO(this Category category)
        {
            DTOCategory dtoCategory = new DTOCategory()
            {
                Id = category.CategoryId,
                Name = category.Name,
                Playlists = category.Playlists == null ? null : category.Playlists.ToDTO()
            };
            return dtoCategory;
        }

        public static Category ToEntity(this DTOCategory dtoCategory)
        {
            Category category = new Category()
            {
                CategoryId = dtoCategory.Id,
                Name = dtoCategory.Name,
                Playlists = dtoCategory.Playlists == null ? null : dtoCategory.Playlists.ToEntity()
            };
            return category;
        }

        // Multiple Categories Handling
        public static ICollection<Category> ToEntity(this ICollection<DTOCategory> dtoCategories)
        {
            ICollection<Category > categories = new List<Category>();
            foreach (DTOCategory dtoCategory in dtoCategories)
            {
                categories.Add(dtoCategory.ToEntity());
            }
            return categories;
        }

        public static ICollection<DTOCategory> ToDTO(this ICollection<Category> categories)
        {
            ICollection<DTOCategory> dtoCategories = new List<DTOCategory>();
            foreach (Category category in categories)
            {
                dtoCategories.Add(category.ToDTO());
            }
            return dtoCategories;
        }

        // Playlist Handling
        public static DTOPlaylist ToDTO(this Playlist playlist)
        {
            DTOPlaylist dtoPlaylist = new DTOPlaylist()
            {
                Id = playlist.PlaylistId,
                Name = playlist.Name,
                Sounds = playlist.Sounds == null ? null : playlist.Sounds.ToDTO()
            };
            return dtoPlaylist;
        }

        public static Playlist ToEntity(this DTOPlaylist dtoPlaylist)
        {
            Playlist playlist = new Playlist()
            {
                PlaylistId = dtoPlaylist.Id,
                Name = dtoPlaylist.Name,
                Sounds = dtoPlaylist.Sounds == null ? null : dtoPlaylist.Sounds.ToEntity()
            };
            return playlist;
        }

        // Multiple playlists Handling
        public static ICollection<DTOPlaylist> ToDTO(this ICollection<Playlist> playlists)
        {
            ICollection<DTOPlaylist> dtoPlaylist = new List<DTOPlaylist>();
            foreach (Playlist playlist in playlists)
            {
                dtoPlaylist.Add(playlist.ToDTO());
            }
            return dtoPlaylist;
        }

        public static ICollection<Playlist> ToEntity(this ICollection<DTOPlaylist> dtoPlaylists)
        {
            ICollection<Playlist> playlists = new List<Playlist>();
            foreach(DTOPlaylist dtoPlaylist in dtoPlaylists)
            {
                playlists.Add(dtoPlaylist.ToEntity());
            }
            return playlists;
        }

        // Sound Handling
        public static DTOSound ToDTO(this Sound sound)
        {
            DTOSound dtoSound = new DTOSound()
            {
                Id = sound.SoundId,
                Name = sound.Name,
                Path = sound.Path
            };
            return dtoSound;
        }

        public static Sound ToEntity(this DTOSound dtoSound)
        {
            Sound sound = new Sound()
            {
                SoundId = dtoSound.Id,
                Name = dtoSound.Name,
                Path = dtoSound.Path
            };
            return sound;
        }

        // Multiple Sounds Handling
        public static ICollection<DTOSound> ToDTO(this ICollection<Sound> sounds)
        {
            ICollection<DTOSound> dtoSounds = new List<DTOSound>();
            foreach(Sound sound in sounds)
            {
                dtoSounds.Add(sound.ToDTO());
            }
            return dtoSounds;
        }

        public static ICollection<Sound> ToEntity(this ICollection<DTOSound> dtoSounds)
        {
            ICollection<Sound> sounds = new List<Sound>();
            foreach (DTOSound dtoSound in dtoSounds)
            {
                sounds.Add(dtoSound.ToEntity());
            }
            return sounds;
        }
    }
}