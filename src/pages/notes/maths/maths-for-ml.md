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




## Ch. 6 - Probability and Distributions
p. 172



## Ch. 7 - Continuous Optimization
p. 225