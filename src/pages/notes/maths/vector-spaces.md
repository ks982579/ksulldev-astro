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

Should probably be defined sooner?

**Definition - Square Matrix:** A square matrix is an $n \times m$ matrix where $n=m$. You can also say it's a $K \times K$ matrix at that point. Number of rows is equal to the number of columns. 

**Definition - Symmetric Matrix:** A symmetric matrix is a square matrix where for each element, $a_{ij} = a_{ji}$. Hopefully, it is apparent why it must be square.

**Definition - Diagonal Matrix:** A diagonal matrix is a square matrix where only the diagonal elements are _nonzero_. That is, anything off of the diagonal is 0. Again, the matrix should be square else the diagonal becomes arbitrary. 

**Definition - Identity Matrix:** The identity matrix is a diagonal matrix, which is also a square matrix, whose diagonal elements $a_{ii} = 1$. All other elements $a_{ij} = 0 \ \forall \ i \ne j$. 

> Taboga, Marco (2021). "Inverse of a matrix", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/inverse-matrix.

**Definition - Inverse Matrix:** If $A$ and $B$ are both matrices, then $B$ is the inverse of $A$, or $B=A^{-1} \iff AB = I$, where $I$ is the identity matrix. If such an $I$ exists, then we say that $A$ is _invertible_. 

Some fun facts:
+ $AB = I = BA$ is only satisfied when $A$ is a square matrix
+ It is also possible that $BA = I$ but $AB \ne I$. 

To calculate an inverse matrix, each entry is calculated as

$$
(A^{-1})_{ij} = \frac{C_{ji}}{|A|}
$$

I don't like to use the big $A$ notation to represent elements for $A^{-1}$; however, I also don't want it to appear we are taking reciprocals of element values. Additionally, the denominator is the determinant and the numerator are cofactors, but with indices _SWAPPED_!

Also note, if $\text{det}(A)=0$, the matrix is called **singular** and cannot be inverted. 

**EXAMPLE**

Suppose $A$ is an invertible $2 \times 2$ matrix. Can you write out the formula to calculate the inverse?

If

$$
A = \begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{bmatrix}
$$

Then

$$
A^{-1} = \frac{C^T}{\text{det}(A)} =
\frac{1}{a_{11}a_{22}-a_{12}a_{21}}
\begin{bmatrix}
a_{22} & -a_{21} \\
-a_{21} & a_{11}
\end{bmatrix}
$$

The coefficient is a little confusing, but if you think it through with the definition it makes sense. $\Box$

**EXAMPLE**

Find the inverse of 

$$
A = 
\begin{bmatrix}
1 & 2 & 3 \\
0 & 4 & 5 \\
1 & 0 & 6 \\
\end{bmatrix}
$$

First... the determinant. Since there are some zeros, let's pick those columns. 

$$
C_{ij} = (-1)^{i+j}M_{ij}
$$

And...

$$
\begin{align}
\text{det}(A) &= \left. \sum_{j=1}^K a_{ij}C_{ij}\ \right|_{i=3}\\
&= a_{31}C_{31} + a_{32}C_{32} + a_{33}C_{33}\\
&=(1)((+1)(2*5-3*4))+(0)((-1)(1*6-3*1))+(6)((+1)(1*4-2*0)) \\
&=(-2)+0+24 \\
&= 22
\end{align}
$$

Now, we go crazy solving for Cofactors, and we will transpose the cofactors after building the matrix

$$
\begin{align}
a_{11} = C_{11} &= 
\begin{vmatrix}
4 & 5 \\
0&6\\
\end{vmatrix} \\
a_{12} = C_{21} &= 
\begin{vmatrix}
0&5 \\
1&6\\
\end{vmatrix} \\
a_{13} = C_{31} &= 
\begin{vmatrix}
0&4 \\
1&0\\
\end{vmatrix} \\
\cdots
\end{align}
$$

So, you can build up the matrix and where the $ij$ ignore the $i$th row and $jth$ column, and just put everything in the same place in the matrix, and then transpose it. I labelled the $C_{ji}$ to show the mapping but can understand it may look confusing, like which columns and rows should we ignore when calculating. Follow the $a_{ij}$ for that. 

