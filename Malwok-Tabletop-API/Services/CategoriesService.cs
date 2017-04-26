using Malwok_Tabletop_API.Context;
using Malwok_Tabletop_API.Migrations;
using Malwok_Tabletop_API.Models;
using Malwok_Tabletop_API.Models.DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Data.Entity.Migrations.Model;
using System.Data.Entity.Migrations.Sql;
using System.Data.Entity.SqlServer;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;

namespace Malwok_Tabletop_API.Services
{
    public static class CategoriesService
    {
        public static IEnumerable<DTOCategory> GetAllCategories()
        {
            List<Category> list = new List<Category>();
            List<DTOCategory> listToReturn = new List<DTOCategory>();
            using (var context = new MalwokAudioContext())
            {
                list = context.Categories.Include("Playlists").Include("Playlists.Sounds").ToList();
                foreach (var category in list)
                {
                    listToReturn.Add(category.ToDTO());
                }
            }
            return listToReturn;
        }

        public static bool ReinitBDD()
        {
            using (var context = new MalwokAudioContext())
            {
                try
                {
                    context.Database.ExecuteSqlCommand("DELETE FROM Sounds");
                    context.SaveChanges();
                    context.Database.ExecuteSqlCommand("DELETE FROM Playlists");
                    context.SaveChanges();
                    context.Database.ExecuteSqlCommand("DELETE FROM Categories");
                    context.SaveChanges();
                }catch (Exception e)
                {
                    Console.WriteLine("toto");
                }
            }
            InitCategories();
            return true;
        }

        public static bool InitCategories()
        {
            try
            {
                List<string> categoriesPaths = new List<string>(Directory.EnumerateDirectories(AppDomain.CurrentDomain.BaseDirectory + "..\\Resources"));
                using (var context = new MalwokAudioContext())
                {
                    // Nettoyage de la BDD
                    /*context.SaveChanges();
*/
                    foreach (string categoryPath in categoriesPaths)
                    {
                        // context create categories;
                        string categoryName = new DirectoryInfo(categoryPath).Name;
                        //string categoryName = Path.GetDirectoryName(categoryPath);
                        Category category = new Category() { Name = categoryName };
                        context.Categories.Add(category);
                        context.SaveChanges();
                        int categoryId = category.CategoryId;
                        List<string> playlistsPaths = new List<string>(Directory.EnumerateDirectories(categoryPath));
                        foreach (string playlistPath in playlistsPaths)
                        {
                            // context create playlists;
                            string playlistName = new DirectoryInfo(playlistPath).Name;
                            //string playlistName = Path.GetDirectoryName(playlistPath);
                            Playlist playlist = new Playlist() { CategoryId = categoryId, Name = playlistName };
                            context.Playlists.Add(playlist);
                            context.SaveChanges();
                            int playlistId = playlist.PlaylistId;
                            List<string> soundsPaths = new List<string>(Directory.GetFiles(playlistPath));
                            foreach (string soundpath in soundsPaths)
                            {
                                // context create sounds;
                                string soundName = new DirectoryInfo(soundpath).Name;
                                //string soundName = Path.GetFileName(soundpath);
                                Sound sound = new Sound() { Name = soundName, PlaylistId = playlistId, Path = soundpath };
                                context.Sounds.Add(sound);
                                context.SaveChanges();
                                Console.WriteLine(soundpath);
                            }
                        }
                    }

                    Console.WriteLine("test");
                    return true;
                }
            }
            catch (UnauthorizedAccessException UAEx)
            {
                return false;
            }
            catch (PathTooLongException PathEx)
            {
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static void RunMigration(this DbContext context, DbMigration migration)
        {
            var prop = migration.GetType().GetProperty("Operations", BindingFlags.NonPublic | BindingFlags.Instance);
            if (prop != null)
            {
                IEnumerable<MigrationOperation> operations = prop.GetValue(migration) as IEnumerable<MigrationOperation>;
                var generator = new SqlServerMigrationSqlGenerator();
                var statements = generator.Generate(operations, "2008");
                foreach (MigrationStatement item in statements)
                    context.Database.ExecuteSqlCommand(item.Sql);
            }
        }
    }
}
