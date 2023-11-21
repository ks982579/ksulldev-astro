---
layout: '@layouts/NotesLayout.astro'
title: 'Introduction to Statistics'
pubDate: 2023-11-20
description: 'A gentle or abrupt introduction into the great world of statistics'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "kolmogorov"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 1: Introduction to Statistics

p. 11 - 42

Learning goals include:
+ Understanding fundamental aspects of statistics
+ Identify Kolmogorov Axioms
+ Discuss problems of dimensionality
+ Grasp principal component and linear discriminant analysis

## Introduction 

Statistics as a science is the science of collecting, presenting, analysing, and interpreting facts and data. This sounds a bit like Data Science.

Statistics can also be the plural for statistic, which is a single measure of a sample. More about this later. 

What are the two main branches that Statistics as a science are commonly subdivided into?
+ Descriptive Statistics
	+ Comprised of presenting and analysing observed data. 
	+ This statistics strictly limits itself to data collected from a specific group of observed units (such as people).
	+ Not assumed that data come from a larger population, nor is any inference made about non-observed data.
+ Inferential Statistics
	+ Data from a subset of a population (aka sample) is used to estimate corresponding data of a larger population using statistical methods. 
	+ Estimates take the form of points or intervals. 

How do we bridge the two branches of statistics, descriptive and inferential statistics?
+ Through the theory of probability

What is a "population" in the context of statistics?
+ A [population | Investopedia](https://www.investopedia.com/terms/p/population.asp) in statistics is "the pool of individuals from which a statistical sample is drawn for a study."
+ It would be the whole, every element that could be included in your analysis. 
+ You can also think of future data elements as being part of your population, like children not yet born, and therefore we can only take samples in our current present. 

What does the term "measurement" mean in statistics?
+ A general observation, such as colour of an object or quality of hotel service. 

Not everything can be measured the same way. Therefore, there are several different _levels_ of measurement. What are four commonly used levels of measurement?
+ Nominal Scale
	+ Labels are assigned to denote the possible values of objects.
	+ It is not meaningful to sort nominally scaled objects by value. For example, you cannot sort hair colour in ascending order. You can only sort alphabetically. 
+ Ordinal Scale
	+ Categorical objects that _can_ be arranged in order, like a rating.
	+ Typically denoted as labels, but can also be numerical values. 
	+ Inherent problem is that the difference between two values is not well-defined. Even if using numerical values, calculating the differences and ratios is not appropriate.
	+ Example being like "great, good, ok, bad, awful". These have inherent order.
+ Interval Scale
	+ Distance between individual units are equal. 
	+ Note that the value 0 can be just another possible value because both negative and positive values are possible. This means $+5\degree C$ is **not** twice as hot as $-5\degree C$. 
+ Ratio Scale
	+ Similar to the interval scale, but 0 is the absolute lowest value possible. With this property, we can make statements like this is twice as long as that.
	+ Typical examples include length, mass, weight. 

## 1.1 - Probability Theory

I image one day, in the far future, if I revisit these notes I would separate probability from statistics as they are actually 2 different fields of study. 

What is probability theory generally concerned with?
+ It is generally concerned with events whose outcomes are uncertain. 

What is the difference between deterministic and random events?
+ Deterministic events are certain to happen with 100% probability.
+ Random events live in a pool of other possible outcome, each with probability of happening between 0% and 100% exclusively. 

What is a **random experiment**?
+ An experiment for which the outcome cannot be predicted with certainty. 
+ Examples include a coin toss or roll of dice. 

What is a **sample space**?
+ p. 13