Then, scalar-matrix multiplication.

### Eigenvalues and Eigenvectors of a Matrix

p. 115

Because column vectors are $n \times 1$ matrix, we can perform certain matrix operations on them. One idea is to apply a matrix to a vector to only change its magnitude.

$$
A\vec{x} = \lambda \vec{x}
$$

_Eigenvalue problem_

> Taboga, Marco (2021). "Eigenvalues and eigenvectors", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/eigenvalues-and-eigenvectors.

The determinant "tells us by how much the linear transformation associated with the matrix $A$ scales up or down the area of shapes." That is, if $\alpha_A=\text{det}(A)\cdot \alpha$, if $\alpha$ is the area of the $2 \times 2$ matrix described by a matrix $T$, via points. 

Now, Eigenvalues and eigenvectors provide additional information, telling us "by how much the linear transformation scales up or down the sides of certain parallelograms." If one pair of parallel sides is scaled by $\lambda_1$ and the other pair by $\lambda_2$, the area of parallelogram is scaled by a factor of $\lambda_1 \cdot \lambda_2$. As a consequence from the above discussion, we find that $\text{det}(A) = |A| = \lambda_1 \cdot \lambda_2$.

The determinant of a matrix is equal to the product of its eigenvalues. 

**Definition - Eigenvalue and Eigenvector:** Let $A$ be a $K \times K$ matrix. If there exists a $K \times 1$ vector $x \ne 0$ and a scalar $\lambda$ such that 

$$
A x = \lambda x
$$

then $\lambda$ is called the **eigenvalue** of $A$, and $x$ is called the **eigenvector** corresponding to $\lambda$. 

You may also write that

$$
(A - \lambda I)\vec{x} = \vec{0}
$$

I believe, because of this, the equation can be viewed as a homogeneous system of linear equations of the form $B\vec{x}=\vec{0}$. If $|B| = 0$, this characteristic equation has a nontrivial (nonzero) solution and we can determine the _eigenvalues_ of $A$. 

**EXAMPLE**

Can we find eigenvalues and associated eigenvectors of

$$
A = \begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix}
$$
The equations would be

$$
\begin{align*}
A\vec{x} &= \lambda \vec{x}\\
\begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix} \vec{x}&=\lambda \vec{x}\\
\end{align*}
$$

Then we multiply $\lambda$ by an identity matrix, and we will then move everything to one side

$$
\begin{align*}
\begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix} \vec{x}&=\lambda \vec{x}=\lambda I\vec{x}\\
\begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix} \vec{x}  -
\begin{bmatrix}
\lambda & 0\\
0 & \lambda
\end{bmatrix} \vec{x}&=0\\
\end{align*}
$$

Going to just move the equation around, switch side and purely for visual effect. Then factor out the $\vec{x}$ and smash together the matrices

$$
\begin{align*}
0 &= \begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix} \vec{x} -
\begin{bmatrix}
\lambda & 0\\
0 & \lambda
\end{bmatrix} \vec{x}\\
&= \left(
\begin{bmatrix}
10 & -3 \\
-3 & 2
\end{bmatrix} -
\begin{bmatrix}
\lambda & 0\\
0 & \lambda
\end{bmatrix} 
\right)\vec{x}\\
&= 
\begin{bmatrix}
10-\lambda & -3-0 \\
-3-0 & 2-\lambda
\end{bmatrix}\vec{x}\\
\end{align*}
$$

Now, we solve for the determinant because we can set it equal to 0 (find the roots) to solve for non trivial answer(s). 

$$
\begin{align*}
\text{det}(A - \lambda I) &=
\begin{vmatrix}
10 - \lambda & -3\\
-3 & 2-\lambda
\end{vmatrix}\\
&= (10-\lambda)(2-\lambda) - (-3)(-3)\\
&=20 -10 \lambda -2\lambda +\lambda^2 -9 \\
&= \lambda^2 -12 \lambda +11
\end{align*}
$$

Well, isn't that interesting, we have a lambda polynomial. Set equal to 0 and solve for $\lambda$. You could go quadratic equation if you want

