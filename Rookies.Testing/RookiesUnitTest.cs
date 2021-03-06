using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Rookies.Backend;
using Rookies.Backend.Controllers;
using Rookies.Backend.Models;
using Rookies.Shared.Dto.Book;
using Xunit;
using static Rookies.Backend.Mapping.AutoMappingProfile;
using Rookies.Testing.Mock;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Rookies.Testing
{
    public class RookiesUnitTest
    {
        private readonly IMapper _mapper;

        public RookiesUnitTest()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new AutoMapperProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetBookById_CheckBookInfo_ReturnBookAsync()
        {
            var bookModel = new Book
            {
                BookId = 2,
                BookName = "English Grammar in Use",
                Author = "Raymond Murphy",
                BookCategory = "Education",
                BookPrice = 12,
                BookImg = "https://freepngimg.com/download/book/21793-5-book-icon.png"
            };

            var bookId = 2;
            var productDbContext = new MockDBContext();
            var dbcontext = await productDbContext.GetDatabaseContext();
            var productController = new BooksController(dbcontext, _mapper);

            var productResult = await productController.GetBook(bookId) as ObjectResult;

            var result = productResult.Value;
            var returnValue = Assert.IsType<BookDto>(result);

            Assert.Equal(bookModel.BookName, returnValue.BookName);

            Assert.Equal(bookModel.Author, returnValue.Author);
        }

    }
}