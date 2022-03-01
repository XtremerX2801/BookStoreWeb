using Microsoft.AspNetCore.Mvc;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.ViewComponents
{
    public class BookSearchViewComponent : ViewComponent
    {
        private readonly IBookService _booksService;
        public BookSearchViewComponent(IBookService booksService)
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
