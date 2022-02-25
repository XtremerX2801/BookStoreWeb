using Rookies.Backend.Models;

namespace Rookies.CustomerSites.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetBooksAsync();
        Task<Book> GetBookAsync(int id);

        void DeleteBookAsync(int id);
    }
}
