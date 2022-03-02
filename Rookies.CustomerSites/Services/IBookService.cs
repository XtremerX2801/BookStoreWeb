using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetBooksAsync();
        Task<Book> GetBookAsync(int id);
        Task<List<Book>> GetBookByNameAsync(string bookName);
        void DeleteBookAsync(int id);
    }
}
