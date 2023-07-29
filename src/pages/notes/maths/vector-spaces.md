---
layout: '@layouts/NotesLayout.astro'
title: 'Vector Spaces'
pubDate: 2023-07-26
description: 'Notes on vector spaces'
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

# Unit 5 Matrices and Vector Spaces

Quick overview of our learning goals:
+ What matrices and special matrices are
+ How to perform calculations with matrices
+ How to compute the following
	+ determinant
	+ trace
	+ transpose
	+ complex conjugate
	+ Hermitian conjugate
+ How to determine EigenValues and EigenVectors of matrices
+ How to diagonalize matrices
+ How to change bases of matrices
+ What are Tensors
+ How to perform basic calculations with tensors

## Introduction

Many problems can be restructured with matrices and solved in a systematic way. Tensors formalize and extend concepts of scalars, vectors, and matrices. Recommends additional readings.

## 5.1 Basic Matrix Algebra

Vectors are scalars with direction. They can be decomposed into basic components and represented as such. Matrices are rectangular arrays of numbers. They are represented by their row and column numbers. An $n\times m$ matrix has $n$ rows ($y$) and $m$ columns ($x$). 

Matrices are a convenient way to think of and perform operations on vectors. So, matrices are the concept, and vectors are the application.

### Calculating with Matrices

**Notation - Matrices:**
+ capital letters, such as $A$, denote an entire matrix
+ small letters with subscripts, such as $a_{ij}$, denote entries of a matrix
+ greek letters, like $\lambda$, typically denote a scalar

**Rules of Calculating with Matrices:**
+ $A=B \iff \forall i,\ j:\ (a_{ij}=b_{ij})$ -> That is, two matrices are equal if, and only if, the matrices have the same dimension and identical entries.
+ $A+B=C \iff \forall i,\ j:\ (c_{ij}=a_{ij}+b_{ij})$ -> Matrix addition and subtraction are performed entry-wise. Operations are both _commutative_ $(A+B=B+A)$ and _associative_ $(A+(B+C)=(A+B)+C)$.
+ $B=\alpha A \iff \forall i,\ j:\ (b_{ij}=\alpha a_{ij})$ -> Multiply a matrix by a scalar multiplies each entry by said scalar.
+ Matrix multiplication is only defined when the number of columns on the left matrix is equal to the number of rows in the right. The product will have a number of rows same as the left matrix, and a number of columns save as the right
	+ The _neighbouring dimensions_ of the matrices must be equal.
	+ The product assumes dimensions that are not neighbouring.

Example of matrix multiplication:

$$
\begin{gather*}
A_{n\times m} B_{m \times p} = C_{n \times p}\\
AB=C \iff c_{ij} = \sum_k a_{ik}b_{kj}
\end{gather*}
$$

Matrix multiplication is distributive $(A(B+C) = AB+AC)$ but it is not commutative $(AB \neq BA)$. 

**Definition - Commutator:** A **commutator** is the quantity $[A,B] \equiv AB-BA$. It's an important concept in fields like _quantum mechanics_.

**EXAMPLE**

We are going to do this matrix multiplication on two matrices and compare them front to back. In order for this, they must be square matrices.

$$
\begin{gather*}
A = \begin{bmatrix}
1 & 2 & 3 \\
2 & 2 & 3 \\
3 & 2 & 3 \\
\end{bmatrix},\ 
B = \begin{bmatrix}
4 & 5 & 6 \\
5 & 5 & 1 \\
6 & 1 & 6 \\
\end{bmatrix}\\
AB = \begin{bmatrix}
1 & 2 & 3 \\
2 & 2 & 3 \\
3 & 2 & 3 \\
\end{bmatrix}
\begin{bmatrix}
4 & 5 & 6 \\
5 & 5 & 1 \\
6 & 1 & 6 \\
\end{bmatrix}\\=
\begin{bmatrix}
(1*4 + 2*5 + 3*6) & (1*5 + 2*5 + 3*1) & (1*6 + 2*1 + 3*6) \\
(2*4+2*5+3*6) & (2*5+2*5+3*1) & (2*6+2*1+3*6) \\
(3*4+2*6+3*6) & (3*5+2*5+3*1) & (3*6+2*1+3*6) \\
\end{bmatrix}
\end{gather*}
$$

I wrote the sum of each row in matrix $A$, then multiplied when writing each column of $B$.

I won't do it for sake of time, left as an exercise to the reader, but find $BA$ and note they should be different. 

## 5.2 Determinant, Trace, Transpose, Complex Conjugate, and Hermitian Conjugate

p. 109

### Matrix Transpose

The **transpose** of a matrix basically swaps the row and column arrangement of each element. So if $a_{ij} \in A$ then $a_{ji} \in A^T$. It's quite an important concept, so give it a go.

**EXAMPLE**

find the transpose of

$$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{bmatrix}
$$

