using Microsoft.AspNetCore.Mvc;
using Rookies.Backend.Controllers;
using Rookies.Backend.Models;
using Rookies.Shared.Dto.Book;
using Xunit;

namespace Rookies.Testing
{
    public class RookiesUnitTest
    {
        private readonly BooksController _controller;

        public RookiesUnitTest(BooksController controller)
        {
            _controller = controller;
        }

        public void GetBookById_CheckBookInfo_ReturnBook()
        {
            var bookModel = new Book
            {
                BookId = 2,
                BookName = "English Grammar in Use",
                Author = "Raymond Murphy",
                BookCategory = "Education",
                BookPrice = 12,
                BookImg = null
            };

            var bookId = 2;

            var productResult = _controller.GetBook(bookId);

            var result = productResult.Result;
            var returnValue = Assert.IsType<BookDto>(result.Value);

            Assert.Equal(bookModel.BookName, returnValue.BookName);

            Assert.Equal(bookModel.Author, returnValue.Author);
        }
    }
}