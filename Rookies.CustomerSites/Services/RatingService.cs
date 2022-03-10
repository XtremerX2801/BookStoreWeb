using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Services
{
    public class RatingService : IRatingService
    {
        public async Task<List<Rating>> GetRatingsAsync(int bookId)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Ratings/get-rating/{bookId}";
            var json = await client.GetStringAsync(endPoint);
            return JsonConvert.DeserializeObject<List<Rating>>(json);
        }

        public async void PostRatingAsync(int bookId)
        {
            using var client = new HttpClient();
            var endPoint = $"https://localhost:7115/api/Ratings";
            var json = await client.PostAsJsonAsync(endPoint, NewRating(bookId));
            //return JsonConvert.DeserializeObject<Rating>(json);
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
