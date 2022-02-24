using Newtonsoft.Json;
using Rookies.Backend.Models;

namespace Rookies.CustomerSites.Services
{
    public class BookService : IBookService
    {
        public async Task<List<Book>> GetBooksAsync()
        {
            using var client = new HttpClient();
            var endPoint = "https://localhost:7115/api/Books";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Book>>(json);
        }
        public async Task<Book> GetBookAsync(int id)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Books/{id}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Book>(json);
        }
    }
}