$A_{n\times m}$ will become $A_{m\times n}$ as each $a_{ij} \to a_{ji}$. 

$$
A^T=
\begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6 
\end{bmatrix}
$$

Hopefully you got the same $\Box$.

We also have a fun property:
+ The _transpose_ of the product of two matrices is the product of the transposed matrices, but multiplied in reverse.

$$
(AB)^T = B^TA^T
$$

Consider that matrix multiplication requires _neighbouring dimensions_ to be the same. This is why the reverse order is necessary. 

### Complex Conjugate

**Definition - Complex Conjugate:** For a matrix with complex number entries, $(a \pm bi)$, the complex conjugate of a matrix $A^*$ can be found by taking the complex conjugate of each entry of $A$. 

$$
(a^*)_{ij} = (a_{ij})^*
$$

Additionally, the complex conjugate of $(a \pm bi)^*$ is just $(a \mp bi)$. 

That's great but what does it actually mean? You flip the sign of the complex part.

**EXAMPLE**

Find the complex conjugate of the following matrix

$$
A = 
\begin{bmatrix}
1 & 2i \\
3 + i & 4
\end{bmatrix}
$$

Remember, just flip the complex signs...

$$
A^*=
\begin{bmatrix}
1 & -2i \\
3 - i & 4
\end{bmatrix}
$$

Notice that in the form $(a+bi)$, the $a$ remains unchanged, and the $bi$ is negated $\Box$

### Hermitian Conjugate

**Definition - Hermitian Conjugate:** The Hermitian conjugate of a matrix $A$ is the transpose of the complex conjugate, and denoted $A^\dagger$. Funny enough, it is just the transpose of a matrix if there is no complex parts. 

**EXAMPLE**

find the Hermitian conjugate of

$$
A =
\begin{bmatrix}
1 & 1-2i & 3i \\
4 & 5+i & 6 \\
\end{bmatrix}
$$

It is both a transpose and complex conjugate
+ $A_{n\times m}$ will become $A_{m\times n}$ as each $a_{ij} \to a_{ji}$. 
+ $(a \pm bi)^*$ is just $(a \mp bi)$. 

$$
A^{\dagger}=
\begin{bmatrix}
1 & 4 \\
1+2i & 5-i \\
-3i & 6 
\end{bmatrix}
$$

Hopefully you got the same $\Box$

At this point, we are wondering why is any of this important? We usually represent vectors as column matrices

$$
\vec{a} = \begin{pmatrix}
a_1 \\ a_2 \\ \vdots \\ a_n
\end{pmatrix},\ \text{and} \ 
\vec{b} = \begin{pmatrix}
b_1 \\ b_2 \\ \vdots \\ b_n
\end{pmatrix}
$$

Because neighbouring dimensions are not the same, you can only add them or find a dot product. However, if you take the Hermitian conjugate of $\vec{a}$, resulting in a row matrix, you can perform matrix multiplication with $\vec{b}$. 

$$
\begin{pmatrix}
a_1^* & a_2^* & \cdots & a_n^*
\end{pmatrix}
\begin{pmatrix}
b_1 \\ b_2 \\ \vdots \\ b_n
\end{pmatrix} = 
\sum_{i=1}^N a_i^*b_i = \vec{a}^{\dagger}\vec{b}
$$


This is also the inner product $\langle \vec{a}\ |\ \vec{b} \rangle$. Again, if we are dealing with _real_ numbers, the Hermitian conjugate becomes a transpose and the inner product becomes the dot product. 

### Trace of a Matrix

**Definition - Trace of a Matrix:** The _trace_ of a matrix is a property of _square_ matrices. It is the sum of the matrices' diagonal elements

$$
Tr(A) = a_{11} + a_{22} + \cdots + a_{nn} = \sum_{i=1}^n a_{ii}
$$

The value goes from a matrix to a scalar, so it has extra properties:

$$
Tr(A \pm B) = Tr(A) \pm Tr(B)
$$

and

$$
Tr(AB) = Tr(BA)
$$

**Example**

Might seem trivial, but find the trace of the following

$$
A = \begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9\\
\end{bmatrix}
$$

Ok, so simply put

$$
Tr(A) = 1+5+9=15
$$

### Determinant of a Matrix

