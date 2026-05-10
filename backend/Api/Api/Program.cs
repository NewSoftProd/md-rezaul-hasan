using Api.Data;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using System.Text.Json.Serialization;
using Api.Services;
using Microsoft.OpenApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Database integration
// Get connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DbConnection");

// Add DbContext to DI
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddControllers()    .AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});;
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi(options =>
{
    options.AddSchemaTransformer((schema, context, cancellationToken) =>
    {
        // Only target IFormFile or a list of IFormFiles
        var type = context.JsonTypeInfo.Type;
        
        if (type == typeof(IFormFile) || type == typeof(List<IFormFile>) || type == typeof(IFormFile[]))
        {
            schema.Type = JsonSchemaType.String;
            schema.Format = "binary";
        }
        
        return Task.CompletedTask;
    });
});
builder.Services.AddScoped<IResumeService, ResumeService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();