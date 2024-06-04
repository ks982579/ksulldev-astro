---
layout: '@layouts/NotesLayout.astro'
title: 'Correctness Accuracy and Completeness of Algorithms'
pubDate: 2024-06-04
description: 'Introduction to Algorithm Correctness and Completeness'
author: 'Kevin Sullivan'
tags:
    [
        'computer science',
        'programming',
        'notes',
        'masters',
        'algorithmics',
        'algorithms',
    ]
---

```yaml
title: Algorithmics
subtitle: DLMCSA01
authors: Prof. Dr. Cosmina Croitoru
publisher: IU International University of Applied Sciences
date: 2023
```

# Correctness, Accuracy, And Completeness of Algorithms

pp. 101 -> 132

Looking to learn:
+ How to write Correctness Proofs
+ The difference between total *correctness* and *partial* correctness
+ The practical side of a program's correctness
+ How to analyse the accuracy of approximate algorithms

## Introduction

Programs fail for many reasons, whether they give you unexpected output or fail to give any at all. This is why it is important to verify the correctness of programs and algorithms during development. We can also write tests to verify that our programs give desired output for reasonable input(s), but nothing can beat a mathematical proof of an algorithm's behaviour. I have no idea how deep into the weeds we are going to get, but we will look at how to ensure algorithms, and programs, are correct. 

## 4.1 - Partial Correctness

Searching recommended books for "partial correctness" doesn't result in anything right away. The concept of "correctness" of an algorithm is brought up in the very beginning of chapter 1 of MIT Press "Introduction to Algorithms". They state an algorithm in _computationally_ correct if for every input provided, it _haults_ (finishing computing in finite time), and outputs the correct solution to the "problem instance".

In my preferred book, "The Algorithm Design Manual", 3rd edition, published by Springer, the author discusses correctness in chapter 1, but section 1.3. Then continues to discuss proofs by induction and contradiction. 

The course book presents the induction proof, which we can find anywhere online, before explaining how to prove partial correctness of an algorithm.

[Correctness (Computer Science) | Wikipedia](https://en.wikipedia.org/wiki/Correctness_(computer_science)) actually discusses partial correctness. What's the difference? **Partial Correctness** requires that if an answer is returned from the algorithm, or program, or whatever, then it must be correct. **Total Correctness** adds the requirement that an answer is guaranteed to eventually be returned. That is, the algorithm terminates, or as MIT says, it haults. 

The Wiki article dives into a few interesting topics about proofs and computing, referring to an algorithm of the least odd perfect number as an example of a partially correct algorithm. And Wiki also discusses **Software Testing**, calling it an art, and stating it is impossible to completely test a program with even moderate complexity. Then, Software testing is a trade-off between budget, time, and quality, which is a golden triangle of software engineering. You can only pick 2 or the 3 at any time. 

### Mathematical Induction

You might first learn of proofs and induction in a discrete maths course. The concept of **Proof by Induction**, as stated in the course book and [Mathematical Induction | Wikipedia](https://en.wikipedia.org/wiki/Mathematical_induction), is to prove a usually simple case of what you are trying to prove, and extending that all other cases. The course book uses some $O_n$ notation, but the example is good.

Let's prove the following:

$$
\begin{align*}
\sum_{i=1}^{n} i &= {n(n+1) \over 2}
\end{align*}
$$

This is also the example in the MIT press book... Anyway, just follow the steps. What are those? [Mathematical Induction | MathIsFun.com](https://www.mathsisfun.com/algebra/mathematical-induction.html) says:
1. prove the first case is true, also called the **base case**
2. Prove that if the case is true for $n=i$, then it must be true for $n=i+1$. This is the **induction step**

The terms come from Wiki... which gives the same example!

We can prove, mathematically, the base case:

$$
{0(0+1) \over 2} = 0
$$

We make the assumption that the following statement is also true for values of $i \le k$ where $0 \le k \le n-1$:

$$
\begin{align*}
\sum_{a=1}^{i} a &= {i(i+1) \over 2}
\end{align*}
$$

Right, basically just changed the variables, but we pretend it is something different. Because now we switch to using $k$ but up the stakes by going to $k+1$:

$$
\sum_{b=1}^{k+1} b = \left( {k(k+1) \over 2} \right) + (k+1)
$$

All that happened is I pulled out the last term, which would have been $k+1$, and compact the remaining terms into our assumed to be correct function. Let's force this function into submission

$$
\begin{align*}
\sum_{b=1}^{k+1} b &= \left( {k(k+1) \over 2} \right) + (k+1)\\
&= \left( {k(k+1) \over 2} \right) + {2(k+1)\over 2}\\
&= \left( {k(k+1) + 2(k+1) \over 2} \right) \\
&= {(k+2)(k+1) \over 2} \\
&= {(k+1)((k+1)+1) \over 2} \\
&\text{let } \quad h=k+1 \\
&= {h(h+1) \over 2}
\end{align*}
$$

There's the formula we are looking for. 

### Partial Correctness Proof of Iterative Algorithms

p. 103