using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Services
{
    public class RatingService : IRatingService
    {
        public async Task<Rating> GetRatingByIdAsync(int RatingId)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Ratings/{RatingId}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Rating>(json);
        }

        public async Task<List<Rating>> GetRatingsAsync(int bookId)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Ratings/get-rating/{bookId}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Rating>>(json);
        }

        public async Task<HttpResponseMessage> PostRatingAsync(Rating ratingModel)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Ratings";
            var json = await client.PostAsJsonAsync(endPoint, ratingModel);
            return json;
        }

        private Rating NewRating(int id)
        {
            var rating = new Rating();
            rating.BookId = id;
            rating.RatingPoint = 5;

            return rating;
        }
    }
}
