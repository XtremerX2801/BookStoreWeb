#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rookies.Backend;
using Rookies.Backend.Models;
using Rookies.Shared.Dto.Rating;

namespace Rookies.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public RatingsController(
            ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Ratings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductRating>>> GetRatings()
        {
            return await _context.ProductRatings.ToListAsync();
        }

        // GET: api/Books/get-rating/1
        [HttpGet("get-rating/{BookId}")]
        public ActionResult<List<RatingDto>> GetProductByName(int bookId)
        {
            var rating = GetRatingById(bookId);
            var ratingDto = _mapper.Map<List<RatingDto>>(rating);

            return Ok(ratingDto);
        }

        // GET: api/Ratings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductRating>> GetRating(int id)
        {
            var rating = await _context.ProductRatings.FindAsync(id);

            if (rating == null)
            {
                return NotFound();
            }

            return rating;
        }

        // PUT: api/Ratings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRating(int id, ProductRating rating)
        {
            if (id != rating.RatingId)
            {
                return BadRequest();
            }

            _context.Entry(rating).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RatingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ratings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductRating>> PostRating(ProductRating rating)
        {
            _context.ProductRatings.Add(rating);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRating", new { id = rating.RatingId }, rating);
        }

        // DELETE: api/Ratings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRating(int id)
        {
            var rating = await _context.ProductRatings.FindAsync(id);
            if (rating == null)
            {
                return NotFound();
            }

            _context.ProductRatings.Remove(rating);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RatingExists(int id)
        {
            return _context.ProductRatings.Any(e => e.RatingId == id);
        }

        private List<ProductRating> GetRatingById(int BookId)
        {
            var ratings = _context.ProductRatings.Where(p => p.BookId == BookId).ToList();
            return ratings;
        }
    }
}
