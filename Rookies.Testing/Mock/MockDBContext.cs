using Microsoft.EntityFrameworkCore;
using Moq;
using Rookies.Backend;
using Rookies.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rookies.Testing.Mock
{
    internal class MockDBContext : Mock<ApplicationDbContext>
    {
        public async Task<ApplicationDbContext> GetDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "NewDBContext")
                .Options;
            var databaseContext = new ApplicationDbContext(options);
            databaseContext.Database.EnsureCreated();
            if (await databaseContext.Books.CountAsync() <= 0)
            {
                databaseContext.Books.Add(new Book()
                {
                    BookId = 2,
                    BookName = "English Grammar in Use",
                    Author = "Raymond Murphy",
                    BookCategory = "Education",
                    BookPrice = 12,
                    BookImg = "https://freepngimg.com/download/book/21793-5-book-icon.png"
                });
                await databaseContext.SaveChangesAsync();
            }
            return databaseContext;
        }
    }
}
