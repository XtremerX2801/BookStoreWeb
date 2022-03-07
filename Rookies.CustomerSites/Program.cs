using Rookies.CustomerSites.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Rookies.CustomerSites.Data;
using Rookies.CustomerSites.Areas.Identity.Data;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("AuthDbContextConnection");builder.Services.AddDbContext<AuthDbContext>(options =>
    options.UseSqlServer(connectionString));builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<AuthDbContext>();
// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

builder.Services.AddMvc();
builder.Services.AddTransient<IBookService, BookService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

app.UseSwaggerUI();
app.UseSwagger(x => x.SerializeAsV2 = true);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGet("/simp", async (context) =>
    {
        await context.Response.WriteAsync($"Squire In My Pants!");
    });

    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}"
    );

    endpoints.MapControllerRoute(
        name: "privacyDefault",
        pattern: "{controller=Home}/{action=Privacy}"
    );

    endpoints.MapControllerRoute(
        name: "categoryDefault",
        pattern: "{controller=Category}/{action=Index}/{id?}"
    );

    endpoints.MapControllerRoute(
        name: "bookDefault",
        pattern: "{controller=Book}/{action=Index}/{id?}"
    );

    endpoints.MapRazorPages();
});

app.Run();
