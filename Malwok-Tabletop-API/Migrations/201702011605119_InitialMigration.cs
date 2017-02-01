namespace Malwok_Tabletop_API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.CategoryId);
            
            CreateTable(
                "dbo.Playlists",
                c => new
                    {
                        PlaylistId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.PlaylistId)
                .ForeignKey("dbo.Categories", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId);
            
            CreateTable(
                "dbo.Sounds",
                c => new
                    {
                        SoundId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Path = c.String(),
                        PlaylistId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.SoundId)
                .ForeignKey("dbo.Playlists", t => t.PlaylistId, cascadeDelete: true)
                .Index(t => t.PlaylistId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Sounds", "PlaylistId", "dbo.Playlists");
            DropForeignKey("dbo.Playlists", "CategoryId", "dbo.Categories");
            DropIndex("dbo.Sounds", new[] { "PlaylistId" });
            DropIndex("dbo.Playlists", new[] { "CategoryId" });
            DropTable("dbo.Sounds");
            DropTable("dbo.Playlists");
            DropTable("dbo.Categories");
        }
    }
}
