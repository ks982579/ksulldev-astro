---
layout: '@layouts/NotesLayout.astro'
title: 'Maths for Machine Learning'
pubDate: 2023-19-07
description: 'Various topics of maths for machine learning'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths"]
---

# Mathematics for Machine Learning

```yml
title: Mathematics for Machine Learning
authors: 
	- Marc Peter Deisenroth
	- A. Aldo Faisal
	- Cheng Soon Ong
publisher: Cambridge University Press
year: 2020
```

## Ch. 1 - Introduction and Moti## Ch. 1 - Introduction and Motivation
p.11



## Ch. 2 - Linear Algebra
p.17

**Vectors** are things that can be multiplied by scalars and added together. Polynomials can be considered vectors. 

**Closure** is the question, what is the set of all things that can result from my proposed operations? 

### 2.1 systems of linear equations

It's a system of equations like:

$$
\begin{align*}
a_1x_1+...+a_nx_n &= z_1\\
...\\
b_1x_1+...+b_nx_n &=z_m
\end{align*}
$$

Where, at the moment, everything is an element of the set of real numbers. 

The author introduces a new, fun notation for systems of linear equations:

$$
\begin{bmatrix}
a_{11}\\
...\\
a_{m1}
\end{bmatrix} x_1 + ... + 
\begin{bmatrix}
a_{1n}\\
...\\
a_{mn}
\end{bmatrix} x_n = 
\begin{bmatrix}
b_{1}\\
...\\
b_{m}
\end{bmatrix}
$$

We can go even further with...

$$
\begin{bmatrix}
a_{11} & ... & a_{1n}\\
... & & ...\\
a_{m1} & ... & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1\\
...\\
x_n
\end{bmatrix} = 
\begin{bmatrix}
b_1\\
...\\
b_n
\end{bmatrix}
$$

### 2.2 Matrices
p. 22

> Just reading ATM, but matrix multiplication is sum of multiples. Think of the _Neighbouring_ dimensions. 

The determinant arises from finding the inverse matrix. 

It is important to note the following:

$$
A = \begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\in \mathbb{R}^{2 \times 3}
$$

This is just to visualize the $n \times m$ notation. To me, it's opposite of the $(x,y)$ you would think graphically. But _consider_, suppose we have matrix $a \times b$, if the first number $a$ is for $x$ axis so to speak, then the number represents how many rows of $x$ there are, not necessarily how far along the $x$-axis to traverse. And if the second is number $b$ is for $y$, then the same applies. It's more like a count of the number of $y$-axes, or columns, we are dealing with. 

Just remember that it is not the same as coordinates. 

When thinking in terms of identifying an element in a table, it might just be easier to remember it as opposite. And maybe that makes since because then the $y$ value goes downwards as the value increases.

$$
B = \begin{bmatrix}
b_{11} & b_{12} & b_{13}\\
b_{21} & b_{22} & b_{23}\\
b_{31} & b_{32} & b_{33}\\
\end{bmatrix}
$$

**Definition - Row-Echelon Form**: A matrix is in **row-echelon form** if the following:
+ All rows that contain zeros are at the bottom of the matrix.
+ Looking at nonzero rows only, the first nonzero number from the left, called the **pivot** or the **leading coefficient**, is always _strictly_ to the right of the pivot of the row above it. 

So, it makes a zero like bottom triangle. 

**Definition - Reduced Row Echelon Form**: An equation system is in reduced row-echelon form if:
+ it is in row-echelon form
+ every pivot is 1
+ the pivot is the only nonzero entry in its column. 

It makes some things easier when we are working in reduced row-echelon form. 

$$
\left[ \begin{matrix}
a & b & c & d\\
a & b & c & d\\
a & b & c & d\\
a & b & c & d\\
\end{matrix}
\right. \; \left| \;
\begin{matrix}
y\\
z\\
z\\
z\\
\end{matrix}
\right]
$$

Sorry, just learning custom syntax for _augmented_ matrices. 

