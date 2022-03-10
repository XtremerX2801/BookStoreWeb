using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Services
{
    public interface IRatingService
    {
        Task<List<Rating>> GetRatingsAsync(int bookId);

        void PostRatingAsync(int bookId);
    }
}
