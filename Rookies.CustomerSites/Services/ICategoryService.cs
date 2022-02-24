using Rookies.Backend.Models;

namespace Rookies.CustomerSites.Services
{
    public interface ICategoryService
    {
        Task<List<Category>> GetCategoriesAsync();
        Task<Category> GetCategoryAsync(int id);
    }
}
