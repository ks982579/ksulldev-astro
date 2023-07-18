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

## Ch. 1 - Introduction and Motivation
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