This chapter continues on through elementary transformation, groups, vector spaces, linear independence, basis, ranks, linear mappings, Image and Kernel, Affine spaces... the chapter is nearly a full-blown linear algebra course. 

## Ch. 3 - Analytic Geometry
p. 70



## Ch. 4 - Matrix Decompositions
p. 98




## Ch.5 - Vector Calculus
p. 139

In machine learning, we are asking a model to explain data. Many algorithms are used to optimize an objective function with respect to a set of desired model parameters. Finding good parameters can be phrased as an optimization problem. 

A function $f$ is a quantity that relates two quantities to each other. Our quantities are typically inputs $x \in \mathbb{R}^D$ and targets $f(x)$. We assume all are real-valued if not stated otherwise. Also, $\mathbb{R}^D is the _domain_ of $f$, and the function values $f(x)$ are the _image/codomain_ of $f$. 

We will explore Difference Quotient, Partial Derivatives, Jacobian Hessian, and Taylor Series, which are concepts used in many other parts of machine learning. 

Let's map the domains,

$$
\begin{align*}
f:\mathbb{R}^D &\to \mathbb{R}\\
x &\mapsto f(x)
\end{align*}
$$

We clarify that $f$ is a mapping from $\mathbb{R}^D$ to $\mathbb{R}$. The second mapping specifies the _explicit_ assignment of an input to an output. A function $f$ assigns every input $x$ exactly to **one** function value $f(x)$. The $y$ values can be the same, but one $x$ can never point to multiple $y$ values. 

### 5.1 Differentiation of Univariate Functions

A **univariate function** is $y=f(x)$, only one dependent variable. We will also take that $x,\,y\,\in \mathbb{R}$. 

**Definition - The Difference Quotient**: The difference quotient is

$$
\frac{\delta y}{\delta x} := \frac{
f(x+\ \delta x)-f(x)
}{\delta x}
$$

The symbols use _little delta_, but still expresses small change. This computes the _secant line_ through two points on a graph of $f$. 

Letting the limit of $\delta x \to 0$, we obtain the tangent of $f$ at $x$. 

**Definition - Derivative**: For $h \gt 0$, the _derivative_ of $f$ at $x$ is defined as

$$
\frac{df}{dx} := \lim_{h \to 0} \frac{
f(x+h)-f(x)
}{h}
$$

p. 142 goes through a proof of the derivative for $f(x) = x^n$. It uses combinations. 

#### 5.1.1 Taylor Series

**Definition - Taylor Polynomial**: The Taylor polynomial of degree $n$ of $f: \mathbb{R} \to \mathbb{R}$ at $x_0$ is defined as

$$
T_n(x) := \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
$$

For clarity, $f^{(k)}(x_0)$ is the $k^{th}$ derivative of $f$ at $x_0$. Essentially, we sum up all of the tiny changes from moving between 2 points.

**Definition - Taylor Series**: For a smooth function $f \in \mathcal{C}^{\infty},\,f:\mathbb{R} \to \mathbb{R}$, the _Taylor series_ of $f$ at $x_0$ is 

$$
T_{\infty}(x) := \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
$$

**Definition - Maclaurin Series**: The Maclaurin series is a special instance of the Taylor series taken for $x_0=0$. It comes with many very useful expressions.

Note that if $f \in \mathcal{C}^{\infty}$, then $f$ must be continuously differentiable infinitely many times. A good example is an exponential function. 

As an example, you should take some Taylor series expansions of $f(x) = \sin(x) + \cos(x) \in \mathcal{C}^{\infty}$. Go for when $x_0=0$. 

Following along on pp. 144-145, you can end up finding the power series representations of the sine and cosine function. 

**Definition - Power Series**: A Taylor series is a special case of a power series. The power series is defined as

$$
f(x)=\sum_{k=0}^{\infty}a_k(x-c)^k
$$

#### 5.1.2 Differentiation Rules
p. 145

Defines the product rule, quotient rule, sum rule, and chain rule. 

### 5.2 Partial Differentiation and Gradients

