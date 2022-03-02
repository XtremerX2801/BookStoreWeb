using AutoMapper;
using Rookies.CustomerSites.ViewModel;
using Rookies.Shared.Dto.Category;
using Rookies.Shared.Dto.Book;
using Rookies.Shared.Dto;

namespace Rookies.CustomerSites.Mapping
{
    public class AutoMappingProfile
    {
        public class AutoMapperProfile : Profile
        {
            public AutoMapperProfile()
            {
                CreateMap<Book, BookDto>();
                CreateMap<PagedResponseDto<BookDto>, PagedResponseVM<Book>>();
                CreateMap<Category, CategoryDto>();
            }
        }
    }
}
