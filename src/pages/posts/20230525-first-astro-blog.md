---
layout: '@layouts/Layout.astro'
title: 'My First Blog Post'
pubDate: 2023-05-25
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
---
# My First Blog Post

Published on: 2023-05-25

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## Notes

Just going over the Astro tutorial, and the information at the top of the markdown file is called the **frontmatter**, which is inside the **code fences**. 

```python
from django.urls import path
from app import views

urlpatterns = [
    path("/", views.TestView.as_view(), name="testing"),
]
```

The code looks nice but could use a bit of padding and maybe a copy button.

### JavaScript

You can put JavaScript in the frontmatter at the top of a page and access values in the webiste
through the curly-braces, kind of like JSX.

The syntax for using JavaScript within a page are to just wrap it in curly-braces.
You can incorporate HTML elements just like in JSX.
But don't go crazy, I think you are only allowed JavaScript logical operators, expressions, and functions.

### CSS

You can use JavaScript to create variables for CSS, which is neat. 
It requires defining the variable in the `<style define:vars={{varName}}>` tag, called a directive. And you reference in CSS like `var(--varName)`.

You can also create a global CSS file in `src/syles/global.css` and import in the _frontmatter_ like you would import it in React, mostly. Global styles are applied on top of the in-page tag.

### Aliasing

Astro seems to prefer relative referencing. However, since files can move, I feel that absolute referencing is more secure. Per the [Astro Docs](https://docs.astro.build/en/guides/aliases/), add aliases to the `tsconfig.json` or `jsconfig.json` file like:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

The `baseULR` needs to be set so the aliased paths can be resolved. 

### Components

Code duplication is bad, which makes components good. Components will live in the `src/components/` directory and should start with an uppercase. 

Personally, since components are going to be imported, I would alias the components directory in the project. 

Astro components can be thought of like fragments of HTML. Unlike React, it seems that all of the context within a component is exported by default. Similar to React, you import and used components a bit like an HTML element. Also, in its own different way, Astro passes in props to components that can be destructured in the frontmatter by calling `Astro.props`. 

### Script Tags

Adding script tags is another way to inject JavaScript into an application. However, we will opt to place JavaScript files in `src/scripts/` and import them in the `<script>` tags. 

Client-side JavaScript will be sent to the user's browser when it is written or imported in the `<script>` tags.

### Layouts

[Section 4 of tutorial](https://docs.astro.build/en/tutorial/4-layouts/)

### Formatting Blog Page

This does not necessarily require an _alias_, but I (personally) do not like relative imports. 

---