$$
\begin{align*}
x&=\frac{-b \pm \sqrt{b^2-4ac}}{2a}\\
&=\frac{12 \pm \sqrt{(-12)^2-4(1)(11)}}{2(1)}\\
&=\frac{12 \pm \sqrt{144-44}}{2}\\
&=\frac{12 \pm \sqrt{100}}{2}\\
&=\frac{12 \pm 10}{2}\\
x &=6 \pm 5\\
x &= (1, 11)
\end{align*}
$$

Yes, we now have our **eigenvalues**! What about those pesky eigenvectors?

Basically, we sub in our eigenvalues and solve for the vectors.

$$
\begin{align*}
\text{for } \lambda &=1\\
\vec{0} &= (A-(1)I)\vec{x}\\
&= \begin{bmatrix}
10-1 & -3\\
-3 & 2-1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}\\
&= \begin{bmatrix}
9 & -3\\
-3 & 1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
\end{align*}
$$

Quickly write out the equations

$$
\begin{array}{c}
0 = 9x_1-3x_2\\
0=-3x_1+1x_2
\end{array}
$$

We then have a _small_ system of linear equations. However, they are scalar factors of $-3$ of each other, so they don't add information the other does not. Basically, that means $x_1=t$ and $x_2=3t$, where $t$ is a "free variable". In essence, we take the latter equation and write as $3x_1=x_2$. Then, substitute the $x$ for $t$. 

$$
\begin{align*}
\text{for } \lambda &=11\\
\vec{0} &= (A-(1)I)\vec{x}\\
&= \begin{bmatrix}
10-11 & -3\\
-3 & 2-11
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}\\
&= \begin{bmatrix}
-1 & -3\\
-3 & -9
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
\end{align*}
$$

Quickly write out the equations

$$
\begin{array}{c}
0 = -1x_1-3x_2\\
0=-3x_1-9x_2
\end{array}
$$

They again, are just scalar multiple of each other. 

We are able to describe the **infinite** amount of solutions as those satisfying $x_1=t$ and $x_2=-t/3$. I think, to remove fractions, we take $x_1=3t$ and $x_2=-t$.

Then we write then in terms of unit eigenvectors, where the magnitude is $a^2+b^2=c^2$

$$
\begin{array}{ccc}
\vec{x}_1=\frac{1}{\sqrt{10}}
\begin{pmatrix}
1 \\ 3
\end{pmatrix} & 
\text{and} &
\vec{x}_2=\frac{1}{\sqrt{10}}
\begin{pmatrix}
3 \\ -1
\end{pmatrix}
\end{array}
$$

$\Box$

### 5.3 - Diagonalization

p. 117

#### Change of Basis

**Definition - Linearly Independent:** Vectors are _linearly independent_ if they cannot be expressed as a linear combination of each other. 

I suppose that would indicate the vectors have different directions.

A basis $\left\{ \vec{e}_i: 1,2,\cdots,N \right\}$ is a _minimal spanning set_ of linearly independent vectors. Example being Cartesian coordinate system, which form a basis of $\mathbb{R}^3$. We would have 

$$
\begin{array}{l|r}
\vec{i} = \vec{e}_1 & x\text{-axis}\\
\vec{j} = \vec{e}_2 & y\text{-axis}\\
\vec{k} = \vec{e}_3 & z\text{-axis}\\
\end{array}
$$

Now, consider $n$-dimensional vector space with basis $e_1,\cdots,e_n$. Every vector $\vec{x}$ in the _vector space_ can be expressed as a **linear combination** of the basis vectors:

$$
\vec{x} = x_1\vec{e}_1 + x_2\vec{e}_2 + \cdots + x_n\vec{e}_n
$$

You can also write it as

$$
\vec{x}=\begin{bmatrix}
x_1, x_2, \cdots,x_n
\end{bmatrix}^T
$$

Ok, why all of this? Well, suppose we want to write spherical coordinates instead of Cartesian. We create new base vectors $\vec{e}_j'$ as

$$
\vec{e}_j' = \sum_{i=1}^N S_{ij} \vec{e}_i
$$

