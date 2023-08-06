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