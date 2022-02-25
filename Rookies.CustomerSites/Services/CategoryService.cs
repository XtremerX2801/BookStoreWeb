using Newtonsoft.Json;
using Rookies.CustomerSites.Models;

namespace Rookies.CustomerSites.Services
{
    public class CategoryService: ICategoryService
    {
        public async Task<List<Category>> GetCategoriesAsync()
        {
            using var client = new HttpClient();
            var endPoint = "https://localhost:7115/api/Categories";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Category>>(json);
        }
        public async Task<Category> GetCategoryAsync(int id)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Categories/{id}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Category>(json);
        }
    }
}
