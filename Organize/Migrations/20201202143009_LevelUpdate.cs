using Microsoft.EntityFrameworkCore.Migrations;

namespace Organize.Migrations
{
    public partial class LevelUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LevelCordination",
                table: "Items",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LevelCordination",
                table: "Items");
        }
    }
}
