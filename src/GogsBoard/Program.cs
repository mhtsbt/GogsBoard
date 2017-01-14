using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace GogsBoard
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseWebRoot(".")
                .UseUrls("http://*:5000")
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
