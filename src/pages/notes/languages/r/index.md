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

Exponents can use either `^` or `**`. 

Strings use either double of single quotes. 

Assignments to variables use _arrow_ operators. You can assign both ways, not typical of a language. 

```r
x <- 2
4 -> y
y * 10 + x
## [1] 42
```

In the terminal, assignment is _silent_, it won't print results. If you wrap that shit in parenthesis, it will print the result of the assignment. 

Convention for notes is writing output with 2 pound-signs. But notice the `[1]`. This just tells you what index of a vector you are looking at in the first place of that line. Check out `1:500` in your terminal. Oh, and the colon creates a sequence. This creates sequence that is also inclusive of both arguments. 

Use `seq(start, stop, inc)` to increment sequence by other than one. Also, vectors are 1 indexed, not 0 indexed like most other programming languages. 

Use `length(var)` to get length of vector. Note, if you get length of string, it will just tell you 1 because it's one element in a vector. You must `nchar("Hello, world!")` for number of characters.

```r
("Hello, world!" -> phrase)
## [1] "Hello, world!"
(c(7,23,24) -> vec)
## [1]  7 23 24
length(phrase)
## [1] 1
length(vec)
## [1] 3
nchar(phrase)
## [1] 13
nchar(vec)
## [1] 1 2 2
nchar(42.0000)
## [1] 2
```

Funny how `nchar()` will count number of digits for numbers, but only necessary digits, clever. 

To concatenate strings, use `paste("string 1", "string 2", sep=", ")`. Default separator is just a space. 

You index a vector with square brackets, like _Python_ 🙊. Again, this is a 1 indexed language, not 0 indexed. You can extract a sequence of values, using either the `:` operator or the `c()` concatenate function. Both apply a mask that extract only the index requested. Suppose then you can use the `seq()` function as well. 

You could also use a vector of Boolean values, and R will only return the `TRUE` values. Yes, all-caps for Boolean keywords. 

```r
(taco <- seq(1,25,3))
## [1]  1  4  7 10 13 16 19 22 25
taco %% 4
## [1] 1 0 3 2 1 0 3 2 1
taco %% 4 == 0
## [1] FALSE  TRUE FALSE FALSE FALSE  TRUE FALSE FALSE FALSE
taco[taco %% 4 == 0]    
## [1]  4 16
```

You can also get **complement** with `vec[-(1:3)]`, meaning it returns all index values not in `1:3`. 

Here's also an interesting concept, that of an object or dictionary. 

```r
vec <- c("A" = 1, "B" = 2) 
vec[1]
## A
## 1
vec["A"]
## A
## 1

c(6,7,42) -> t
(names(t) <- c("x", "y", "z"))
## x  y  z
## 6  7 42
```

This is a handy mapping feature for tables, and the `names()` function seems to help with assignment, almost like zipping two vectors together. 

You can declare multiple variables in one line if separated with the `;` semicolon. 

### Vectorized Expressions

In $\huge{\mathscr{R}}$, arithmetic expressions work component-wise on vectors. This has weird consequence when vectors are different lengths. R will repeat the shorter vectors until your expression has cycled through every element of the longest vector. 

### Functions

Firstly, comments begin with `#` pound sign. 

When passing arguments into a function, you can do so implicitly or explicitly if you know parameter names. Similar to Python, order matters for implicit assignment, and not for explicit. Ok to combine but cannot pass implicit after explicit. 

In the R terminal, if you want information on a function, use the `?` operator

```r
?length
?`+`
```

It sent me to the documentation webpage at `127:0:0:1`, which is localhost. Apparently for RStudio, it's more inclusive. Use the back-ticks for operators. 

To write your own function, use the `function()` keyword and assign it to a variable name... That's a little weird. 

```r
sqr <- function(x) x^2
distance <- function(x, y, z) {
	c <- sum(sqr(x), sqr(y), z^2)
	c^(1/2)
}
```

Note, you can write functions in one line, a bit like JavaScript. Or, you can create a function _body_ with curly-brackets. The function `sum()` is predefined by R.

The example shows an implicit return. You can be explicit with the return value, but that is another function, `return()`. Most languages have a keyword, but not in R. 

Keep in mind that what can be passed into a function is a vector. Thus, if you condense the values, with a sum or average, you will obtain a summary statistic, a vector with a different length. 

```r
average <- function(x) sum(x) / length(x)
```

R comes with `mean()` which is more robust, handling missing data and vectors of length zero. 

A fun idea is returning multiple values.

```r
mean_and_sd <- function(y) c(mean = mean(y), sd = sd(y))
```

There are also `var()`, `cov()`, and `cor()` for the variance, covariance, and correlation. Use `?` to read more. 

### Control Flow

It is like JavaScript, `if(TRUE) <expression>`. 

There's also the `else` statement, which slides in after the expression like a Python ternary. You can create expression blocks with curly brackets too. And then there is the `ifelse(vec, <If TRUE>, <If FALSE>)`. The `vec` is more like the mask, so you might pass in

```r
1:10 -> x
ifelse(x < 5, "Under", "Over")
## [1] "Under" "Under" "Under" "Under" "Over"  "Over"  "Over"  "Over"  "Over"
## [10] "Over"
```

Unfortunately, the if statement handles single values easily, but not vectors. Hence, the `ifelse()` function for vectors. if you try to pass a vector into an `if` statement, you'll get a warning it it only checks the condition on the first element. 

