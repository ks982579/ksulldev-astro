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

### PCA Example

If you are anything like me you need an example to set the record straight. Luckily, the book comes with one. 

|d|x1|x2|
|:---|:---:|:---:|
|1|2.5|2.4|
|2|0.5|0.7|
|3|2.2|2.9|
|4|1.9|2.2|
|5|3.1|3|
|6|2.3|2.7|
|7|2|1.6|
|8|1|1.1|
|9|1.5|1.6|
|10|1.1|0.9|

![image of graph](/images/notes/data-science/pca-datascience-graph-0001.png)

The data records are scattered around the diagonal. This means that the diagonal itself would be a better primary axis because it captures the most important variance of the data records. 

The logic here is a little confusing. Not all of the data records are on the diagonal because of some variance. We expect that a second axis perpendicular to the diagonal will capture the second-highest variability of these data records. Not sure what that means...

The Principal Component Analysis (PCA) algorithm is an unsupervised machine learning algorithm that attempts to reduce the dimensionality (number of features) within a dataset while still retaining as much information as possible.

When PCA is applied to a dataset, it finds the principal components of the data. The principal components are new axes that are perpendicular to each other and capture the maximum variability in the data.

In the example provided, the data records are not all on the diagonal. This means that the data is not perfectly correlated with any one axis. However, we can expect that a second axis perpendicular to the diagonal will capture the second-highest variability of the data records.

This means that the information in the graph is better described using the diagonal and a new axis perpendicular to it. If we need to reduce the number of variables, we could use only the new (diagonal) axis, as it captures most of the information, and neglect the second new axis which contains less significant information about the variance of the data points.

Here is a simple example to help you understand this concept:

Imagine that we have a dataset of two features: height and weight. We can plot this data in a two-dimensional scatter plot. If the data is perfectly correlated, then all of the data points will lie on a straight line. However, if the data is not perfectly correlated, then the data points will be spread out over the two dimensions.

We can use PCA to find the principal components of this dataset. The first principal component will be the axis that captures the maximum variability in the data. In this case, the first principal component will be an axis that runs along the diagonal of the scatter plot.

The second principal component will be the axis that captures the second-highest variability in the data. In this case, the second principal component will be an axis that is perpendicular to the first principal component.

If we need to reduce the number of variables in our dataset, we can use only the first principal component. This will capture most of the information in the data, and we can neglect the second principal component without losing too much information.

First, find the mean of each variable.
$$
\begin{gather*}
\bar{x}_1 = 1.81\\
\bar{x}_2 = 1.91
\end{gather*}
$$

Second, subtract mean from values.

|d|x1|x2|$x_1-\bar{x}_1$|$x_2-\bar{x}_2$|$(x_1-\bar{x}_1) \cdot (x_2-\bar{x}_2)$|$(x_1-\bar{x}_1)^2$|$(x_2-\bar{x}_2)^2$|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|1|2.5|2.4|0.69|0.49|0.3381|0.4761|0.2401|
|2|0.5|0.7|-1.31|-1.21|1.5851|1.7161|1.4641|
|3|2.2|2.9|0.39|0.99|0.3861|0.1521|0.9801|
|4|1.9|2.2|0.09|0.29|0.0261|0.0081|0.0841|
|5|3.1|3|1.29|1.09|1.4061|1.6641|1.1881|
|6|2.3|2.7|0.49|0.79|0.3871|0.2401|0.6241|
|7|2|1.6|0.19|-0.31|-0.0589|0.0361|0.0961|
|8|1|1.1|-0.81|-0.81|0.6561|0.6561|0.6561|
|9|1.5|1.6|-0.31|-0.31|0.0961|0.0961|0.0961|
|10|1.1|0.9|-0.71|-1.01|0.7171|0.5041|1.0201|
| SUM | - | -| - | - |5.539|5.549|6.449|


Third is the covariance matrix. Just sanity check on Covariance...

