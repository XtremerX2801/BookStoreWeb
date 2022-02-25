using Microsoft.AspNetCore.Mvc;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.ViewComponents
{
    public class BooksViewComponent : ViewComponent
    {
        private readonly IBookService _booksService;
        public BooksViewComponent(IBookService booksService)
        {
            _booksService = booksService;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var books = await _booksService.GetBooksAsync();
            return View(books);
        }
    }
}
