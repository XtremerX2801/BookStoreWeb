using Microsoft.AspNetCore.Mvc;
using Rookies.CustomerSites.Services;

namespace Rookies.CustomerSites.ViewComponents
{
    public class BookViewComponent : ViewComponent
    {
        private IBookService _bookService;
        public BookViewComponent(IBookService bookService)
        {
            _bookService = bookService;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var books = await _bookService.GetBooksAsync();
            return View(books);
        }
    }
}
