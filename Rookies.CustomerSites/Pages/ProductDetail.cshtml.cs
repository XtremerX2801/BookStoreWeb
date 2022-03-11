using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.Pages
{
    public class ProductDetailModel : PageModel
    {

        private readonly IBookService _booksService;

        public ProductDetailModel(IBookService bookService)
        {
            _booksService = bookService;
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

            // Get rating later
        }
    }
}
