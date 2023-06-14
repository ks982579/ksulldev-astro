---
layout: '@layouts/NotesLayout.astro'
title: 'Calculus'
pubDate: 2023-06-14
description: 'This is the first post of my new Astro blog.'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths"]
---

# Calculus

## Index

Should probably have some sort of index thing here...

## Differentiation and Integration

https://www.malinc.se/math/latex/basiccodeen.php
https://kapeli.com/cheat_sheets/LaTeX_Math_Symbols.docset/Contents/Resources/Documents/index

### Derivatives and Functions of a Single Variable

Considering the example $v(t)=\dfrac{\Delta s}{\Delta t}$ just to see that by $\Delta t$ we mean an interval of time. It's technically the average velocity over that unit of time. A **Function** is a relation between two sets that associates every element of one set to exactly one element of the other set. 

We kind of brush over the concept of a _limit_, which is quite critical to the fundamentals of Calculus, but typically not invoked directly (so understandable). A **limit** is a self describing term for the result of a function, the dependent variable, as the independent variable(s) approach their limit's value. 

The slope of a curve is typically denoted as:

$$
m = \frac{\Delta y}{\Delta x}
$$
_definition 1.1_

However, for actual curved shaped curves, non-linear relationships typically, the slope is not exact. We can approximate the slope by decreasing the size of $\Delta x$, until it is indistinguishable from $0$. This gives us the change in $y$ per _infinitesimal_ change in $x$. The slope which would intercept the curve at both $x$ points now only touches the curve in the one spot. Geometrically, we refer to it as the _tangent_ line, the slope of the line tangent to the function $f(x)$ at the point $x$. 

Additionally, In math, equivalent is different from equal. **Equal means same in all aspects, whereas equivalent means similar but not identical**. Use the equal sign to express an identity, and equivalent to express, say, same truth values. 

Mathematically, it looks more like:

$$
f'(x) \equiv \dfrac{df(x)}{dx} \equiv \lim_{\Delta x\to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}
$$
_definition 1.2_

Note that (the importance of limits) a function is differentiable at $x_{t}$ if, and only if (IFF), the **limit** exists at point $x = x_t$. For the limit to exist, the definition of the limit requires that the quotient $\frac{f(x+\Delta x)-f(x)}{\Delta x}$ approaches the same value, $f'(x)$, from both the left and right. That's more _limit_ talk. 

I love derivatives by definition. Lets find $f'(x)$ for $f(x) = x^2$.

1. Define a derivative.
$$
f'(x) = \lim_{\Delta x\to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}
$$
2. Substitute value of $x$.
$$
=\lim_{\Delta x\to 0}\frac{(x+\Delta x)^2-x^2}{\Delta x}
$$
3. Expand Polynomial.
$$
=\lim_{\Delta x\to 0} \frac{x^2+2x\Delta x+ \Delta x^2-x^2 } { \Delta x }
$$
4. $x^{2} - x^{2} = 0$.
$$
=\lim_{\Delta x\to 0} \frac{2x\Delta x+ \Delta x^2 } { \Delta x }
$$
5. Divide by $\Delta x$.
$$
=\lim_{\Delta x\to 0} 2x+ \Delta x
$$
6. Let $\Delta x \to 0$ (basically substitution).
$$
= 2x
$$

The trick is that $\Delta x$ becomes infintessimally small as it approaches zero, but is always non-zero. Hence, does not cause function to become undefined. 

Additionally, for a function to be differentiable at $x_t$, a function must be continuous at $x_t$. If the function were not continuous at that point, it would also not have a limit. However, being continuous is a weak criteria. Take $f(x) = |x|$ for example. The derivative taken at $x=0$ from the left is $-1$, but from the right is $+1$. 

Using definition 1.2 and the laws of limits, we can find derivatives of many _fundamental_ functions. Let $n>0$ be a natural number and $a$ be a real-valued constant. 

$$
\frac{d}{dx} x^n=nx^{n-1}
$$
$$
\frac{d}{dx} e^{ax} = ae^{ax}
$$
$$
\frac{d}{dx} \ln (ax) = \frac {1} {x}
$$
$$
\frac{d}{dx} \sin (ax) = a \cos (ax)
$$
$$
\frac{d}{dx} \cos (ax) = -a \sin (ax)
$$
$$
\frac{d}{dx} \tan (ax) = \frac {a} {\cos^2 (ax)}
$$