$$
\begin{align*}
C(x_i,\ x_j) &= \frac{1}{N-1} \sum_{k=1}^{N} \left( (x_1-\bar{x}_1) \cdot (x_2-\bar{x}_2)_k \right)\\
C(x_i,\ x_j) &= \frac{1}{10-1} \left( 5.539 \right)\\
C(x_i,\ x_j) &= \frac{5.539}{9}\\
C(x_i,\ x_j) &\approx 0.6154\bar{4}
\end{align*}
$$

But, the Covariance matrix is a mixture of variance and covariance. Also, it's not the variance of the actual variable, but its transformation around its mean. Makes the values smaller...

$$
\begin{align*}
C &= \begin{bmatrix}
	C(x_1,x_1) & C(x_1,x_2) \\
	C(x_2,x_1) & C(x_2,x_2)
	\end{bmatrix} \\ \\
C &= \frac{1}{9} \begin{bmatrix}
	5.549 & 5.539 \\
	5.539 & 6.449
	\end{bmatrix}\\
C &= \begin{bmatrix}
	0.6166 & 0.6154 \\
	0.6154 & 0.7166
	\end{bmatrix}
\end{align*}
$$

Fourth comes the EigenValues:

$$
\begin{align*}
0 &= \left| C-\lambda \cdot I \right| \\
0 &= \begin{vmatrix}
	0.6166-\lambda & 0.6154 \\
	0.6154 & 0.7166-\lambda
	\end{vmatrix} \\
0 &= (0.6166-\lambda) \cdot (0.7166-\lambda)-(0.6154^2)\\
0 &= \lambda^2 - 0.6166 \lambda - 0.7166 \lambda + 0.4418 - 0.3788 \\
0 &= \lambda^2 - 0.6166 \lambda - 0.7166 \lambda - 0.3788 \\
0 &= \lambda^2 - 1.3331 \lambda + 0.063 \\
\end{align*}
$$

I'm not going to use the quadratic equation, but trust in the book...

$$
\therefore \lambda_1 = 1.284,\ \lambda_2=0.049
$$

Fifth, we calculate the EigenVectors:

$$
\begin{align*}
0 &= (C-\lambda_1 \cdot I) \cdot PC_1 \\
0 & = \begin{bmatrix}
	0.6166-\lambda_1 & 0.6154 \\
	0.6154 & 0.7166-\lambda_1
	\end{bmatrix} \cdot
	\begin{bmatrix}
	a_1\\
	b_1
	\end{bmatrix}\\
0 & = \begin{bmatrix}
	0.6166-1.284 & 0.6154 \\
	0.6154 & 0.7166-1.284
	\end{bmatrix} \cdot
	\begin{bmatrix}
	a_1\\
	b_1
	\end{bmatrix}\\
0 & = \begin{bmatrix}
	-0.6674 & 0.6154 \\
	0.6154 & -0.5674
	\end{bmatrix} \cdot
	\begin{bmatrix}
	a_1\\
	b_1
	\end{bmatrix}\\
0 & = \begin{bmatrix}
	-0.6674 \cdot a_1 + 0.6154 \cdot b_1 \\
	0.6154 \cdot a_1 - 0.5674 \cdot b_1 
	\end{bmatrix}\\
\therefore PC_1 &= \begin{bmatrix}
	a_1\\
	b_1
	\end{bmatrix} = \begin{bmatrix}
	1 \\
	1.084
	\end{bmatrix}\\
\end{align*}
$$

What does this mean? It's the slope of the line of best fit, or something like that, where

$$
m = \frac{b}{a}
$$

I guess, as such, it's advantageous to solve for $a_1 = 1$.

So, what about $PC_2$? This will be the line perpendicular to $PC_1$. You can already then guess the values of the eigenvector. Because the math is exactly the same, just different numbers, here are the values:

$$
\therefore PC_2 = \begin{bmatrix}
	a_2\\
	b_2
	\end{bmatrix} = \begin{bmatrix}
	-1.084 \\
	1
	\end{bmatrix}\\
