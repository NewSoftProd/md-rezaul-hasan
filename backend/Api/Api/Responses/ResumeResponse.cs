using Api.Models;

namespace Api.Response;


    public class ResumeResponse
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public Contact Contact { get; set; }
        public List<Experience> Experience { get; set; }
        public List<Education> Education { get; set; }
        public List<Project> Projects { get; set; }
        public List<string> Skills { get; set; }
    }

    public class Contact
    {
        public string Email { get; set; }
        public string Location { get; set; }
        public string Website { get; set; }
    }


