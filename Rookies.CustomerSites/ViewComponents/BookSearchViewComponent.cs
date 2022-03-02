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
        public async Task<IViewComponentResult> InvokeAsync(string name)
        {
            var books = await _booksService.GetBookByNameAsync(name);
            return View(books);
        }
    }
}
