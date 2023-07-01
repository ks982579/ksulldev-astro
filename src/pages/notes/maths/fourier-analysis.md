---
layout: '@layouts/NotesLayout.astro'
title: 'Fourier Analysis'
pubDate: 2023-06-27
description: 'Fourier Analysis is an amazing topic in Mathematics.'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths"]
---

# Quick Fourier Series Intro

```yaml
url: https://www.youtube.com/watch?v=mgXSevZmjPc
title: The Fourier Series and Fourier Transform Demystified
channel: Up and Atom
duration: 14m 47s
visited: 2023-06-27
```
The Fourier Series, and the Fourier Transform, can be found almost everywhere. The concept is that we can kind of write almost any function in terms of sine and cosine. But how so? They have a very smooth shape, but things like a square-wave or saw tooth wave have jagged edges.

We need to start at the beginning. 

## Adding Functions Together

Markdown makes photos challenging… but imagine a regular sine wave, $\sin(x)$ on the interval $[0,2\pi]$. Now, imagine $\sin(3x)$ on that same interval. It has a smaller frequency. If you add them together, you may see how we begin to approach a new graph. That is, over the same $x$ interval, we add together the $y$ values of the function. 

In that example, you'll also notice that when the results in the original functions are both the same, the sum gets larger (either positive or negative). And when the signs are opposite, they cancel each other out. 

Since our example above has moments that cancel each other out, we want to give our $\sin(3x)$ a smaller amplitude, to hinder the effect it has. If we continue to add similar terms, smaller amplitude and frequencies, you'll see it approaches the square wave. 

![fourierSineMadness.png](/images/notes/maths/fourierSineMadness.png)

Above is a small graph made in Excel. The sine waves are different frequency and amplitudes of the sine function and the Yellow is the addition of them. As we continue to add more waves, we'll get closer to the square wave. 

The Fourier Series is an infinite sum, meaning you'll add infinite waves. Therefore, you'll eventually reach your exact solution. 

Another example is the _saw tooth_ wave. You can start with the following:

$$
f(x) = \sin(x) - \frac{1}{2} \sin(2x) + \frac{1}{3} \sin{3x} - \text{...}
$$

What is the point, especially when it involves an infinite sum? In practice, we don't need to evaluate an infinite sum, but just enough terms to be good enough for the application. The instructor suggests a program to determine the difference between our two functions, the square and sawtooth waves.

$$
\begin{align*}
f(x) = \sin(x) + 0\sin(2x) + \frac{1}{3} \sin(3x) + \text{...} \\
g(x) = \sin(x) - \frac{1}{2} sin(2x) + \frac{1}{3} \sin(3x) + \text{...}
\end{align*}
$$

Just by knowing the amplitude (coefficient) of the second term, the program could tell the difference.

Finding the Fourier series for a trivial example like this might be more work than it's worth. However, extending this to different and more general objects helps a computer learn pattern and shape recognition. The difficult part, when comparing objects, is finding the Fourier Series to analyse. That is, what waves make up the shape we are looking at. 

The Fourier Transform help determine which waves make up the Fourier Series. It can also pick and remove waves without having to find the Fourier series as well. This help when removing noises in recordings. 

The idea is that you give it amplitude vs time function, and you get an amplitude vs frequency function. This happens because the transform decomposes the function into sine and cosine waves. The graph of AvF looks like a bar chart. It is a "frequency domain view of a time domain function." 

Mathematical equation for Fourier transform $F(\omega)$ is

$$
F(\omega) = \int f(x) e^{-i \omega x} dx
$$

The $f(x)$ is the time function we are calculating the Fourier Series for. The exponential term comes from **Eulers Formula**…

$$
e^{-i \omega x} = \cos(\omega x)-i\sin(\omega x)
$$
Basically, you can write the exponential in terms of sine and cosine waves. Also, that $i$ is for an _imaginary_ component. It handles the general case where there may be different phases required to make up the function.

For the square wave, it ends up looking like $F(3) = \int f(x) [\sin(3x)] dx$. We multiple values from the sine wave and our function to get some results, either positive or negative. When the results are positive, it tells us the results are more correlated. And when the waves are anti-correlated, we will get a negative value. And when there is no correlations, we get 0. In this, the terminology for correlation more or less means the difference between actual and expected, more like a variance, but not. 

