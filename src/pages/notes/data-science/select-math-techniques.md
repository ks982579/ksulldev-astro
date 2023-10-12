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

p. 91

**Definition - Clustering:** Method of grouping objects together such that objects in the same group have more in common with one another than those objects in other groups. Clustering is a unsupervised learning technique that permits the input data to be grouped into unlabeled, meaningful clusters. Each group shares a certain level of similarity.

Several clustering approaches:
+ K-means
+ Expectation maximization
+ Agglomerative
+ Density-based spatial
+ Affinity propagation

We will look at K-means clustering and agglomerative clustering. 

### K-Means Clustering

**K-means** clustering is an algorithm for grouping a given $N$ data records into $K$ clusters. The algorithm is:

Step 1: decide number of clusters, $K$.

Step 2: Select random data records to represent the centroids of these clusters.

Step 3: Calculate the distance between each data record and the defined centroids. Then assign the data record to the clustering containing the centroid _closest_ to the data record. 

We use _Euclidean distance_, given by:

$$
d(i,\ c)= \sqrt{
(x_{1,i}-x_{1,c})^2 + \cdots + (x_{M,i}-x_{M,c})^2
}
$$

Where $(x_1,\ x_2,\ \dots,\ x_M)$ are the $M$ data variables, $i$ denotes the data record, and $c$ denotes the cluster's centroid. 

Step 4: Recalculate the new centroid for each cluster by averaging the included data records. 

Step 5: repeat steps 3 and 4 until there are no further changes in the calculated centroids.

Step 6: The final clusters comprise the data records included within them. 

#### Example

The book includes an example but the concept seems straight-forward enough. 

So, the first centroid is a point of data. The second and further centroids actually appear to be average points. The example shows that even though the distances may update with the new centroid, since no records changed clusters, there's no need to recalculate everything. 

### Hierarchical Clustering

**Hierarchical Clustering** is applied to data that has an underlying hierarchy. The book uses example of apples and bananas are fruits, aubergine and courgette are vegetables; however, both are fresh produce. 

There are two approaches to hierarchical clustering: divisive (top-down) and agglomerative (bottom-up).

### Agglomerative Clustering

**Agglomerative Clustering** creates a _bottom-up_ tree (dendrogram) of clusters that repeatedly merge two nearest points, or clusters, into a bigger _super cluster_. Algorithm is formulated as follows:

1. Assign each record of the given N Data records a unique cluster, forming $N$ clusters. 
2. Merge data records, or clusters, with minimum Euclidean distance between them into a single cluster.
3. Repeat this process until there is only one cluster remaining, forming a hierarchy of clusters. 

#### Example

Those steps, to me, are a little confusing so lets dive into an example. The book looks at a very small dataset of 6 records with 2 variables each. Each dataset is its own cluster at first. The Euclidean distance is found between points. Data with smallest distances are _merged_.

You may think you got straight from 6 clusters to 3, I did at first. But you only merge smallest distances for non-overlapping points. So record 5 cannot merge with record 4 and record 3 in the same round. 

If distance from row 4 to 5 is the smallest, then we create cluster $C_1$. Then, if row 5 to 3 has the smallest distance, we create cluster $C_2$ which incorporates all of $C_1$, not just row 5, and the new point. Continue on this trend, clustering points and clusters. 

Apparently you still measure distances between points even after you cluster. I thought you'd get the cluster's centre, but doesn't look to be the case. This creates sort of a hierarchy of points as well.

## 5.3 - Linear Regression

p. 99
**Definition - Linear Regression:** A method for modeling linear relationships between a dependent variable and one or more independent variables. 

The objective of Regression is prediction based on historic data. Building a model is an iterative process to relate independent variables to the dependent variables. 

### Linear Regression Model

Again, we assume $n$ data records, each with $m$ features, or _variables_. We want to discover a relationship something like:

$$
\hat{y}=w_0 + w_1 x_1 + w_2 x_2 + \dots + w_m x_m
$$

We are using $w$ as the coefficient to indicate _weight_ or the variable. Of course $\hat{y}$ is the predicted value and differs from the actual value by a random error variable,

$$
y_i = \hat{y}_i + \varepsilon_i
$$

This is because the input data is not an exact linear relationship between independent and dependent variables. Or perhaps we are missing information. Note that:

$$
\varepsilon_i = |\hat{y}_i - y_i|
$$

We use the absolute value because when you plot points, the error is the vertical distance between the points. And distance cannot be negative. 

