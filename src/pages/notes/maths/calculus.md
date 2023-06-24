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
text{...}
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

—

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

—

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

where we conside $dA$ to be an infinitesimally small area in the $(x,y)$ plane. 

Now, if we assume to choose small rectangels in the $x$ and $y$ directions, we write $\Delta A = \Delta x \Delta y$. As both independent variable deltas tend to zero, we write

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

That's a wrap here.
