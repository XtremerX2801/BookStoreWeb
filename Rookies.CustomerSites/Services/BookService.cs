using Newtonsoft.Json;
using Rookies.CustomerSites.Models;

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
            var endPoint = $"https://localhost:7115/api/Books/id/{id}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Book>(json);
        }

        //public async Task<IList<Book>> GetProductByNameAsync(string productName)
        //{
        //    var url = $"https://localhost:5001/api/Book/{productName}";
        //    return JsonConvert.DeserializeObject<List<Book>>(await JsonResponseByGet(url));
        //}

        //public async Task<string> JsonResponseByGet(string url)
        //{
        //    var jsonResponse = "";
        //    try
        //    {
        //        using var httpClient = new HttpClient();
        //        jsonResponse = await httpClient.GetStringAsync(url);
        //        if (string.IsNullOrEmpty(jsonResponse))
        //        {
        //            throw new Exception("The client product get don't have the data");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception($"At JsonResponseByGet ProductService: {ex.Message}");
        //    }

        //    return jsonResponse;
        //}

        public async void DeleteBookAsync(int id)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Books/{id}";
            await client.DeleteAsync(endPoint);
        }
    }
}
