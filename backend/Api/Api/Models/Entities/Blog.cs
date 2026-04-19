namespace Api.Models;

public class Blog
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string FullContent { get; set; }
    public string Author { get; set; }
    public string Category { get; set; }
    public string ImageUrl { get; set; }
    public string ReadTime { get; set; }
    public string[] Tags { get; set; }
    public DateTime PublishedDate { get; set; }
    public DateTime CreatedAt { get; set; }
    
}
