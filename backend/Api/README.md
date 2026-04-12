# Portfolio API - .NET 10 Web API

A modern ASP.NET Core 10 Web API application with Swagger UI, Entity Framework Core, and PostgreSQL integration. This project is structured with a clean layered architecture using Controllers, Services, Repositories, and Models.

## Project Structure

```
PortfolioApi/
├── Controllers/
│   ├── BlogPostsController.cs      # API endpoints for blog operations
│   └── WeatherForecastController.cs # (Sample controller - can be removed)
├── Models/
│   ├── BlogPost.cs                 # Blog post entity
│   └── Project.cs                  # Project entity (ready to implement)
├── Services/
│   └── BlogPostService.cs           # Business logic layer for blog operations
├── Repositories/
│   └── BlogPostRepository.cs        # Data access layer for blog operations
├── Data/
│   └── PortfolioApiContext.cs       # Entity Framework DbContext for PostgreSQL
├── Properties/
│   └── launchSettings.json          # Application settings
├── appsettings.json                 # Configuration file
├── appsettings.Development.json     # Development-specific configuration
├── Program.cs                       # Application startup and configuration
├── Api.csproj                       # Project file with NuGet dependencies
├── .gitignore                       # Git ignore rules for .NET projects
└── README.md                        # This file
```

## Prerequisites

- **.NET 10 SDK** - Download from [dotnet.microsoft.com](https://dotnet.microsoft.com)
- **PostgreSQL** - Database server (version 12 or higher)
- **VS Code or Visual Studio** - Code editor

## Quick Start

### 1. Environment Setup

#### macOS/Linux with Homebrew
```bash
# Install PostgreSQL if not already installed
brew install postgresql@16
brew services start postgresql@16

# Connect to PostgreSQL and create database
psql -U postgres
CREATE DATABASE "PortfolioDb";
\q
```

#### Windows with PostgreSQL Installer
```
Download and run PostgreSQL installer from https://www.postgresql.org/download/windows/
Make note of your password during installation
```

### 2. Configure Database Connection

Edit `appsettings.json` and update the connection string:

```json
{
  "ConnectionStrings": {
    "PostgresConnection": "Server=localhost;Port=5432;Database=PortfolioDb;Username=postgres;Password=YOUR_PASSWORD_HERE"
  },
  ...
}
```

Replace `YOUR_PASSWORD_HERE` with your PostgreSQL password.

### 3. Restore Dependencies and Build

```bash
# Navigate to the project directory
cd /path/to/PortfolioApi

# Restore NuGet packages
dotnet restore

# Build the project
dotnet build
```

### 4. Create Database Migration

```bash
# Add the initial migration
dotnet ef migrations add InitialCreate

# Apply migration to database
dotnet ef database update
```

If you encounter issues, you may need to install Entity Framework Core CLI:
```bash
dotnet tool install --global dotnet-ef
```

### 5. Run the Application

```bash
dotnet run
```

The API will start at: `https://localhost:5001`

### 6. Access Swagger UI

Open your browser and navigate to:
```
https://localhost:5001/swagger
```

You'll see the interactive Swagger UI with all available endpoints.

## API Endpoints

### Blog Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogposts` | Get all blog posts |
| GET | `/api/blogposts/{id}` | Get a specific blog post |
| POST | `/api/blogposts` | Create a new blog post |
| PUT | `/api/blogposts/{id}` | Update a blog post |
| DELETE | `/api/blogposts/{id}` | Delete a blog post |

### Example Requests

**Create a Blog Post:**
```bash
curl -X POST https://localhost:5001/api/blogposts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post",
    "author": "Your Name"
  }'
```

**Get All Blog Posts:**
```bash
curl https://localhost:5001/api/blogposts \
  -H "Accept: application/json"
```

## Architecture Overview

### Layered Architecture

```
API Request → Controllers → Services → Repositories → Database
                                      ↓
                            Entity Framework Core
                                      ↓
                            PostgreSQL Database
```

### Components

1. **Controllers** - Handle HTTP requests and responses
2. **Services** - Contain business logic and validation
3. **Repositories** - Manage data access and CRUD operations
4. **Models/Entities** - Define data structures
5. **DbContext** - Entity Framework Core context for database operations

## Adding New Features

### Add a New Entity

1. Create a model in `Models/YourEntity.cs`:
```csharp
namespace Api.Models
{
    public class YourEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // Add your properties
    }
}
```

2. Add DbSet to `Data/PortfolioApiContext.cs`:
```csharp
public DbSet<YourEntity> YourEntities { get; set; }
```

3. Create a repository in `Repositories/YourEntityRepository.cs`

4. Create a service in `Services/YourEntityService.cs`

5. Create a controller in `Controllers/YourEntitiesController.cs`

6. Create database migration:
```bash
dotnet ef migrations add Add[YourEntity]
dotnet ef database update
```

## NuGet Packages

The project includes the following key packages:

- **Npgsql.EntityFrameworkCore.PostgreSQL** - PostgreSQL provider for EF Core
- **Microsoft.EntityFrameworkCore.Tools** - EF Core migration tools
- **Swashbuckle.AspNetCore** - Swagger UI and OpenAPI support
- **Microsoft.AspNetCore.App** - ASP.NET Core runtime libraries

## Troubleshooting

### Connection String Issues
- Verify PostgreSQL is running: `psql -U postgres`
- Check username and password in `appsettings.json`
- Ensure database `PortfolioDb` exists

### Migration Issues
```bash
# Reset migrations if needed
dotnet ef database drop
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Build Errors
```bash
# Clean and rebuild
dotnet clean
dotnet restore
dotnet build
```

### Port Already in Use
If port 5001 is already in use, update `launchSettings.json`:
```json
"https": {
  "commandName": "Project",
  "dotnetRunMessages": true,
  "launchBrowser": false,
  "applicationUrl": "https://localhost:YOUR_PORT",
  "environmentVariables": {
    "ASPNETCORE_ENVIRONMENT": "Development"
  }
}
```

## Development Workflow

1. Create/modify entity models in `Models/`
2. Create corresponding repository in `Repositories/`
3. Create business logic service in `Services/`
4. Create API controller in `Controllers/`
5. Create database migration: `dotnet ef migrations add [Description]`
6. Update database: `dotnet ef database update`
7. Test endpoints in Swagger UI

## Security Considerations

- Never commit `appsettings.json` with real credentials to version control
- Use environment variables for sensitive data in production
- Implement authentication/authorization as needed
- Validate and sanitize user input
- Use HTTPS in production

## Useful Commands

```bash
# List all migrations
dotnet ef migrations list

# Remove last migration
dotnet ef migrations remove

# See database schema
dotnet ef migrations script

# Watch mode for development
dotnet watch

# Run tests (when tests are added)
dotnet test

# Publish for production
dotnet publish -c Release
```

## Next Steps

1. Update `appsettings.json` with your PostgreSQL database connection
2. Implement migrations for your entities
3. Add your own models, services, and repositories
4. Build out your API endpoints
5. Add authentication/authorization as needed
6. Add unit tests and integration tests

## Resources

- [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core/)
- [Entity Framework Core Documentation](https://docs.microsoft.com/en-us/ef/core/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Swagger/OpenAPI Documentation](https://swagger.io/)

## License

This project is open source and available under the MIT License.
