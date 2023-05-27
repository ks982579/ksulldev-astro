---
layout: '@layouts/BlogLayout.astro'
title: 'My First Blog Post...'
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

Layouts must go in the `src/layouts/` directory. You create it like you do a component, but probably more boilerplate HTML code. Then you can import it into other files and use it like a component, props and all. 

If you go for the full webpage template, which I would encourage, to dynamically insert other components you must use the `<slot />` element. 

Here's what I have in `src/layouts/Layout.astro` at the moment...
```astro
---
import Header from '@components/Header.astro';
import Footer from '@components/Footer.astro';
import '@styles/global.scss';

export interface Props {
	title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body>
    <Header />
    <h1>Kevin's Astro Site!</h1>
    <slot />
    <Footer />
    <script>
      import "@scripts/menu";
    </script>
  </body>
</html>
```

Then, you can import and use just like...
```astro
---
import Layout from '../layouts/Layout.astro';
import Card from '../components/Card.astro';
---

<Layout title="Kev's Blogs...">
  <main>
    <h2>Blogs by Kevin...</h2>
        <p>This is where I will post about my journey learning Astro.</p>
        <Card
            href="/posts/20230525-first-astro-blog/"
            title="First Blog"
            body="Kevin's' First Astro Blog"
        />
	</main>
</Layout>
```

You can also pop a layout into a _MarkDown_ file through the frontmatter, which is very nice. Here's what I have going on in this blog post:

```md
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
```

I've prepped the import with an _alias_ (discussed above). But wait, how do we send props in? The `Astro.props` object also has a `frontmatter` attribute that holds the keys in the Markdown frontmatter. This means with sly of the hand:

`@layouts/BlogLayout.astro`
```astro
---
import Layout from '@layouts/Layout.astro';

const { title } = Astro.props.frontmatter;
---

<Layout title={title}>
    <slot />
</Layout>
```

Maybe something else would be more suitable as I think about it, but you get the jist. 

### Formatting Blog Page

This does not necessarily require an _alias_, but I (personally) do not like relative imports. 

---