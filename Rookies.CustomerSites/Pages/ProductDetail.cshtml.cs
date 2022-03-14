using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Rookies.CustomerSites.Services;
using Rookies.CustomerSites.ViewModel;

namespace Rookies.CustomerSites.Pages
{
    public class ProductDetailModel : PageModel
    {

        private readonly IBookService _booksService;
        private readonly IRatingService _ratingService;

        public ProductDetailModel(IBookService bookService, IRatingService ratingService)
        {
            _booksService = bookService;
            _ratingService = ratingService;
        }

        [BindProperty(SupportsGet = true)]
        public int BookId { get; set; }

        [BindProperty(SupportsGet = true)]
        public string BookName { get; set; }

        [BindProperty(SupportsGet = true)]
        public string Author { get; set; }

        [BindProperty(SupportsGet = true)]
        public int BookPrice { get; set; }

        public async Task OnGetAsync(int id, int rating)
        {
            BookId = id;

            var book = await _booksService.GetBookAsync(id);
            BookName = book.BookName;
            Author = book.Author;
            BookPrice = book.BookPrice;

            if (rating != 0) {
                var ratingModel = new Rating
                {
                    RatingPoint = rating,
                    BookId = id
                };
                await _ratingService.PostRatingAsync(ratingModel);
            }
        }
    }
}
