using AutoMapper;
using Rookies.Backend.Models;
using Rookies.Shared.Dto.Category;
using Rookies.Shared.Dto.Book;
using Rookies.Shared.Dto.Rating;

namespace Rookies.Backend.Mapping
{
    public class AutoMappingProfile
    {
        public class AutoMapperProfile : Profile
        {
            public AutoMapperProfile()
            {
                CreateMap<Book, BookDto>();
                CreateMap<Category, CategoryDto>();
                CreateMap<Rating, RatingDto>();
            }
        }
    }
}