### Simple Linear Regression Model

This is like a $y=mx+b$ situation, just one independent variable. In this easy example, the line of best fit for a dataset would minimize the sum of squared error, also called the _least-squares_ method. 

$$
\sum_{i=1}^{n} \varepsilon_i^2 = \sum_{i=1}^{n} (\hat{y}_i - y_i)^2
$$

So, we pick the weights, $w_n$ that minimize this function. When you think minimize, you may think solving for when the derivative is 0. 

$$
\sum_{i=1}^{n} (\hat{y}_i - y_i)^2 = \sum_{i=1}^{n} (\hat{y}_i - w_0-w_1x)^2
$$

Since we are solving for weights, I guess that is what we take derivatives with respect to. 

$$
\frac{\partial}{\partial w_0} \sum_{i=1}^{n} \varepsilon_i^2 = 0
$$

This would provide a point where the error is minimal. Work that into our summation:

$$
\begin{align*}
0 &= \frac{\partial}{\partial w_0} \sum_{i=1}^{n} (\hat{y}_i - w_0-w_1x)^2\\
&= \sum_{i=1}^{n} 2(\hat{y}_i - w_0-w_1x)\cdot(0-1-0)\\
&= 2 \sum_{i=1}^{n} (w_0+w_1x-\hat{y}_i)\\
&= 2nw_0 + 2 \sum_{i=1}^{n} (w_1x-\hat{y}_i)\\
-2nw_0 &= 2 \sum_{i=1}^{n} (w_1x-\hat{y}_i)\\
w_0 &= \frac{2}{-2n} \sum_{i=1}^{n} (w_1x-\hat{y}_i)\\
w_0 &= \frac{1}{n} \sum_{i=1}^{n}(\hat{y}_i) - \frac{w_1}{n} \sum_{i=1}^{n}(x)\\
\end{align*}
$$

That wasn't too bad, but we are going to make an even bigger mess finding $w_1$. This isn't a statistics course, and I will have notes on a statistics course soon... The steps to finding $w_1$ are more complicated but similar. I'll leave it to either the statistics course to derive for the sake of my time and sanity.

$$
\begin{align*}
0 &= \frac{\partial}{\partial w_1} \sum_{i=1}^{n} \varepsilon_i^2\\
0 &= \frac{\partial}{\partial w_1} \sum_{i=1}^{n} (\hat{y}_i - w_0-w_1x)^2\\
&= \sum_{i=1}^{n} 2(\hat{y}_i - w_0-w_1x)\cdot(-x)\\
&= \dots\\
w_1 &= \frac{
\displaystyle n \sum_{i=1}^n (\hat{y}x) - \sum_{i=1}^n (\hat{y})\sum_{i=1}^n (x)
}{
\displaystyle n \sum_{i=1}^n (x^2) -\left(\sum_{i=1}^n(x)\right)^2
}
\end{align*}
$$

Since $w_1$ appears in the formula for $w_0$, you calculate that first. 

#### Example

Basically, you need to calculate the following

$$
\begin{gather*}
\sum_{i=1}^{n}(x)\\
\sum_{i=1}^{n}(x^2)\\
\sum_{i=1}^{n}(\hat{y}x)\\
\sum_{i=1}^{n}(\hat{y})\\
\end{gather*}
$$

The $\hat{y}$ values that we use are the dependent variables of our dataset. It makes me think the formula is backwards from the beginning where we should have expanded $\hat{y}$, but the expansion of that is actually more like $\hat{y} = y + \varepsilon$. So, expanding just $y$ is the right call.

Then, with those calculations, you plug-n-chug for weights / coefficients. Once you have those, your can reconstruct the regression formula. 

### Multiple Linear Regression Model

p. 104

What about more realistic datasets, with many records, each having many independent variables? Let's extend our understanding to a dataset with 2 independent variables.

$$
y = w_0 + w_1 x_1 + w_2 x_2
$$

The process would be taking the derivative of the error with respect to each to each coefficient and setting it equal to zero. Now, I just want to look at the following derivatives,

$$
\begin{align*}
0 &= \frac{\partial}{\partial w_0}\sum_{i=1}^{n} \varepsilon_i^2\\
&= \frac{\partial}{\partial w_0}\sum_{i=1}^{n}(\hat{y}-y)^2\\
&= \frac{\partial}{\partial w_0}\sum_{i=1}^{n}(\hat{y}-(w_0 + w_1 x_1 + w_2 x_2))^2\\
&= \frac{\partial}{\partial w_0}\sum_{i=1}^{n}(\hat{y}-w_0 - w_1 x_1 - w_2 x_2)^2\\
&= 2\sum_{i=1}^{n}\left(
(\hat{y}-w_0 - w_1 x_1 - w_2 x_2)\cdot(0-1-0-0)
\right)\\
\end{align*}
$$