where we say that $S_{ij}$ is a matrix that transforms $\vec{e}$ into $\vec{e}'$, Cartesian to Spherical. We are merely changing representation and not any properties. We can express our logic mathematically as follows:

$$
\vec{x} = \sum_{i=1}^N x_i \vec{e}_i =
\sum_{i=1}^N x_i' \vec{e}_i' =
\sum_{j=1}^N x_j' \sum_{i=1}^N S_{ij} \vec{e}_i
$$

So, the vector is broken into components, translated into other coordinates, and then expresses as that translation using the matrix. We have the following

$$
x_i = \sum_{j-=1}^N S_{ij}x_j'
$$

Or in vector notation as

$$
\vec{x} = S \vec{x}' \iff \vec{x}' = S^{-1}\vec{x}
$$

I'm not yet sure what this will accomplish, but we can express both representations as

$$
\vec{y} = A \vec{x},\ \vec{y}' = A'\vec{x}'
$$

Then, we can incorporate the transformation matrix, as expressed above:

$$
\begin{align*}
S \vec{y}' &= A S \vec{x}'\\
\vec{y}' &= S^{-1} A S \vec{x}' \implies \\
\implies A' &= S^{-1} A S 
\end{align*}
$$

I can see how this comes to fruition. An example of why it is useful would be nice. Additionally, it's important to note that the order or matrix multiplication is important, and where the matrices appear in the equation could be relevant. 

> Taboga, Marco (2021). "Change of basis", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/change-of-basis.

It is more like we use a **change of basis matrix** $S_{B \to C}$ to change each element $a \in A$. The proposition is

**Proposition:** Let $S$ be a vector space. Let $B=\{b_1, \cdots, b_K\}$ and $C=\{c_1,\cdots, c_K\}$ be two bases for $S$. They should represent the same basis really, just in different ways. Then, there exists a $K \times K$ matrix, we denote as $S_{B \to C}$ and called **change-of-basis matrix**, such that, for any $s \in S$

$$
[s]_C=S_{B \to C}[s]_B
$$

where $[s]_B$ and $[s]_C$ denote coordinate vectors of $s$ with respect to $B$ and $C$ repectively.
#### Matrix Diagonalization

p. 119

Consider matrix $S$ such that each column of the matrix corresponds to an _eigenvector_ of some matrix $A$

$$
S = \begin{bmatrix}
\uparrow & \uparrow & & \uparrow\\
\vec{x}^1 & \vec{x}^2 & \cdots & \vec{x}^N \\
\downarrow & \downarrow & & \downarrow
\end{bmatrix}
$$

The subscript does not denote an exponent but the eigenvector. The fulfill the equation for eigenvectors

$$
A\vec{x}^j = \lambda_j \vec{x}^j
$$

We can express $A$ in a new basis $A'$ consisting of the eigenvector from the change of basis section

$$
\begin{align*}
(S^{-1}AS)_{ij} &= \sum_k \sum_l(S^{-1})_{ik}A_{kl}S_{lj}\\
&= \sum_k \sum_l(S^{-1})_{ik}A_{kl}(x^j)_l\\
&= \sum_k (S^{-1})_{ik}\lambda_{j}(x^j)_l\\
&= \sum_k \lambda_j (S^{-1})_{ik}S_{kj}\\
\end{align*}
$$

I think we should look step by step
1. The base definition
2. The eigenvectors in matrix $S$
3. We apply the eigenvalues of matrix $A$
4. And recombine to the eigenvectors in matrix $S$

multiplying the $S$ matrix by its inverse with produce the identity matrix, thus resulting in a diagonal matrix with eigenvalues along the diagonal. 

$$
A'= \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0\\
0 & \lambda_2 & \ddots & \vdots\\
\vdots & \ddots & \ddots & \vdots\\
0 & 0 & \cdots & \lambda_N
\end{bmatrix}
$$

Let's talk about what we used during the derivations:
+ Matrix $S$ was chosen so columns of $S$ are eigenvectors of $A$
+ Applying $A$ to an eigenvector of $A$ scales that eigenvector by the associated eigenvalue $\lambda$ ($A\vec{x}=\lambda \vec{x}$)
+ Applying inverse of a matrix to said matrix gives identity, $S^{-1}S=I$. 

