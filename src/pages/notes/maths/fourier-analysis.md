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

I will hopefully, one day, include a complete linear algebra section! Until then, I suppose having a quick recap can't hurt anything besides my fingers from all of this typing...

We will cover the concepts of Eigenvectors $\vec{v}$ and corresponding Eigenvalues $\lambda$, as the title suggests. For a square $n \times n$ matrix $A$:

$$
A\vec{v} = \lambda \vec{v}
$$

Where $\lambda$ is some scalar, and the pair together is called an **eigenpair**. Should be obvious that the direction is consistent, but the magnitude has changed. Even if $\lambda < 0$, the vector points in the opposite direction but is still parallel. 

A mention of common principles from Linear Algebra:
+ Linear independence = A collection of vectors is said to be linearly independent if non of the individual vectors can be represented by a sum of the other vectors. 

The author says that a Linear Algebra book will cover these important topics, so I'll defer to that.  

Then there is the fundamental idea of _diagonalization_. Suppose we have a matrix $A$ that has $n$ linearly independent eigenvectors $\vec{v}_j$, with corresponding eigenvalues $\lambda_j$, assuming all are real for now. For any $n$-dimensional vector $\vec{x}$, we write:

$$
\begin{align*}
\vec{x} &= c_1 \vec{v}_1 + c_2 \vec{v}_2 + ... + c_n \vec{v}_n\\\\
&= \sum_{j=1}^{n} c_j \vec{v}_j
\end{align*}
$$

_equation 1.4_

We then want to multiply matrix A by $\vec{x}$. Using linearity...

$$
A \vec{x} = A \sum_{j=1}^{n} \left( c_j \vec{v}_j \right) = \sum_{j=1}^{n} c_j A \vec{v}_j
$$

_equation 1.5_

However, if we know the eigenvalue, we can use that instead.

$$
A \vec{x} = \sum_{j=1}^{n} c_j A \vec{v}_j
= \sum_{j=1}^{n} c_j \lambda_j \vec{v}_j
$$

This is better for many reasons:
+ Reducing matrix multiplication into scalar vector multiplication.
+ Using $n$ individual eigenvectors instead of an arbitrary large matrix. It makes interpretation easier. 
+ We have reduced a potentially large confusing matrix into a bunch of one-dimensional eigenvector problems. 

#### 1.3.3 Orthogonal Diagonalization

An additional restriction to diagonalization we must consider is that matrix $A$ must also have orthogonal eigenvectors. We mean the dot product:

$$
\vec{v} \cdot \vec{v}_j = \vec{v}_i^t \vec{v}_j = 0
$$

Then, store these eigenvectors as columns of matrix $V$ and normalize the entries of $V$ that have length one, so $\vec{v}_i^t \vec{v}_i = 1$. We now have

$$
V^tV = I = V^{-1}V \quad \text{or} \quad V^t=V^{-1}
$$
You can then write that:

$$
A = VDV^{-1} = VDV^{t}
$$

Apply $A$ to $x$ to get the following:

$$
A \vec{x} = VDV^{t} \vec{x}
$$

Now, lets take it one piece at a time...

