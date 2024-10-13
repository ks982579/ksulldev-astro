---
layout: '@layouts/BlogLayout.astro'
title: 'The RALS Stack - Fullstack Rust'
pubDate: 2024-10-13
description: "I finished my fullstack web project for a university course and want to share my experience, working with different technologies and learning new concepts."
author: 'Kevin Sullivan'
tags: ["blogging", "language", "programming", "web development", "rust", "actix-web", "leptos", "wasm", "docker", "nginx", "certbot"]
draft: false
image:
    url:  https://cdn.pixabay.com/photo/2023/08/02/13/42/ai-generated-8165298_640.jpg
    alt: 'Image of what internet might look like?'
---

## Introduction

Have you heard of the RALS stack? It's the Rust web-development full-stack tech stack with the Rust programming language, Actix-Web framework for the back-end, Leptos for the front-end, and SurrealDB for the database. That is, Rust-Actix-Leptos-SurrealDB! Rust actually has two major frameworks for web development that start with "A", so you can substitute Axum as well. I decided for a university project that I would use this tech stack to build a quiz creating web application ([GitHub.com/ks982579/rust-quiz-web-app](https://github.com/ks982579/rust-quiz-web-app)). At the end of this project I had to write a 2 page paper for the "Making Of" or "Lessons Learned" of the project; and let me tell you, 2 pages is not enough room to explain everything that went wrong over the past 6 months. 

Let's begin...

## The Idea

The goal for this project was to create a web application that students can log into and create quizzes they can use to study and practice answering questions. My academic goal was to use this project to learn the Rust programming language. Both goals were realized and completed. The website is [KevsQuizAppIU.com](https://kevsquizappiu.com/) and the Github repo is [GitHub.com/ks982579/rust-quiz-web-app](https://github.com/ks982579/rust-quiz-web-app). Just as a word of caution, the website is hosted in a DigitalOcean droplet, which costs a bit of money every month. That said, if the link doesn't work, I apologise but I may have taken it down. 

## The Process

I followed the Scrum Agile methodology with two week sprints, complete with Scrum rituals. For stand-up, I just had a markdown document I would write what I did yesterday, planned on doing that day, and any blockers. I also took time to do sprint planning during the beginning of the sprint along with a backlog refinement session, and wrapped up sprint with a sprint review and retrospective. This was a lot of work for a solo project, but tracking my progress and other details really helped me when writing the report for the course, and this blog. 

The first two sprints were really just trying to program my way through "Zero to Production in Rust", a book by Luca Palmieri. I read the entire book and programmed my way through 10 or 11 chapters, the [github repo can be found here](https://github.com/ks982579/rust-zero2prod). Overall, a great book that helped me understand Actix-Web, how logging should be done, and introduced me to DigitalOcean. The third sprint I spent on a wonderful honeymoon with my Wife.

The fourth sprint was all about setting up the project. This can be the most daunting and yet most fun part of a project in my opinion. It mostly involved setting up the Docker containers in a network to connect the frontend, backend, and database, and then instantiating the project in a Rust workspace.

Most of the rest of the sprints, which I believe there were 10 in total, involved building an API in Actix-Web, building the corresponding UI in Leptos, and learning new concepts and techniques along the way. 

I made it a point to do a few extra things during the project as a learning experience. The first was to create a struct with the builder design pattern. The pattern helps rustaceans overcome Rust's inability to allow for default values in methods and functions, or overloaded functions. It goes like, build a struct, in my case it was called `Fetcher` for making HTTP requests. When you initialize the struct, that function will return the `FetchBuilder` struct with all default attributes, and you chain together methods to set values, calling the `.build()` method at the very end to convert the builder struct into the original data structure. 

The other things I did as a learning experience were use a cargo workspace, which was kind of necessary anyway, and build procedural derive macro. Of course there are other types of macros to build in Rust, so there's still more to learn, but understanding token streams is the main concept. The macro I built would duplicate a struct used to interact with the SurrealDB instance and add the additional `id` field to it. This would allow me to send data to the database with one struct, and then catch the data stored with its ID as a response without having tons of boilerplate code.

## Issues Along the Way

The first issue was either time or knowledge. Given more of one, I could have compensated for the other. But basically, I was always behind schedule. Everything I had to do required a bit of research, digging through documentation, and trial and error. The "Zero to Production in Rust" book helped my understanding of Rust as a backend, but I had to learn Leptos and WASM during development, which is obviously less than ideal. 

Actix-Web is considered a micro framework, and far from something you'd call batteries included. As such, I ran into problems when I had to set headers, but learned a lot more about CORS than before. I also learned that Leptos didn't have a `fetch()` function to make requests, which I thought was weird. I tried to use a crate called "reqwest" but ended up with a circular dependency reference that prevented the project from compiling. I ended up having to fight my way through creating a lower level fetch with the "wasm-bindgen" crate.

I also had a great idea to try and share the common structs used to interact with the SurrealDB database between the frontend and backend. However, I soon realized that trying to use the SurrealDB `Thing` struct in the frontend was causing issue. Long story short, SurrealDB cannot compile to a WASM target, or it couldn't when I was working with it. This meant I had a bit of duplicated code with similar structs in the frontend and backend. 

There were also two huge issues right before I was going to submit the project. The first was that the domain I purchased was taken offline. This was entirely my fault as I had a typo in the email address I provided to [HostingIreland.ie](https://www.hostingireland.ie/). Luckily the team there was very quick and supportive at getting the domain back online. The other issue was with the `Cargo.lock` file. The `.gitignore` suggested not pushing that to the git repo, so it couldn't  be pulled into my DigitalOcean droplet for deployment. Well, at some point just before I submitted the project, one of the dependencies decided to break my compilation process. It was a heart sinking moment when I couldn't get the deployment to work. Luckily I had the `Cargo.lock` file locally, which I pushed to github and using that specific set of dependencies worked. I never did figure out what broke where. 

## Final Thoughts

This project taught me an incredible about about the software engineering process, software lifecycle, web development, Rust, Actix-Web, Leptos, WASM, NGINX, Docker, Certbot, and deploying with DigitalOcean droplets. Working with Rust was a bit stressful at times but also a lot of fun and overall a great language to write in. I never had to deal with memory leak issues or null pointer dereferencing errors. Leptos compared to React, Leptos would mostly only compile and run when everything would work as expected. The type system is a blessing. 

But the best part of this project I think was working with SurrealDB. With the Rust SDK, besides a weird permissions issue when creating the Docker container for the first time, I've never had an easier experience working with a database. Out of all the technologies I worked with during this project, SurrealDB created the least friction consistently. Well done, I will definitely consider using this database again in future projects.

So, you might be wondering if I'd recommend using this techstack for other web development projects. For me, with the foundation I have now after working with it for about 20 weeks, I would probably use the same or similar tools again, but only for a serious project that needs safety and performance. If you are building a toy app or a prototype for an idea, I would recommend some Python web framework and a simple frontend like React. And technically, I believe WASM still has a little ways to go before it can claim web dominance entirely, in some cases vanilla JS is better. And Leptos also hasn't hit version 1.0 yet, so it is debatable if you want to launch that in production. But overall, it is a solid techstack, very performant, and always a pleasure to write in Rust.