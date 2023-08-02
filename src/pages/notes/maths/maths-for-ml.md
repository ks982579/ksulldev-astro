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



## Ch.2 - Linear Algebra

**Definition - Linear Algebra:** The study of vectors and vertain rules to manipulate vectors. 

The book will use **bold** letters to represent vectors, but I think I will continue to use the arrow, $\vec{v}$ because it is easier to write in $KaT_eX$. 

A vector is a number, or set of numbers, with both magnitude and direction. A scalar is just a number, just a magnitude. As you can image, this changes the rule to the typical game of algebra. 

Examples of vectors:
+ Geometric Vectors
	+ directed line segments, typically drawn
+ Polynomials
	+ can be added together and multiplied by a scalar $\lambda \in \mathbb{R}$, resulting in a polynomial. 
+ Audio Signals - represented as a series of numbers
+ Elements of $\mathbb{R}^n$
	+ This book focuses on tuples of $n$ real numbers
	+ $a=\begin{bmatrix}1\\2\\3\end{bmatrix} \in \mathbb{R}^3$

**Definition - Closure:** ?

**Vectors** are things that can be multiplied by scalars and added together. Polynomials can be considered vectors. 

**Closure** is the question, what is the set of all things that can result from my proposed operations? 

### 2.1 - Systems of Linear Equations

The general from of a system of linear equations is

$$
\begin{gather}
a_{11}x_1 + \cdots + a_{1n}x_n = b_1\\
\vdots\\
a_{m1}x_1 + \cdots + a_{mn}x_n = b_m\\
\end{gather}
$$

Where $a_{ij} \in \mathbb{R}$ and $b_i \in \mathbb{R}$. The $a$ values would be constants we solve for, and the $x$ values are the unknowns. 

When solving a system of linear equations there are three types of solutions:
+ No solution - when equations contradict each other
+ Unique Solution - what we really want. 
+ Infinite solutions - possible indication of not enough information?

We now introduce the more "compact" notation

$$
\begin{bmatrix}
a_{11}\\
\vdots\\
a_{m1}
\end{bmatrix}x_1 + 
\cdots +
\begin{bmatrix}
a_{1n}\\
\vdots\\
a_{mn}
\end{bmatrix}x_n = 
\begin{bmatrix}
b_1\\
\vdots\\
b_m
\end{bmatrix}
$$

This then becomes

$$
\begin{bmatrix}
a_{11} & \cdots & a_{1n}\\
\vdots & \ddots & \vdots\\
a_{m1} & \cdots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
\vdots\\
x_n
\end{bmatrix} = 
\begin{bmatrix}
b_1\\
\vdots\\
b_m
\end{bmatrix}
$$

I believe this involves the matrix product, something technically not discussed yet in the book. It would be good to introduce the concept first.

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

### 2.2 - Matrices

p. 22

**Definition - Matrix:** Let $m,\ n \in \mathbb{N}$ be real-valued $(m,n)$ matrix $A_{mn}$ is a $m\cdot n$-tuple of elements $a_{ij}$, where $i=1,\cdots,m$ and $j=1,\cdots,n$. This is ordered according to a rectangular scheme consisting of $m$ rows, and $n$ columns. 

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & & & \vdots\\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end{bmatrix},\
a_{ij} \in \mathbb{R}
$$

The convention is actually opposite to the Cartesian coordinates... to me at least. 

You have _row_ vectors and _column_ vectors as special cases. 

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

#### 2.2.1 Matrix Addition and Multiplication

p. 22

The sum of two matrices, both $A,B\in \mathbb{R}^{m \times n}$, is just element wise. I am sure I've written it down in other notes. 

There's also matrix multiplication. Again, I'm sure it's written somewhere. This text introduces the useful concept that _neighbouring_ dimensions must match for a matrices to be compatible for multiplication. 

Good point for some examples...

**Definition - Identity Matrix:** In $\mathbb{R}^{n \times n}$, the identity matrix is

$$
I_n := \begin{bmatrix}
1 & 0 & \cdots & 0 & 0\\
0 & 1 & \ddots & 0 & 0\\
\vdots & \vdots & \ddots & \vdots & \vdots\\
0 & 0 & \cdots & 1 & 0\\
0 & 0 & \cdots & 0 & 1
\end{bmatrix}
$$

Something like that, I think you get the photo, a diagonal of $1$'s and 0 everywhere else. 

Now that we have defined matrix addition, multiplication, and the identity, here are some properties
+ Associativity
$$
\begin{gather}
\forall A \in \mathbb{R}^{m \times n}, 
B\in \mathbb{R}^{n \times p},
C\in \mathbb{R}^{p \times q} : \\
(AB)C = A(BC)
\end{gather}
$$

I stress that the order does matter because of the nearest neighbour.

+ Distributivity

$$
\begin{gather}
\forall A, B \in \mathbb{R}^{m \times n},\ 
C, D \in \mathbb{R}^{n \times p} : \\
(A+B)C = AC + BC\\
A(C+D) = AC+AD
\end{gather}
$$

+ Multiplication with Identity