So, $w_0$ is composed of $w_1$ and $w_2$, making it a little harder to work with. Additionally,

$$
\begin{align*}
0 &= \frac{\partial}{\partial w_1}\sum_{i=1}^{n} \varepsilon_i^2\\
&= \frac{\partial}{\partial w_1}\sum_{i=1}^{n}(\hat{y}-w_0 - w_1 x_1 - w_2 x_2)^2\\
&= 2\sum_{i=1}^{n}\left(
(\hat{y}-w_0 - w_1 x_1 - w_2 x_2)\cdot(0-0-x_1-0)
\right)\\
&= 2\sum_{i=1}^{n}\left(
w_0x_1 - w_1 x_1^2 - w_2 x_2 x_1 - \hat{y}x_1
\right)\\
\end{align*}
$$

I think it is apparent that additional variables drastically complicates what we are solving for. However, we have as many variables as we do unique functions, and therefore it is solvable. It would be easier to construct a system of linear equations and then solve for unknowns using techniques of linear algebra though. 

The book also notes that a large coefficient / weight $w_m$ implies that the target $y$ is highly correlated to the variable $x_m$, and vice versa. But as the number of independent variables increases, the assumption of a linear relationship between the target variable and other variables becomes weak. 

Consequently, nonlinear regression models will produce more accurate predictions. 

## 5.4 - Time-Series Forecasting

p. 105

**Definition - Forecasting Models:** This is a model for forecasting (predicting) future events based on data and information gleaned from the past. 

When people think about forecasting models, the first thought is probably stocks or sales. Some questions you might ask are:
+ Do observations tend to increase or decrease over time?
+ Are there any regularly repeating patterns over time?
+ Are there any outliers in our observations, and if so, why?

One difference between regular regression analysis and this time-series forecasting is that individual data records depend on previous data records (to some extent). Thus, the forecasting technique must take this into consideration. Observations must be ordered with respect to time instances. 

One popular linear forecasting technique is the _autoregressive method_ (AR). This method assumes the expected output is a linear function of some past outputs. This means if the underlying relationship is _nonlinear_ then the AR approach yields suboptimal results. For better results with nonlinear data, we can upgrade the AR method to include moving averages (ARMA) and integral terms (ARIMA).

### Concept of Stationary

**Definition - Stationary Time-Series:** This type of data has a constant mean and standard deviation over time. 

To apply a forecasting model to time-series data, it should be _stationary time-series_. Only then can the model correctly self-predict its future response from past data points. 

Most time-series data is not stationary, but we can convert data into stationary data with a concept of $d_{\Delta t}$, which is the difference between every two data points on an interval $\Delta t$. I suppose, even if the data increases or decreases overtime, then we aim to model the change over each time interval, hoping that is stationary. You can model back multiple intervals as well. 

There is an optimum value for $\Delta t$, which results in a completely stationary form of the time-series data.

### Autoregressive (AR) Model

p. 107

**Definition - $lag(n)$:** Not sure about the math definition format... This is the _backshift_ of a time-series by $n$ time steps. 

The **AutoRegressive** (AR) model is a linear model developed to predict the value of an observation at the very next point in time using linear combination of its values at previous time instances. 

The name comes from it using data from the same variable at past points in time. You might see $AR(n)$ for a model of order $n$. This refers to the lag defined above, so it is a linear combination of previous data points going back, backshift, $n$ points. 

$$
y_t = p_0 + p_1y_{t-1} + p_2y_{t-2} + \cdots + p_ny_{t-n} + \varepsilon_t
$$

The $p_n$ values are model coefficients, and $\varepsilon_t$ is a _white noise_ term $WN(0, \sigma^2)$, which looks a bit _standard normal_ to me. 

### Moving Average (MA) Model

The moving average model _predicts_ future observations:

$$
y_t - q_0 + q_1 \varepsilon_{t-1} + q_2 \varepsilon_{t-2} + \cdots + q_n \varepsilon_{t-n}
$$

Here, each $\varepsilon_{t-n}$ is a _white noise_ error term $WN(0,\ \sigma^2)$, and the $q_n$ are model coefficients. 

