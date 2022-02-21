using Microsoft.EntityFrameworkCore;

namespace Rookies.Backend
{
    public class BookDbContext : DbContext
    {

        public BookDbContext()
        {

        }

        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configure = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsetting.json")
                .Build();

            var connectionString = configure.GetConnectionString("AppDb");
        
            optionsBuilder.UseSqlServer(connectionString);
        
        }

    }
}
