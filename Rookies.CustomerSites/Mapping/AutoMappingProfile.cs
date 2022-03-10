using AutoMapper;
using Rookies.CustomerSites.ViewModel;
using Rookies.Shared.Dto.Category;
using Rookies.Shared.Dto.Book;
using Rookies.Shared.Dto.Rating;
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
                CreateMap<BaseQueryCriteriaVM, BaseQueryCriteriaDto>();
                CreateMap< PagedResponseVM<List<Book>> , PagedResponseDto<List<Book>>>();
                CreateMap<Category, CategoryDto>();
                CreateMap<Rating, RatingDto>();
            }
        }
    }
}