> Taboga, Marco (2021). "Matrix diagonalization", Lectures on matrix algebra. https://www.statlect.com/matrix-algebra/matrix-diagonalization.

The above link states the most important application of diagonalization is the computation of matrix powers. 

**EXAMPLE**

Diagonalize the following matrix (for no reason?).

$$
A = \begin{bmatrix}
2 & 0 & 0\\
1 & 2 & 1\\
-1 & 0 & 1\\
\end{bmatrix}
$$

First, find the _eigenvalues_ of  $A$. Remember, we can use $\text{det}(A-\lambda I)=0$

$$
\begin{align*}
|A-\lambda I| &= \begin{vmatrix}
2-\lambda & 0 & 0\\
1 & 2-\lambda & 1\\
-1 & 0 & 1-\lambda\\
\end{vmatrix}\\
&\text{hold } i=1\\
&=(2-\lambda)\left((-1)^{1+1}(2-\lambda)(1-\lambda)-(0)\right)+0(\cdots)+0(\cdots)\\
0 &=(2-\lambda)^2(1-\lambda)
\end{align*}
$$

By holding the top row to find the determinant, we take advantage of the zeros making the multiplication easier. 

Now, we solve for $(A-\lambda I)\vec{x}=0$. I think from the equation, we can see the solution set as $\lambda = [\ 1, 2\ ]$. We start by substituting $\lambda=1$

$$
(A-1I)\vec{x} = \begin{bmatrix}
2-1&0&0\\
1&2-1&1\\
-1&0&1-1\\
\end{bmatrix} \vec{x} = 
\begin{bmatrix}
1&0&0\\
1&1&1\\
-1&0&0\\
\end{bmatrix} \vec{x}
$$

This means we can solve the following set of equations:

$$
\begin{align*}
x_1 &= 0\\
x_1 + x_2 + x_3 &= 0\\
-x_1 &= 0
\end{align*}
$$

We have that $x_1=0$, and $x_2=-x_3$ and therefore the _eigenvector_ is given by. Or like $x_2=-t$ and $x_3=t$. 

$$
\vec{v}_1=a_1 \begin{bmatrix}
0 \\ -1 \\ 1
\end{bmatrix}
$$

And $a_1$ is just an arbitrary constant. Remember, we usually choose $a_1$  so that the eigenvector becomes a unit vector. But, because we want to change basis, we can choose $a_1=1$ to make the resulting matrix of eigenvectors as simple as possible. 

Now, let $\lambda=2$

$$
(A-1I)\vec{x} = \begin{bmatrix}
2-2&0&0\\
1&2-2&1\\
-1&0&1-2\\
\end{bmatrix} \vec{x} = 
\begin{bmatrix}
0&0&0\\
1&0&1\\
-1&0&-1\\
\end{bmatrix} \vec{x}
$$

Let's look at this like it's a real problem to solve. We need 2 more vectors of $\vec{x}$ that will zero this out. 

$$
\begin{align*}
0(-1) + 0(0) + 0(1) &= 0\\
1(-1) + 0(0) + 1(1) &=0\\
-1(-1) + 0(0) + -1(1) &=0\\
\end{align*}
$$

It's a bit like fill in the blank...

$$
\vec{0} = \begin{bmatrix}
0&0&0\\
1&0&1\\
-1&0&-1\\
\end{bmatrix} \begin{bmatrix}
-1 \\ 0 \\ 1
\end{bmatrix}\\
$$

And, we also have the following...

$$
\begin{align*}
0(0) + 0(1) + 0(0) &= 0\\
1(0) + 0(1) + 1(0) &=0\\
-1(0) + 0(1) + -1(0) &=0\\
\end{align*}
$$

It's a bit like fill in the blank...

$$
\vec{0} = \begin{bmatrix}
0&0&0\\
1&0&1\\
-1&0&-1\\
\end{bmatrix} \begin{bmatrix}
0 \\ 1 \\ 0
\end{bmatrix}\\
$$

