---
layout: '@layouts/Layout.astro'
title: 'My Second Blog Post'
pubDate: 2023-05-25
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "netlify", "lfs", "large media"]
draft: true
---
I am not sure if the switch to Netlify comes as a surprise, but as I set up this new site I wanted to blog out a few things like why did I stop blogging? Why am I creating a new site with Netlify? Why choose Netlify? And what will happen to my old site on HostGator?

## Large Media Files

One pain point was uploading images. And this was probably 75% me working with a new platform and framework and not understanding the process, and 25% lack of proper documentation. I can back that up with the fact there are no shortage of reported issues on the Netlify forum about using their Large Media service. Long story short, I was following the [Astro Docs](https://docs.astro.build/en/guides/images/) for where to put my images because I wanted to follow _best practices_. I saw a section about putting them (images) in `src/assets/` and thought that makes sense. Images stored in the `src/` directory are available for apps, but not for markdown files, which was okay for me. Storing images in the `public/` directory is actually the correct choice in this situation, although files served from this directory are no _pre-processed_. What does this mean? Do resize your image. I read on Google, sorry I lost the source, but 800px width for a website image should be more than plenty, and should keep the file under 1MB. 

At first I tried to push the image directly to GitHub, but when the site deployed it couldn't find the image. Then, I found [this tutorial](https://docs.netlify.com/large-media/overview/) where Netlify explains how you must/should/can use [Git Large-File_Storage](https://git-lfs.github.com/) to upload files directly to their media server. However, you will also need to follow [these docs](https://docs.netlify.com/cli/get-started/) to download the Netlify CLI. If you are crazy like me and refuse to install packages globally as the instructions suggest, check that a `netlify` symbolic link was added to the `node_modules/.bin/` directory. If yes, make sure you add the command in your `package.json` file to run CLI commands:
```JSON
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

And here is where 💩 hit the fan. Warning: **do not run** `git lfs migrate import --everything`. I accidently did this an ended up losing the feature branch I was working on. In fact, the repository was so messed up unable to push and pull, I had to clone a new one and move my work over. To mess around and redo lost work, just to get back to where I was, cost me about a Saturday of work. Searching through the endless issues on Netlify about Large Media file storage, I think I found these two to be the most beneficial:

+ [Netlify - Problem Getting LM to work](https://answers.netlify.com/t/problem-getting-netlify-large-media-to-work/18197/6)
+ [Netlify - troubleshooting LM config](https://answers.netlify.com/t/support-guide-troubleshooting-your-netlify-large-media-configuration/188)

Even after I sorted out all of the issues, because my image was stored in the `src/` directory and not `public/`, they weren't included in the _build_ process and therefore not sent to Netlify's Large Media file storage. I didn't find a blog or thread that specifically says where to save the images, but in the "Problem Getting LM to work" link above, the support engineer tries to explain that files won't appear in Netlify's _Large Media_ section if they are not included in the build process. Couple that with the [Astro Docs](https://docs.astro.build/en/guides/imports/) about imports and I figured out why Netlify wasn't taking the images. If you read somehing about adding an environment variable `GIT_LFS_ENABLED=1` in one of the solutions, I believe it is for using a different Git lfs solution other than Netlify's. Either way, I tried it out and got this error:
```shell
11:09:41 AM: Configured environment variable GIT_LFS_ENABLED=true conflicts with Netlify Large Media.
```

To conclude this rant with some helpful instructions:
+ Save you images in the `public/` directory of your Astro project. I created a `public/images/`. 
+ Try to not commit images before setting up tracking with `git lfs track <file-or-directory>`.
+ Resize images before storing. 