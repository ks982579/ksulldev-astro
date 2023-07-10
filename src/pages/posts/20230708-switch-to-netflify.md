---
layout: '@layouts/BlogLayout.astro'
title: 'New Website with Netlify'
pubDate: 2023-07-08
description: 'Quick blog about creating a new website on the Netlify platform.'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "netlify", "lfs", "large media"]
draft: false
---

## Introduction

I am not sure if the switch to Netlify comes as a surprise, but as I set up this new site I wanted to blog out a few things like why did I stop blogging for a minute? Why am I creating a new site with Netlify? Why choose Netlify? And what will happen to my old site on HostGator?

## Why the Blog Pause?

The last blog I officially wrote on the HostGator site was on 31 December, 2022. It was a nice overview of what I accomplished in 2022 and an ambiguous look forward into 2023. However, I had been wanting to match my career with a degree and in January 2023  I was accepted into the fully remote, online based MSc in Computer Science through [International University of Applied Sciences](https://www.iu.org/). They are accredited through the German Accreditation Council and can provide an official Europass Diploma Supplement to be recognized throughout Europe. I believe the Computer Science degree also qualifies as a dual degree through a university in London. 

So, long story short, I stopped blogging to focus on the master's degree. However, it was mostly due to the amount of work that a blog took, which is also why I am moving my website from HostGator to Netlify. I have it set up so that I can write blogs in MarkDown, allowing for code snippets as well. This should make blogging much easier. 
 
## Why Create a New Website with Netlify?

The HostGator platform is good for PHP developers and those that want a bit more control with their Apache web server. However, it is also quite expensive, having to basically rent room on a shared server, buy a domain name, and the very important SSL certificate. Being on a shared server as well also restricts a lot of things that you can do. 

HostGator is a pretty good platform if you are launching a website that you intend to have many users active on, and interacting with different web pages. They also allow you to have a MySQL database for your website, which you can then interact with using PHP. For my personal website, hosting blogs and links to projects, I was paying for way too many features that I wasn't using. I also wanted to use the Astro framework after reading about it and watching some YouTube tutorials because it is designed for websites providing content, like this one. 

## Why Choose Netlify?

I wish I had a better answer than this, but it was suggested by the Astro framework and was incredibly easy to set up. In fact, the main website updates automatically when I push changes to the main branch of my GitHub repository. This is a much easier solution than using FileZilla to update my HostGator website. I also get to commit changes, showing activity on my GitHub account as well. There are other options, but after using Netlify for a little while (besides working with large media files), the process has been very easy to update the website. Additionally, they provide a free SSL certificate, making it that much easier to host a website. 

## What About that Old Site on HostGator?

So, the old HostGator site is going to be deprecated. I'll probably also release the domain name of KSullDev.space, for anyone else that wants it. Looking back, I don't think it was the greatest name anyway. I believe the plan is up in September of 2023, so it'll stay up until then I suppose. But I don't intend on keeping it up after that. 

## Large Media Files

One pain point about using Netlify was uploading images. And this was probably 75% me working with a new platform and framework and not understanding the process, and 25% lack of proper documentation. I can back that up with the fact there are no shortage of reported issues on the Netlify forum about using their Large Media service. Long story short, I was following the [Astro Docs](https://docs.astro.build/en/guides/images/) for where to put my images because I wanted to follow _best practices_. I saw a section about putting them (images) in `src/assets/` and thought that makes sense. Images stored in the `src/` directory are available for apps, but not for markdown files, which was okay for me. Storing images in the `public/` directory is actually the correct choice in this situation, although files served from this directory are no _pre-processed_. What does this mean? Do resize your image. I read on Google, sorry I lost the source, but 800px width for a website image should be more than plenty, and should keep the file under 1MB.

At first I tried to push the image directly to GitHub, but when the site deployed it couldn't find the image. Then, I found [this tutorial](https://docs.netlify.com/large-media/overview/) where Netlify explains how you must/should/can use [Git Large-File_Storage](https://git-lfs.github.com/) to upload files directly to their media server. However, you will also need to follow [these docs](https://docs.netlify.com/cli/get-started/) to download the Netlify CLI. If you are crazy like me and refuse to install packages globally as the instructions suggest, check that a `netlify` symbolic link was added to the `node_modules/.bin/` directory. If yes, make sure you add the command in your `package.json` file to run CLI commands:

```json
"scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "netlify": "netlify"
},
```

Following the [Netlify Setup Guide](https://docs.netlify.com/large-media/setup/), you then must tell Git which files to track with Git LFS. Basically, Git will store pointers to these files in the repository, and upload the files themselves to the Netlify Large Media storage service. Following [.gitignore format](https://git-scm.com/docs/gitignore#_pattern_format), I will store everything in my "assets" directory with `git lsf track "src/assets/**"`.

Helpful hints from Netlify:
+ List files being tracked: `git lfs ls-files`
+ Track files: `git lfs track "public/images/**"`
+ Check things are working correctly: `npm run netlify lm:info`
+ If you have errors, read Netlify's "troublshooting LM config" link below.

And here is where 💩 hit the fan. Warning: **do not run**  `git lfs migrate import --everything`. I accidently did this an ended up losing the feature branch I was working on. In fact, the repository was so messed up unable to push and pull, I had to clone a new one and move my work over. To mess around and redo lost work, just to get back to where I was, cost me about a Saturday of work. Searching through the endless issues on Netlify about Large Media file storage, I think I found these two to be the most beneficial:
+ [Netlify - Problem Getting LM to work](https://answers.netlify.com/t/problem-getting-netlify-large-media-to-work/18197/6)
+ [Netlify - troubleshooting LM config](https://answers.netlify.com/t/support-guide-troubleshooting-your-netlify-large-media-configuration/188)

Even after I sorted out all of the issues, because my image was stored in the `src/` directory and not `public/`, they weren't included in the _build_ process and therefore not sent to Netlify's Large Media file storage. I didn't find a blog or thread that specifically says where to save the images, but in the "Problem Getting LM to work" link above, the support engineer tries to explain that files won't appear in Netlify's _Large Media_ section if they are not included in the build process. Couple that with the [Astro Docs](https://docs.astro.build/en/guides/imports/) about imports and I figured out why Netlify wasn't taking the images. If you read somehing about adding an environment variable `GIT_LFS_ENABLED=1` in one of the solutions, I believe it is for using a different Git lfs solution other than Netlify's. Either way, I tried it out and got this error:

```shell
11:09:41  AM:  Configured  environment  variable  GIT_LFS_ENABLED=true  conflicts  with  Netlify  Large  Media.
```

To conclude this rant with some helpful instructions:
+ Save you images in the `public/` directory of your Astro project. I created a `public/images/`.
+ Try to not commit images before setting up tracking with `git lfs track <file-or-directory>`.
+ Resize images before storing.

## Maths LaTeX or KaTeX

Before I wrap things up, I do want to also mention that writing notes, both programming and math equations, is super easy in MarkDown. It does take a little extra work to get the MarkDown formatting through Astro and Netlify to support LaTeX. I found This blog, ["Astro Math KaTeX"](https://ileumas.com/writing/2022/03/astro-math-katex/), which I am currently refering to for my MarkDown support. There is also [this blog](https://www.readonlychild.com/blog/math-latex/), which doesn't require links in the HTML it looks like. I might also try it out later. However, the first blog works alright, as you can see I have posted many math notes to this site already.

## Final Thoughts

In closing, I want to express my sincere gratitude to all those who took the time to read this blog. I hope that the insights shared about my transition to Netlify and the reasons behind it have provided some valuable information. The decision to pause my blogging journey was driven by my pursuit of a master's degree in Computer Science, which required my full attention and dedication. Additionally, the switch from HostGator to Netlify was motivated by the need for a more cost-effective and flexible hosting solution tailored to my specific requirements.

Netlify emerged as the ideal choice due to its seamless integration with the Astro framework and its ease of use. The automatic deployment of changes pushed to my GitHub repository and the inclusion of a free SSL certificate were significant advantages. While there were challenges along the way, particularly with handling large media files, the resources provided by Netlify's documentation and the support from the community helped me navigate through them.

As for my old HostGator site, it will eventually be deprecated, and I plan to release the domain name. Looking ahead, I am excited to continue sharing my programming and math notes through this new website, leveraging the power of Markdown and supporting tools like KaTeX for mathematical equations. It is my hope that this platform will serve as a valuable resource for those seeking insights and knowledge in the realm of computer science and related subjects.

Once again, thank you for accompanying me on this journey, and I appreciate your support and readership. I look forward to continuing this blogging adventure with you.