The generalization of the derivative to functions of several variables is the _gradient_. We find the gradient of $f$ with respect to the $x$ by varying one variable at a time, keeping the others constant. The _gradient_ is a collection of these partial derivatives.

**Definition - Partial Derivative**: For function $f:\mathbb{R} \to \mathbb{R},\, x \mapsto f(x)$, $x \in \mathbb{R}^n$ of $n$ variables we define the partial derivative as

$$
\begin{align*}
\frac{\partial f}{\partial x_1} &= \lim_{h \to 0} \frac{
f(x_1+h, x_2, \ldots, x_n) - f(x)
}{h} \\
&\vdots\\
\frac{\partial f}{\partial x_n} &= \lim_{h \to 0} \frac{
f(x_1, \ldots, x_{n-1}, x_n+h) - f(x)
}{h} \\
\end{align*}
$$

Then, the collection of them in a row vector is

$$
\nabla_xf = \text{grad}f=\frac{df}{dx} = \left[
\frac{\partial f(x)}{\partial x_1}
\ldots
\frac{\partial f(x)}{\partial x_n}
\right]
\in \mathbb{R}^{1 \times n}
$$

The row vector just defined is called the _gradient_ of $f$, or the **Jacobian**. It is a generalization of the derivatives from before. 

The Jacobain is actually a special case of the general definition. More on this later. 

You might commonly see the gradient defined as a column vector instead of like our row vector. We are using row vectors because
+ we can consistently generalize the gradient to vector-valued functions
+ we can immediately apply the multi-variate chain rule without paying attention to the dimension of the gradient. 

pp.147-148 has rules for partial differentiation.

#### 5.2.2 Chain Rule
p. 148

The book dives a little deeper into the chain rule. Consider $f:\mathbb{R}^2 \to \mathbb{R}$, of the two variables $x_1,\,x_2$. And let them be functions of $t$, that is $x_1(t)$ and $x_2(t)$. To compute the gradient of $f$ with respect to $t$ we need the chain rule for multivariate functions

$$
\frac{df}{dt} = 
\begin{bmatrix}
\frac{\partial f}{\partial x_1} &
\frac{\partial f}{\partial x_2}
\end{bmatrix}
\begin{bmatrix}
\frac{\partial x_1(t)}{\partial t} \\
\frac{\partial x_2(t)}{\partial t}
\end{bmatrix} =
\frac{\partial f}{\partial x_1}
\frac{\partial x_1}{\partial t} +
\frac{\partial f}{\partial x_2}
\frac{\partial x_2}{\partial t}
$$

So, $d$ denotes the gradient, and $\partial$ denotes partial derivatives. 

We can extend this further by letting our functions $x_n(s,t)$ themselves be made of 2 variables. We take multiple partials of the original function $f$ now with respect to the variables $s$ and $t$. 

$$
\begin{align*}
\frac{\partial f}{\partial s} &= 
\frac{\partial f}{\partial x_1}
\frac{\partial x_1}{\partial s} +
\frac{\partial f}{\partial x_2}
\frac{\partial x_2}{\partial s}\\
\frac{\partial f}{\partial t} &= 
\frac{\partial f}{\partial x_1}
\frac{\partial x_1}{\partial t} +
\frac{\partial f}{\partial x_2}
\frac{\partial x_2}{\partial t}\\
\frac{df}{d(s,t)} &= 
\frac{\partial f}{\partial x}
\frac{\partial x}{\partial (s,t)} \\ 
&=
\begin{bmatrix}
\frac{\partial f}{\partial x_1} &
\frac{\partial f}{\partial x_2}
\end{bmatrix}
\begin{bmatrix}
\frac{\partial x_1}{\partial s} &
\frac{\partial x_1}{\partial t} \\
\frac{\partial x_2}{\partial s} &
\frac{\partial x_2}{\partial t} 
\end{bmatrix}
\end{align*}
$$

Hopefully we can see how the vector multiplication works in this instance. 



## Ch. 6 - Probability and Distributions
p. 172



## Ch. 7 - Continuous Optimization
p. 225