$$

According to [This Article with Example](https://www.turing.com/kb/guide-to-principal-component-analysis) This is where you can arrange and select you top most Eigen values. 

Sixth, we reconstruct the dataset by re-orientating the data from the original axes. The final data set will be the **standardized original data** set times the feature vectors. 

$$
y_i = \begin{bmatrix}
PC_1 & PC_2
\end{bmatrix}^T \cdot [x_i]^T
$$

Per ChatGPT 3.5

Certainly! Principal Component Analysis (PCA) involves transforming your data into a new coordinate system based on the eigenvectors of the data's covariance matrix. This transformation can be represented as a matrix multiplication.

Here's how you can perform the PCA transformation step by step:

1. **Center the Data:** Start by centering your data by subtracting the mean of each feature (column) from each data point. This ensures that the data is mean-centered.

2. **Compute the Covariance Matrix:** Calculate the covariance matrix of the mean-centered data. The covariance matrix represents how each feature relates to every other feature in the data.

3. **Eigenvalue Decomposition:** Perform an eigenvalue decomposition of the covariance matrix. This involves finding the eigenvalues and eigenvectors of the covariance matrix. The eigenvectors represent the directions (components) along which the data varies the most, and the eigenvalues represent the amount of variance explained by each eigenvector.

4. **Select Principal Components:** Sort the eigenvectors in descending order based on their corresponding eigenvalues. These eigenvectors represent the principal components of the data. You typically choose the top k eigenvectors, where k is the number of dimensions you want to reduce your data to.

5. **Create the Projection Matrix:** The projection matrix is composed of the top k eigenvectors, typically arranged as columns. This matrix defines the transformation from the original feature space to the new principal component space.

6. **Transform the Data:** To transform your original data into the principal component space, simply multiply your mean-centered data by the projection matrix.

Here's the matrix multiplication formula for the transformation:

NewData = MeanCenteredData * ProjectionMatrix

Where:
- `NewData` is the transformed data in the principal component space.
- `MeanCenteredData` is your original data after centering (each row represents a data point, and each column represents a feature).
- `ProjectionMatrix` consists of the top k eigenvectors as columns.

To summarize, the key steps are mean-centering your data, calculating the covariance matrix, finding the eigenvectors and eigenvalues, selecting the top k eigenvectors as your projection matrix, and then using this matrix to transform your data into the principal component space.

Keep in mind that the transformed data will have as many columns as the number of eigenvectors you selected (k), which is typically fewer than the original number of features, achieving dimensionality reduction while retaining most of the data's variance.

Me again, I'll now walk through calculating the new first _row_ of data. Note, we will use transpose so that the data fits matrix multiplication.

$$
\begin{align*}
y_i &= \begin{bmatrix}
PC_1 & PC_2
\end{bmatrix}^T \cdot [x_i]^T\\
y_1 &= \begin{bmatrix}
1 & -1.084\\
1.084 & 1
\end{bmatrix}^T \cdot \begin{bmatrix}
0.69 & 0.49
\end{bmatrix}^T\\
y_1 &= \begin{bmatrix}
1 & 1.084\\
-1.084 & 1
\end{bmatrix}\cdot \begin{bmatrix}
0.69 \\ 0.49
\end{bmatrix}\\
y_1 &= \begin{bmatrix}
1 \cdot 0.69 + 1.084 \cdot 0.49 \\
-1.084 \cdot 0.69 + 1 \cdot 0.49
\end{bmatrix}\\
y_1 &= \begin{bmatrix}
1.22116\\
-0.25796
\end{bmatrix}\\
\end{align*}
$$

You would again, look at the transpose of that, but it's your new $x_1$ and $x_2$ values! 🥳

I solved row 2 and compared to the book. Looks like that is how you do it. It amazingly produces a graph with what looks to be 0 correlation. I suppose here you could also then see how the new variables relate to your predictor and drop one if the correlation is low.

## 5.2 - Cluster Analysis

p. 91 / 93
