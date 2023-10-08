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

The book describes this a little weird so I will give my interpretation. If we have a table of data, each record is a row, and the columns are our features, or _variables_ as the book says. But if a record is a Person, then one column could be "age", another could be "height", and another "gross income", etc... We can have $M$ different _variables_, each represented as...

$$
\left\{ x_i\;|\;i \in \mathbb{N},1\le i \le M \right\}
$$

We also have $N$ records. The average (mean) is:

$$
\bar{x}_i=\frac{1}{N} \sum_{k=1}^{N} x_{ik}
$$

Where $i = 1,\ 2,\ \dots,\ M$. Then, you simply subtract each value from the mean, resulting in a dataset whose mean is centred around 0, simplifying the remaining steps of the PCA algorithm.

$$
x_i = x_i - \bar{x}_i
$$

#### Step 2: Calculate the Covariance Matrix

Covariance $C(x_i, x_j)$ is the measure of changes in variables $x_i$ with respect to the changes in variable $x_j$ according to:

$$
C(x_i,\ x_j)=\frac{1}{N-1} \sum_{k=1}^{N} (x_i \cdot x_j)_k
$$

Always fun to note that the covariance of a variable with itself is the variance. Since we are solving for the covariance of all variables with all other variables, you get a symmetric matrix with dimensions $\left[ M \cdot M \right]$. 

$$
C = \begin{bmatrix}
C(x_1, x_1) & C(x_1, x_2) & \dots & C(x_1, x_M)\\
C(x_2, x_1) & C(x_2, x_2) & \dots & C(x_2, x_M)\\
\vdots      &   \vdots    & \ddots & \vdots \\
C(x_M, x_1) & C(x_M, x_2) & \dots & C(x_M, x_M)
\end{bmatrix}
$$

Remember that covariance can be either positive or negative, and a covariance close to 0 indicates variables are uncorrelated. 

#### Step 3: Calculate the EigenValues and EigenVectors

If you have read through the advanced Maths notes, you would have come across these. 

The objective of PCA is to transform the calculated covariance matrix into an _optimum_ form where all variables are uncorrelated linearly to first order. That is, $C(x_i, x_j) = 0,\ i \ne j$. Notice how we state uncorrelated **linearly** to the **first order**.

For $y = \ln{(x)}$, even though $y$ is dependent solely on $x$, it wouldn't appear correlated because correlation measure the linear relationship between variables. 

The resulting matrix is a diagonal matrix where all elements equal 0 except those in the diagonal. 

$$
0 = C - \left[ \begin{array}{ccc}
\lambda_1 & \cdots & \lambda_M
\end{array} \right] \cdot I
$$

And the diagonal elements of the transformed matrix are called the _eigenvalues_ ($\lambda$). To solve, you take the determinant of the bloody thing. 

$$
\text{det}(C-\lambda \cdot I) = \left| 
C - \lambda \cdot I
\right| = 0
$$

And, the **Principal Components** (PCs) are the Eigen$\vec{V}$ectors of the calculated EigenValues. 

What is an EigenVector in this context? It is a vector that, when transformed by the covariance matrix, results in a scaled version of the vector. Remember that in the pure mathematical context, The EigenVector was typically a unit vector where elements could be chosen freely in a manner of speaking. 

The scale is the associated eigenvalue, given by

$$
\begin{align*}
C \cdot PC_i &= \left( \lambda_i \cdot I \right) \cdot PC_i\\
\text{a} & \text{gain}\dots\\
i &= 1,\ 2,\ \dots,\ M
\end{align*}
$$

So, you get the $i^{th}$ principal component. 

Since there are no correlations between the obtained PCs, the eigenvectors are orthogonal vectors.

#### Step 4: Formulate the PCs

The next step is to order all other PCs according to their EigenValues, highest to lowest. The percentage of how much variance each PC represents is calculated by:

$$
H_{PC_i} = \frac{\lambda_i}{\lambda_1 + \cdots + \lambda_M} \cdot 100\%
$$

So, it is a weighted average. And since we centred the variables mean around 0, their weights should be comparable. 

#### Step 5: Dimensionality Reduction

You can choose to ignore the PCs with less significance. They will appear at the bottom of the PC list with the lowest eigen values. You will have a dataset now with $M'$ variables, where $M' \lt M$. 

#### Step 6: Reconstruct the dataset

Then, the data set is reconstructed by the produced PCs with the following:

$$
[y]^T=\begin{bmatrix}
PC_1 & \cdots & PC_{M'}
\end{bmatrix}^T \cdot [x]^T
$$

Notice we have $M'$, which might be obvious to some but just in case... 
