using AutoMapper;
using Rookies.CustomerSites.Models;
using Rookies.Shared.Dto.Category;
using Rookies.Shared.Dto.Book;

namespace Rookies.CustomerSites.Mapping
{
    public class AutoMappingProfile
    {
        public class AutoMapperProfile : Profile
        {
            public AutoMapperProfile()
            {
                CreateMap<Book, BookDto>();
                CreateMap<Category, CategoryDto>();
            }
        }
    }
}
