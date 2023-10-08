---
layout: '@layouts/NotesLayout.astro'
title: 'Selected Mathematical Techniques'
pubDate: 2023-10-07
description: 'Some math techniques specific to data science'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "math", maths]
---

```yaml
title: Data Science
subtitle: DLMBDSA01
authors: Prof. Dr. Claudia Heß
publisher: IU International University of Applied Sciences
date: 2022
```

Not sure if this belongs here or in the Maths section, but here is good for now. 

# Unit 5: Selected Mathematical Techniques

You will learn about:
+ How to apply principal component analysis to data.
+ How to perform cluster analysis on a dataset.
+ How to describe the linear regression model and compute its coefficients.
+ How to describe the important features of time-series data.
+ The popular models for forecasting future values in time-series data.
+ The common approaches for dataset transformation.

## Introduction

We will discuss mathematical techniques and models used to transform data into insightful information. There are two modeling approaches for prediction:
+ Regression = to predict a numerical value for a variable.
+ Classification = to predict the best category for a variable.

Basically, the flow of this section is the same order as the learning objectives. It's noted that there we separate time-series data because it is both common and requires additional considerations.

## 5.1 - Principal Component Analysis

Input data usually include correlated variables, either redundant or irrelevant. If the correlation is high but not 100%, then there is still some amount of independent information within each variable. However, the juice isn't worth the squeeze, it place more burden on the prediction models than what they are worth. 

So, we come up with a correlation threshold and if a variable exceed that threshold with another variable, we can assume it as redundant information and can safely remove from the dataset. 

**Definition - Principal Component Analysis (PCA):** A statistical analysis method applied to transform potentially correlated variables into uncorrelated variables called _principle components_ (PCs). 

This is a method that is applied to transform linearly-correlated variables into uncorrelated variables called principal components (PCs). PCA also sorts the produced uncorrelated variables according to their variance along the data records. Variables at the bottom of the list are said to have _low changeability_, and can be excluded. This results in a desired reduction in dimensionality of the dataset. 

The goal is to construct a new set of variables such that most information is contained within the first few variables. Then, in the machine learning model and regressions phase, we might only use a subset of the new variables. 

Are there steps? Actually, the book shows the **PCA Algorithm**, very cools. 

### The PCA Algorithm

#### Step 1: Get and Subtract the Mean

