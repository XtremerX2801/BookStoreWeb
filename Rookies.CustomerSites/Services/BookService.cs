using Newtonsoft.Json;
using Rookies.CustomerSites.ViewModel;
using Rookies.Shared.Dto;
using Rookies.Shared.Constants;

namespace Rookies.CustomerSites.Services
{
    public class BookService : IBookService
    {
        public async Task<List<Book>> GetBooksAsync()
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.bookUrl;
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Book>>(json);
        }
        public async Task<Book> GetBookAsync(int id)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.bookUrl + $"/id/{id}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Book>(json);
        }

        public async Task<List<Book>> GetBookByNameAsync(string bookName)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.bookUrl + $"/{bookName}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Book>>(json);
        }

        public async Task<List<Book>> GetBookByCategoryAsync(string bookCategory)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.bookUrl + $"/category/{bookCategory}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Book>>(json);
        }

        public async void DeleteBookAsync(int id)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.bookUrl + $"/{id}";
            await client.DeleteAsync(endPoint);
        }
    }
}