The integral is a continuous version of the sum. We are summing all of the correlations to determine if the wave is important to the series. If the term is important, its sum will be greater than 0. If the sum is negative, it's not useless, but just subtracted instead of added because it implies anti-correlation. 

For the square wave, the integral of our $\sin(3x)$, and after normalization, we find the sum to be $\frac{1}{3}$. This means that one-third of the amplitude is used to make the square wave! really cool. 

The square wave is only made up of odd sine curves. That is because, there's one extra 'hump' in each odd term to make the resulting summation not 0. Similar reason why the cosine value isn't seen in this series either. 

The Fourier Transform does this process for any frequency, telling us which frequencies go into any function. You can think of it as "Changing the basis of the function in an infinite dimensional space." What does this mean? We can change the basis of function space, like how we change the basis of a vector space, which is change coordinates to describe the same vector. So, we went from amplitude vs infinite time positions, to amplitude vs infinite frequency values. This is only possible because our sine and cosine waves make up an _orthogonal_ basis. Or, they can be combine to make any function in function space. 

The catch is that you need some kind of mathematical description of the input function. This is where algorithms come into play. Plug in for [Curiosity Stream](https://curiositystream.com/upandatom). Additional plugin for [Nebula.TV](https://nebula.tv/). 


# Applied Fourier Analysis

```yaml
title: Applied Fourier Analysis
subtitle: From Signal Processing to Medical Imaging
author: Tim Olson
publisher: Springer Science+Business Media, LLC
year: 2017
doi: https://doi.org/10.1007/978-1-4939-7393-4_1
```

## 1. Introduction: From Linear Algebra to Linear Analysis

Fourier Analysis is at the center of many modern sciences, from Physics and engineering, to population dynamics in biology. Many of the important phenomena in our world are related to periodic phenomena. Understanding frequency based functions, sines and cosines, are _eigenfunctions_, or "building blocks of the universe." 

### 1.1 Three variations of Fourier Analysis

1. Fourier Series
2. The Discrete Fourier Transform
3. The Continuous Fourier Transform

**Fourier Series** involves representing a continuous function on a finite interval $[a,b]$ with an infinite series, which is similar to the Taylor series.

The **Discrete Fourier Transform** (DFT) is focused on a function on a finite set of points, referred to as $0,1,\text{...},N-1$. Being discrete, it's commonly implemented in technology. 

The **Continuous Fourier Transform** (CFT) extends the Fourier Series to deepen our understanding of connections between physical reality and digital representations. 

#### 1.1.1 Fourier Series

Quick look at a _basic_ Fourier Series. On an interval $[-\pi, \pi]$ we can represent a series expansion:

$$
f(t) = \frac{a_0}{2}+ \sum_{k=0}^{\infty}a_k \cos(kt) + b_k \sin(kt)
$$

where…

$$
\begin{align*}
a_k &= \frac{1}{\pi} \int_{-\pi}^{\pi}f(t) \cos(kt)dt, \;\text{and}\\
b_k &= \frac{1}{\pi} \int_{-\pi}^{\pi}f(t) \sin(kt)dt
\end{align*}
$$

Ok, so that is a discrete summation of the integration of trigonometric functions on our interval for each value of $k$. We have only just begun the most basic form of Fourier Analysis, which is to separate a function into the various frequencies which represent it. 

Interesting to note that the cosine terms are even, and the sine terms are odd. We have decomposed our function into even and odd parts, in addition to individual frequencies. This will be invaluable later. 

One limitation of the Fourier Series can be seen in the formulas. You must calculate the integrals, a time consuming and difficult practice. Another limitation is that a Fourier Series is only valid on a finite interval. 

#### 1.1.2 The Discrete Fourier Transform

The **Discrete Fourier Transform** (DFT) addresses the problem of calculating an infinite number of integrals by creating a simple matrix that can be on _basic_ finite signals. 

Suppose you have a function $f(t)$ on an interval, and you need to represent with $N$ samples at discrete time points $t_n$, where $n=0...N-1$. We will let this be a vector:

$$
\vec{f_n} = \left\{ f(t_n)\right\}_{n=0}^{N-1}
$$

_formula 1.1_ 

The DFT samples cosine and sine terms. The vector representing $cos(t)$ would be $\cos(\frac{2 \pi n}{N})$, where of course $n=0, 1,\;...\;,N-1$. Both will go through a complete cycle on the interval of $[0, 2\pi]$. 

We use the sine and cosine vectors to construct the **Fourier Matrix** $F_N$, where $N$ represents the number of points in our sampled function. We can write the vector as a multiple of these cosine and sine vectors:

$$
\vec{f} = F_N \vec{c}
$$

_equation 1.2_ 

We let $c$ represent the coefficients of our sampled sines and cosines. Note, you can easily find $\vec{c}$ if needed. Advantages:
+ No integral calculations
+ Can decompose matrix $F_N$ in a special way to make Linear Algebra Fast. 

We must address several issues / questions to utilise this approach:
1. How often to sample to be accurate? How small do time intervals need to be?
2. Do we utilise the matrix on short portions of function, or long portions?
3. Will this represent the real frequency content of the original function?
4. Can we calculate these expansions quick enough to be useful in applications such as real-time communication systems?

#### 1.1.3 The Continuous Fourier Transform

We define the the Fourier Transform as:

$$
\begin{align*}
\widehat{f}(s) &= \frac{1}{\sqrt{2 \pi}} \int f(t)e^{ist} dt \\
&= \frac{1}{\sqrt{2 \pi}} \int f(t) \left(
\cos(st) + i \sin(st)
\right) dt
\end{align*}
$$

The final integral is composed of sine and cosine subsets. These discrete subsets, or samples, of the Fourier Transform generate _sampling theory_, which we will also look at later. 

We use the Continuous Fourier Transform to more easily understand some beautiful phenomena. One such being the _uncertainty principle_. 

### 1.2 Motivations

#### 1.2.1 Exploration and Understanding

A primary goal of science is to provide simple explanations of a phenomenon. A lot of physical phenomena can be explained with sines and cosines.

One such example is the begins with an ordinary differential equation:

$$
ay''(t) + by'(t) +cy(t) = f(t)
$$

One way to solve the equation is to _guess_ the solution takes the form of $y=e^{\lambda t}$. That easily leads to the derivatives. Then there is some older, weird logic like this:

$$
a \lambda^2 e^{\lambda t} + b \lambda e^{\lambda t} + c e^{\lambda t} = 0
$$

But since $e^{\lambda t} \neq 0$ for any $t$, _we just factor it out_…

$$
\begin{align*}
0 &= e^{\lambda t} (a \lambda^2 + b \lambda + c) \\\\
0 &= \left\{
\begin{array}{l}
e^{\lambda t} \\
a \lambda^2 + b \lambda + c \\
\end{array}\right.
\end{align*}
$$

The solution then depends on the above equations, a typical polynomial. We have changed a differential equation into a simple polynomial equation. Then, we can solve with the quadratic equation:

$$
\lambda = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

_quadratic equation_

If the discriminant, $(b^2-4ac) >0$, then the solutions are both _real_ and the corresponding solutions to the differential equation will exhibit either exponential growth or decay. 

For reference, exponential growth is typical of population growth, like bacteria in a petri dish. An exponential decay is common in situations where a signal is being absorbed as it transmits through a medium. I think calculations of half-life exhibit exponential decay. 

Prep for the next topic; **conjugates** are pairs of binomials with identical terms but parting opposite arithmetic operators in the middle. An example being $(3-2i)$ and $(3+2i)$. 

Fourier Analysis is useful for when $b^2-4ac < 0$. The $\lambda$'s with be _conjugate_ pairs of one another, which can be denoted as $\lambda_{\pm} = \alpha \pm i \beta$.

Also note that $i = \sqrt{-1} \; \therefore \; i^2=-1$. Hence, a complex exponential solution(s):

$$
\begin{align*}
e^{\lambda_{\pm}t} &= e^{\alpha \pm i \beta} \\
&= e^{\alpha t \pm i \beta t} \\
&= e^{\alpha t}(\cos(\beta t) + i \sin(\beta t))
\end{align*}
$$

It is generally assumed that $\alpha \leq 0$. If $\alpha = 0$ the solution would oscillate forever. However, when $\alpha < 0$, the solution to the differential equation decays exponentially to zero. 

The frequency $\beta$ is often called the _resonant frequency_ of the system. 
