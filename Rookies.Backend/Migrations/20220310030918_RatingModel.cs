using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rookies.Backend.Migrations
{
    public partial class RatingModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Publisher",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "UserAddress",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "BookPrice",
                table: "Books",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "BookPrice",
                table: "Books",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Publisher",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserAddress",
                table: "AspNetUsers",
                type: "nvarchar(400)",
                maxLength: 400,
                nullable: false,
                defaultValue: "");
        }
    }
}
