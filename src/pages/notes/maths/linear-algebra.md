---
layout: '@layouts/NotesLayout.astro'
title: 'Fourier Analysis'
pubDate: 2023-07-01
description: 'Probably a beginners guide to Linear Algebra'
author: 'Kevin Sullivan'
tags: ["notes", "maths", "linear algebra", "linear", "algebra", "matrix"]
---
A free resource!

```yaml
url: https://math.libretexts.org/Bookshelves/Linear_Algebra/Map%3A_Linear_Algebra_(Waldron_Cherney_and_Denton)
title: Linear Algebra
authors: 
  - David Cherney
  - Tom Denton
  - Andre Waldron
```

# Linear Algebra

## 1. What is Linear Algebra?

Basically, **Linear Algebra** is the study of vectors and linear transformations. **Vectors** typically represent both a magnitude and a direction. **Linear Transformations** are functions of vectors that respect vector addition. 

### 1.1 What are Vectors?

Vectors are things you can add and scalar multiply. 

### 1.2 What are Linear Functions?

Typical thought of functions is that you push independent variables into a function and it returns a value. In linear algebra, functions take in vectors of some type, and return vectors of the same or possibly another type. 

To describe the _essential characteristics_ of linear functions, let $L$ represent a linear function, whose parameters, both inputs and outputs, are vectors abiding by addition and scalar multiplication. Let $u$ and $v$ be vectors, and let $c$ be a number. We know that $u+v$ and $cu$ are also vectors. 

Since $L$ is a function of vectors, $L(u)$ is also a vector. Same is true for $L(v)$, $L(u+v)$, and $L(cu)$. We can continue to expand the logic as $L(u) + L(v)$ is a vector, and $cL(u)$ is also a vector. 

Let's put some definitions onto our operations:

**Additivity:**

$$
L(u+v) = L(u) + L(v)
$$

**Homogeneity:**

$$
L(cu) = cL(u)
$$

Many functions of vectors do not obey this requirement. However, linear algebra is the study of those that do. Additivity means it doesn't matter if you add the inputs before passing into the function first, or adding the outputs of the function. 

Functions of vectors that obey the additivity and homogeneity properties are **linear**, hence _linear algebra_. Additivity and homogeneity together are called linearity. And other names include:
+ Linear Operator
+ Homomorphism
+ Linear Map
+ Linear Transformation

A really cool example is actually the _derivative_ operator! 

$$
\begin{align*}
\frac{d}{dx}(cf) &= c\frac{d}{dx}(f) \\
\frac{d}{dx}(f+g) &= \frac{d}{dx}(f) + \frac{d}{dx}(g)
\end{align*}
$$

Worth noting, to avoid confusion, for linear maps $L$, you will see it written as $Lu$ instead of $L(u)$. This is because the linearity property of a linear transformation $L$ means that $L(u)$ can be thought of as multiplying the vector $u$ by the linear operator $L$. Another fun example:

$$
L(cu + dv) = cLu + dLv
$$

Note that $uL$ wouldn't make any sense. However, when written, it almost looks like we are multiplying through my $L$. 

### 1.3 What is a Matrix?

Will we ever know?