You can also use the `Vectorize(function)` function to translate a scalar function into a vector. 

```r
maybe_square <- function(x) {
	if (x %% 2 == 0) x^2 else x
}
maybe_square <- Vectorize(maybe_square)
maybe_square(1:10)
```

`Vectorize()` is a **functor**, which is a function that takes in a function as an input and returns a function. Kind of like a decorator in Python. 

Let's introduce the `for` statement. It's a typical loop. Use the `seq_along()` function to return indices of a vector instead of values. 

```r
5:10 -> y
0 -> total
for (index in seq_along(y)) {
	elm <- y[index]
	total + elm -> total
}
```

There's also the `while` keyword, which is syntactically what you'd expect. 

Similar to Rust's `loop` loop, R has a `repeat` loop that will continue until you explicitly break out of the loop with the `break` keyword. 

And there's also the `next` statement, similar to `continue` in Python, that jumps to the next iteration skipping any logic after the statement in the loop. 

Loops are _discouraged_ in R because it can lead to slow code. Try avoiding and using functions. If a function cannot loop, look at using the `Map()`, `Filter()`, and `Reduce()` functions. Maybe more on them later.

### Factors

**Factors** a vectors but their elements are categories, or classes, instead of numbers or strings. Construct factors with the `factor()` function, passing in a list of strings. 

```r
(f <- factor(c('large', 'medium','small','medium')))
## [1] large  medium small  medium
## Levels: large medium small
levels(f)
## [1] "large"  "medium" "small"
```

By default, as shown, levels are ordered alphabetically. You can change ordering yourself.

```r
sizes <- c('small', 'medium','large')
orders <- c('small', 'small', 'large', 'large', 'medium', 'small')
ff <- factor(orders, levels = sizes)
ff
## [1] small  small  large  large  medium small
## Levels: small medium large
summary(ff)
## small medium  large
##   3      1      2
## ff == "small"
## [1]  TRUE  TRUE FALSE FALSE FALSE  TRUE
class(ff)
## [1] "factor"
```

Changing the order can change some of the outputs and how R handles your factor in general. 

This still does not tell R this factor is _ordered_. For that you must pass in the argument `ordered = TRUE`. There's also an `ordered(factor())` function that takes in your factor. 

Note the Boolean logic that easily creates a mask for the factor. Factors are **not** strings.

This is neat...

```r
letters[1:5]
## [1] "a" "b" "c" "d" "e"
letters[10:25]
## [1] "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y"
letters[30:40]
## [1] NA NA NA NA NA NA NA NA NA NA NA
LETTERS[5:10]
## [1] "E" "F" "G" "H" "I" "J"
rev(LETTERS[4:10])
## [1] "J" "I" "H" "G" "F" "E" "D"
```

Combined with `names()` or something can make for easy categories or such. Those use strings as index in a vector. But a factor is not stored as strings. It is stored as a vector of integers where the integers are indices into the levels. Basically, you can't use a factor to index into a vector. 

You can grab numeric values of factor indices with `as.numeric(my_factor)`. You can also use `as.vector(my_factor)` to translate a factor as if it contained strings. 

Be careful indexing with factors. 

### Data Frames

R has `data.frame` types for creating tables. 

```r
df <- data.frame(a = 1:5, b = letters [6:10])
```

The sizes of each column must match. As a 2-D structure, you index with `df[1,2]` two indices. If you leave one empty `df[1,]` you'll fetch either the row or column. The latter index is for column. 

There's also the `$column_name` notation such as `df$b` in our example. In R < 4, data frames would implicitly convert character vectors into factors to save space. This became the source of error as hinted at just above. So, in R4 they keep string vectors as string vectors. 

You can specify it yourself though if space is a concern...

```r
df <- data.frame(a = 1:5, b = letters [6:10],
				 stringsAsFactors = TRUE)
```

I hate that notation, the obnoxious spacing looks terrible. I much prefer:

```r
df <- data.frame(
	a = 1:5, 
	b = letters [6:10],
	stringsAsFactors = TRUE
)
```

Some fun things

```r
df1 <- data.frame(a = 1:4, b = letters[1:4])
df2 <- data.frame(a = 5:7, b = letters[5:7])
df3 <- data.frame(c = 10:13, d = letters[10:13])
rbind(df1, df2)
## -> adds additional rows, so columns must match
cbind(df, df3)
## -> adds additional columns, so must have same number of rows
```

```r
install.packages("tidyverse")
library(tibble)
library(tidyverse)
```

You might have to install the packages which I am trying to do now. It said my `program files` directory was not writable. Perhaps I should have been in admin mode. But it asked to create a personal library, which I did. Then it asks for a "CRAN mirror", which is a server that stores identical copies of code and documentation for R. Pick the one closest to you to decrease time for downloads. 

**Tidyverse** is a large framework for working with data. **Tibble** is an alternative to the built-in data frame for R. They are optimized for certain use patterns or based on taste. By installing "tidyverse", you'll get tibble. You can then create tibbles with the `tibble(a = 1:4, b = letter[1:4])` syntax. 

It's not a requirement, apparently these are just popular packages you may come across in the _wild_. 

We will look at the `dplyr` packages, also part of the `tidyverse`, in chapter 3 which provides more sophisticated manipulations of data frames. 
