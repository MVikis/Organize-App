using Microsoft.EntityFrameworkCore.Migrations;

namespace Organize.Migrations
{
    public partial class AddedForeign2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Item",
                table: "Item");

            migrationBuilder.RenameTable(
                name: "Item",
                newName: "Items");

            migrationBuilder.RenameIndex(
                name: "IX_Item_ContainerId",
                table: "Items",
                newName: "IX_Items_ContainerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Items",
                table: "Items",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Containers_ContainerId",
                table: "Items",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "ContainerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Containers_ContainerId",
                table: "Items");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Items",
                table: "Items");

            migrationBuilder.RenameTable(
                name: "Items",
                newName: "Item");

            migrationBuilder.RenameIndex(
                name: "IX_Items_ContainerId",
                table: "Item",
                newName: "IX_Item_ContainerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Item",
                table: "Item",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "ContainerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
