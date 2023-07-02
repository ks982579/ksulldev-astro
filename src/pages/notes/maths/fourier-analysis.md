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

#### 1.2.2 Manipulation

We might want to manipulate output or behaviour of a system:
+ remove background noise or static from audio
+ Emphasize major long-term trends in a system
    + They can be clouded by a number of minor and less important short-term phenomena
+ Clearly enhance radar signals for air traffic controllers

#### 1.2.3 Compression

Simple changes to the way things are represented and stored can save vast amounts of storage space. Compression information without losing quality, transmission, and restoration of information is very valuable, especially in communications. 

#### 1.2.4 Practice

Using _Taylor Series_ expansion of $e^x$, show that

$$
e^{i \beta t} = \cos(\beta t) + i \sin(\beta t)
$$

To do this, you will need this [list of Maclaurin series](https://en.wikipedia.org/wiki/Taylor_series#Trigonometric_functions) of common functions. Colin Maclaurin, in the mid-18th century, created this list of when $0$ is the point where the derivatives are considered. 

Let's write down what we are looking for

$$
\begin{array}{lcr}
\sin(x) = \sum_{n=0}^{\infty} \left(
\frac{(-1)^n}{(2n+1)!}x^{2n+1}
\right) & \quad 
= x - \frac{x^3}{3!} + \frac{x^5}{5!} - ... \quad & \forall x \\\\
\cos(x) = \sum_{n=0}^{\infty} \left(
\frac{(-1)^n}{(2n)!}x^{2n}
\right) & \quad 
= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - ... \quad & \forall x
\end{array}
$$

Looking at the middle pattern, It's really interesting that the combination covers all values of $x$. 

Additionally, the [Riemann Series Theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem), named after 19th-century German mathematician Bernhard Riemann, states that if an infinite series of real numbers is [conditionally convergent](https://en.wikipedia.org/wiki/Conditional_convergence), that it does not converge absolutely, the terms can be arranged in a permutation so that the new series converges to an arbitrary real number… or diverges. This implies that a series or real numbers is [_Absolutely Convergent_](https://en.wikipedia.org/wiki/Absolute_convergence) if and only if it is [_Unconditionally Convergent_](https://en.wikipedia.org/wiki/Unconditional_convergence).
+ Unconditionally convergent = all reorderings of a series converge to the same value.
+ Conditionally convergent = series can converge to different values based on ordering.
+ Absolute convergent = sum of all absolute values of summands is finite. 

The series are meant to be absolutely convergent, meaning they can be rearranged without affecting the outcome. 

And finally:

$$
\begin{array}{ll}
i &=\sqrt{-1}\\
i^2=(\sqrt{-1})^2 &=-1 \\
i^3=\sqrt{-1}*\sqrt{-1}*\sqrt{-1} &=-1*\sqrt{-1}\\
i^4=(\sqrt{-1})^4=-1*-1 &= 1
\end{array}
$$

Either way:

$$
\begin{align*}
f(t) = e^{i \beta t} &= 1 + i \beta t + \frac{(i \beta t)^2}{2!} + \frac{(i \beta t)^3}{3!} + ...\\\\
&\text{factor through and out the } i^n\\\\
&= 1 + i \beta t + \frac{(i)^2 (\beta t)^2}{2!} + \frac{(i)^3 (\beta t)^3}{3!} + \frac{(i)^4 (\beta t)^4}{4!} + ...\\\\
&= 1 + i \beta t + \frac{-1 (\beta t)^2}{2!} + \frac{-i (\beta t)^3}{3!} + \frac{1 (\beta t)^4}{4!} + ...\\\\
&\text{factor out the } i\\\\
&= 
\left(
1 - \frac{(\beta t)^2}{2!} + \frac{(\beta t)^4}{4!} - \frac{(\beta t)^6}{6!} ...
\right) +
i\left(
\beta t - \frac{(\beta t)^3}{3!} + \frac{(\beta t)^5}{5!} + ...
\right) \\\\
&=\cos(\beta t) + i \sin(\beta t)\\\\
&\Box
\end{align*}
$$

Now, let's do a little calculus comparison

We know that 

$$
\frac{d}{dx} e^{f(x)} = f'(x)e^{f(x)}
$$

Therefore

$$
\begin{align*}
\text{Let} \quad f(t) &= e^{i \beta t} \\
f'(t) &= \frac{d}{dt} \left(e^{i \beta t}\right) \\
&= i \beta e^{i \beta t} 
\end{align*}
$$

Now,

$$
\begin{align*}
\text{Let}\quad g(t) &= \cos{\beta t} + i \sin(\beta t) \\
g'(t) &= \frac{d}{dt} \left(\cos{\beta t} + i \sin(\beta t) \right) \\
&= \frac{d}{dt} \left(\cos{\beta t}\right) +
\frac{d}{dt} \left(i \sin(\beta t) \right) \\
&= i \beta \cos(\beta t) - \beta \sin(\beta t)
\end{align*}
$$

Based on the Maclaurin series for cosine and sine, I'm not getting similar results, but didn't try too hard as I am pressed on time. 

Additionally, try to differentiate $e^{\alpha t + i \beta t}$ and $e^{\alpha t}(\cos(\beta t) + i \sin(\beta t))$. Do they line up better?

### 1.3 Linear Algebra, Linear Analysis, and Fourier Analysis.

Fourier Analysis is an extension of Linear Algebra. It is the study of sines and cosines, and how they interact and behave in a complex setting. Fourier Analysis is a subtopic of Linear Analysis, which is an extension of Linear Algebra, following the same rules, except that we allow an infinite number of variables, or dimensions. 

Basic concepts of Linear Analysis are the same as Linear Algebra. Begin with the idea of a vector space, which involves _objects_ and _operations_. 

2 types of objects:
+ **Scalars** $\to$ Usually real or complex numbers.
    + We insist scalars come from a _field_ meaning they behave like real or complex numbers.
+ **Vectors** $\to$ Ordinary vectors in Linear Algebra.
    + These will often be sines and cosines in Fourier Analysis

2 types of operations:
+ Scalar multiplication
+ Vector addition

We now have the basics in a vector space. Consider that we are $R^n$, and we have a matrix. According to Linear Algebra, if we have a matrix $A$ within a vector space, it holds that 

$$
A(c_1 \vec{v}_1 + c_2 \vec{v}_2) = c_1 A \vec{v}_1 + c_2 A \vec{v}_2
$$

That is, the matrix respects the linear arithmetic of the vector space. 

#### 1.3.1 The Dot Product, Inner Product, and Orthogonality

The **dot product** is used extensively in Linear Algebra, and defined as:

$$
\vec{a} \cdot \vec{b} = \sum a_kb_k
$$

_definition of dot-product_

It has many implications, one being it defines the notion of distance:

$$
|\vec{a}|^2 = \sum |a_k|^2 = \vec{a} \cdot \vec{a}
$$

_notion of distance_

This can be seen as an extension of the Pythagorean theorem. Sum of the squares equals the final vector squared. We define length as:

$$
| \vec{a} | = \sqrt{\vec{a} \cdot \vec{a}}
$$

We can also measure angles between vectors:

$$
\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}| \cos(\theta)
$$

The above is the for an angle between any two vectors in $\mathbb{R}^3$. 

Additionally, these equations provide fundamental inequalities. Since $|\cos(\theta)| \leq 1$, the Cauchy-Schwartz inequality follows,

$$
|\vec{a}\cdot\vec{b}| \leq |a||b|
$$

Note that it is hard to visualise angles between $\mathbb{R}^n$. However, We measure the angle on the subspace created by the 2 vectors. In $\mathbb{R}^n$, any two vectors define a two-dimensional subplane, and therefore the angle is also well defined. 

We will move now to the **Inner Product**, which will be defined after a quick discussion. Consider a function on an arbitrary interval $[a,b]$. We want to measure the length and angle between any two functions. We will consider functions $f(t)$ and $g(t)$. Now, the vectors:

$$
\begin{align*}
\vec{f} &= {f(t_k)}\\
\vec{g} &= {g(t_k)}
\end{align*}
$$

With $N$ points, we have approximations to the functions in $\mathbb{R}^N$. Take their dot product:

$$
\vec{f} \cdot \vec{g} = \sum_k f(t_k)g(t_k)
$$

An issues is this dot product is arbitrary depending on how we pick points $t_k$. If the points are close together, perhaps we could derive a useful meaning about the functions. But including twice as many points will make the result nearly twice a big. Therefore, we include a factor for the distance between points:

$$
\vec{f} \cdot \vec{g} = \sum_k f(t_k)g(t_k) \delta_t
$$

The above is actually a Riemann Sum. And thus, why not let that distance approach $0$?

**Definition 1.3.1 - The Inner Product:** if $f(t)$ and $g(t)$ are two functions on an interval $[a,b]$, we define their inner product to be:

$$
\langle f(t), g(t) \rangle = \int_a^b f(t)g(t)\,dt
$$

_definition of inner product_

As long as the Riemann sum converges, it converges to the inner product. 

Operations:
+ Computation
    + Dot Product $\to$ $\vec{a} \cdot \vec{b} = \sum a_kb_k$
    + Inner Product $\to$ $\langle f(t), g(t) \rangle = \int_a^b f(t)g(t)\,dt$
+ Length
    + Dot Product $\to$ $|\vec{a}|^2 = \sum |a_k|^2 = \vec{a} \cdot \vec{a}$ 
    + Inner Product $\to$ $\|f(t)\|^2 = \langle f(t),\, f(t) \rangle = \int |f(t)|^2 \, dt$
+ Angle
    + Dot Product $\to$ $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}| \cos(\theta)$
    + Inner Product $\to$ $\langle f(t),\, g(t) \rangle = \|f(t)\| \| g(t) \| \cos(\theta)$ 
+ Inequality
    + Dot Product $\to$ $|\vec{a}\cdot\vec{b}| \leq |a||b|$
    + Inner Product $\to$ $\langle f(t),\, g(t) \rangle \leq \|f(t)\| \| g(t) \|$ 

Moving onto **Orthogonality**!
p. 12
Perpendicular, orthogonal, right angle, they imply the same thing in our context. Although, I believe perpendicular is more geared towards a plane in 3D space. 

Fun identity, 2 vectors are orthogonal if their _dot products_, or inner products, are 0. This also happens with $\cos(\theta) = 0$ assuming the functions themselves are nonzero. 

A set of functions is orthogonal if the dot product or inner product of every subset of two of them is 0. That can be a lot of math. 

Collections of vectors or functions are **orthonormal** if they are orthogonal, and each has length 1, like a unit vector. 

#### 1.3.2 Eigenvectors and Eignevalues in Linear Algebra

It is assumed the reader is familiar with Linear Algebra. 