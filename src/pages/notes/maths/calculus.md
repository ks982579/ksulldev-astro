---
layout: '@layouts/NotesLayout.astro'
title: 'Calculus'
pubDate: 2023-07-26
description: 'Notes on Calculus'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths", "vectors"]
---

```yaml
title: Advanced Mathematics
subtitle: DLMDSAM01
Author: Dr. Robert Graf
publisher: IU International University of Applied Sciences
year: 2023
```

# Calculus

https://en.wikibooks.org/wiki/LaTeX/Mathematics
[Wiki List of important Mathematical Series](https://en.wikipedia.org/wiki/List_of_mathematical_series)…

Also, [some useful calculus](https://www.symbolab.com/cheat-sheets/Derivatives#)

For LaTeX symbols, I use [This pdf](https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf).
[KaTeX Support](https://katex.org/docs/supported.html#environments)
## Side note

Certainly! Here's a quick cheatsheet of commonly used set notation in LaTeX markdown:

1. **Set Membership**: `a \in A` means "a belongs to set A."
2. **Set Non-Membership**: `b \notin B` means "b does not belong to set B."
3. **Set Cardinality**: `|A|` denotes the cardinality (number of elements) of set A.
4. **Set Union**: `A \cup B` represents the union of sets A and B.
5. **Set Intersection**: `A \cap B` represents the intersection of sets A and B.
6. **Set Difference**: `A \setminus B` or `A - B` represents the set difference of A and B.
7. **Subset**: `A \subset B` or `A \subseteq B` means that set A is a subset (or a proper subset) of set B.
8. **Superset**: `A \supset B` or `A \supseteq B` means that set A is a superset (or a proper superset) of set B.
9. **Empty Set**: `\emptyset` denotes the empty set.
10. **Universal Set**: `\mathbb{U}` or `\mathbb{V}` represents the universal set.
11. **Complement**: `A^c` or `A'` represents the complement of set A.
12. **Cartesian Product**: `A \times B` represents the Cartesian product of sets A and B.
13. **Power Set**: `\mathcal{P}(A)` represents the power set of set A.

Feel free to use these notations as needed in your LaTeX markdown!

[LaTeX Cheat Sheet & Quick Reference](https://quickref.me/latex)
[short-math-guide.pdf (ctan.org)](http://tug.ctan.org/info/short-math-guide/short-math-guide.pdf)
[Aligning equations with amsmath - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Aligning_equations_with_amsmath) Seems to have basics of using LaTeX. 


---
$y=f(x)$ actually has a lot to it
+ Expresses relationship between variables.
+ $y \rightarrow$ the dependent variable
+ $x \rightarrow$ the independent variable
+ $f \rightarrow$ the name of the function

Rate of change is very useful (eg. velocity is distance w/respect to time). **Differentiation** is the method of finding the rate of change given a function. And, given multiple independent variables, **partial differentiation** allows us to explore the rate of change with respect to each independent variable. 

**Integration** can be seen as the _inverse_ of differentiation, hence the alias _anti-derivative_. 

Suggested Readings: ...

## Differentiation and Integration

https://www.malinc.se/math/latex/basiccodeen.php
https://kapeli.com/cheat_sheets/LaTeX_Math_Symbols.docset/Contents/Resources/Documents/index
[Math Symbols and meaning](https://www.rapidtables.com/math/symbols/Basic_Math_Symbols.html)
[MicroSoft MathSolver](https://mathsolver.microsoft.com/en/solver?r=bi&ref=bi)

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

**EXAMPLE**

Lets find $f'(x)$ for $f(x) = x^2$.

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

**EXAMPLE**

From definition, calculate $f'(x)$ for $f(x)=2x+1$.

$$
\begin{align*}
f'(x) &= \lim_{\Delta x \to 0} \frac{f(x+\Delta x) - f(x)}{\Delta x}\\
&= \lim_{\Delta x \to 0} \frac{2(x+\Delta x) +1 - (2x +1)}{\Delta x}\\
&= \lim_{\Delta x \to 0} \frac{2x+ 2 \Delta x +1 - 2x - 1}{\Delta x}\\
&= \lim_{\Delta x \to 0} \frac{2x+ 2 \Delta x +1 - 2x - 1}{\Delta x}\\
&= \lim_{\Delta x \to 0} \frac{\cancel{2x} + 2 \Delta x + \cancel{1} - \cancel{2x} - \cancel{1}}{\Delta x}\\
&= \lim_{\Delta x \to 0} \frac{2 \cancel{\Delta x}}{ \cancel{\Delta x}}\\
&= \lim_{\Delta x \to 0}2\\
&= 2\\
\end{align*}
$$

$\Box$

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

**EXAMPLE**

Using the definition for $n^{th}$ derivative, calculate the $f''(x)$ for $f(x)=ax^2+bx+c$.

$$
\begin{align*}
f'(x) &=\lim_{\Delta x \to 0} \frac{f(x+ \Delta x) - f(x)}{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{(a(x+\Delta x)^2+b(x + \Delta x) + c) - 
(ax^2+bx + c)}{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{
ax^2+ 2ax \Delta x +a\Delta x^2+bx + b\Delta x + c - 
ax^2-bx - c}
{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{
2ax \Delta x +a\Delta x^2 + b\Delta x}
{\Delta x}\\
&=\lim_{\Delta x \to 0} 2ax +a\Delta x + b\\
&=\lim_{\Delta x \to 0} 2ax +a \cancelto{0}{\Delta x} + b\\
&=2ax + b\\
\end{align*}
$$

And then

$$
\begin{align*}
f''(x) &=\lim_{\Delta x \to 0} \frac{f'(x+ \Delta x) - f'(x)}{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{(2a(x+\Delta x)+b) - 
(2ax + b)}{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{2ax+ 2a\Delta x+b - 
2ax - b}{\Delta x}\\
&=\lim_{\Delta x \to 0} \frac{2a\Delta x}{\Delta x}\\
&=\lim_{\Delta x \to 0} 2a\\
&= 2a\\
\end{align*}
$$

$\Box$

#### Stationary Points

Imagine the parabola of $f(x)=x^2$. At $x=0$, the function achieves a _local minimum_. Graphically, the line tangent to the graph at this point is _horizontal_, with a slope $m=0$. 

For $f(x)=|x|$, $x=0$ is a _local extrema_, a critical point defined to be a place where the derivative is zero or does not exist. 

There are 3 different stationary points:
+ Function has _maximum_ at stationary point, $x=a$ if $f'(a) = 0$ and $f''(a) < 0$.
+ Function has _minimum_ at stationary point, $x=a$ if $f'(a) = 0$ and $f''(a) > 0$.
+ Stationary point at $x=a$ is called a **saddle point** if $f'(a) = 0$ and $f''(a)$ changes sing at the point.

Worth noting that these are only for _local_ min-max, and not the functions' _global_ min-max point. 

**EXAMPLE**

Find the stationary points for $f(x) = 3x^2 - 6x$. Determine if the points are minimum, maximum, or saddle.

The points are found in the first derivative, and described in the second derivative. 

We will use techniques over the general derivative definition

$$
\begin{align*}
f(x) &= 3x^2 - 6x\\
f'(x) &= 6x - 6\\
f''(x) &= 6\\
\end{align*}
$$

Now, you can solve for $f'(x) = 0$ and see the stationary point is at $x=1$. 

Also, since $f''(x)$ is positive, the rate of change will be increasing at this point. We don't need to check for saddle because it's a constant. Instead, you can envision this as a bowl shape, meaning this point is a **minimum**.

**EXAMPLE**

Suppose we have 6m of framing material and we want to build a rectangular window with sides $x$ and $y$. Choose the values of $x$ and $y$ to maximize the area because we want a lot of sunlight. 

We know that the area is $A=xy$, and we have $C=2x+2y$ amount of material. We want to maximize the output, so we need a function to solve for the derivative at 0.

Rearrange circumference formula

$$
\begin{align*}
C &= 2l + 2h\\
6 &= 2x + 2y\\
y &= \frac{6-2x}{2}\\
y &= 3-x\\
\end{align*}
$$

Pop that into the Area

$$
\begin{align*}
A &= xy\\
&= x(3-x)\\
&= -x^2+3x\\
\end{align*}
$$

Then, go for the derivative

$$
A'(x) = -2x+3
$$

And solve $x$ for $A'(x) = 0$

$$
\begin{align*}
A'(x) &= -2x+3\\
0 &= -2x+3\\
2x &= 3\\
x &= 3/2\\
\end{align*}
$$

Solve for $y=3-3/2=6/2-3/2=3/2$. 

It shouldn't be too much of a surprise that the largest area comes from a square. 

$\Box$

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
\begin{align*}
f'(x) &= u \frac {d} {dx} (vw) + vw \frac {d} {dx} (u) \\
&= uv \frac {dw} {dx} + uw \frac {dv} {dx} + vw\frac {du} {dx}
\end{align*}
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

7. Substitute $u(x) = x-1$

$$
\frac {dy} {dx} = 2(x-1)
$$


#### Differentiation of Quotients

Similar to the product rule, the **quotient rule** finds $f'(x)$ for $f(x)= \dfrac {u(x)} {v(x)}$. Basically, you can consider applying the product rule to $f'(x)$ for $f(x)= u(x)v(x)^{-1}$.

$$
f'(x) = \left (\frac {u(x)} {v(x)} \right )' = \frac {v(x)u'(x) - u(x)v'(x)} {v^2}
$$

_definition 1.7_

---

**EXAMPLE**

Find $f'(x)$ for 

$$
f(x) = \frac{(\sin(3x)-1)^2}{x^3}
$$

You can do this using the product rule or the Quotient rule. I like only remembering one formula so this is how I would do it... note that the $v'(x)$ will also require using the chain rule, which is the derivative of the function times the derivative of the inside. 

$$
\begin{align*}
f(x) &= v(x)u(x)\\
f'(x) &= v'(x)u(x) + v(x)u'(x)\\
&\therefore\\
v(x) &= (\sin(3x) -1)^2\\
u(x) &= x^{-3}\\
v'(x) &= 2(\sin(3x) - 1)*(3\cos(3x))\\
u'(x) &= -3x^{-4}\\
&\therefore\\
f'(x) &= 2(\sin(3x) - 1)*(3\cos(3x))*x^{-3}+(\sin(3x) -1)^2*-3x^{-4}\\
f'(x) &= \frac{x}{x} \frac{(6\cos(3x))(\sin(3x) - 1)}{x^{3}}-
\frac{3(\sin(3x) -1)^2}{x^{4}}\\
f'(x) &= \frac{(6x\cos(3x))(\sin(3x) - 1)}{x^{4}}-
\frac{3(\sin(3x) -1)^2}{x^{4}}\\
f'(x) &= \frac
{6x\cos(3x)(\sin(3x) - 1)-3(\sin(3x) -1)^2}
{x^{4}}\\
\end{align*}
$$
You can continue to factor this pulling out a $2(\sin(3x)-1)$ from each side, but doesn't make a huge difference. 

$\Box$

---

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

The integral is _undefined_ if the limit does not exist. For closed, finite intervals, the limit can exist if the function is continuous over that interval. It is both interesting and convenient to consider integration to be the summation of infinite parts. 

The function to be integrated, $f(x)$ is called the **integrand**. The process of integration kind of involves summing rectangles of area on the interval, and letting the width of the intervals approach 0. Certain functions in a summation can be expressed as an ordinary function, making the process easier. For example

$$
\sum_{i=1}^ni^2=\frac{1}{6}n(n+1)(2n+1)
$$

Let's look at some interesting integral properties or identities:

$$
\int_a^b0\text{dx} = 0
$$

$$
\int_a^af(x)\text{dx} = 0
$$

$$
\int_a^b[f(x)+g(x)]\text{dx} = \int_a^bf(x)\text{dx} + \int_a^bg(x)\text{dx}
$$

$$
\int_a^c[f(x)]\text{dx} = \int_a^bf(x)\text{dx} + \int_b^cf(x)\text{dx}, \forall \; b \in[a,c]
$$

$$
\int_a^bf(x)\text{dx}=-\int_b^af(x)\text{dx}
$$

#### Integrals as inverse of differentiation

A formal definition is:

$$
F(x) = \int_a^xf(u)\text{du}
$$
(1.14)

We are going to prove quick the **Fundamental Theorem of Calculus**, that states the derivative of the integral gives back the original integrand. 

Consider:

$$
F(x+\Delta x) = \int_a^{x+ \Delta x} f(u) \text{du}
$$

We split integral into workable pieces:

$$
F(x+\Delta x) = \int_a^{x} f(u) \text{du} + \int_x^{x+ \Delta x} f(u) \text{du}
$$

Then a quick substitute:

$$
F(x+\Delta x) = F(x) + \int_x^{x+ \Delta x} f(u) \text{du}
$$

Now, divide both sides by $\Delta x$. 

$$
\frac {F(x+\Delta x) - F(x)} {\Delta x}= \frac{1}{\Delta x}\int_x^{x+ \Delta x} f(u) \text{du}
$$

Then, we consider the limit as $\Delta x \to 0$ 

$$
\frac {dF(x)} {dx}= f(x)
$$

You may also see it written with definition of $F(x)$ substituted back in as:

$$
\frac {d}{dx} \left[ \int_a^xf(u)du \right] = f(x)
$$

Typically, the definition is written as:

$$
\int f(x)\text{dx} = F(x) + c
$$

Where $c$ is a constant. This is because the derivative of a constant $c$ will be $0$ and therefore the value is lost. However, when going backwards, we account for the lost value with a placeholder. We refer to $c$ as the **constant of integration**. 

And an interesting pattern that appears a bit in probability theory is, let $x_0$ be an arbitrary fixed point such that $x_0 \in (a,b)$. Then

$$
\int_a^bf(x)dx=\int_a^{x_0}f(x)dx+\int_{x_0}^bf(x)dx
$$

The above is nothing new. However, we are going to do a _switch-and-flip_! [New line in Latex Equation - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/262531/new-line-in-latex-equation) = "align", "flalign", "align*", "aligned".
[Art of Problem Solving](https://artofproblemsolving.com/wiki/index.php/LaTeX:Math#Display_Math)

$$
\begin{aligned}
\int_a^bf(x)dx &=\int_{x_0}^bf(x)dx-\int_{x_0}^{a}f(x)dx\\
&= F(b)-F(a)
\end{aligned}
$$

call this _equation 1.21_.

#### Integrals with Infinite Bounds of Integration

Previous definitions expected the bounds of integration to be finite. However, it is often the case that one or both bounds are infinite. We can extend the definition:

$$
\int_a^{\infty} f(x) dx = \lim_{b \to \infty} \int_a^b f(x) dx = \lim_{b \to \infty} F(b) - F(a)
$$

Where the limit as $b$ approaches $\infty$ is evaluated after the integral is calculated. That is, integrate _and then_ evaluate. 

#### Evaluation of integrals

Unlike derivatives, integrals usually cannot be evaluated as easily. As such, we have an extend list of recipes. Note, that $u$ is typically a function $u(x)$, and that $du$ is the derivative such that $du=u'(x)dx$. The notation can be a little confusing. [Khan Academy](https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-9/a/review-applying-u-substitution) has a huge section on integration techniques, and a u-substitution. 

$$
\begin{align*}
\int u^n du &= \frac{u^{n+1}}{n+t}+c \;\;\; \text{where}\; (n \ne -1) \\
\int \frac {u'}{u} &= \ln{(|u|)} + c \\
\int a^u du &= \frac{a^u}{\ln{a}} + c \\
\text{...}
\end{align*}
$$

Page 28… Needs to be wrapped up. Even the book says that large number of integrals can be found in tables of integrals. 

To evaluate unknown integrals, we try to transform them into forms that are easier to evaluate. Here's a quick reference of some techniques:
+ **Logarithmic integration**
+ **Decomposition** = When integrand is a linear combination of integrable functions. You can split integral of sum into sum of simpler integrals:
+ **Substitution** = Essentially reverses the chain rule for derivatives. Helps to integrate composite functions. Brings back memories. You need to substitute not just the $u$ but also find a $du$. 
    + Derivative of chain rule $w(u(x)) \to w'(u(x))u'(x)$ 
    + Think, we are going backwards. 
+ **Integration by parts** = Similar to substitution reversing the chain rule, integration by parts reverse the _product rule_. 
    + $\int uv'dx = uv - \int vu' dx$

We probably need many examples. 

Try to evaluate $\int_a^b x * \cos{(x)} dx$. _Hint_: look at the the above list… should make skip over all but integration by parts. 

Try to evaluate the following:

$$
\int \frac{1}{x^2+x}
$$

From page 30. It's a cool situation where you factor the bottom, use partial fraction decomposition, and notice things being to look a bit logarithmic. 

---

**EXAMPLE**

Evaluate the following integral

$$
F(x) = \int_0^1 x^2 \sin(x)dx
$$

The best way to probably handle this is integration by parts. 

$$
F(x) = \int u(x)v'(x)dx = u(x)v(x) - \int v(x)u'(x)dx
$$

I say this because in the derivative case it would be a power rule.

$$
\begin{align*}
u(x) &= x^2\\
v'(x) &= \sin(x)\\
&\therefore\\
u'(x) &= 2x\\
v(x) &= -\cos(x)\\
&\therefore\\
F(x) &= \left. (x^2)(-\cos(x)) \right|_0^1-\int_0^1 (-\cos(x))(2x)dx\\
F(x) &= (1)(-\cos(1))+2\int_0^1 (\cos(x))(x)dx\\
\end{align*}
$$

At this point the reader may become annoyed realizing they, again, have to perform another integration by parts... We take out the negative from the cosine to make things easier. 

$$
\begin{align*}
G(x) &= \int_0^1 (\cos(x))(x)dx\\
u(x) &= x\\
v'(x) &= \cos(x)\\
u'(x) &= 1\\
v(x) &= \sin(x)\\
G(x) &= \left. (x)(\sin(x))\right|_0^1-\int_0^1 (1)(\sin(x))\\
G(x) &= \sin(1) - ((-\cos(1)) - (-\cos(0)))\\
G(x) &= \sin(1) + \cos(1) - 1\\
\end{align*}
$$

And we put this back into the former equation

$$
\begin{align*}
F(x) &= -\cos(1)+2G(x)\\
F(x) &= -\cos(1)+2(\sin(1) + \cos(1) - 1)\\
F(x) &= 2\sin(1) + \cos(1) - 2\\
F(x) &= 1.68294197 + 0.540302305868 - 2 \approx 0.2232\\
\end{align*}
$$

$\Box$

---

**EXAMPLE**

p.17

Evaluate the following 

$$
\int e^{3x}\cos(x) dx
$$

You can probably tell, based on it being a product, that we will require integration by parts.

$$
\begin{align*}
u(x)v(x)\frac{d}{dx} &= u'v + uv'\\
uv &= \int u'v + \int uv' \\
\int u(x)v'(x) &= u(x)v(x) - \int u'(x)v(x)
\end{align*}
$$

To be honest, if we let $v(x)=e^{3x}$, I think we will be integrating forever. So...

also,

$$
\begin{gather*}
\frac{d}{dx} \sin(cx) = c\cos(x)\\
\frac{d}{dx} \cos(cx) = -c\sin(x)\\
\int \cos(cx)dx = \frac{1}{c}\sin(x)+c\\
\int \sin(cx)dx = -\frac{1}{c}\cos(x)+c\\
\end{gather*}
$$

just needed to write my notes,

$$
\begin{align*}
\int u(x)v'(x) &= u(x)v(x) + \int u'(x)v(x)\\
u(x) &= e^{3x}\\
v'(x) &= \cos(x)\\
u'(x) &= 3e^{3x}\\
v(x) &= \sin(x) \\ \\
\int e^{3x}\cos(x) &= e^{3x}\sin(x) - \int 3e^{3x}\sin(x)\\
\int e^{3x}\cos(x) &= e^{3x}\sin(x) - 3I(x)\\
\end{align*}
$$

We now calculate $I(x)$

$$
\begin{align*}
\int e^{3x}\sin(x)dx &= u(x)v(x) + \int u'(x)v(x)\\
u(x) &= e^{3x}\\
v'(x) &= \sin(x)\\
u'(x) &= 3e^{3x}\\
v(x) &= -\cos(x) \\ \\
\int e^{3x}\sin(x) &= -e^{3x}\cos(x) + \int 3e^{3x}\cos(x)\\
\end{align*}
$$

Funny enough, you can see how we have recreated our integral in question. We can stir to combine...

$$
\begin{align*}
\int e^{3x}\cos(x) &= e^{3x}\sin(x) - 3I(x)\\
I(x) &= -e^{3x}\cos(x) + \int 3e^{3x}\cos(x)\\
\int e^{3x}\cos(x) &= e^{3x}\sin(x) - 3\left(-e^{3x}\cos(x) + \int 3e^{3x}\cos(x)\right)\\
\int e^{3x}\cos(x) &= e^{3x}\sin(x) + 3e^{3x}\cos(x) - 9\int e^{3x}\cos(x)\\
\int e^{3x}\cos(x)+9\int e^{3x}\cos(x) &= e^{3x}\sin(x) + 3e^{3x}\cos(x)\\
10\int e^{3x}\cos(x) &= e^{3x} (\sin(x) + 3\cos(x))\\
\int e^{3x}\cos(x) &= \frac{e^{3x}}{10} (\sin(x) + 3\cos(x))\\
\end{align*}
$$

$\Box$

---

**EXAMPLE**

You are in a car moving at speed $v(t)$. How far has the vehicle travelled between $t_0=0s$ and $t_1=5s$?

$$
v(t) = \frac{t}{t^2+1}
$$

The anti-derivative of velocity is distance. So, it's a bounded integration problem. I am going to suggest $u$ substitution because I don't see integration by parts...

$$
\begin{align*}
\left.d(t)\right|_0^5 &= \int_0^5 \frac{t}{t^2+1} dt\\
u(t) &= {t^2+1}\\
\frac{d}{dt}u(t) &= 2t\ du\\ \\
\left.d(t)\right|_0^5 &= \int_0^5 \frac{t}{t^2+1} dt\\
&= \frac{2}{2}\int_0^5 \frac{t}{t^2+1} dt\\
&= \frac{1}{2}\int_0^5 \frac{u'}{u} du\\
\end{align*}
$$

Luckily, the bounds can be left where they are because they are just constant values. 

$$
\begin{align*}
\left.d(u(t))\right|_0^5 &= \frac{1}{2}\int_0^5 \frac{u'}{u} du\\
&=\left. \frac{1}{2}\ln(u(t))\right|_0^5\\
&=\left. \frac{1}{2}\ln(t^2+1)\right|_0^5\\
&=\frac{1}{2}\left(\ln(5^2+1)-\ln(0^2+1) \right)\\
&=\frac{1}{2}\left(\ln(26)-\ln(1) \right)\\
&=\frac{1}{2}\ln(26)\\
\end{align*}
$$

Nice $\Box$


---

### Taylor Approximation

**Taylor's Theorem**, named after Brook Taylor who expressed this relationship in 1712, provides an approximation to a function in the vicinity of a given point $x_0$ as a sum. The theorem requires the function $f(x)$ be continuous and that all derivatives up to order $f^n(x)$ exist in order to generate the $n^{th}$ degree polynomial approximation of $f(x)$ near $x_0$. You can always refer to [Wikipedia](https://en.wikipedia.org/wiki/Taylor%27s_theorem) for more information. However, per equation 1.21, which is

$$
\int_a^{a+\epsilon} f'(x) dx = f(a+ \epsilon) - f(a)
$$

We say that $x$ and $x-\epsilon$ are _in the vicinity_ of $a$, and rewrite the fecker as:

$$
f(a+ \epsilon) = f(a) + \int_a^{a+\epsilon} f'(x) dx
$$
Call this _equation 1.24_


Now comes the magic. We **must** assume that $\epsilon$ is very small. So small that we can assume $f'(x) \approx f'(a)$. A side-effect of this assumption is that

$$
f(a + \epsilon) \approx f(a) + \epsilon f'(a)
$$

We are kind of saying that $f(a+\epsilon)$ is $f(a)$ plus the tiny increment multiplied by the rate of change. After all, that is actually what we kind of assume integration is actually doing under the hood. So, then we express in terms of $x$ and $a$, assuming we stay close to the point $a$, to get the approximation

$$
f(x) \approx f(a) + (x-a) f'(a)
$$
call this _equation 1.26_. Sorry the numbering is a bit off.

---
My example:
Let $f(x) = 3x^2$. Compare the actual and approximate values if $a=6$ and $\epsilon = 0.1$. 

_actual_
$$
f(6+0.1) = 3(6.1)^2 = 3 \times 37.21 = 111.63
$$

_approximate_
Firstly, we can determine that $f'(x) = 6x$. Then,
$$
f(6.1) \approx 6 \times 6^2 + 0.1 \times 6(6) = 106 + 3.6 = 111.6
$$

That's not a bad approximation.

---

This approximation is called the **linear approximation** of $f(x)$ near $x=a$. It is a tangent line approximation to a function $f$. We obtain better approximations with more information about $f$, which is to say, using higher order derivatives. Because $f$ is $n$-differentiable, we continue to apply approximations to each derivative:

$$
\begin{align*}
f'(x) &\approx f'(a) + (x-a)f''(a), \\
f''(x) &\approx f''(a) + (x-a)f'''(a), \\
f'''(x) &\approx f'''(a) + (x-a)f^4(a), \\
&\text{...}\\
f^{(n-1)}(x) &\approx f^{(n-1)}(a) + (x-a)f^n(a).
\end{align*}
$$

We then substitute the estimate of $f'(x)$ into equation 1.24 

$$
\begin{align*}
f(a + \epsilon) &\approx f(a) + \int_a^{a + \epsilon} \left[ 
f'(a) + (x-a)f''(a)
\right]dx \\
&= f(a) + \epsilon f'(a) + \frac{\epsilon^2}{2} f''(a)
\end{align*}
$$

It is like integrating the $\epsilon$ portion, but taking another derivative of the $f(a)$ function. You can continue the process either forever or until no more higher order derivatives exist. That will yield the $n^{th}$-degree Taylor polynomial approximation. A better expression, which I suppose assumes that $\epsilon = (x-a)$:

$$
f(x) \approx f(a) + (x-a)f'(a)+\frac{(x-a)^2}{2!}f''(a)+\text{...}+\frac{(x-a)^n}{n!}f^n(a)
$$

Call this _equation 1.27_. 

## Partial Differentiation

We will now consider rates of change of functions that depend on more that one independent variable. Derivatives of functions of single variables are related to the change, or gradient, of that function. Consider the function $z = f(x, y) = x^2 + y^2$. It has a specific gradient in all directions of the $xy$ plane. It's probably easiest to consider working in the 3-D space, as we can imagine it visually, before moving to higher spacial dimensions that range from difficult to impossible to imagine visually. 

[Wiki](https://en.wikipedia.org/wiki/Partial_derivative) has a small section on partial derivatives. I mostly looked it up to see what the symbol was. I thought it was greek but I'm getting that it is just a _stylish_ cursive 'd'. It will indicate differentiation is performed partially with respect to a single variable, keeping other constant. 

The derivative, once a tangent line of our 2-D graph, becomes a _tangent plane_ in a 3-D graph. And you can imagine it being a _tangent volume_ in a 4-D graph, which is why it is harder to visually represent higher dimensions. Circle back to our 3-D logic, we can think of taking a derivative now a just a multi-step problem. Before, 1 independent variable meant one, sometimes big, step. Now, we determine the rate of change on each axis, holding the other variable(s) constant. Each step is a **partial derivative**, which is to say, we are only finding part of the rate of change, or gradient, of the function. Let's work up some equations.

$$
\frac {\partial f}{\partial x} = \lim_{\Delta x \to 0} \frac {f(x+\delta x, y)-f(x,y)} {\Delta x}
$$

_equation 1.28_

But, don't forget about the other independent variable…

$$
\frac {\partial f}{\partial y} = \lim_{\Delta y \to 0} \frac {f(x, y+\Delta y)-f(x,y)} {\Delta y}
$$

_equation 1.29_

Some other notations might be

$$
\frac {\partial f}{\partial x} = \frac{\partial}{\partial x}f(x,y) \equiv f_x = \partial_xf
$$

_equations 1.31_

They are different ways of writing the same thing, but I might recommend sticking with the first honestly. 

You can also calculate higher order derivatives, provided that the relevant limits exist. Let's look as some possibilities considering we only have 2 independent variables:

$$
\begin{align*}
\frac{\partial}{\partial x} \left({
\frac{\partial f}{\partial x} 
}\right) = \left( {
\frac {\partial^2f}{\partial x^2}
} \right) = f_{xx} \\
\frac{\partial}{\partial y} \left({
\frac{\partial f}{\partial y} 
}\right) = \left( {
\frac {\partial^2f}{\partial y^2}
} \right) = f_{yy} \\
\frac{\partial}{\partial x} \left({
\frac{\partial f}{\partial y} 
}\right) = \left( {
\frac {\partial^2f}{\partial x \partial y}
} \right) = f_{xy} \\
\frac{\partial}{\partial y} \left({
\frac{\partial f}{\partial x} 
}\right) = \left( {
\frac {\partial^2f}{\partial y \partial x}
} \right) = f_{yx}
\end{align*}
$$

Under sufficient continuity conditions, the following relationship should hold:

$$
\left({
\frac {\partial^2f}{\partial x \partial y}
}\right) = \left({
\frac {\partial^2f}{\partial y \partial x}
}\right)
$$


I would recommend taking the time now to practice.
1. Find the _partial_ first derivatives of $f(x,y) = 3x^2y^2+y$. Then, find the second order derivatives from each partial with respect to the other independent variable. Compare them, are they the same?

$$
\frac{\partial f}{\partial x} = 6xy^2
$$

Notice that the $y$ becomes 0. This is because $\frac{d}{dx}y = 0$, hopefully that is written correctly.

$$
\frac{\partial f}{\partial y} = 6x^2y + 1
$$

Hopefully that makes enough sense. Kind of like just pretending that $x^2$ doesn't exist. Now…

$$
\begin{align*}
\frac{\partial}{\partial x} \left({
\frac{\partial f}{\partial y} 
}\right) &= \frac{\partial f}{\partial y} 6xy^2 = 12xy \\
&\text{AND...} \\
\frac{\partial}{\partial y} \left({
\frac{\partial f}{\partial x} 
}\right) &= \frac{\partial f}{\partial x} 6x^2y +1 = 12xy
\end{align*}
$$

---

**EXAMPLE**

Find the first order partial derivatives of 

$$
f(x,y) = xy^2+x
$$

This isn't too bad...

$$
\begin{align*}
\frac{\partial f}{\partial x} &= y^2 + 1\\
\frac{\partial f}{\partial y} &= 2xy\\
\end{align*}
$$

Remember to hold other variables constant when integrating for your one.

$\Box$

---

**EXAMPLE**


Find the first order partial derivatives of 

$$
f(x,y) = xy^2+xz^2+xyz
$$

Again, this isn't too bad, just take it one step at a time.

$$
\begin{align*}
\frac{\partial f}{\partial x} &= y^2+z^2+yz\\
\frac{\partial f}{\partial y} &= 2xy+xz\\
\frac{\partial f}{\partial z} &= 2xz+xy\\
\end{align*}
$$

Remember to hold other variables constant when integrating for your one.

$\Box$

---

**EXAMPLE**

Find $\partial f / \partial x$ for the following:

$$
f(x,y) = xy \ln(2x)
$$

This is giving product rule vibes. 

$$
\begin{align*}
uv &= u'v+uv'\\
u(x) &= xy\\
v(x) &= \ln(2x)\\
u'(x) &= y\\
v'(x) &= \frac{2}{2x}=\frac{1}{x}\\ \\
\frac{\partial f}{\partial x} &= y\ln(2x) + xy\frac{1}{x}\\
&= y\ln(2x) + y\\
&= y(\ln(2x) + 1)\\
\end{align*}
$$

---

This [LibreTexts.org](https://math.libretexts.org/Bookshelves/Calculus/Calculus_3e_(Apex)/12%3A_Functions_of_Several_Variables/12.03%3A_Partial_Derivatives) section looks like a beautiful explanation of partial derivatives. 

### Total Differential

I got ahead of myself asking for the _whole_ derivative above. Basically, we want to investigate the rate of change if we move in any direction in the domain. That is, a little in the $x$ (or $\Delta x$), and a little in the $y$ as well. 

$$
\Delta f(x,y) = f(x+\Delta x,\; y+ \Delta y) - f(x,\;y)
$$

The book then does the algebraic trick of adding and subtracting by the same term, $f(x,\;y+\Delta y) - f(x,\;y+\Delta y) =0$. This allows to factor into desirable quotients. You can also multiply by $\frac{\Delta x}{\Delta x}=1$ and $\frac{\Delta y}{\Delta y}=1$. It looks a little funny, but if you let the deltas approach 0, you get:

$$
df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy
$$

_equation 1.32_. 

And for $n$ independent variables

$$
df = \frac{\partial f}{\partial x_1}dx_1 + \frac{\partial f}{\partial x_2}dx_2 + \text{...} + \frac{\partial f}{\partial x_n}dx_n
$$

_equation 1.33_. 

[LibreTexts.org](https://math.libretexts.org/Bookshelves/Calculus/Calculus_3e_(Apex)/12%3A_Functions_of_Several_Variables/12.04%3A_Differentiability_and_the_Total_Differential) has it's own section on the Total Differential as well that defines _Total Differential_ similarly, but explains it a little bit better. To better understand, let $\Delta x = dx$ represent a change in the independent variable $x$. We can assume that when $dx$ is small, $dy \approx \Delta y$, the change in y resulting from the change in $x$. The assumption also includes that as $dx$ gets smaller, the difference between $\Delta y$ and $dy$ goes to 0. _That is_, as $dx \to 0$, the _error_ in approximating $\Delta y$ with $dy$ also goes to 0. An interesting distinction between $\Delta y$ and $dy$. 

If we expand this logic to a function with 2 independent variables, like $z=f(x,y)$, we would like $\Delta x = dx$ and $\Delta y = dy$. Then, the change in $z$ becomes $\Delta z = f(x+dx, y+dy)-f(x,y)$. And we approximate $\Delta z \approx dz = f_xdx+f_ydy$. This means the total change in $z$ is approximately the change cause by $\Delta x$ and $\Delta y$. 

It's really just an approximation. [Wikipedia](https://en.wikipedia.org/wiki/Total_derivative) has an article as well. 

### Chain Rule

We start with the total derivative from 1.32, and follow a similar approach to single variable derivatives:

$$
\begin{align*}
\frac{df}{du} = \frac{\partial f}{\partial x} \frac{dx}{du} + \frac{\partial f}{\partial y} \frac{dy}{du}
\end{align*}
$$

You can go further with deeper nesting of functions as well if needed:

$$
\frac{df(u(v(x)))}{dx} = \frac{\partial f}{\partial u} \frac{\partial u}{\partial v} \frac{dv}{dx}
$$

That's it for this section. A few examples would probably be nice. 

---

**EXAMPLE**

Find total derivative for the following:

$$
f(x,y)=cos(xy)
$$

The total derivative is slightly different than regular. It's the sum of first order derivatives.

$$
\begin{align*}
f_x(x,y) &= -y\sin(xy)\\
f_y(x,y) &= -x\sin(xy)\\
df(x,y) &= -y\sin(xy)dx - x\sin(xy)dy\\
\end{align*}
$$

---

**EXAMPLE**

Find total derivative for the following:

$$
f(x,y)=cos(x^2+2y)
$$

This is similar to above, but we have basically another function within our function. Probably requires the chain rule. Technically, so did the other. 

$$
\begin{align*}
\frac{\partial f}{\partial x} &= \frac{\partial f}{\partial u}\frac{\partial u}{\partial x}\\
f_x(x,y) &= (2x)(-\sin(x^2+2y))\\
f_y(x,y) &= (2)(-\sin(x^2+2y))\\
df(x,y) &= (2x)(-\sin(x^2+2y))dx + (2)(-\sin(x^2+2y))dy\\
df(x,y) &= 2(x\ dx+ dy)(-\sin(x^2+2y))\\
\end{align*}
$$

$\Box$

---
## Multiple Integrals

We will again look at a function $f(x,y)$ with specific bounds in both the $x$ and $y$ directions, represented by a region **$R$**, enclosed by a contour **$C$**. Following the approach from before, we divide the region into $N$ areas of $\Delta A_p$. And we sum the product of the area times the small change in the dependent variable. 

$$
S = \sum_{p=1}^N{
    f(x_p,y_p)\Delta A_p
}
$$

Of course, this is monotonous, yet non-trivial, algebra. Calculus comes in as we let $N \to \infty$, which implies that $\Delta A_p \to 0$. 

$$
I = \int_R f(x,y)dA
$$

_equation 1.35_

where we consider $dA$ to be an infinitesimally small area in the $(x,y)$ plane. 

Now, if we assume to choose small rectangles in the $x$ and $y$ directions, we write $\Delta A = \Delta x \Delta y$. As both independent variable deltas tend to zero, we write

$$
I = \int \int_R f(x,y)dxdy
$$

_equation 1.36_. 

Yes, that is a double integral. Sometimes, it matters the order of integration. 

$$
I = \int_{y=c}^{y=d} \left[ {
  \int_{x=x_1(y)}^{x=x_2(y)} f(x,y)dx
} \right] dy
$$

_equation 1.37_

You can reverse it as well, I'll leave that to your imagination. 

But, equation 1.37 needs a little elaboration. The inner integral treats $y$ as a constant when $x$ is being evaluated. And the outer integral then integrates $y$. If possible, try to express the inner bounds in terms of the outer independent variable. 

The book covers an example on page 38 where a triangular region form $(x,y)=(0,0)$ to $x+y=1$ is evaluated. This allows the inner integral to be expressed as a function of the outer independent variable. 

I would consider a more difficult example where we are given a range for $z$ where we then calculate the bounds of $(x,y)$ to evaluate the integral over. 

Additionally, we easily extend the notation for more independent variables:

$$
\int \int \int_V f(x,y,z)dxdydz
$$

_equation 1.39_

---

**EXAMPLE**

Evaluate the following:

$$
I(x,y) = \iint \frac{x}{y}\ dx \ dy
$$

A good point to make is that, we are looking for a solution that satisfies this condition

$$
\frac{\partial^2f}{\partial x \partial y} I(x,y) = \frac{x}{y}
$$

So, a _particular_ solution can be as follows...

$$
\begin{align*}
I(x,y) &= \iint \frac{x}{y}\ dx \ dy\\
&= \int \frac{x^2}{2y}\ dy\\
&= \frac{x^2}{2} \ln(|y|)\\
\end{align*}
$$

We ignored the constant of integration for a moment. Apparently to go from _particular_ to **general**, you want to add in the constants... but they aren't normal constants anymore. They can be entire functions, but only of one variable. That is how they would cancel out in the end. 

$$
\begin{align*}
\frac{\partial^2f}{\partial x \partial y} c(x,y) &= 0\\
c(x,y) &= f(x) + g(y)\\
\end{align*}
$$

And therefore, we add in the _constants of integration_

$$
\begin{align*}
I(x,y) &= \frac{x^2}{2} \ln(|y|) + c(x,y)\\
I(x,y) &= \frac{x^2}{2} \ln(|y|) + f(x)+g(y)\\
\end{align*}
$$


---

**EXAMPLE**

Evaluate the definite integral below for $-1 < x < 1$ and $-1 < y < 1$:

$$
\iint_R xy \ dx\ dy
$$

The region is bound by constants, which simplifies things.

$$
\begin{align*}
\iint_R xy \ dx\ dy &= \int_{-1}^1\int_{-1}^{1} x\ dx \ y \ dy\\
&= \int_{-1}^1\left. \frac{1}{2} x^2\right|_{-1}^{1} \ y \ dy\\
&= \int_{-1}^1 \frac{1}{2} (1^2-(-1)^2) \ y \ dy\\
&= \int_{-1}^1 \frac{1}{2} (1-1) \ y \ dy\\
&= \int_{-1}^1 0  \ dy\\
&= 0
\end{align*}
$$

The book evaluated both $x$ and $y$, both equating to zero, but that is unnecessary.

---


## Calculus of Variations

**Calculus of Variations** is an _extremely_ important extension of the idea of finding local extrema of _real-valued_ functions through the use of stationary points.

Looks like we are moving towards finding **extrema**, which are _maxima_ and _minima_ values, the idea behand calculus of variations. It is often useful to find a function $f(x)$ that yields extreme values. 

The example we are looking at is a rope tied to two points, $A$ and $B$. With no external forces other than gravity, and the initial motion is at rest, the force of gravity acts on each part of the rope, which takes the shape where the total potential energy, expressed by the integral over all small segments of the rope, is minimal. We want to find the function $y(x)$ that described the shape of the hanging rope with the minimal potential energy. 

To introduce the calculus of variations, start with:

$$
I = \int_a^b F(y, y', x) dx
$$

_equation 1.40_

...where $a$, $b$, and $F$ are given by the nature of the problem. The limits $a$ and $b$ of the integral are fixed, the correspond to the endpoints of the rope. Functions that take in other functions as their input and result in a scalar as their output are called **functionals**. That is, the argument of a functional is an entire curve. We say that $I$ is a functional of $y(x)$, denoted as:

$$
I = I [ y(x) ]
$$

_equation 1.41_

So, we use the square brackets to actually indicate that $I$ is a functional, instead of a function of $\mathbb{R}^n$. Think of $I[y(x)]$ as a replacement for our use of $f(x)$, but remember that they are technically different concepts. 

A _stationary_ point $y(x)$ of the functional is a point where the functional $I$ does not change if the $y(x)$ is _perturbed_ by a small amount. We look for the curves $y(x)$ that are stationary value(s) of the integral $I$, and determine whether such curves are extrema of the integral. It is possible for the integral to have more than on stationary points. 
+ Are stationary points then when the derivative is 0?

---

Let's break down the concept of the calculus of variations in simple terms.

Imagine you have a path or a curve represented by the function $y(x)$. This curve could be anything like the path of a ball flying through the air or the shape of a hanging cable. Now, we want to find a special point on that curve that has a unique property.

This special point is called a "stationary point." A stationary point is a point where something interesting happens. In this case, it's a point where the curve y(x) doesn't change much if we make a small change to it.

To understand this, let's think about a ball rolling down a hill. If you imagine the path the ball takes, it might go up and down, left and right, but it eventually reaches the bottom of the hill. At that bottom point, if you move the ball just a tiny bit to the left or right, it won't really make a big difference because it's already at the lowest point. That lowest point is like a stationary point.

Similarly, in the calculus of variations, we're looking for a curve (represented by the function $y(x)$) where if we make a small change to it, the overall effect on the curve is very small. It's like finding the path that is already at its best possible shape.

Now, the functional $I[y(x)]$ is a way to measure how good a curve is. It's like a scoring system for curves. If a curve gets a higher score, it means it's better according to certain criteria. The functional takes into account the shape of the curve and how it behaves.

So, when we say that a stationary point $y(x)$ of the functional $I$ is a point where the functional doesn't change if the curve is perturbed by a small amount, it means that at that point, the curve is already at its best shape according to the scoring system. No matter how you slightly wiggle or change the curve, the score won't improve or change much because it's already as good as it can be.

Finding these special points, these stationary points, helps us understand and optimise different processes in the world, like finding the shortest path between two points or the shape that minimises the energy of a system. It's a powerful tool in mathematics and science to figure out the best solutions for various problems.

\- ChatGPT 

---

Ok, my confusion was around the statement saying that the functional doesn't change. Actually, what we mean is that the functional $I$ changes so little that it is not noticeable or insignificant when compared to the overall value of the functional. We represent change in the functional like:

$$
y(x) \to y(x) + \epsilon \eta(x)
$$

_equation 1.42_

By our conversation, we require that $I$ doesn't change (much) if we move our stationary a tiny about, say $\varepsilon$, using any (sufficiently well-behaved) function $\eta(x)$. We write something like:

$$
{\frac{dI}{d \epsilon}}\rvert_{\epsilon = 0} = 0 \forall \eta(x)
$$

_equation 1.43_

I believe that reads like the small changes in $I$, evaluated at 0, are equal to 0 for all tiny changes in our stationary point. 

Now, sub that into our previous definition of the functional:

$$
I \left[ { y(x), \epsilon } \right] = \int_a^bF \left( {
    y+\epsilon \eta, y' + \epsilon \eta', x
} \right) dx
$$

_equation 1.435_

I suppose we consider all functions to be _well behaved_, especially when considering situations related to physical examples. And I assume by _well behaved_ we mean… continuous. 

We then, for some reason, throw in an example of **Taylor Series with Multiple Variables**. It is like single variable, but where you basically perform polynomial expansion on higher order terms. And with little to no introduction to _vectors_, the book generalises the formula to any number of variables denoted by the vector $\vec{x}$. Check out page 41 of the course text…

And then we push on to incorporate the Taylor series with our calculus of variations. We make some substitutions, and eventually get to the **Euler-Lagrange** equation:

$$
\frac{\partial F}{\partial y} = \frac{d}{dx} \left( {\frac{\partial F}{\partial y'}} \right)
$$

_equation 1.48_

The importance of the **Euler-Lagrange** equation is that it can be used to find stationary paths of a wide class of functions in a standardised manner. What types of functions can we use this theory with? Those are functions that have the specified form 

$$
I[y(x)] = \int_a^bF(y, y', x) dx \; \text{ with } \; y(a)=y_a \; \text{ and } \; y(b)=y_b
$$

It has bounds, and depends on the function $y$ and its derivative, and even the main independent variable $x$. However, if there is a dependency on the second derivative or higher order derivatives, the theory cannot be applied. Additionally, you don't need to depend on $y$, $y'$, or $x$ all at once, but they can. 

#### Functional Example

Can we look at an example? How about proving the shortest path between 2 points is a straight line?

Let's start with 2 points $A \text{ and } B$.  They have points $(x_1, y_1)$ and $(x_2, y_2)$. But remember that we like things in terms of each other, so it's more like… $(x_1, f(x_1))$, and same for the other. The wonderful _Pythagoras' Theorem_ states that $c^2=a^2+b^2$.

For small / tiny segments of the path we will measure for the shortest distance, we can approximate the length with the distance formula $ds= \sqrt {(dx)^2+(dy)^2}$, assuming that $dx$ and $dy$ are small enough to justify a useful approximation. We are then letting $dy=f'(x)dx$ and factoring out the $dx$.

$$
ds = \sqrt {1+y'^2}dx
$$

Now, the total length of the line can be expressed as the sum of all of the tiny bits, which means as an integral:

$$
L = \int_a^bds = \int_a^b \sqrt{1+y'^2}dx
$$

_eq. 1.50_

Remember, we kind of don't know what $y(x)$ is yet, it's just a place holder still at this point. However, we want to calculate the path that leads to a _stationary point_ for $L$. In this case, a minimum distance between $A$ and $B$. 

Let $I[y(x)]$ be a functional that maps functions satisfying $y(a)=y_a$ and $y(b)=y_b$ to the real numbers. Any such function for which,

$$
\frac{d}{d \varepsilon}I[y(x)+ \varepsilon \eta(x)] |_{\varepsilon=0}=0
$$

...for all $\eta(x)$ with $\eta(a) = \eta(b) = 0$, is said to be a **stationary path** of $I$. This is kind of saying that if there is no perturbation ($\varepsilon = 0$), we are looking for a local extrema, when a derivative is 0. Because the function is a curve, I suppose that is why we would call it a _path_ instead of a point. 

Let's use **Euler-Lagrange** equation. Note, the function in the integral $L$ does not explicitly depend on $y$. This conveniently implies that $\frac{\partial F}{\partial y}=0$. Write the Equation!

$$
\frac{d}{dx} \left( \frac{\partial F}{\partial y'} \right) = 0
$$

So, for the derivative of a function to equal Zero, it must be a constant value! That's interesting to know. Anyway, Looks like we do a little bit of literal substitution here:

$$
c = \frac{\partial F}{\partial y'} = \frac{y'}{\sqrt{1 + (y')^2}}
$$

That is the derivative of the function $F=\sqrt{1+y'^2}$ with respect to $y'$. Then, go through the painful algebraic steps of getting to

$$
dy=\frac{c}{\sqrt{1-c^2}}dx
$$

A simple integration yields an equations similar to $y=mx+b$, but $m$ is that mess with constant $c$. 

[Wikipedia](https://en.wikipedia.org/wiki/Calculus_of_variations) has an article on Calculus of Variations also. There's an article on the _fundamental lemma of the calculus or variations_ which also sounds important. 

Another example of how a _functional_ can occur in practice is when trying to determine the length of a curve. A classical problem in the calculus of variation is to find the **surface of minimal area** that is generated by revolving a curve $y(x)$ about the x-axis, where $y(x)$ passes through two given points $(a, y_a)$ and $(b, y_b)$. 

#### Another Example (From Lecture)

Suppose we have a function $S[y(x)] = \int_0^1y'(x)^2+ydx$. We are considering the functions has endpoints $y(0)=0$ and $y(1)=2$. 

Can we find the stationary path of this function? Using the Euler-Langrange equation:

$$
\begin{align*}
\frac{\partial F}{\partial y} &= \frac{d}{dx} \frac{\partial F}{\partial y'} \\
&\text{WHERE...} \\
F(y,y',x) &=(y')^2+y \\
\end{align*}
$$

So, our function $F$ actually does not have a specific $x$ argument. Also notice how we say that $F$ is the integrand of our functional. Lets explicitly define our E-L equation (keep reading if the solution is confusing):

$$
\frac{\partial F}{\partial y} = 1
$$

We are taking the partial derivative of $F$ with respect to $y$, actually solving for that bit. For the purpose of our finding of the partial derivative of $F$ with respect to $y$, we would view $y'$ as a constant. Derivatives of constants are equal to ZERO. And the $d/dy = 1$. 

Now we solve for the next bit on the right side of the equation:

$$
\frac{\partial F}{\partial y'} = 2y'
$$

Hopefully from above the reader can understand how we came to this solution. 

Now, for the most interesting step, we must compute the _total derivative_ of the expression we have determined. 

$$
\frac{d}{dx} \frac{\partial F}{\partial y'} = \frac{d}{dx}(2y')=2y''
$$

The left side of equation is said as "the total derivative with regard to $x$ of  $\partial F$ by $\partial y'$." When it comes to the total derivative, we must consider both explicit and _implicit_ $x$ dependencies. You can see that $y'$ doesn't have an _explicit_ $x$ in it, so there' no _explicit_ $x$ dependency. However, the $y'$ is in fact a function of $x$. Guilty by association because $y(x)$ is a function of $x$. Because of this, we end up getting the second order derivative. 

To Conclude...

$$
\begin{align*}
1 &= 2y'' \\
y'' &= \frac{1}{2}
\end{align*}
$$

Wow, so now to get the stationary path, we backwards solve from $y''$ to $y$. You might notice that this is a differential equation, but a simple one so don't panic. Just integrate twice.

$$
\begin{align*}
y' &= \frac{1}{2} x + b \\
y &= \frac{1}{4} x^2 + bx + c
\end{align*}
$$

Notice how those integration constants begin to pile up? No worries, because we know the boundary conditions, we can solve for them. 

$$
\begin{align*}
y(0) = 0 = \frac{1}{4} (0)^2 + b(0) + c \implies c=0 \\
y(1) = 2 = \frac{1}{4} (1)^2 + b(1) + 0 \implies b = \frac{7}{4}
\end{align*}
$$

Very good! I think that helps a little bit with application of theory. 

## Summary

We looked as single variable function and multivariate functions, analysing rates of change with derivatives and integrals in a slew of poorly explained proofs and severe lack of examples. We also looked at Taylor expansion and the Euler-Lagrange equation. 

We covered finding extrema of a single variable and of a functional. We did not look into finding extrema of multiple variable functions…

## Check Yourself

Q: Is stating that $f'(a) = 0$ and that $f(x)$ has a stationary point at $x=a$ the same as saying that $f(x)$ has a local maximum or minimum at the point $x=a$? (Think hard).

A: No, these are not the same. Although all statements lead to the discovery that the tangent line is horizontal at $x=a$, the fundamental difference is the exclusion of the possibility of a _saddle point_ in the latter statement. 

Q: Is the antiderivative of a function unique?

A: No

Q: What is a double integral?

A: Apparently, over a region $R$ can be approximated by filling $R$ with small rectangles $R_i$ and summing the volumes of the rectangular prisms with $R_i$ and height bounded by the graph of $f$ above $R_i$. 




---
