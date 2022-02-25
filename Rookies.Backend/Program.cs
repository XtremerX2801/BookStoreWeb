﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Rookies.Backend;
using Rookies.Backend.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionString = builder.Configuration.GetConnectionString("AppDb");
builder.Services.AddDbContext<ApplicationDbContext>(x => x.UseSqlServer(connectionString));

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddSwaggerGen();

// Register Identity
//builder.Services.AddIdentity<User, IdentityRole>()
//    .AddEntityFrameworkStores<ApplicationDbContext>()
//    .AddDefaultTokenProviders();

builder.Services.AddDefaultIdentity<User>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options => 
{
    options.Password.RequireUppercase = false; // No need uppercase letter
    options.Password.RequireNonAlphanumeric = false; // No need special character
    options.Password.RequiredLength = 8; // Minimum password length is 8

    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5); // Lock 5 minutes
    options.Lockout.MaxFailedAccessAttempts = 5; // Lock after 5 failed attempts
    options.Lockout.AllowedForNewUsers = true; // Apply lock rules for new user too

    options.User.RequireUniqueEmail = true; // 1 Email only for 1 User
    options.SignIn.RequireConfirmedEmail = true; // Need to verify email
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
