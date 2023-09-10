---
layout: '@layouts/NotesLayout.astro'
title: 'Introduction to Data Science'
pubDate: 2023-09-10
description: 'Reading through R texts'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "R"]
---

```yaml
title: Beginning Data Science in R 4
subtitle: Data Analysis, Visualization, and Modelling for the Data Scientist
edition: 2nd
authors: 
	- Thomas Mailund
pulisher: Apress Media, LLC
year: 2022
```

# Beginning Data Science in R 4

> Data Analysis, Visualization, and Modelling for the Data Scientist, 2nd edition

These are just notes from the book. The read is encouraged to read the book in its entirety. 

As a new R programmer, I'll try to keep track of helpful websites:
+ https://r-coder.com/rstudio-themes/
## Ch. 1 - Introduction to R Programming

> pp. 1 - 50

Download R and RStudio.

I downloaded R from [cran.r-project.org](https://cran.r-project.org/bin/windows/base/) and am trying to use in Visual Studio Code with the `REditorSupport` extension. Seems to be OK. 

I think recently RStudio has moved to https://posit.co/. Interestingly, they also seem to be owners of Shiny and Quarto. 

### Basics

You can also find manuals for R on their official website, [cran.r-project.org](https://cran.r-project.org/). 

The book starts with basic calculator like calculations. Numbers in R are all floats, just a default. To get a pure integer, append with the `L` postfix.

```r
class(42)
## [1] "numeric"
class(42L)
## [1] "integer"
```

In many languages, the `%` is the modulus operator, returning the remainder of division. Because the percent-sign has a different meaning in R, use `%%` for the modulus. And integer division is `%/%`. 

```r
6/4
## [1] 1.5
6%%4 
## [1] 2
6%/%4
## [1] 1
```

I was a little confused until I played around, not remembering definitions. Hopefully the example clears up difference between returning the remainder component of division, and the integer component of division. 
