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
        public static ApplicationDbContext GetDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            var databaseContext = new ApplicationDbContext(options);
            databaseContext.Database.EnsureCreated();
            return databaseContext;
        }
    }
}
