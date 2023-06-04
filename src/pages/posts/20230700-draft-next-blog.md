---
layout: '@layouts/Layout.astro'
title: 'My Second Blog Post'
pubDate: 2023-05-25
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
draft: true
---
I am not sure if the switch to Netlify comes as a surprise, but as I set up this new site I wanted to blog out a few things like why did I stop blogging? Why am I creating a new site with Netlify? Why choose Netlify? And what will happen to my old site on HostGator?

## Large Media Files

One pain point was uploading images. Netlify cannnot simply read from the GitHub repository. However, following [this tutorial](https://docs.netlify.com/large-media/overview/), Netlify explains how you must use [Git Large-File_Storage](https://git-lfs.github.com/) to upload files directly to their media server. However, you will also need to follow [these docs](https://docs.netlify.com/cli/get-started/) to download the Netlify CLI. If you are crazy like me and refuse to install packages globally as the instructions suggest, check that a `netlify` symbolic link was added to the `node_modules/.bin/` directory. If yes, make sure you add the command in your `package.json` file to run CLI commands:
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

Warning: **do not run** `git lfs migrate import --everything`. I accidently did this an ended up losing the feature branch I was working on. In fact, the repository was so messed up unable to push and pull, I had to clone a new one and move my work over. Not impressed by this image handling solution. 

[Netlify Problem Getting LM to work](https://answers.netlify.com/t/problem-getting-netlify-large-media-to-work/18197/6)
[Netlify trouble shooting LM config](https://answers.netlify.com/t/support-guide-troubleshooting-your-netlify-large-media-configuration/188)

Do resize your image. I read on Google, sorry I lost the source, but 800px width for a website image should be more than plenty, and should keep the file under 1MB. 