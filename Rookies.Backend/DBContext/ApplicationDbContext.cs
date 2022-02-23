using Microsoft.EntityFrameworkCore;
using Rookies.Backend.Models;

namespace Rookies.Backend
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Book> Books { get; set; }

    }
}
