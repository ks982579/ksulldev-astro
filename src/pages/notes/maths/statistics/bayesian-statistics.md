---
layout: '@layouts/NotesLayout.astro'
title: 'Bayesian Statistics'
pubDate: 2024-01-06
description: 'Introduction to Bayesian Statistics.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability", "Bayesian"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 3: Bayesian Statistics

Our learning objectives are as follows:
+ Understand what the Bayes' formula is.
+ Calculate the _posteriori_ probability of events in a Bayesian approach.
+ Identify methods for choosing priors.
+ Understand the differences between Frequentist and Bayesian statistics. 

## Introduction

p. 96

The course book begins with an example of traffic lights, if one is green we assume another is red. In this case, based on past experience, we hold a _prior_ belief that if our traffic light is green, the other is red. 

Incorporating prior knowledge plays a major role in decision making and directly affects the outcome and the decisions we make. This way of using and interpreting probabilities is called **Bayesian Statistics**, name after [The Reverend Thomas Bayes | Wiki](https://en.wikipedia.org/wiki/Thomas_Bayes). 

## 4.1 - Bayes' Rule

Central to Bayesian analysis is conditional probabilities:

$$
P(B|A) = {P(B\cap A) \over P(A)}
$$

It is said "The probability of $B$ given $A$", meaning that event $A$ has already occurred. 
