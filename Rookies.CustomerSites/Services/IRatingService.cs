using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Services
{
    public interface IRatingService
    {
        Task<Rating> GetRatingByIdAsync(int RatingId);

        Task<List<Rating>> GetRatingsAsync(int bookId);

        Task<HttpResponseMessage> PostRatingAsync(Rating ratingModel);
    }
}
