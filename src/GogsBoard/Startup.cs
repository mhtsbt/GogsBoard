﻿using GogsBoard.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GogsBoard
{
    public class Startup
    {
        public IConfigurationRoot _configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
         .SetBasePath(env.ContentRootPath)
         .AddJsonFile($"config.json", optional: true)
         .AddEnvironmentVariables();

            _configuration = builder.Build();

        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();     
            services.Configure<GogsBoardOptions>(_configuration);
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");
            });

            // required to let angular take over all the routes
            //app.Use(async (context, next) =>
            //{
            //    await next.Invoke();

            //    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
            //    {
            //        context.Request.Path = "/index.html";
            //        await next.Invoke();
            //    }

            //});


        }
    }
}
