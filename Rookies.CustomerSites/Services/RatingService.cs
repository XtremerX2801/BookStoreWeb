using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Rookies.CustomerSites.ViewModel;
using Rookies.Shared.Constants;

namespace Rookies.CustomerSites.Services
{
    public class RatingService : IRatingService
    {
        public async Task<Rating> GetRatingByIdAsync(int RatingId)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.ratingUrl + $"/{RatingId}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<Rating>(json);
        }

        public async Task<List<Rating>> GetRatingsAsync(int bookId)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.ratingUrl + $"/get-rating/{bookId}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Rating>>(json);
        }

        public async Task<HttpResponseMessage> PostRatingAsync(Rating ratingModel)
        {
            using var client = new HttpClient();
            var endPoint = ProjectUrl.ratingUrl;
            var json = await client.PostAsJsonAsync(endPoint, ratingModel);
            return json;
        }
    }
}