[Supported Functions · KaTeX](https://katex.org/docs/supported.html#environments)

**Definition - Permutation:** A simple definition of permutation is one of several ways that a number of items can be arranged and different arrangements of the same items is a different permutation. That is, order matters. 

Permutations is probably better left defined and explained in notes for sets and counting. 

**Definition - Determinant of a Matrix:** The _determinant_ is a single number (scalar) representation of a square matrix. Its notation looks like we are taking the absolute value of a matrix, but it is the determinant

$$
\text{det}(A) = |A| = \begin{vmatrix}
a_{11} & \cdots & a_{1n}\\
\vdots & \ddots & \vdots\\
a_{n1} & \cdots & a_{nn}
\end{vmatrix}
$$

A weird formula for the determinant is

$$
\text{det}(A) = \sum_{P[\alpha \beta \dots \omega]}\epsilon_{\alpha \beta \dots \omega}a_{1 \alpha}a_{2 \beta}\dots a_{n \omega}
$$

The book "Math for Machine Learning", section 4.1 really dives into determinants. 

Anyway, what is all of this? Staring with $\epsilon$, that is called the **anti-symmetric tensor**, and is basically either $\pm 1$. 

$$
\epsilon_{\alpha \beta \dots \omega}
=
\begin{cases}
+1 & \text{for even permutations of } 1,\dots,n\\
-1 & \text{for odd permutations of } 1,\dots,n\\
0 & \text{if 2 indices are the same}
\end{cases}
$$

Start small with an example of a $2 \times 2$ matrix

**Example**

Finding the determinant of an _arbitrary_ $2 \times 2$ matrix

$$
\begin{align*}
|A| &= \begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{vmatrix} \\
&= \epsilon_{12}a_{11}a_{22} + \epsilon_{21}a_{12}a_{21}\\
&= (+1)a_{11}a_{22} + (-1)a_{12}a_{21}\\
&= a_{11}a_{22} - a_{12}a_{21}\\
\end{align*}
$$

For a $2 \times 2$ matrix, the determinant becomes the product of the diagonal elements less the product of the _off-diagonal_ elements. 

Now, we move to a $3\times 3$ matrix. 

**EXAMPLE**

find the determinant of an _arbitrary_ $3 \times 3$ matrix

$$
\begin{align*}
|A| &= \begin{vmatrix}
a_{11} & a_{12} & a_{13}\\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{vmatrix} \\
&= a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32}\\ 
&\ \ + a_{12}a_{23}a_{31} - a_{12}a_{21}a_{33}\\
&\ \ + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31}
\end{align*}
$$

We already cut out the $\epsilon$ reference because it's not really the easiest way to think about it. So, consider the _Laplace Expansion_, aka _cofactor Expansion_

$$
C_{ij} = (-1)^{i+j}M_{ij}
$$

Check out the following for even more information!
>Taboga, Marco (2021). "Determinant of a matrix", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/determinant-of-a-matrix.
> Taboga, Marco (2021). "The Laplace expansion, minors, cofactors and adjoints", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/Laplace-expansion-minors-cofactors-adjoints.

We let $M_{ij}$ be the minor determinant of matrix of size $n-1 \times n-1$, which you get by removing all the elements in the $i^{th}$ row and $j^{th}$ column. And yes, that means the row $\times$ column, which is still a little confusing to me because matrices are backwards to cartesian coordinates, and then this is frontwards again... 

Per statlect.com

**Proposition:** Let $A$ be a $K \times K$ matrix $\forall K \ge 2$. We let $C_{ij}$ be the cofactor, and $a_{ij}$ be the entry at that postion. For any row $i$, the following row expansion holds

$$
\text{det}(A) = \sum_{j=1}^K a_{ij}C_{ij}
$$

Or, if you feel frisky, it holds for any column $j$ as well, cycling through the $i$'s instead

$$
\text{det}(A) = \sum_{i=1}^K a_{ij}C_{ij}
$$

How can it be so? The statlect.com resource has a proof as well.

Let's give it a go, let $i=1$

$$
\begin{align*}
C_{11} &= (-1)^{1+1}(a_{22}*a_{33}-a_{23}*a_{32}) = a_{22}*a_{33}-a_{23}*a_{32}\\
C_{12} &= (-1)^{1+2}(a_{21}*a_{33}-a_{23}*a_{31}) = a_{23}*a_{31}-a_{21}*a_{33}\\
C_{13} &= (-1)^{1+3}(a_{21}*a_{33}-a_{23}*a_{31}) = a_{23}*a_{31}-a_{21}*a_{33}\\
\end{align*}
$$

Now, we multiply by respective entries

$$
\begin{align*}
\text{det}(A) &= &a_{11}(a_{22}*a_{33}-a_{23}*a_{32})\\
& &+a_{12}(a_{23}*a_{31}-a_{21}*a_{33})\\
& &+a_{13}(a_{23}*a_{31}-a_{21}*a_{33})\\
\end{align*}
$$

Which when multiplied through is same as before. Leave it to the course textbook to only explain half of the Laplace Expansion. $\Box$

Useful properties of determinants

$$
\begin{align}
|A^T| &= |A|\\
|A^{\dagger}| &= |(A^*)^T| = |A^*| = |A|^*\\
|AB| &= |A||B| = |BA|\\
|\lambda A| &= \lambda^n |A|
\end{align}
$$

+ If 2 rows or columns of a matrix are interchanged, the determinant changes its sign but not its value.
+ if 2 rows or columns of a matrix are identical, the determinant is zero. 

### Inverse of a Matrix

p. 114