$$
\begin{gather}
\forall A \in \mathbb{R}^{m \times n}:\\
I_mA=AI_n=A
\end{gather}
$$

Note that $I_m \ne I_n$ for $m \ne n$. 
#### 2.2.3 Multiplication by a Scalar

p. 25

They have all the fun properties. 

#### 2.2.4 Compact Representation of Systems of Linear Equations

p. 26

We can rewrite systems of equations using matrix multiplication. 

### 2.3 Solving Systems of Linear Equations

So, in linear equations, we have constants and unknowns. 

#### 2.3.1 Particular and General Solution

The _particular solution_ or _special solution_ are found by zeroing out all unknowns except one. 

To find other solutions, we start manipulating both sides of the equations by scalar values to zero things out and provide more solutions.

for unique solutions, you'll need as many useful equations and you have unknowns. I'll say "useful" with tongue in cheek to mean that equations aren't redundant or contradictory. They add information to our analysis. 

This section is basically an introduction to introduce Gaussian elimination as an easier method to solving equations. 

#### 2.3.2 Elementary Transformations

To solve a system of linear equations we employ _elementary transformation_. These keep the solution set the same and transform the equation system into a simpler form. Here are some ideas:
+ Exchange 2 equations
+ multiplication of an equation (row) with a constant
+ adding 2 equations (rows)

We also now introduce an **augmented matrix** to more compactly write $Ax=B$. Note that $A$ and $B$ are matrices

$$
\left[ \begin{array}{cc|r}
a & b & c\\
d & e & f\\
g & h & i\\
\end{array} \right]
$$

It's actually a little bit of a pain to write in $KaT_eX$ because you have to use arrays and specify the left and right... but whatever keeps your boat afloat. 

**Definition - Row-Echelon Form**: A matrix is in **row-echelon form** if the following:
+ All rows that contain zeros are at the bottom of the matrix.
+ Looking at nonzero rows only, the first nonzero number from the left, called the **pivot** or the **leading coefficient**, is always _strictly_ to the right of the pivot of the row above it.

So, it makes a zero like bottom triangle.

_p. 30_

_old notes_
**Definition - Reduced Row Echelon Form**: An equation system is in reduced row-echelon form if:
+ it is in row-echelon form
+ every pivot is 1
+ the pivot is the only nonzero entry in its column.

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

### 5.3 Gradients of Vector-Valued Functions
p. 149

Now, we generalize the concept of the gradient to vector-valued functions, or vector fields. That is, $f: \mathbb{R}^n \to \mathbb{R}^m$, where $n \ge 1$ and $m \gt 1$. 

For a function $f: \mathbb{R}^n \to \mathbb{R}^m$ and a vector $x = [x_1, \ldots, x_n]^{\top} \in \mathbb{R}^n$ the corresponding vector of function values is given as

$$
f(x) = \begin{bmatrix}
f_1(x)\\
\vdots\\
f_m(x)
\end{bmatrix}
\in \mathbb{R}^m
$$

It's like running through a remapping I guess. Derivatives and partials work the same.

**Definition - Jacobian**: The collection of all first-order partial derivatives of a vector-valued function $f:\mathbb{R}^n \to \mathbb{R}^m$ is called the _Jocobian_. The Jacobian is an $m \times n$ matrix defined as

$$
\begin{align*}
J &= \nabla_xf=\frac{df(x)}{dx} = \left[ 
\frac{\partial f(x)}{\partial x_1}
\quad \ldots \quad
\frac{\partial f(x)}{\partial x_n}
\right]\\
&= \begin{bmatrix}
\frac{\partial f_1(x)}{\partial x_1} &
\ldots &
\frac{\partial f_1(x)}{\partial x_n} \\
\vdots & & \vdots \\
\frac{\partial f_m(x)}{\partial x_1} &
\ldots &
\frac{\partial f_m(x)}{\partial x_n} \\
\end{bmatrix}\\
x &= \begin{bmatrix}
x_1 \\ \vdots \\ x_n
\end{bmatrix} \;,\quad
J(i,j) = \frac{\partial f_i}{\partial x_j}
\end{align*}
$$

The special case if $f:\mathbb{R}^n \to \mathbb{R}^1$, which maps a vector $x \in \mathbb{R}^n$ onto a scalar, possesses a Jacobian that is a row vector, $1 \times n$. 

We are using the _numerator_ layout of the derivative. That is, the derivates of $df/dx$ of $f \in \mathbb{R}^m$ with respect to $x \in \mathbb{R}^n$ is an $m \times n$ matrix. The elements of $f$ define the rows, and the elements of $x$ define the columns of the corresponding Jacobian. 

There also exists the _denominator_ layout, which is the transpose of the numerator layout. 

In a previous section (of the book), it was shown that the _determinant_ can be used to compute the area of a parallelogram. In particular, the area is given as the absolute value of the determinant.

Consider a parallelogram with sides $c_1=[-2,1]^\top$, $c_2=[1,1]^\top$. The area in the parallelogram described by sides is

