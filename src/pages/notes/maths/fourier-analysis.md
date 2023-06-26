# Applied Fourier Analysis

```yaml
title: Applied Fourier Analysis
subtitle: From Signal Processing to Medical Imaging
author: Tim Olson
publisher: Springer Science+Business Media, LLC
year: 2017
doi: https://doi.org/10.1007/978-1-4939-7393-4_1
```

## 1. Introduction: From Linear Algebra to Linear Analysis

Fourier Analysis is at the center of many modern sciences, from Physics and engineering, to population dynamics in biology. Many of the important phenomena in our world are related to periodic phenomena. Understanding frequency based functions, sines and cosines, are _eigenfunctions_, or "building blocks of the universe." 

### 1.1 Three variations of Fourier Analysis

1. Fourier Series
2. The Discrete Fourier Transform
3. The Continuous Fourier Transform

**Fourier Series** involves representing a continuous function on a finite interval $[a,b]$ with an infinite series, which is similar to the Taylor series.

The **Discrete Fourier Transform** (DFT) is focused on a function on a finite set of points, referred to as $0,1,\text{...},N-1$. Being discrete, it's commonly implemented in technology. 

The **Continuous Fourier Transform** (CFT) extends the Fourier Series to deepen our understanding of connections between physical reality and digital representations. 

#### 1.1.1 Fourier Series

Quick look at a _basic_ Fourier Series. On an interval $[-\pi, \pi]$ we can represent a series expansion:

$$
f(t) = \frac{a_0}{2}+ \sum_{k=0}^{\infty}a_k \cos(kt) + b_k \sin(kt)
$$

where…

$$
\begin{align*}
a_k &= \frac{1}{\pi} \int_{-\pi}^{\pi}f(t) \cos(kt)dt, \;\text{and}\\
b_k &= \frac{1}{\pi} \int_{-\pi}^{\pi}f(t) \sin(kt)dt
\end{align*}
$$

Ok, so that is a discrete summation of the integration of trigonometric functions on our interval for each value of $k$. We have only just begun the most basic form of Fourier Analysis, which is to separate a function into the various frequencies which represent it. 

Interesting to note that the cosine terms are even, and the sine terms are odd. We have decomposed our function into even and odd parts, in addition to individual frequencies. This will be invaluable later. 

One limitation of the Fourier Series can be seen in the formulas. You must calculate the integrals, a time consuming and difficult practice. Another limitation is that a Fourier Series is only valid on a finite interval. 

#### 1.1.2 The Discrete Fourier Transform

The **Discrete Fourier Transform** (DFT) addresses the problem of calculating an infinite number of integrals by creating a simple matrix that can be on _basic_ finite signals. 