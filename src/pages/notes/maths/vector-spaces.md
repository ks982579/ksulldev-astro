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