$$
\begin{align*}
V^{t} \vec{x} &= (\vec{v}_1 \cdot \vec{x}, \vec{v}_2 \cdot \vec{x}, \vec{v}_3 \cdot \vec{x}, ... , \vec{v}_n \cdot \vec{x})^t\\
DV^t\vec{x} &= (\lambda_1(\vec{v}_1 \cdot \vec{x}), \lambda_2 (\vec{v}_2 \cdot \vec{x}), \lambda_3 (\vec{v}_3 \cdot \vec{x}), ... , \lambda_n (\vec{v}_n \cdot \vec{x})^t\\
A\vec{x} = VDV^t\vec{x} &= \lambda_1(\vec{v}_1 \cdot \vec{x}) \vec{v}_1 + \lambda_2 (\vec{v}_2 \cdot \vec{x}) \vec{v}_2 + \lambda_3 (\vec{v}_3 \cdot \vec{x}) \vec{v}_3 + ... + \lambda_n (\vec{v}_n \cdot \vec{x} \vec{v}_n
\end{align*}
$$

To simplify

$$
\begin{align*}
\vec{x} &= \sum_{k=1}^{n}(\vec{v}_k \cdot \vec{x})\vec{v}_k \\
&\text{and...}\\
A \vec{x} &= \sum_{k=1}^{n} \lambda_k (\vec{v}_k \cdot \vec{x}) \vec{v}_k
\end{align*}
$$

Matrix multiplication has been reduces to a series of dot products with eigenvectors, multiplied by eigenvalues. This is sometimes called the **EigenFunction** approach. 


#### 1.3.4 Diagonalization in Linear Analysis: Eigenfunctions
p.14

Let's start with eigenfunctions. In linear analysis, eigenfunctions are a special type of function that have a unique property when operated on by a linear operator. A linear operator is a mathematical operation that takes a function as input and produces another function as output. 

When an eigenfunction is operated on by a linear operator, the resulting function is a scaled version of the original eigenfunction. In other words, the output is the same shape as the input, but it may be stretched or compressed by a certain factor. This scaling factor is called the eigenvalue.

To give you an analogy, think of a rubber band. If you stretch or compress the rubber band, it changes in size, but it retains its original shape. Similarly, an eigenfunction behaves like a rubber band under the action of a linear operator.

Now, let's move on to diagonalization. Diagonalization is a process in linear analysis that allows us to simplify the representation of a linear operator. The goal is to find a special set of eigenfunctions that make the operator's behavior easier to understand and work with.

When a linear operator is diagonalized, it means that its representation can be written as a diagonal matrix. A diagonal matrix is a square matrix where all the elements outside the main diagonal (from the top-left to the bottom-right) are zero. The values along the main diagonal correspond to the eigenvalues of the operator.

Diagonalization is useful because diagonal matrices have simpler properties compared to general matrices. Operations such as multiplication and exponentiation are much easier to perform on diagonal matrices.

To illustrate diagonalization, imagine you have a box of differently sized rubber bands (representing eigenfunctions) and a stretching machine (representing the linear operator). You put the rubber bands into the machine, and out comes a collection of rubber bands, each stretched or compressed by a certain factor. If you arrange these rubber bands according to their stretch factors, you end up with a diagonal configuration where each rubber band represents an eigenfunction, and the stretch factor represents the eigenvalue.

By diagonalizing a linear operator, we gain insights into its behavior and can perform calculations more efficiently.

Consider the following:

$$
u(t,x) = \sum_{k=0}^{\infty} a_k \sin(kx) \cos(kt)
$$

Letting $t=0$ will eliminate the cosine factor and also give us the initial _displacement_ of the system. Notice that the frequency of the time variation, the cosine factor, is tied to the frequency of the spatial variation, the sine factor. This is the fundamental nature of the **wave equation**, discussed in at a later time. 

#### 1.3.5 Fourier Analysis

Fourier Analysis is involved in many studies that are centred around waves, like study of light and optics, sound, etc... When you learn Fourier Analysis, you position yourself to better understand that entire list of topics. 

#### 1.3.6 Notational Differences

We will typically refer to the Fourier Transform of a function as:

$$
\^f(s) = \frac{1}{\sqrt{2 \pi}} \int_{- \infty}^{\infty} f(t) e^{ist} \,dt.
$$

An author, Rob Bracewell, of another esteemed book, refers to the following:

$$
\^f(s) = \int_{-\infty}^{\infty} f(t) e^{-i2\pi st}\,dt.
$$

---

## Ch. 2 Basic Fourier Series

This is a quick introduction into the basics where the reader can then dive further into interesting topics on their own. 

### 2.1 Fourier Series on $L^2[a,b]$ 

**Definition 2.1.1** The set of functions $f(t): [a,b] \to R$ whose squared integral is finite, i.e. $\int_a^b|f(t)|^2 \lt \infty$ is referred to as $L^2[a,b]$, the square integrable functions on $[a,b]$. 

The **square integrable functions** for the space of functions that we are interested in. Also consider:

$$
\begin{align*}
\|c_1f(t)+c_2g(t)\|_2^2 &= \int_a^b(c_1f(t)+c_2g(t))^2 \, dt\\
&= \int_a^b c_1^2 f(t)^2+c_1 c_2 f(t) g(t) + c_2^2 g(t)^2 \, dt\\
&= c_1^2 \int_a^b f(t)^2dt + c_2^2 \int_a^b g(t)^2dt + c_1 c_2 \int_a^b f(t) g(t)dt
\end{align*}
$$

_call it equation 2.1_

The first 2 integrals are finite because $f(t),\,g(t) \in\; L^2[a,\,b]$. The last integral is finite because of **Cauchy-Schwartz Theorem**:

$$
|\int_a^b f(t)g(t)dt|^2 \leq \|f(t)\|_2^2 \|g(t)\|_2^2
$$

Therefore we can say it is a vector space. Of course, the proof of when the functions are complex would be left as an exercise because why sell a book that actually explains everything?

**Theorem 2.1.1** Let $f(t)$ be any function in $L^2[-\pi, \pi]$. Then, we can represent $f(t)$ in a series as

$$
f(t)=\frac{a_0}{2} + \sum_{k=1}^{\infty}a_k \cos(kt)+b_k\sin(kt)
$$

Where

$$
\begin{align*}
a_k = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos(kt) dt\\
b_k = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin(kt) dt
\end{align*}
$$

This means you can represent any function in $L^2[-\pi, \pi]$ as the sum of sines and cosines.

**Theorem 2.1.2** Let f(t) be any function in $L^2[a,b]$. We can represent $f(t)$ in a series as:

$$
f(t) = \frac{a_0}{2} + \sum_{k=1}^{\infty} a_k cos \left(\frac{k\pi(t-h)}{H} \right) +
b_k \sin \left(\frac{k\pi(t-h)}{H} \right)
$$

Where

$$
\begin{align*}
a_k = \frac{1}{H} \int_{a}^{b} f(t) \cos \left(\frac{k\pi(t-h)}{H} \right) dt\\
b_k = \frac{1}{H} \int_{a}^{b} f(t) \sin \left(\frac{k\pi(t-h)}{H} \right) dt
\end{align*}
$$

Additionally

$$
\begin{align*}
H=\frac{(b-a)}{2}\\
h=\frac{(a+b)}{2}
\end{align*}
$$

Theorem 2.1.2 is just a generalisation of 2.1.1. 

We can now simplify the theorem if the interval is centered about the origin, $a = -T$ and $b = T$.

**Corollary 2.1.3** Let $f(t)$ be any function in $L^2[-T,\,T]$. Then, we can represent $f(t)$ in a series as:

$$
f(t) = \frac{a_0}{2} + \sum_{k=1}^{\infty} a_k cos \left(\frac{k\pi t}{T} \right) +
b_k \sin \left(\frac{k\pi t}{T} \right)
$$

Where

$$
\begin{align*}
a_k = \frac{1}{T} \int_{-T}^{T} f(t) \cos \left(\frac{k\pi t}{T} \right) dt\\
b_k = \frac{1}{T} \int_{-T}^{T} f(t) \sin \left(\frac{k\pi t}{T} \right) dt
\end{align*}
$$

The author then explains how to get from theorem 2.1.1 to 2.1.2 in case you have trouble memorizing, or looking them up. 

#### 2.1.1 Calculating a Fourier Series

The issue is that we have to calculate an infinite number of integrals. You can actually calculate them simultaneously. However, the Fourier Series cannot typically be easily calculated by hand. 

As an **example**, consider the characteristic function on $[-\pi,\,\pi]$ to be:

$$
\chi(t) = \left\{
\begin{array}{lll}
1 & \text{if} & |t| \lt \frac{\pi}{2}\\
0 & \text{if} & |t| \gt \frac{\pi}{2}
\end{array}
\right.
$$

Other ways you may see this function are...

$$
\chi_a(t) = \left\{
\begin{array}{lll}
1 & \text{if} & |t| \lt a\\
0 & \text{if} & |t| \gt a
\end{array}
\right.
$$

or

$$
\chi_{[a,b]}(t) = \left\{
\begin{array}{lll}
1 & \text{if} & |t| \in [a,b]\\
0 & \text{if} & |t| \notin [a,b]
\end{array}
\right.
$$

We would like to start by calculating our coefficients. 

**Definition 2.1.2 - Even and Odd Functions:** A function $f(t)$ is said to be even if $f(t) = f(-t)$. And it is odd if $f(t)=-f(-t)$. 

This matters because cosine is even and sine is odd. If $f(t)$ is odd, then $\int_{-T}^{T}f(t)dt=0$. Additionally, the products of these functions corresponds to positive and negatives. So, if $f(t)$ is even, then $f(t) \sin(kt)$ is odd, and $b_k$ terms will zero out. The logic being that even functions can be represented _entirely_ by cosine terms. Opposite logic applies if $f(t)$ is odd. 

We note that $\chi(t)$ is _even_. 

We now solve for terms in 2 parts, which is a plug and chug scenario based on substituting values in from our characteristic function. The author uses the odd property of sine that $\sin(x) - \sin(-x) = 2 \sin(x)$. 

The author continues to arrive at

$$
\chi(t) = \frac{1}{2} + \sum_{k=0}^{\infty} \frac{2 \sin (k \pi / 2)}{k \pi} \cos(kt)
$$

Remember, this is a transformation. So, it still represents the original function, just in a different context. But an infinite sum isn't really programmable. As $k$ get bigger, the denominator grows, and therefore the result continues to decrease. We can probably take a partial sum as a good approximation, written as follows:

$$
S_n(\chi(t)) = \frac{1}{2} + \sum_{k=0}^{n} \frac{2 \sin (k \pi / 2)}{k \pi} \cos(kt)
$$

How many terms makes a good approximation? Might be useful to look at an error metric. 

$$
E_n(\chi) = \int_{- \pi}^{\pi} |f(t)-S_n(t)|^2 \,dt
$$

The next example would be the super simple function $f(t) = t$ on the interval from $[-\pi, \pi]$. Off the bat, note that this is an odd function, so it will be exclusively defined through sine. Then, calculate the coefficient using integration-by-parts.

You can probably tell that more complex functions get out of hand. We will look into other methods of calculating the coefficients, probably numerical approximations. 

#### 2.1.2 Periodicity and Equality

Fourier Series can approximate nearly any function over a finite interval. Don't make the mistake of believing that the FS will represent anything outside an interval though. Coefficients were determined and depend on $f(t)$ in that interval. 

Also, $f(t)$ doesn't necessarily need to be periodic at all. Thus, again, we can't expect $S_{[a,b]}(f)(t)$ to represent $f(t)$ outside of the defined interval. We may also use the notation $S_{\pi}(f)(t)$ to denota the Fourier Series on $[-\pi, \pi]$. 

We are now looking into the function of the Four Series. 

$$
f(t)=\frac{a_0}{2} + \sum_{k=1}^{\infty}a_k \cos(kt)+b_k\sin(kt)
$$

The right is an infinite sum. We want to say the limit as the number of terms approaches infinity converges to $f(t)$, but that's apparently not correct. 

We define:

$$
S_n(f) = \frac{a_0}{2} + \sum_{k=1}^n a_k \cos(kt) + b_k \sin(kt)
$$

and the error function is:

$$
E_n(f) = \int_{-\pi}^{\pi} |f(t)-S_n(t)|^2\,dt
$$

As the limit of our $n$ terms approachs infinity, the error will approach 0 for any function $f(t) \in L^2[a,b]$. Beyond our scope, research books that discuss the relative convergence rates of Fourier Series. 

#### 2.1.3 Exercises

Compute the Fourier Series for the function:

$$
\chi_{\pi/4}(t) = \left\{
\begin{array}{lll}
1 & \text{if} & |t| \lt \frac{\pi}{4}\\
0 & \text{if} & |t| \gt \frac{\pi}{4}
\end{array}
\right.
$$

on $[-\pi, \pi]$. Plot some terms both in and outside the interval. 

Try to compute it now on a larger interval, like $[-2\pi, 2\pi]$. 

Try $f(t)=t$ and $f(t)=t^2$ on similar intervals. It's mostly finding sine and cosine coefficients. 

### 2.2 Orthogonality and Hilbert Spaces

Orthogonality and perpendicularity are the same concepts, used interchangeably. However, we typically say orthogonal when dealing with dimensional vector spaces greater than 3 dimensions, or the function spaces, like $L^2[a,b]$. 

Dot product: defined here

Euclidean distance: $|\vec{a}| = \sqrt{\vec{a} \cdot \vec{a}}$ 

Angle between vectors: $\vec{a} \cdot \vec{b} = |a||b| \cos(\theta)$. 

We now want to compare two functions $f(t)$ and $g(t)$. Consider finite number of points $t_k$, where $t_0=a$ and $t_n=b$ on the interval $[a,b]$. 

Distance between each point is defined as $\delta t = (b-a)/n$.

We want to approximate the length of these functions by their _vector_ counterparts.

$$
f(t) \cdot g(t) \approx \sum_k f(t_k)g(t_k)
$$

However, if we have more points, then the length could double. So, we then multiply in

$$
f(t) \cdot g(t) \approx \sum_k f(t_k)g(t_k) \delta t
$$

Thus, on the same interval, if we cut it put into more pieces, each piece has a smaller weight. 

**Definition 2.2.1 - Inner Product:** if $f(t)$ and $g(t)$ are functions in $L^2[a,b]$, then we define the inner product as:

$$
(f(t) \cdot g(t)) \equiv \langle f(t),g(t) \rangle = \int_a^b f(t) \overline{g(t)} dt
$$

And the length of $f(t)$ would be 

$$
\|f(t)\| = \sqrt{ \int_a^b |f(t)|^2 dt } = \sqrt{ \langle f, f \rangle}
$$

We used [_complex conjugate_](https://en.wikipedia.org/wiki/Complex_conjugate) in the inner product definition, which is a number with equal real and imaginary parts, equal in magnitude but opposite in their sign. 

Standard Linear Algebra, or linear analysis, texts should dive into details about the inner product. 

Stating the important properties inhertied by $L^2[a,b]$:
+ Linearity - if $f$ and $g$ are functions in an inner product space, then so is $c_1f+c_2g$. 
+ if $f \neq 0$, then $\|f\| \neq 0$. 
+ Triangle rule - if $f$ and $g$ are in an inner product space $\|f+g\| \leq \|f\|+\|g\|$. 
+ Cauchy-Schwartz Inequality - If $f$ and $g$ are inner product space

$$
|\langle f,g \rangle| \leq \|f\|\|g\|
$$

The equality holds only if $f$ is a constant multiple of $g$, $f(t) = cg(t)$. 

**Definition 2.2.2.a** Two functions $f(t)$ and $g(t)$ in $L^2[a,b]$ are said to be **orthogonal** if $\langle f,g \rangle = 0$. A collection or set of functions $\{ o_k(t) \}_{k=0}^N$ is orthogonal if for any pair of functions from the set $\langle o_i,o_j \rangle = 0$ where $i \neq j$.

**Definition 2.2.2.b** We say that a set of functions is **orthonormal** if they are orthogonal, and they all have length one, $\|o_j\| = 1$. 

**Theorem 2.2.1 - Orthogonality:** The functions $\{ \cos(kt) \}_{k=0}^{\infty}$ and $\{ \sin(kt) \}_{k=0}^{\infty}$ are **orthogonal** on the interval $[-\pi, \pi]$. Additionally, functions used in Theorem 2.1.2 are also orthogonal on corresponding interval $[a,b]$. 

**Proofs** on pp. 32-33

Because of odd and even trig functions

$$
\int_{-\pi}^{\pi} \cos(mt) \sin(nt) = 0
$$

Thus, cosines are orthogonal to all sines.

Interesting as well, given double angle trigonometric identities...

$$
\begin{align*}
\cos(mt + nt) &= \cos(mt) \cos(nt) - \sin(mt) \sin(nt)\\
\cos(mt - nt) &= \cos(mt) \cos(nt) + \sin(mt) \sin(nt)\\
&\text{add identities together}\\
\cos(mt + nt) + \cos(mt - nt) &= 2 \cos(mt)\cos(nt)
\end{align*}
$$

The proof goes on to prove cosines are cosines are orthogonal to each other and similar logic for sines orthogonal to each other as well. 

#### 2.2.1 Orthogonal Expansions

Completeness refers to having enough functions for the expansions we are suggesting. It's beyond the scope of the text. The author provides a proof of completeness pp. 33-34.

**Theorem 2.2.2** Let $\{o_k\}$ be a complete set of _orthonormal_ functions in $L^2[a,b]$ then for any function in that space:

$$
f(t) = \sum_k \langle f(t), o_k \rangle o_k
$$

### 2.3 The Pythagorean Theorem

It's fundamental to Fourier Analysis. Note that a vector space is a set of elements, called vectors, that can be added together and multiplied by scalars. The Hilbert space is a vector space where the inner product also lives as a distances function. 

Further, but not necessary, a [Euclidean space](https://en.wikipedia.org/wiki/Euclidean_space) are intended to represent physical space. 

**Theorem 2.3.1 - Pythagorean Theorem:** let $f(t)$ be a function in a [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space) $H$, like $L^2[a,b]$. Let $\{ o_k \}_k$ be a complete set of orthonormal functions and $f(t)$ be an element of $H$. The squared length of $f$ can be represented as:

$$
\|f\|^2 \equiv \langle f,f \rangle = \sum_k |\langle f, o_k \rangle|^2
$$

There's a proof on p.36

---

... skipping ahead to convolution for time sake... 

---

### 2.8 Convolution and Correlation

**Definition 2.8.1 - Convolution and Correlation:** Let $f,g \in L^2[-T,T]$, and by extensions $L^2[-2*T,2*T]$. The **convolution** of $f$ and $g$ is:

$$
f*g(t) = \frac{1}{\sqrt{2T}} \int_{-2T}^{2T} f(x)g(t-x) dx
$$

And the **correlation** of $f$ and $g$ is:

$$
f \star g(t) = \frac{1}{\sqrt{2T}} \int_{-2T}^{2T} f(x)g(x-t) dx
$$

Subtle difference in the function $g$. We want to characterize the Fourier Series of these two function. I think it's basically taking 2 functions and making a third function. 

**Theorem 2.8.1 - Convolution and Correlation Theorem:** Let $f,g \in L^2[-T,T]$. the convolution $f*g$ will be in $L^2[-2T,2T]$. Further, the Fourier Series of $f*g$ on $L^2[-T,T]$, denoted $\mathcal{F}(f*g)$, expressed as:

$$
\mathcal{F}(f*g) = \mathcal{F}(f) \mathcal{F}(g)
$$

The Fourier Series of correlation is:

$$
f \star g \in L^2[-2T, 2T] = \mathcal{F}(f \star g) = \mathcal{F}(f) \overline{\mathcal{F}(g)}
$$
$\mathcal{F}(f)$ maps the function $f$ to its _Fourier Coefficients_. 

Proof found on p. 66.

---

We continue to skip Chapter 3 which is the Discrete Fourier Transform 

---

## Ch. 4 The Fourier Transform

We relax the assumption that $L = 2 \pi$, the Fourier series is:

$$
f(x) = \sum_{n = -\pi}^{\infty} c_ne^{i2 \pi nx /L}
$$

You can write the frequency as $\omega_n = 2 \pi n/L$ to rewrite the above equation.

We also previously too the period $L$ to be a finite interval after which the function repeats itself. But we can also consider the limit of large periods, $L \to \infty$. What would happen is that the difference in frequencies in sine and cosine terms becomes infinitesimally small and they become a continuum. 

Recall coefficients are given by:

$$
\begin{align*}
c_n &= \frac{1}{L} \int_{x_0}^{x_0+L} f(x) e^{-i2 \pi nx /L}dx\\
&= \frac{\Delta \omega}{2 \pi} \int_{x_0}^{x_0+L} f(x) e^{-i \omega_n x /L}dx
\end{align*}
$$

Substitute this expression into the complex Fourier Series,

$$
\begin{align*}
f(x) &= \sum_{n=-\infty}^{\infty} c_n e^{i \omega_n x}\\
&= \sum_{n=-\infty}^{\infty} 
\left[
\frac{\Delta \omega}{2 \pi} \int_{x_0}^{x_0+L} f(u) e^{-i \omega_n u /L}du
\right]
e^{i \omega_n x}
\end{align*}
$$

It looks complicated, but if we let $L \to \infty$, then $\Delta \omega \to 0$. This simplifies to:

$$
\begin{align*}
f(x) &= \sum_{n=-\infty}^{\infty} 
\frac{\Delta \omega}{2 \pi} g(\omega_n)
e^{i \omega_n x}\\
&= \frac{1}{2 \pi} \int_{-\infty}^{\infty}g(\omega) e^{i \omega x} d\omega\\
\text{where}\\
g(\omega_n) &= \int_{-L/2}^{L/2} f(u) e^{-i \omega_nu}du
\end{align*}
$$

We apparently chose $x_0 = -L/2$. Put it together:

$$
f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{i \omega x} d\omega \int_{-\infty}^{\infty} f(u) e^{-i \omega u} du
$$

And we now define the **Fourier transform** of $f(x)$ to be:

$$
\~f(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx
$$

And we also have an inverse Fourier Transformation as:

$$
f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \~f(\omega) e^{+i \omega x} dx
$$

With the Fourier transformation, we can switch between equivalent views of analysing a signal, the observable domain or the frequency domain. You may see $f(t)$ instead of $f(x)$ because of the dependency on time. 

This helps apply frequency filters. 

Example says to find the Fourier Transform of $f(t) = Ae^{-\lambda t}$ assuming that $f(t)=0 \; \forall \; t \lt 0$. 

---

```yaml
title: Advanced Mathematics
subtitle: DLMDSAM01
Author: Dr. Robert Graf
publisher: IU International University of Applied Sciences
year: 2023
```

Recommends "Signals & Systems" by Oppenheim et al., 1997.

# Unit 2 - Integral Transformation
p.47 / 49

We want to cover:
+ What are integral transformations?
+ Combine effects of 2 functions using a convolution integral
+ Using convolutions to describe real-life applications
    + such as finite sensor resolution or image manipulation
+ Express periodic signals as a Fourier series.
+ Express time domain and frequency domain functions using Fourier transformation.

## Introduction

A [function space](https://en.wikipedia.org/wiki/Function_space) is a set of functions between 2 fixed sets. 

A [Transformation function](https://en.wikipedia.org/wiki/Transformation_(function)) $f$ is a function that maps a set $X$ to itself (i.e. $X \to X$). An example is a _linear transformation_, which is a linear algebra concept of a linear map that maps $V \to W$ between 2 vector spaces. A vector space is a set of elements called _vectors_. In geometry, we can [transform coordinates](https://en.wikipedia.org/wiki/Coordinate_system#Transformations) from coordinates from one system to the another, like from Cartesian to Polar. 

An [**Integral Transformation**](https://en.wikipedia.org/wiki/Integral_transform) maps a function from its original function space into another function space via integration. An integral transform is any transform $T$ of the following form:

$$
(Tf)(u)=\int_{t_1}^{t_2}f(t) K(t,u) dt
$$

The input of the transform is a function $f$, and the output is another function $Tf$. An integral transform is a _particular_ kind of mathematical operator. The function $K(t,u)$ is called the **kernel function**, or **integral kernel** in our case. It may also be referred to as the _nucleus_ of the transform. 

Some kernels even have an _inverse kernel_ that can yield an inverse transform;

$$
f(t) = \int_{u_1}^{u2} (Tf)(u)K^{-1}(u,t) du
$$

But for now, this is beyond the scope of learning. A **symmetric kernel** is one that is unchanged when the 2 independent variables are permuted, $K(t,u)=K(u,t)$.

A good example of integral transforms is the Laplace transform, a concept in differential equations. There's also the _path integral_. The Wiki article has a table of integral transforms as well. 

In this unit, we will be interested in looking into [Convolutions](https://en.wikipedia.org/wiki/Convolution) and [Fourier transform](https://en.wikipedia.org/wiki/Fourier_transform). 

## 2.1 Convolutions

### Definition of the Convolution

> There's a little background information we need to discuss before we dive into the _maths_. 

We take **resolution** to mean that detectors are not infinitely precise but can only measure a quantity up to a certain precision determined by the _resolution_ of the detector. I guess it's like the "limit of accuracy", but not "limit" in the calculus sense. Like how a rules might have cm and mm. It's resolution is therefore down to _mm_ as it can't measure more precisely. 

So, there's not a mathematical property associated with the concept. If we keep repeating the same measurement, we will get slightly different results for the same "true" physical values that are determined by the _intrinsic_ resolution of the device. It's more or less governed by probabilities and probability distributions. 

An **unbiased measurement** does not _shift_ the "true" value. It returns values around the same true value that may randomly and slightly fluctuate. Example could be a thermometer. 

By repeating the measurement many times, it is possible to determine the _resolution_ of the instrument, and hence the **intrinsic volatility** of the measurements made. That is probably statistics with measurements centred around a normal distribution. The lower the resolution, the wider the spread across the normal curve (larger variance). 

Deviations from the normal curve, perhaps with a tail of sorts, is an indication of bias as the resolution of the instrument is asymmetric. 

In a way, we are approaching some function...

$$
f(x) = g(x) + \varepsilon X
$$

where we have the true value of what is being measured with a hint of random error. Sorry for the wording, I've had maybe 3 hours of sleep and am on the train to Dublin at the moment. 

Many, many systems, objects, and processes are _stochastic_. By **stochastic**, we mean that stochastic systems are governed by the laws of probability, as opposed to deterministic systems that can be calculated precisely. Stochastic processes is an entirely fun topic including Brownian Motion and Markov Chains. 

Many measurements we observe are random, but follow a _distinct_ probability distribution governed by a specific process relevant for that system. Therefore, our $f(x)$ would describe a distribution in some way. 

Let's begin building:
+ Let $g(y)$ be a resolution function that determines how "true" values are observed (e.g. biased or unbiased with high or low resolution). 
+ Let $f(x)$ represent the underlying state of the system.
+ Let $h(z)$ represent measurements themselves. These will depend on $f(x)$ and $g(y)$, the state and resolution. 

Our independent variables $x,y,z$ all represent the actual true measurement, like a temperature. However, they each enter the consideration at "a different point," influenced by different parts.  

Essentially, the true value $x$ is a random number taken from probability distribution $X$. If it is a continuous probability distribution, the probability of obtaining any exact number is 0, because of technical infinite possibilities. Thus, we must calculate probability of getting true value in the interval $(x, \;x+dx)$ with $X \sim f(x)$. 

Our measuring instrument will (generally) shift the true value towards the observed value. We will not observe $x$, but $z$, shifted by amount $z-x$. 

In general, we do no know true value of $x$. If our instrument is unbiased, the resolution will _smear_ the true values evenly. And if biased, there will be an additional shift in one direction. Hence, the original interval $dx$ is **transformed** into the interval $dz$. The overall effect of the instrument is given by $g(z-x)dz$. 

For a particular observation, we combine the probabilities to obtain $f(x)dx \times g(z-x)dz$. To express this for any value, we integrate over all possible values of $x$ to obtain the distribution for all observable values of $z$:

$$
f * g = h(z) = \int_{- \infty}^{\infty}f(x)g(z-x)dx
$$

_equation 2.1_ $\to$ The Convolution of functions $f$ and $g$, typically denoted $f*g$. 

Page 51 of book looks at uniform distributions, but then states that's not common in practice. You are more likely to see something like a true value represented by $\Gamma$ (Gamma) functions. A measurement device represented by an unbiased Gaussian resolution function with $\mu = 0$, and $\delta = 1$.

Interesting consideration are measurements that may violate physical boundaries. These should be treated with extra consideration. 

### Applications in Image Processing

Why are we talking so much about Convolutions? Well, they are an integral part of image processing and usually at the core of image filters. Additionally, as the name suggests, they are kind of at the core of convolutional neural networks. 

We would consider $f(x)$, the true values, be the actual image itself. Then, $g(x)$ is the _kernel_ bound by a more literal resolution, and operates on the image. Hence, we can now consider a wide range of applications such as blurring, sharpening, and edge detection!

Note: the kernel is often denoted by either $K$ or $\omega$. 

It might be easiest to discuss how convolution can be used to blur an image. To do this, each part of the image is convolved with a Gaussian filter in the $x$ and $y$ directions. That is, we apply a two-dimensional (multivariate) Gaussian to each part of the image. Because images are typically represented by a collection of individual pixels $(x,y,r,g,b)$, the continuous convolution integral, in a discrete case, will look like:

$$
K*f(x,y) = \sum_{i=-a}^a \sum_{j=-b}^b K(i,j)f(x-i, y-j)
$$

So, in the case of Gaussian blurring, the kernel is given by a matrix like:

$$
K= \frac{1}{16}
\begin{bmatrix}
1 & 2 & 1 \\
2 & 4 & 2 \\
1 & 2 & 1
\end{bmatrix}
$$

The matrix is applied to each part of the image. The value of each pixel is transformed and influenced by its neighbouring pixels. Relative weights are given by the kernel. 

Take care at the edges where the kernel can potentially exceed the image boundaries. Here, you can either extend the image (e.g. repeat outermost pixels), or crop the image so the Kernel always fits inside the original image. 

This is a very interesting concept, maybe worth trying to implement. 

## 2.2 Fourier Transformation
p. 54

### Fourier Series

Using Taylor expansions, we can approximate a signal or a function. The Fourier series is another way to do this, but is better suited to periodic signals like those found in natural and engineering systems. The main idea of the **Fourier Series** is to express the signal as a sum of sine and cosine waves with varying strengths and frequencies. 

To create a Fourier Series for a function, the signal must satisfy the following _Dirichlet_ conditions:
+ Function must be periodic.
+ Function must have at most a finite number of discontinuities within a period (e.g. sawtooth function).
+ Function must have a _finitie_ number of maxima or minima within each period.
+ Integral over the function over a single period must exist and be finite. 


Interesting: The requirement that a function is periodic can be stated as the following condition:

$$
f(x) = f(x+L) = f(x+nL)
$$

You can see that the function _repeats_ itself after the full period $L$ has passed. It also implies the signal has no beginning nor an end. Usually, $2L$ is used instead of $L$ to denote a single full period. 

The Fourier series promised decomposition of a signal into a summation is given by:

$$
f(x) = \frac{1}{2} a_0 + \sum_{n=1}^{\infty} \left [ {
    a_n \cos \left( \frac{2 \pi n x}{L} \right) + b_n \sin \left( \frac{2 \pi n x}{L} \right)
} \right]
$$

_equation 2.4_

That looks complicated. If we let the period $L = 2 \pi$, it will simplify:

$$
f(x) = \frac{1}{2} a_0 + \sum_{n=1}^{\infty} \left [ {
    a_n \cos(nx) + b_n \sin(nx)
} \right]
$$

_equation 2.5_

A [sinusoidal](https://www.tutorialspoint.com/what-is-a-sinusoidal-wave-signal-definition-and-importance) signal is fancy for sine wave. We look at and discuss the Sawtooth Signal because it is actually a realistic signal that is frequently encountered in electrical engineering. The images in the book cover the transformation from time domain to frequency domain. It is interesting to contrast the Saw Tooth, composed of many, many frequencies, to just a smooth sine wave. 

side note - Euler's formula casually dropped

$$
e^{i\theta} = \cos(\theta) + i \sin(\theta)
$$

_Euler's Formula_

We can represent the sine and cosine terms in the Fourier Series by exponential function with imaginary arguments using **Euler's Formula** as follows:

$$
\begin{align*}
\sin{(\beta x)} &= \frac{1}{2i} \left( e^{i \beta x} - e^{-i \beta x} \right) \\\\
&\text{and...} \\\\
\cos{(\beta x)} &= \frac{1}{2} \left( e^{i \beta x} + e^{-i \beta x} \right)
\end{align*}
$$

We can _carefully_ the insert them into our previous equation _2.5_...

$$
\begin{align*}
f(x) &= \frac{1}{2} a_0 + \sum_{n=1}^{\infty} \left [ {
    a_n \cos(nx) + b_n \sin(nx)
} \right] \\\\
&= \frac{1}{2} a_0 + \sum_{n=1}^{\infty} 
\left [ {
    a_n \frac{1}{2} \left( e^{i n x} + e^{-i n x} \right) + 
    b_n \frac{1}{2i} \left( e^{i n x} - e^{-i n x} \right)
} \right]
\end{align*}
$$

This last part isn't explained well in the text, just kinda put there for some reason. I left it out until I understand more. 

Basically,

$$
\begin{align*}
f(x) &= \sum_{n=-\infty}^{\infty} c_n e^{inx} \\
\text{where}\\
c_n &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx
\end{align*}
$$

It looks confusing that the coefficient is a function of itself, but that is part of the transformation. We aren't creating something new, but redefining it to mean the same thing, just with trigonometry.

### Fourier Transformations

We relax the assumption that $L = 2 \pi$, the Fourier series is:

$$
f(x) = \sum_{n = -\pi}^{\infty} c_ne^{i2 \pi nx /L}
$$

You can write the frequency as $\omega_n = 2 \pi n/L$ to rewrite the above equation.

We also previously too the period $L$ to be a finite interval after which the function repeats itself. But we can also consider the limit of large periods, $L \to \infty$. What would happen is that the difference in frequencies in sine and cosine terms becomes infinitesimally small and they become a continuum. 

Recall coefficients are given by:

$$
\begin{align*}
c_n &= \frac{1}{L} \int_{x_0}^{x_0+L} f(x) e^{-i2 \pi nx /L}dx\\
&= \frac{\Delta \omega}{2 \pi} \int_{x_0}^{x_0+L} f(x) e^{-i \omega_n x /L}dx
\end{align*}
$$

Substitute this expression into the complex Fourier Series,

$$
\begin{align*}
f(x) &= \sum_{n=-\infty}^{\infty} c_n e^{i \omega_n x}\\
&= \sum_{n=-\infty}^{\infty} 
\left[
\frac{\Delta \omega}{2 \pi} \int_{x_0}^{x_0+L} f(u) e^{-i \omega_n u /L}du
\right]
e^{i \omega_n x}
\end{align*}
$$

It looks complicated, but if we let $L \to \infty$, then $\Delta \omega \to 0$. This simplifies to:

$$
\begin{align*}
f(x) &= \sum_{n=-\infty}^{\infty} 
\frac{\Delta \omega}{2 \pi} g(\omega_n)
e^{i \omega_n x}\\
&= \frac{1}{2 \pi} \int_{-\infty}^{\infty}g(\omega) e^{i \omega x} d\omega\\
\text{where}\\
g(\omega_n) &= \int_{-L/2}^{L/2} f(u) e^{-i \omega_nu}du
\end{align*}
$$

We apparently chose $x_0 = -L/2$. Put it together:

$$
f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{i \omega x} d\omega \int_{-\infty}^{\infty} f(u) e^{-i \omega u} du
$$

And we now define the **Fourier transform** of $f(x)$ to be:

$$
\tilde{f}(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx
$$

And we also have an inverse Fourier Transformation as:

$$
f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \tilde{f}(\omega) e^{+i \omega x} dx
$$

With the Fourier transformation, we can switch between equivalent views of analysing a signal, the observable domain or the frequency domain. You may see $f(t)$ instead of $f(x)$ because of the dependency on time. 

This helps apply frequency filters. 

Example says to find the Fourier Transform of $f(t) = Ae^{-\lambda t}$ assuming that $f(t)=0 \; \forall \; t \lt 0$. 


Quiz:
+ Suppose f(x) is the probability distribution of the actual temperature we wish to measure and g(y) is the resolution of the thermometer. Then, the convolution h(z) = f · g...
    + ... is the probability distribution of the temperature measurements
+ False Statements:
    + No special care needs to be taken when computing the convolution for pixels at the boundaries of an image.
    + The Fourier series for the periodic sawtooth signal has finitely many non-zero terms.
    + The Fourier series in terms of exponential functions with imaginary arguments applies only to functions that take on imaginary values.
    + Any continuous function can be written as a Fourier series.
    + The Fourier Transform $\tilde{f}(\omega)$ ... …can be used to extract contributions to a signal with a given amplitude.
    + The Fourier Transform $\tilde{f}(\omega)$ ... …can only be defined for periodic functions.
    + The Fourier Transform $\tilde{f}(\omega)$ ... …translates from the frequency domain to the “observable” (e.g. time) domain.
    + The Inverse Fourier Transform …is a periodic function.
    + The Inverse Fourier Transform …of a non-differentiable function is also non-differentiable.
    + The Inverse Fourier Transform …of an exponentially decaying function is a non-periodic function.
+ True Statements:
    + The terms in the Fourier series of a periodic signal with non-zero coefficients correspond to the frequencies that contribute to the signal.
    + When applying Gaussian blurring to an image, the rgb-values of a given pixel in the output are influenced by the neighboring pixels in the input images.
    + We can blur an image by viewing it as an array and performing a discrete convolution with a matrix representing a discretized Gaussian distribution.
    + The discrete convolution operation used in image processing is a special case of the convolution defined via integration.
    + The Fourier Transform $\tilde{f}(\omega)$ ... …of a 3⋅cos(x) is given by a single spike at w = 1.
    + The Inverse Fourier Transform …is derived from the Fourier series by taking the limit as period length goes to infinity.


---

This integral is a well-known result in mathematics and is often referred to as the Gaussian integral. It's a special case of the more general Gaussian integral used in probability theory and statistics. 

To show how this result is true, we can use a technique involving polar coordinates. Let's consider the integral:

$$
I = \int_{-\infty}^{\infty} e^{-u^2/2} du
$$

First, we'll square this integral:

$$
I^2 = \int_{-\infty}^{\infty} e^{-u^2/2} du \int_{-\infty}^{\infty} e^{-v^2/2} dv
$$

Now, we'll change to polar coordinates by considering $u = r\cos(\theta)$ and $v = r\sin(\theta)$. The Jacobian determinant for this transformation is $r$, and we integrate $r$ from $0$ to $\infty$ and $\theta$ from $0$ to $2\pi$:

$$
I^2 = \int_{0}^{\infty} \int_{0}^{2\pi} e^{-(r^2/2)} r\ d\theta \ dr
$$

The inner integral with respect to \(\theta\) gives \(2\pi\), and the outer integral can be evaluated using the substitution $s = r^2/2$:

$$
I^2 = 2\pi \int_{0}^{\infty} e^{-s} ds = 2\pi
$$

Therefore, $I = \sqrt{2\pi}$, which proves the result you stated:

$$
\int_{-\infty}^{\infty} e^{-u^2/2} du = \sqrt{2\pi}
$$

This integral is significant in various fields such as probability, statistics, and physics, where the Gaussian distribution appears frequently due to its various properties.

Let's break down the process step by step.

1. **Squaring the Initial Integral:**
When we square the initial integral, we are essentially considering the product of two identical integrals. The variables \(u\) and \(v\) are just dummy variables of integration, so they don't have any special meaning beyond that. This step is a mathematical trick that helps us transform the problem into one that can be tackled using polar coordinates.

2. **Introducing Polar Coordinates:**
In order to perform the integration in a different coordinate system (polar coordinates), we introduce a new set of variables \(r\) and \(\theta\) to replace \(u\) and \(v\). This is a common technique in integration, especially when dealing with problems involving circular symmetry. The variables \(r\) and \(\theta\) describe points in the plane in terms of distance from the origin and angle from the positive x-axis, respectively.

3. **The Jacobian Determinant:**
When you change from one set of variables to another, like going from Cartesian coordinates (\(u, v\)) to polar coordinates (\(r, \theta\)), you need to account for how the infinitesimal areas change. This is where the Jacobian determinant comes in. The Jacobian determinant is the determinant of the matrix of partial derivatives of the new variables with respect to the old variables. In this case, it's the determinant of the matrix:

\[
\begin{bmatrix}
\frac{\partial u}{\partial r} & \frac{\partial u}{\partial \theta} \\
\frac{\partial v}{\partial r} & \frac{\partial v}{\partial \theta}
\end{bmatrix}
\]

In polar coordinates, \(u = r\cos(\theta)\) and \(v = r\sin(\theta)\). So, the matrix becomes:

\[
\begin{bmatrix}
\cos(\theta) & -r\sin(\theta) \\
\sin(\theta) & r\cos(\theta)
\end{bmatrix}
\]

The determinant of this matrix is \(r\), which is why you see \(r\) appearing when changing variables in the integral. The Jacobian determinant captures how the area element in the new coordinate system scales compared to the area element in the old coordinate system.

When performing a change of variables in integration, you need to adjust the integrand by multiplying it by the absolute value of the Jacobian determinant, which ensures that you're properly accounting for the change in variables. In this case, the Jacobian determinant is \(r\), so when we change variables from \(u, v\) to \(r, \theta\), the new integrand becomes \(r\) times the original integrand. That's why you see the \(r\) factor when transforming the integral.

I hope this helps clarify the process! If you have any more questions, feel free to ask.

---

$$
e^{-t^2/2-iwt} = e^{-(1/2)(t+iw)^2+(i^2w^2)/2}
$$

# Convolutions

```yml
url: https://betterexplained.com/articles/intuitive-convolution/
```

As Always, check out [Supported Functions · KaTeX](https://katex.org/docs/supported) for $K^AT_EX$ support.

Per [Better Explained](https://betterexplained.com/articles/intuitive-convolution/), the fomal definition of a _convolution_ is:

$$
(f*g)(t)=\int_{-\infty}^{\infty} f(\tau)g(t-\tau)\ d\tau
$$

Many people might describe it as sliding windows as they try to escape through one, I can see that actually. If you ignore the integral, a convolution is just _"fancy multiplication"_.

## Hospital Analogy

This is actually a really good example. All credit given to **Better Explained**. You can relate it to Covid-19. Say we have the vaccine, or treatment for sick patients (either works), and the does is 3 units. Let you patients for the week be 1, 2, 3, 4, and 5 on Friday. 

How much medicine do we use each day?

$$
\begin{align*}
\text{Plan} * \text{Patients} &= \text{Daily Usage}\\
\begin{bmatrix}
3
\end{bmatrix} * 
\begin{bmatrix}
1 & 2 & 3 & 4 & 5
\end{bmatrix} &= \begin{bmatrix}
3 & 6 & 9 & 12 & 15
\end{bmatrix}
\end{align*}
$$

What if one does wan't enough though? Suppose we had to give 3 units on the first day, 2 on the second, and then 1 on the third. The patient's schedules overlap and it becomes... convoluted?

<style>
.katex {
	font-family: monospace;
}
</style>

$$
\begin{gather*}
\begin{array}{c}
	\text{Monday}\\
	\begin{array}{cc} 
		\begin{array}{r|}
		\text{Dose} \\ \text{Patients}
		\end{array} & \begin{array}{c}
		1 & 2 & 3&-&-&-&- \\
		-&-&5&4&3&2&1
		\end{array}\\
	\end{array}\\
	\\
	\text{Tuesday}\\
	\begin{array}{cc} 
		\begin{array}{r|}
		\text{Dose} \\ \text{Patients}
		\end{array} & \begin{array}{c}
		1 & 2 & 3&-&-&- \\
		-&5&4&3&2&1
		\end{array}\\
	\end{array}\\
	\\
	\text{Wednesday}\\
	\begin{array}{cc} 
		\begin{array}{r|}
		\text{Dose} \\ \text{Patients}
		\end{array} & \begin{array}{c}
		1 & 2 & 3&-&- \\
		5&4&3&2&1
		\end{array}\\
	\end{array}\\
\end{array}\\
\end{gather*}
$$

It's perfect if you use a monospace font. But you can see how we can slide the dosage over the patients day over day. We can multiply those and get an answer. Hense, _fancy multiplication_. 

## Calculus Definition

The result of a convolution is a new function. Additionally, since we pass arguments into function, we can think of them as lists, a list of arguments. But the convolution actually _reverses_ on of the lists. Even in the example above, as we slid the dose over the patients, the dose should be `[3, 2, 1]`, starting with 3 and ending with 1. However, for the example to work we reversed that. 

Also note that if you reverse the patients instead, you would obtain the same results. I think that is communtative. 

In the mathematical expression, the $f(t)$ is the unaltered list, and the $g(x-t)$ is the reversed list. 

> To **convolve** a _kernel_ with an input signal, flip the signal, move to the desired time, and accumulate every interaction with the kernel. 

For $g(x-t)$, it's customary to use $\tau$ as the _dummy_ variable. 

## Mathematical Properties of Convolution

A convolution is **communtative**!

$$
f*g=g*f
$$

Going back to the medicine example, the integral of the convolution is the total sum of medicine. The convolution at each point $t$ is the medicine per day, and the integral is the total in a given amount of time. 

Check this out. Our plan originally gave each patient $3+2+1=6$ total units of medicine. And there were $1+2+3+4+5=15$ total patients. So the total units used is $15 \times 6=90$ units! That is

$$
\int(f*g) = \int f \cdot \int g
$$

Note that this only applies to convolutions and not to general integrals. Therefore let it be stated that,

$$
\int f(x) \cdot g(x) \ne \int f(x) \cdot \int g(x)
$$

If you let $f(x) = g(x) = x$, you can see that the integral of the product would evaluate to $\frac{1}{3}x^3+c$, but the product of the integrals would be more like $\frac{1}{2}x^2 \cdot \frac{1}{2}x^2= \frac{1}{4}x^4$. 

## Convolution Theorem and the Fourier Transform

This is just a quick introduction, there's another article on the Fourier Transform I will also cover. I hear we use the fancy $\mathscr{F}$ to represent the Fourier series. It's objective is to convert a function $f(t)$ into a list of _cyclical_ ingredients $F(s)$. 

Think of it as an operator like

$$
\mathscr{F}\{f\}=F
$$

A Fourier series has more to do with frequency. In fact, I think the function needs to be periodic. So, the Fourier series give us a list of ingredients. 

For a simple math understanding, the Fourier Transform maps a function from a time based domain to a frequency based domain. I believe that is right. On a chart, if the x-axis is time, it would change to frequency, or the period of the function. A complex function, broken into many different sine and cosine waves, and mixed together with many different weights, would then fill many frequencies in a histogram fashion, where the period on the x-axis, and the weight on the y-axis (I think). 

A convolution (fancy multiplication) in the time domain is is multiplication in the frequency (Fourier) domain. So, if we map a convolution with a Fourier Transform, it becomes the multiplication of those transforms,

$$
\begin{gather*}
f*g \xmapsto{\mathscr{F}} FG \\
\mathscr{F}\{f*g\} = FG
\end{gather*}
$$

So, for $F(s)$ as a Fourier Transform of $f(t)$, we pass in a specific frequency and it (should) return the combined interaction of all data points with that frequency. 

Amazingly, it works backwards as well.

$$
\begin{gather*}
fg \xmapsto{\mathscr{F}} F*G \\
fg = \mathscr{F}\{F*G\}
\end{gather*}
$$

So, regular multiplication in the time domain becomes a fancy multiplication in the frequency domain. 

## Applications

Image blurring is a popular application. You can also unblur with the convolution theorem. The math is amusing.

Then there is the **Convolutional Neural Nets**, where the input signal is convolved with many kernels. The algorithm optimizes kernel weights to improve output. 

# The Fourier Transform

```yml
url: https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/
```

[An Interactive Guide To The Fourier Transform – BetterExplained](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/) 

More soon...