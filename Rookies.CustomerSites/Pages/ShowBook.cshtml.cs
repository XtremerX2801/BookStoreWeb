using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Rookies.CustomerSites.Services;
using Rookies.Shared.Dto;
using Rookies.Shared.Dto.Book;

namespace Rookies.CustomerSites.Pages
{
    public class BookSearchModel : PageModel
    {

        private readonly IBookService _bookService;
        private readonly IMapper _mapper;

        public BookSearchModel(IBookService bookService, IMapper mapper)
        {
            _bookService = bookService;
            _mapper = mapper;
        }

        [BindProperty(SupportsGet = true)]
        public string BookName { get; set; }

        [BindProperty(SupportsGet = true)]
        public PagedResponseDto<BookDto> PagedResponseVM { get; set; }

        public async Task OnGet()
        {
            if (BookName == null)
            {
                BookName = "Book";
            }
            var bookDto = await _bookService.GetBookByNameAsync(BookName);
            PagedResponseVM = _mapper.Map<PagedResponseDto<BookDto>>(bookDto);
        }
    }
}
