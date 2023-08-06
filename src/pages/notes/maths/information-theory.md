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

> I would imagine this to be a dense section where the notes would (eventually) be split into different categories. Until then, they are here 😊

# Unit 6 - Information Theory

p. 127

Quick overview of our learning goals:
+ How to express the difference between a prediction and observed event using the _MSE_
+ What the Gini Index is and how to determine it
+ Concepts of information entropy, Shannon entropy, and Kullback Leibler divergence
+ How to use _cross-entropy_ to compare 2 probability functions

## Introduction

What is information theory? There's always [a wikipedia article](https://en.wikipedia.org/wiki/Information_theory), which states it is "the mathematical study of the quantification, storage, and communication of information." It is in the realm of applied mathematics, and a combination of probability theory, statistics, computer science, and some other fields. It is a vastly wide field that has roots in many, many other applications such as statistical inference, cryptography, neurobiology, quantum computing, black holes, etc...

A major concept of information theory is _entropy_. It was introduced by Claude Shannon.

## 6.1 - Mean Squared Error (MSE)

To predict a quantity from observed values, we can turn to regression. Independent variables are often called _features_ and the dependent variable is called a label. 

$$
y=f(X,a_i)
$$

where $a_i$ can be one or more parameters. 

So, $X$ is a class, which is a collection of variables in a given dataset. Corresponding $\vec{x}$ is a specific set of values. This vector is more of a notation and the domain of the vector may not necessarily fulfil all requirements of an actual vector space, as we've studied previously. 

For observations, the mapping $f(\ldots)$ results in a prediction, $\hat{y}$. Linear regression is the simplest _nontrivial_ example of building a prediction model. It takes a form like $y=mx+b$.

**Definition - Free parameters:** Free Parameters are those parameters in a model that need to be determined using the data. 

We have **free parameters** $a_1=m$ and $a_2=b$. To determine their value, we need observations of both $x$ and $y$. 

Without diving into regression analysis, we'll just look at ways to assess the accuracy of the model. The simplest metric is the mean squared error.

**Definition - Mean Squared Error:** self describing equation for assessing accuracy of prediction model

$$
MSE = \frac{1}{N}\sum_{i=1}^{N}(y_i-\hat{y})^2
$$

There's also a mean absolute error, and the difference between the two is interesting, easier seen with a plot, but should be left for regression notes. I believe the use of squaring over absolutes is for the mathematical convenience of using in other equations. Absolutes don't play as nicely with others.

Because the MSE squares the difference, it "puts a strong penalty of predictions $\hat{y}$ that are far from observed value $y$." This means the metric can be become tainted and dominated by a few extreme values. 

Model accuracy metrics like MSE can be used during model construction and during model testing and assessment.
+ **Loss function** = Used during model building while the parameters $a_i$ are optimized.
+ **Score function** = Used to compare the value predicted by the model with the observed values after the model has been built. 

It would be interesting to build a small algorithm to optimize accuracy of a regression model.

## 6.2 - Gini Index

p. 129

[Gini Coefficient -- from Wolfram MathWorld](https://mathworld.wolfram.com/GiniCoefficient.html)

> The **Gini coefficient** $G$ is a summary statistic of the Lorenz curve and a measure of inequality in a population. It can range from 0 to 1, from all individuals being equal to a theoretical infinite population in which every individual, except one, has a size of zero.

It is a statistical measure of the degree of inequality of values in frequency distributions. 

[InvestoPedia](https://www.investopedia.com/terms/g/gini-index.asp) seems to agree that it measures distribution of something across a population. A high Gini Index indicates greater inequality. That is why, if all values are zero and one is 1, the Gini index is 1. That one value holds all of the wealth.

[WikiPedia](https://en.wikipedia.org/wiki/Gini_coefficient) also describes it as a measure of statistical dispersion. 

It was developed by Italian Statistician and Sociologist Corrado Gini in 1921. A value of 0 means perfect dispersion or equality, and a value o 1 means perfect inequality. You can also obtain values greater than one if you consider negative values, like people with debt. 

Finding the Gini Index is probably easiest to discuss when talking about income of people in a country. Gather all the data you can. Present data as cumulative percentage of population against cumulative share of income earned. You'll get a resulting _Lorenz Curve_.
+ Think like a histogram, and then let the width of each bar approach 0.

A simple equation is something like

$$
G = \frac{A}{A+B}
$$

Where $A$ is the amount between the line of equality and the Lorenz Curve, and $B$ is the area under the Lorenz Curve. 

We can say a few things about that equation
+ If $A=0$ the Lorenz Curve coincides with the line of Equality
+ if $G=0$, it is "perfect" equality, or perfectly uniform distribution of income. 

**EXAMPLE**

Consider if we represent the Lorenz curve as $y=x^5$. Can we determine the Gini Index?

The area under the Lorenz Curve is $B$. That is simply

$$
\begin{align*}
B &= \int_0^1 x^5 dx \\
&= \left. \frac{1}{6}x^6 \right|_0^1\\
&= \frac{1}{6}(1) - (0) = \frac{1}{6}
\end{align*}
$$

And now the Line of Perfect Equality

$$
\begin{align*}
A+B &= \int_0^1 x dx \\
&= \left. \frac{1}{2}x^2 \right|_0^1\\
&= \frac{1}{2}(1) - (0) = \frac{1}{2}
\end{align*}
$$

This is the entire area. $A$ is the area between the perfect equality and the Lorenz Curve

$$
\begin{align*}
A + \frac{1}{6} &= \frac{1}{2}\\
A &= \frac{1}{2} - \frac{1}{6}\\
A &= \frac{3}{6} - \frac{1}{6}\\
A &= \frac{2}{6} = \frac{1}{3}\\
\end{align*}
$$

Which leads to the Gini Index

$$
\begin{align*}
G &= \frac{ \frac{1}{3}}{\frac{1}{2}}\\
&= \frac{1}{3}\frac{2}{1}\\
&= \frac{2}{3}\\
\end{align*}
$$

### Gini Impurity

p.134
