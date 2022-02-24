using Rookies.Backend.Models;

namespace Rookies.CustomerSites.Services
{
    public interface IUserService
    {
        Task<List<User>> GetUsersAsync();
        Task<User> GetUserAsync(int id);
    }
}