That's a little cheap, but gets the job done. Our other two eigenvectors are therefore

$$
\begin{array}{lcr}
\vec{v}_2=a_2 \begin{bmatrix}
0 \\ 1 \\ 0
\end{bmatrix} &
\text{and} &
\vec{v}_3=a_3 \begin{bmatrix}
-1 \\ 0 \\ 1
\end{bmatrix}
\end{array}
$$

Ok, wow. Now, going back to slotting them into a matrix side-by-side

$$
S = \begin{bmatrix}
0 & 0 & -1 \\
-1 & 1 & 0\\
1 & 0 & 1\\
\end{bmatrix}
$$

That is the **matrix of eigenvectors**, and below is the corresponding **diagonal matrix of eigenvalues**!
+ it is literally, just what it sounds like...

$$
D = \begin{bmatrix}
1 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2\\
\end{bmatrix}
$$

If we really want to go the extra mile, we can verify the answer using the expression $D=S^{-1}AS$. 

$\Box$

As we are dealing with determinants, note that not all matrices are _diagonalizable_. The link to _Statlect.com_ is very good because there is more to this that the course book leaves out. 

### 5.4 - Tensors

p. 122

We are going to look at scalars, vectors, and matrices in a more _unified_ way. Typically, numbers are useless without more information, the context of which they represent, whether it be slices of cake, or kilograms of mass. Scalars always produce scalars when we operating with scalars. 

We revisit $\vec{v} = a\vec{i} + b\vec{j} + c\vec{k}$ to talk about vectors and unit vectors multiplied by scalars for magnitude. 
+ Sum of 2 vectors is another vector
+ Inner product of vectors produces a scalar
+ Cross product of vectors produces orthogonal vector.
+ Multiplication of a vector by a scalar is a vector. 

We have also operated on vectors with matrices to rotate vectors, or express a change of basis or coordinate system. 

Not everything can be represented with scalars and vectors. For example, the inertia matrix requires nine elements of a $3 \times 3$ matrix to describe behaviour. Similar to also describing an external magnetic field, it requires a $3 \times 3$ matrix as well. 

Informally, we have been dealing with **Tensors** the entire time, but let's see what that means:
+ Scalar = Tensor of rank 0 ($3^0=1$ components)
+ Vector = Tensor of rank 1 ($3^1=3$ components)
+ Dyad = Tensor of rank 2 ($3^2=9$ components)
+ Triad = Tensor of rank 3 ($3^3=27$ components)

We can understand the **rank** of a tensor intuitively as the number of indices we need to express the tensor. Our vector has one index, hence can be represented like $a_i \ \forall \ a \in \vec{a}$. 

A Tensor of rank 2 behaves like a square matrix, but _tensors_ also generalize the concepts we have covered so far. 

if $\vec{a}$ and $\vec{b}$ are vectors and $T$ is a tensor of rank 2, we can express the linear equations $\vec{b} = T \vec{a}$ as the following system of linear equations:

$$
\begin{align*}
\vec{b}_1 &= t_{11}a_1 + t_{12}a_2+b_{13}a_3\\
\vec{b}_2 &= t_{21}a_1 + t_{22}a_2+b_{23}a_3\\
\vec{b}_3 &= t_{31}a_1 + t_{32}a_2+b_{33}a_3\\
\end{align*}
$$

Looks a bit like matrix multiplication. Apparently, we now look at the following summation convection where we don't explicitly write the summation sign because why?

$$
b_i = \sum_{j=1}^3 t_{ij}a_j=t_{ij}a_j
$$

When a concept appears easy, we make it more difficult by changing notation, that way only we can understand it. It's job security.

Basically, it might look like regular multiplication, but it is implied we sum over the elements of $j$. It becomes a useful shorthand when there's many indices used. 

**Definition - Symmetric Tensors:** A Tensor is **symmetric** if the tensors invariant under a permutation of its indices. Basically, elements do not flip from positive to negative, or vice versa, if the indices are swapped (i.e. $t_{ijk\cdots z}=t_{jik\cdots z}$ for $i$ and $j$ swapping).

If the signs would _flip_, the Tensor is **anti-symmetric**. 
