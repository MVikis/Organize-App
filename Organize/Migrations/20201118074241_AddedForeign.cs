using Microsoft.EntityFrameworkCore.Migrations;

namespace Organize.Migrations
{
    public partial class AddedForeign : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item");

            migrationBuilder.AlterColumn<int>(
                name: "ContainerId",
                table: "Item",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "ContainerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item");

            migrationBuilder.AlterColumn<int>(
                name: "ContainerId",
                table: "Item",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Containers_ContainerId",
                table: "Item",
                column: "ContainerId",
                principalTable: "Containers",
                principalColumn: "ContainerId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