What we have been discussing is just the first derivative of a function. The derivative goes by other name, such as _slope_ or [gradient](https://www.mathsisfun.com/gradient.html). 

#### Higher Order Derivatives

A derivative of a derivative is a **higher order derivative**. The results are obtained by applying the definition of a derivative onto the result of itself. 

$$
f''(x) \equiv \lim_{\Delta x\to 0}\frac{f'(x+\Delta x)-f'(x)}{\Delta x}
$$
_definition 1.3_

More generally, for the $n^{th}$ derivative;
$$
f^n(x) \equiv \frac {df^{n-1}} {dx} \equiv \lim_{\Delta x\to 0}\frac{f^{n-1}(x+\Delta x)-f^{n-1}(x)}{\Delta x}
$$
_definition 1.4_

... whenever the limit exists. 

#### Stationary Points

Imagine the parabola of $f(x)=x^2$. At $x=0$, the function achieves a _local minimum_. Graphically, the line tangent to the graph at this point is _horizontal_, with a slope $m=0$. 

For $f(x)=|x|$, $x=0$ is a _local extrema_, a critical point defined to be a place where the derivative is zero or does not exist. 

There are 3 different stationary points:
+ Function has _maximum_ at stationary point, $x=a$ if $f'(a) = 0$ and $f''(a) < 0$.
+ Function has _minimum_ at stationary point, $x=a$ if $f'(a) = 0$ and $f''(a) > 0$.
+ Stationary point at $x=a$ is called a **saddle point** if $f'(a) = 0$ and $f''(a)$ changes sing at the point.

Worth noting that these are only for _local_ min-max, and not the functions' _global_ min-max point. 

### Rules of Differentiation

#### Differentiation of Functions with a Constant

Let $a \in \mathbb{R}$ and be an arbitrary constant and $g(x)$ be some function.

$$
\frac {d} {dx} f(x) = f'(x) = a \frac {d} {dx} g(x) = a \times g'(x)
$$

#### Differentiation of Products

Suppose our function is the product of multiple functions (eg. $f(x) = u(x) \times v(x)$). Decomposing a function into product parts may ease the strain of applying the definition of a derivative to the entire function. The idea is to choose a $u(x)$ and $v(x)$ that are _easy_ to differentiate. Basically, we are about to derive the **product rule** of differentiation...

1. Define a derivative:
$$
f'(x) = \lim_{\Delta x\to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}
$$
2. Substitution of $u(x) \times v(x)$
$$
= \lim_{\Delta x\to 0}\frac{u(x+\Delta x) \times v(x+\Delta x)-u(x) \times v(x)}{\Delta x}
$$
3. Since $u(x+\Delta x) \times v(x) - u(x+\Delta x) \times v(x) = 0$, we add that in (tricky substitution):
$$
= \lim_{\Delta x\to 0}
\frac 
{u(x+\Delta x) \times v(x+\Delta x) - u(x) \times v(x) + u(x+\Delta x) \times v(x) - u(x+\Delta x) \times v(x)}
{\Delta x}
$$
4. Reorganize for show:
$$
= \lim_{\Delta x\to 0}
\frac 
{u(x+\Delta x) \times v(x+\Delta x) - 
u(x+\Delta x) \times v(x) +
u(x+\Delta x) \times v(x) -
u(x) \times v(x)}
{\Delta x}
$$
5. Factor out what we need:
$$
= \lim_{\Delta x\to 0}
\frac 
{u(x+\Delta x)[v(x+\Delta x) - v(x)]+v(x)[u(x+\Delta x)-u(x)]}
{\Delta x}
$$
6. Distribute $\Delta x$ 
$$
= \lim_{\Delta x\to 0}\left \{
u(x+\Delta x) \frac 
{v(x+\Delta x) - v(x)} {\Delta x}+
v(x)
\frac {u(x+\Delta x)-u(x)} {\Delta x}
\right \}
$$
7. As $\Delta x \to 0$, $u(x + \Delta x) \to u(x)$ and we have something like:
$$
f'(x) \equiv \frac {d} {dx} \left[ u(x) v(x) \right] = u(x) \frac {dv(x)} {dx} + v(x) \frac {du(x)} {dx} = uv' + vu'
$$
_definition 1.5_

We can give a try at something like $f(x)=u(x)v(x)w(x)$, applying the rule on itself, but to spare the complexity:
$$
f'(x) = u \frac {d} {dx} (vw) + vw \frac {d} {dx} (u)
$$
$$
= uv \frac {dw} {dx} + uw \frac {dv} {dx} + vw\frac {du} {dx}
$$

Q: Find the derivative of $f(x) = x^2 \sin(x)$

#### The Chain Rule

It might be hard to imagine right now, but sometimes it is easier to think of functions as functions of functions! Consider $f(x) = (x-1)^2$. If we let $u(x)=x-1$, then $f(x)=u(x)^2$. 
$$
\frac {dy} {dx} = \frac {dy} {du} \frac {du} {dx}
$$
_definition 1.6_

Let's walk through an example.
1. define our function
$$
f(x)=(x-1)^2
$$
2. Substitute
$$
f(u(x))=u(x)^2 \quad \text{where} \quad u(x)=x-1
$$
3. Define derivative
$$
\frac {dy} {dx} = \frac {dy} {du} \frac {du} {dx}
$$
4. What is $\dfrac {dy} {du}$?
$$
f(u) \frac {dy} {du} = u^2 \frac {dy} {du} =2u
$$
5. What is $\dfrac {du} {dx}$?
$$
u(x) \frac {du} {dx} = (x-1) \frac {du} {dx} = 1
$$
6. And therefore:
$$
f(u(x)) \frac {dy} {dx} = 2*u*1 = 2*u
$$
7. Sustitute $u(x) = x-1$
$$
\frac {dy} {dx} = 2(x-1)
$$

#### Differentiation of Quotients

Similar to the product rule, the **quotient rule** finds $f'(x)$ for $f(x)= \dfrac {u(x)} {v(x)}$. Basically, you can consider applying the product rule to $f'(x)$ for $f(x)= u(x)v(x)^{-1}$.
$$
f'(x) = \left (\frac {u(x)} {v(x)} \right )' = \frac {v(x)u'(x) - u(x)v'(x)} {v^2}
$$
_definition 1.7_

### Integrals of Functions of a Single Variable

#### Integrals as Area Under the Curve

So far, we have been using the definition of slope as $m= \dfrac {\Delta y} {\Delta x}$, which defines an average rate of change. We then consider progressively shorter $x$ intervals, $\Delta x \to 0$ to determine the instantaneous rate of change $f'(x)= \frac {dy} {dx}$. 

But given the rate of change, or the function of it, can we determine the coordinate values? For example, if given the function of velocity, can we determine an objects position at a given point in time? If velocity is change of position per unit time, expressed as $v(t)= \dfrac {\Delta s} {\Delta t}$, then we solve for position by $\Delta s = \Delta t \times v(t)$. Graphically, this looks like base time height, which thus becomes the _area under the curve_. 

Informally, we can approximate this value summing sub-intervals between $t_0$ and $t_n$. However, we will technically be summing rectangles, which will produce an error for a smooth curve. To increase accuracy, we shorten the interval, increasing the total number of intervals. And, if we let the interval length approach 0, we start our journey into integration.

Below is a function summing the intervals. Let $f(x)$ be a function defined over the interval $a<x<b$. We divide our interval $[a,b]$ into $n$ sub-intervals such at $a=\xi_1<\xi_2<...<\xi_n =b$. That means $f(x_i) \times (\xi_i-\xi_{i-1})$ is like our base times height.

$$
S = \sum_{i=1}^{n} f(x_i)(\xi_i-\xi_{i-1})
$$
_definition 1.8_

Note that the area under some curves over certain intervals is not finite (eg. $f(x)= \frac {1}{x}$). However, if the limit does exist, as $n \to \infty$ we define an integral as... realizing that $n$ may not be defined correctly above...
$$
I=\int_a^bf(x)dx
$$
_definition 1.9_

The integral is _undefined_ inf the limit does not exist. For closed, finite intervals, the limit can exist if the function is continuous over that interval. It is both interesting and convenient to consider integration to be the summation of infinite parts. 