$$
\begin{align*}
\left|
\det \left(
\begin{bmatrix}
-2 & 1 \\
1 & 1
\end{bmatrix}
\right)
\right| &= \left| (-2*1) - (1*1) \right|\\
&= \left| (-2) - 1 \right|\\
&= \left| 3 \right|\\
&= 3
\end{align*}
$$

Very interesting property. The area is three times the area of a unit square. We can find this scaling factor by finding a mapping that transforms the unit quare into the other square!

We will look at 2 approaches to identify this mapping. 

Really quick, the unit square is given by vectors $b_1=[1,0]^\top$ and $b_2=[0,1]^\top$. The absolute value of the determinant is 1. 

**Approach 1: Linear Transform** 
+ 
+ Identify both $\{b_1, b_2\}$ (unit square) and $\{c_1, c_2\}$ are bases of $\mathbb{R}^2$.
+ We effectively perform a change of basis from $(b_1,b_2)$ to $(c_1,c_2)$. 
+ We identify the desired basis change such that $Jb_1=c_1$ and $Jb_2=c_2$. 
$$
J = \begin{bmatrix}
-2 & 1 \\
1 & 1
\end{bmatrix}
$$

+ The absolute value of the determinant of $J$ is the scaling factor we desire. 

**Approach 2: NonLinear Transform** 
+ This is more general approach with partial derivatives.
+ Consider a function $f: \mathbb{R}^2 \to \mathbb{R}^2$
	+ it performs a variable transformation. 
	+ In our case, $f$ maps coordinate representation of any vector $x \in \mathbb{R}^2$ with respect to $(b_1, b_2)$ onto coordinate representation $y \in \mathbb{R}^2$ with respect to $(c_1,c_2)$. 
+ We must identify mapping to compute how area (or volume) changes when transformed by $f$. 
+ We must find out how $f(x)$ changes if we modify $x$ by a _small_ amount.

The question is answered with the Jacobian matrix $\frac{df}{dx} \in \mathbb{R}^{2 \times 2}$. We write functions for our vectors:

$$
\begin{align*}
y_1 &= -2x_1 + x_2\\
y_2 &= x_1 + x_2
\end{align*}
$$

We now have 2 functions, each with 2 variables. We can take partial derivatives. Since everything is to the first power, holding other variables constant nicely zeros them out. You should obtain

$$
J = \begin{bmatrix}
\frac{\partial y_1}{\partial x_1} & \frac{\partial y_1}{\partial x_2} \\
\frac{\partial y_2}{\partial x_1} & \frac{\partial y_2}{\partial x_2}
\end{bmatrix} = \begin{bmatrix}
-2 & 1 \\
1 & 1
\end{bmatrix}
$$

> The Jacobian represents the coordinate transformation we are looking for.

It is exact if the transformation is linear, is for this case. It recovers exactly the basis change of the matrix. The Jacobian determinant is the factor by which areas or volumes are scaled when coordinates are transformed. 

Variable transformation becomes useful when transforming random variables and probability distributions. It becomes relevant in machine learning when training deep neural networks using the _reparametrization trick_, aka _infinit perturbation analysis_. 

p.153 shows a generic example. 

**Example**

Suppose
$$
\begin{align*}
f(x) = Ax \quad f(x) \in \mathbb{R}^M \quad 
A \in \mathbb{R}^{M \times N} \quad x \in \mathbb{R}^N
\end{align*}
$$

Computing gradient $df/dx$ requires determining dimensions. Since $f:\mathbb{R}^N \to \mathbb{R}^M$, then $df/dx \in \mathbb{R}^{M \times N}$. Then determine all partial derivatives. Then, collect those into Jacobian matrix. 

$\Box$

P. 154 shows example of gradient of Least-squares loss, which is a helpful ML technique. 

### 5.4 Gradients of Matrices

Start with, what is a _tensor_? Think of a tensor like a multidimensional array that collects partial derivatives. In the future, we will need to take gradients of matrices with respect to vectors (or other matrices), which results in a multidimensional tensor.

Better shown by example. Suppose we have matrices $A^{m \times n}$ and $B^{\;p \times q}$. The Jacobian would be $(m \times n) \times (p \times q)$, which is a four-dimensional tensor. The entries would be 

$$
J_{ijkl} = \frac{\partial A_{ij}}{\partial B_{kl}}
$$

Because matrices represent a _linear_ mapping, there exists a **vector-space isomorphism**, a linear-invertible mapping, between space $\mathbb{R}^{m \times n}$ of $m \times n$ matrices and the space $\mathbb{R}^{mn}$ of $mn$ vectors. Thus, we re-shape our matrices into vectors of lengths $mn$ and $pq$ respectively. And the gradient uses these results in a Jacobian. 

Matrices can be transformed into vectors by stacking the columns of the matrix, _flattening_.

### 5.5 Useful Identities for Computing Gradients

p. 158 lists some very useful gradients frequently required in Machine Learning context. 

### 5.6 Backpropagation and Automatic Differentiation
p. 159

Going to end here for the moment.


## Ch. 6 - Probability and Distributions
p. 172



## Ch. 7 - Continuous Optimization
p. 225