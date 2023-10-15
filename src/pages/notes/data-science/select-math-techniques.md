---
layout: '@layouts/NotesLayout.astro'
title: 'Selected Mathematical Techniques'
pubDate: 2023-10-07
description: 'Some math techniques specific to data science'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "math", "maths"]
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

### Autocorrelation

The correlation coefficient is how linearly related two variable are, represented by a number between $\left\{ x \in \mathbb{R}\ | -1 \le x \le 1 \right\}$, or just $(-1,\ 1)$. We calculate the correlation between forecasted variables and its value at a specific lag.

The autocorrelation coefficient $ACF(n)$ and $lag(n)$ is given by:

$$
ACF(n) = \frac{C(y_t,\ y_{t-n})}{\sqrt{V(y_t)\cdot V(y_{t-n})}}
$$

We have the covariance divided by variance. 

### Partial Autocorrelation

We have a _partial autocorrelation_ function $\text{PACF}_k$ at $lag(k)$ is the autocorrelation between $y_t$ and $y_{t-k}$ that is not accounted for by the autocorrelations from the $1^{st}$ to the $(k-1)^{st}$ lags. 

$$
\begin{bmatrix}
ACF(0) & ACF(1) & \cdots & ACF(k-1)\\
ACF(1) & ACF(0) & \cdots & ACF(k-2)\\
\vdots & \vdots & \ddots & \vdots \\
ACF(k-1) & ACF(k-2) & \cdots & ACF(0)\\
\end{bmatrix}
\begin{bmatrix}
PACF_1\\
PACF_2\\
\vdots\\
PACF_k
\end{bmatrix} = \begin{bmatrix}
ACF(1) \\
ACF(2) \\
\vdots \\
ACF(k) \\
\end{bmatrix}
$$

Looks hectic. 

### Autoregressive Integrated Moving Average (ARIMA) Model

ARIMA models mix both the AR and MA models with integrated parameters in one model to obtain a better understanding of time-series data. An **integrated parameter** is the degree of differencing which is performed on the dataset to transform it into a stationary time-series. 

The notation is $ARMIA(p,\ d,\ q)$, where we have:
+ $p=$ number of AR terms
+ $d=$ degree of differencing
+ $q=$ number of MA terms

It looks like the sum of a constant (y-intercept), weighted sum of the previous $p$ values of $y$, and the weighted sum of the previous $q$ forecast errors.

$$
y_t = c + p_1 y_{t-1} + \cdots + p_n y_{t-n} + q_1 \varepsilon_{t-1} + \cdots + q_m \varepsilon_{t-n}
$$

So, how many terms of $p$ and $q$ do we use? Typically, you must look at plots of autocorrelation and partial autocorrelation functions of time-series, which is why we covered it, then consider the following:
1. If the ACF plot cuts off sharply at $lag(k)$ while there is a more gradual decay in the PACF plot (significance beyond $lag(k)$), then set $q=k$ and $p=0$. 
2. If the reverse, PACF plot cuts off sharply at $lag(k)$ while the ACF plot has more gradual decay beyond $lag(k)$, then set $p=k$ and $q=0$. 
3. If a single spike at $lag(1)$ in both ACF and PACF, then $p=1$ and $q=0$ if the spike is positive, and $p=0$ and $q=1$ if the spike is negative. 

A _spike_ should exceed the 95% confidence interval. 

The book then covers some examples. The PACF and ACF charts are almost like histograms with correlation on the y-axis and the lag term on the x-axis. 

The first example shows PACF around $0.5$ for lags 1 and 2, and then drop close to zero, where the ACF is also high at first but has a more gradual decline over lag, not dropping off until around lag 7. Therefore, we set $p=2$ and $q=0$ and get:

$$
\text{ARIMA}(2,0,0) = y_t = c + p_1\ y_{t-1} + p_2\ y_{t-2}
$$

The second example is for $ARIMA(0,0,1)$ because there is a spike at $lag(1)$ for ACF and PACF decays to $lag(6)$. This means:

$$
ARIMA(0,\ 0,\ 1) = y_t = c + q_1 \varepsilon_{t-1}
$$

The we have example 3. They do a _one degree_ differencing, so $d=1$, to create more stationary data. Then the graphs are quite confusing, but the spikes are $ACF_2$ and $PACF_5$, giving $ARIMA(5,1,2)$. I won't write $y_t$ because that would be a lot. 

Once a good estimation of number of terms in developed model $y_t$ is made, we use the input time-series data to obtain unknown coefficients. The **residuals time-series** $R_t$ is the difference between the input time-series and the model's forecasted time-series. 

If the ARIMA model was correctly developed, there should be no significant spikes in the ACF and PACF plots of $R_t$. Spikes at later lags don't automatically mean the model is wrong. However, if there's a spike at say $lag(2)$ and we used $ARIMA(1,0,0)$ or $ARIMA(0,0,1)$, then we use the following rules:
1. If the spike is the ACF plot, we increase `q += 1` and refit the model.
2. If the spike was in the PACF plot, we increase `p += 1` and refit the model.

In practice, $p,q \le 3$ for any developed ARIMA model for a business application. It is also advised to avoid _mixed_ models, with both $q$ and $p$ terms. And if you do add additional terms to a developed model on the basis of the residual analysis recommendation, do so one parameter at a time. 

Also, some time-series data may first need nonlinear transformation to convert into a form with consistent distribution over time and symmetry in appearance. 

### Seasonal Autogression Integrated Model (SARIMA)

ARIMA cannot handle datasets with seasonal components. Seasonal time-series data are cyclical, and require the **seasonal autoregressive integrated model** (SARIMA). The notation is $SARIMA(p,d,q)(P,D,Q)s$. The first three are for $ARIMA$. The $(P,D,Q)$ are for the backshifts of the seasonal period. The $s$ denotes the number of time steps for a single seasonal period. 

Python's `statsmodels` library supports complete designing, fitting, and forecasting of SARIMA model. 

There's also SARIMAX models, which permit the existence of a _exogenous_ variable $X$ in the dataset. That is an external variable that influences the time-series variations and needs to be considered during the analysis. 

## 5.5 - Transformation Approaches

A **dataset transformation** involves replacing each $x_i$ with $x_j$ using some function $f$:

$$
x_j = f(x_i)
$$

The book uses $X_i$ for the new variable, but capital variables typically denote random variables, and there's no random component I am aware of yet. 

Why would you transform your data? You might transform variables into a new space, like Cartesian to Radial, and improve interpretability... that's really all they listed.

It's kind of like, if you see the dependent and independent variables have a relationship, but it isn't linear, you want to understand how to make it linear. Then you can regress on it. 

### Logarithm Transformation

One sort of common transformation is a **logarithmic transformation**, where we have:

$$
x_i'=\ln(x_i)
$$

I prefer the natural log, but you can try base 10. This can help make _clumpy_ data appear linear. 

### Power Law Transformation

The **power law transformation** represents a family of transformations based on nonnegative parameter ($\gamma$):

$$
x_i'=x_i^{\gamma}
$$

Basically, $\gamma$ is initially estimated and then continuously updated during the training phase of the model-building process until the highest performance accuracy is achieved. 

The parameter is meant to be nonnegative, but it can still be fractional, giving an interesting shape to the curve. 

### Reciprocal Transformation

This is:

$$
x_i'=\frac{c}{x_i}
$$

You can do just $\frac{1}{x}$ but I thought I would liven it up with $c$. Sometime you are given data like gallons per mile, but you need it in miles per gallon. 

### Radial Transformation

**Radial Transformation** focuses on the distance between the value of a variable and the origin. I guess you combine two variables and transform them into the radial coordinates of radius and angle:

$$
\begin{gather*}
r=\sqrt{x_1^2+x_2^2}\\
\theta=\tan^{-1}\left( \frac{x_1}{x_2} \right)
\end{gather*}
$$

You might need to look for examples of this. 

### Discrete Fourier Transform

Well, if it isn't our old friend...

The Fourier Transform shifts variable from their traditional domain of $x$ versus time $t$, to a _frequency domain_. The Fourier transform determines which frequencies can represent the distribution of a given variable, and is given by:

$$
x_n= \sum_{k=0}^{N-1}\left(
x_k e^{-2 \pi i n k / N}
\right)
$$

Where $N$ is the length of the selected frequency band.

---

```yaml
title: Forecasting
subtitle: Principles and Practice
edition: 3
authors: 
	- Rob J. Hyndman
	- George Athanasopoulos
publisher: OTexts
date: 2018
location: Melbourne, Australia
url: "https://otexts.com/fpp3/"
```

# Forecasting: Principles and Practice

> This should probably be its own information, but that is for the future perhaps. For now, we combine a couple additional chapters in my Data Science notes. 

## Preface

This is regarding the 3rd edition, but the 2nd is also available online. The 2nd edition uses the `forecast` package in R, where the 3rd edition uses `tsibble` and `fable` packages. 

The course for Data Science suggests reading Ch. 9 of the 2nd edition, which is Dynamic regression models, but in the 3rd edition it is ARIMA models. Both are relevant and the 3rd edition seems to be more current, so I'll go with that. 

Check out the book yourself [Forecasting: Principles and Practice](https://otexts.com/fpp3/).

# Forecasting: Principles and Practice

## Preface

This is regarding the 3rd edition, but the 2nd is also available online. The 2nd edition uses the `forecast` package in R, where the 3rd edition uses `tsibble` and `fable` packages. 

The course for Data Science suggests reading Ch. 9 of the 2nd edition, which is Dynamic regression models, but in the 3rd edition it is ARIMA models. Both are relevant and the 3rd edition seems to be more current, so I'll go with that. 

Check out the book yourself [Forecasting: Principles and Practice](https://otexts.com/fpp3/).

## Ch. 9 - ARIMA Models

Exponential smoothing (Ch. 8 of this book) and ARIMA models are probably most widely used time series forecasting approaches. ARIMA models try to describe the _autocorrelations_ in data. 

### Stationarity and Differencing

**Stationary time series** has statistical properties that do not depend on the time at which the series is observed. So, seasonality is not time series, and might require apparently exponential smoothing. But white noise series is stationary. 

However, cyclic behaviour can be stationary if it doesn't have a trend of seasonality. As long as it doesn't have predictable patterns in the long-term. 

#### Differencing

**Differencing** is a way to make non-stationary time series stationary by computing the differences between consecutive observations. Additionally, transformation like logarithms can help stabilise the variance of a time series. 

ACF is useful for identifying non-stationary time series. If the data is stationary, the ACF will drop to zero quick enough. However, if the data is non-stationary, the ACF will decay slowly. 

#### Random Walk

For a series with $T$ values, if you calculate the difference series, you have $T-1$ values as you cannot obtain $y_0'$ because you don't have a $y_{(-1)}$ value (best I can describe).

$$
y_t'=y_t-y_{t-1}
$$

For a _white-noise_ series, you have

$$
y_t-y_{t-1} = \varepsilon_t
$$

So, the $\varepsilon_t$ denotes the white noise. And you get a random walk model with

$$
y_t=y_{t-1} + \varepsilon_t
$$

Random walks typically have:
+ long periods of apparent trends up or down (drift).
+ sudden and unpredictable changes in direction.

#### Second-order differencing

This extends out beyond second, but might look like this...

$$
\begin{align*}
y_t'' &= y_t' - y_{t-1}'\\
&=(y_t-y_{t-1}) - (y_{t-1}-y_{t-2})\\
&= y_t - 2y_{t-1} + y_{t-2}
\end{align*}
$$

So, this set now has $T-2$ records. Apparently in practice, you typically won't go beyond second-order differences. 

#### Seasonal Differencing

Seasonal differencing is difference between observation and the previous observation from the same _season_. Therefore:

$$
y_t'=y_t-y_{t-m}
$$

These are called _lag-m differences_. 

Sometimes you would take both a seasonal and ordinary difference (AKA **first difference**) to obtain stationary data. Sorry if the _AKA_ isn't clear, it only applies to _ordinary difference_, not the combo of ordinary and seasonal. 

It is recommended to do seasonal differences first because sometimes the resulting series is stationary without applying a further first difference. Applying more differences than required can induce incorrect autocorrelations. 

#### Unit Root Tests

A **unit root test** is a statistical hypothesis test of stationarity that is designed to determine whether differencing is required. There are many tests, this book covers the _Kwiatkowski-Phillips-Schmidt-Shin_ (KPSS) test. This is a null hypothesis that data are stationary, and we test if null hypothesis is false. Small p-values (eg. $p \lt 0.05$) suggests differencing is required. 

R has a function called `unitroot_kpss`, check the book for examples as I don't know R well enough at this time. 

I did a little digging and found that [Python `statsmodel`](https://www.statsmodels.org/stable/generated/statsmodels.tsa.stattools.kpss.html#statsmodels.tsa.stattools.kpss) has a KPSS test tool as well. 

The book discusses a `unitroot_nsdiffs()` R function for determining if seasonal differencing is required. 

### Backshift notation

Backshift operator $B$ is like:

$$
By_t=y_{t-1}
$$

Sometime people use $L$ for "lag", but usually not. This means something like $y_{t-12}=B^{12}y_t$, which is just the notation and not actually $B$ to the 12th power. 

The notation works for _differencing_ like this:

$$
y_t'=y_t-y_{t-1} = y_t - By_t=(1-B)y_t
$$

In general, it would look like $y_t^{(d)}=(1-B)^dy_t$. 

Seasonal and first difference looks like...

$$
\begin{align*}
(1-B)(1-B^m)y_t &= (1-B-B^m+B^{m+1})y_t\\
&= y_t-y_{t-1}-y_{t-m}+y_{t-m-1}
\end{align*}
$$

### Autoregressive models

The term **autoregression** indicates that it is a regression of the variable against itself. An _autoregressive_ model of order $p$ can be written as

$$
y_t = c + \phi_1 \cdot y_{t-1} + \phi_2 \cdot y_{t-2} + \cdots + \phi_p \cdot y_{t-p} + \varepsilon_t
$$

where $\varepsilon_t$ is white noise. It is like multiple regression but with lagged values of $y_t$ as predictors. We call this an $AR(p)$ model, an autoregressive model of order $p$. 

We usually restrict autoregressive models to _stationary data_. We also put some constraints on the values of parameters required:
+ for $AR(1)$ model: $-1 \lt \phi_1 \lt 1$
+ for $AR(2)$ model: $-1 \lt \phi_2 \lt 1,\; \phi_1 + \phi_2 \lt 1,\; \phi_2 - \phi_1 \lt 1$

And when $p \ge 3$ the restrictions get more complicated. Luckily, R has the `fable` package that can take care of these restrictions for us when estimating a model. 

### Moving Average Models

A **moving average model** uses past forecast _errors_ in a regression-like model, like so

$$
y_t = c + \varepsilon_t + \theta_1 \cdot \varepsilon_{t-1} + \theta_2 \cdot \varepsilon_{t-2} + \cdots + \theta_q \cdot \varepsilon_{t-q}
$$

This is called an $MA(q)$ model, moving average model of order $q$. Note that you wouldn't actually _observe_ values of $\varepsilon_t$, so it is not a regression in the typical sense. Each $y_t$ can be thought of as a weighted moving average of the past few forecast errors. 

Note: Do not confuse moving average with _smoothing_ (discussed in previous chapter of book). 
+ Moving Average Model is for forecasting.
+ Moving Average Smoothing is for estimating _trend-cycle_ of past values. 

The $AR(p)$ model can be written as $MA(\infty)$ if you consider the following:

$$
\begin{align*}
y_t &= \phi_1y_{t-1}+\varepsilon_t\\
&= \phi_1\left(
\phi_1y_{t-2}+\varepsilon_{t-1}
\right)+\varepsilon_t\\
&= \phi_1^2 y_{t-2}+ \phi_1 \varepsilon_{t-1} +\varepsilon_t\\
&= \phi_1^2 \left(
\phi_1y_{t-3}+\varepsilon_{t-2}
\right) + \phi_1 \varepsilon_{t-1} +\varepsilon_t\\
&= \phi_1^3 y_{t-3}+\phi_1^2 \varepsilon_{t-2}
 + \phi_1 \varepsilon_{t-1} +\varepsilon_t\\
&= \dots
\end{align*}
$$

Provided that $-1 \lt \phi_1 \lt 1$, then $\phi_1^k$ will get smaller as $k$ gets bigger. I guess that means eventually $\phi_1^k y_{t-k} \approx 0$. 

The reverse can also hold true with some constraints on the $MA$ parameters. Thus, $MA$ model is called **invertible**. These models have some desirable mathematical properties, if you wanted to know why we jump down this rabbit hole. 

The book provides an example and explains why $| \theta_1 | \lt 1$, has to do with lag. 

### Non-Seasonal ARIMA Models

Combine differencing with autoregression and a moving average model to obtain a non-seasonal ARIMA model. 

$ARIMA=$ AutoRegressive Integrated Moving Average. Integration is the reverse of differencing in this context. 

The model resembles what I have discussed from the course book:

$$
y_t' = c + \phi_1 y_{t-1}' + \cdots + \phi_p y_{t-p}'
+ \theta_1 \varepsilon_{t-1} + \cdots + \theta_q \varepsilon_{t-q}
+ \varepsilon_t
$$

$y_t'$ is the differenced series. The book here repeats much what is in the course notes for data science - selected math techniques. Cool beans are special cases of the $ARIMA$ model

Recall $ARIMA(p,d,q)$:
+ $p=$ order of the autoregressive part
+ $d=$ degree of first differencing involved
+ $q=$ order of moving average part

Special Cases of $ARIMA(p,d,q)$:
+ $ARIMA(0,0,0),\ c=0 \rightarrow$ White Noise
+ $ARIMA(0,1,0),\ c=0 \rightarrow$ Random walk
+ $ARIMA(0,1,0),\ c \ne 0 \rightarrow$ Random walk with drift
+ $ARIMA(p,0,0) \rightarrow$ Autoregression
+ $ARIMA(0,0,q) \rightarrow$ Moving Average

Recommended to use _backshift notation_ when working with more complicated models. 

#### Understanding $ARIMA$ Models

The book goes over more in-depth definition of components so you know what an automated function is doing. 

#### ACF and PACF Plots

See book for examples. 

### Estimation and Order Selection

#### Maximum likelihood estimation

The R package `fable` uses the _maximum likelihood estimation_ when estimating the $ARIMA$ model. 

We have discussed this before. 

#### Information Criteria

**Akaike's Information Criterion** (AIC) is useful for selecting predictors for regression and for determining the order of an $ARIMA$ model. It can be expressed as:

$$
AIC = -2 \log(L) + 2 (p + q + k + 1)
$$

where L is the likelihood of the data, $k=1$, if $c \ne 0$, and $k=0$ if $c=0$. 

The corrected AIC for $ARIMA$ models can be written as:

$$
AICc=AIC + \frac{
2(p+q+k+1)(p+q+k+2)
}{
T-p-q-k-2
}
$$

Bayesian Information Criterion can be written as:

$$
BIC = AIC + \left[
\log(T) - 2
\right] \left(
p+q+k+1
\right)
$$

Basically, _good_ models are obtained by minimising the $AIC$, $AICc$, or $BIC$. The book prefers $AICc$. These are better at selecting values for $p$ and $q$ but not $d$. 

### $ARIMA$ Modelling in `fable`

This is about `ARIMA()` function in R's `fable` package. 

Read the book for an overview.

### Forecasting

#### Point Forecasts

**Point forecasts** are calculated using the following 3 steps:
+ Expand $ARIMA$ equation so that $y_t$ is on left side and all other terms are on right.
+ Rewrite equation by replacing $t$ with $T+h$.
+ On right side of equation, replace future observations with their forecasts, future errors with ZERO, and past errors with corresponding residuals. 

The book gives an example. It's a good example. 

#### Prediction Intervals

Calculating $ARIMA$ prediction intervals is more difficult, and beyond the scope of... this. 

### Seasonal $ARIMA$ models

The $ARIMA(p,d,q)(P,D,Q)_m$ model is used to represent seasonal data, the later portion being for the seasonal terms, and $m$ being the seasonal period, number of observations per year.

Let $m=4$ is for quarterly data, and $ARIMA(1,1,1)(1,1,1)_m$ is written as:

$$
(1-\phi_1B)(1-\Phi_1B^4)(1-B)(1-B^4)y_t = (1+\theta_1B)(1+\Theta_1B^4)\varepsilon_t
$$

#### ACF/PACF

Seasonal part of an $AR$ or $MA$ model will be seen in the seasonal lags of the $PACF$ and $ACF$. 

Plenty of examples in the book. 

### $ARIMA$ vs $ETS$

$ETS$ models and $ARIMA$ models have some overlap, but there are many models that have no similar counterparts. 

Read more in the book. 

---

## Ch. 10 - Dynamic Regression Models

Exponential Smoothing and the $ARIMA$ model allow for past observations but not exactly the inclusion of perhaps other relevant information. A regular regression model can include a lot of information, but nothing regarding _subtle_ time series dynamics. 

Recap - regression models can be expressed as:

$$
y_t = \beta_0 + \beta_1 x_{1,t} + \cdots + \beta_k x_{k,t} + \varepsilon_t
$$

We have $k$ predictor variables and $\varepsilon_t$ is usually assumed to be an uncorrelated error term (i.e. white noise). 

The book mentions a _Ljung-Box_ test for assessing whether the resulting residuals were significantly correlated. Worth looking into perhaps. 

We are going to allow the errors from a regression to contain _autocorrelation_! To emphasise this change, we replate $\varepsilon_t$ with $\eta_t$. This error is assumed to follow an $ARIMA$ model. 

So, the error of regression will be $\eta_t$ and the error of $ARIMA$ will be $\varepsilon_t$. And only the $ARIMA$ error will be considered as _white noise_, since regression error is now assumed to be composed of $ARIMA$ and white noise. 

Interesting thought process. 

### Estimation

Based on our previous assumption with the error terms, if we try to minimise the sum of squared errors, $\eta_t$, there are several issues:
+ Estimated coefficients cannot be considered _best estimates_ because we know we are technically ignoring information in their calculation. 
+ Statistical tests, like the t-test on coefficients, will be incorrect.
+ $AICc$ values of fitted models would not be a good guide for the best model. 
+ The $p$-values will most likely appear smaller than they should be. This will make some predictor variables appear more important when they are not
	+ This is called **spurious regression**.

We can minimise the sum of squares on $\varepsilon_t$ or use a maximum likelihood estimation. 

If estimating a regression with $ARMA$ errors, ensure all variables are stationary. Else, if any variables are non-stationary, the estimated coefficients will not be consistent estimates, and therefore garbage. Exception if non-stationary variables are _co-integrated_. 

Therefore, we _difference_ non-stationary variables in the model. To maintain the form of the relationship between $y_t$ and the predictors, it is common to difference all the variables if any of them need differencing. The resulting model is called a **model in differences**. A **model in levels** is what we obtain when the original data are used without differencing. 

If all variables in the model are stationary, we only need to consider an $ARMA$ process for the errors. A regression model with $ARIMA$ errors is equivalent to a regression model in differences with $ARMA$ errors. 

### Regression with $ARIMA$ errors using `fable`

In R, the `ARIMA()` function will fit a regression model with $ARIMA$ errors if the _exogenous_ regressors are included in the formula.  Suppose we have a model where $\eta_t$ is an $ARIMA(1,1,0)$ error. Our regression model is

$$
\begin{align*}
y_t &= \beta_0 + \beta_1 x_t + \eta_t\\
y_t' &= (\beta_0 + \beta_1 x_t + \eta_t)-(\beta_0 + \beta_1 x_{t-1} + \eta_{t-1})\\
y_t' &= (\beta_0-\beta_0) + (\beta_1 x_t - \beta_1 x_{t-1})+ (\eta_t - \eta_{t-1})\\
y_t' &= \beta_1 x_t' + \eta_t'\\
&\tt{where}\\
\eta_t' &= \phi_1 \eta_{t-1}' + \varepsilon_t 
\end{align*}
$$

Take that with a pinch of salt as it's a good explanation for why the constant term drops, but not 100% sure about that pesky error term. 

Whether differencing is required is determined by applying a $KPSS$ test to the residuals from the regression model estimated using ordinary least squares. 

If differencing is required, all variables are differenced and the model re-estimated using maximum likelihood estimation. 

The $AICc$ should be calculated for the final model, which can be used to determine the best predictors. 

The book continues with examples in R. 

### Forecasting

To forecast using a regression model with ARIMA errors:
+ Forecast the regression part of the model.
+ Forecast the $ARIMA$ part of the model.
+ Combine results. 

Book contains many examples. 

### Stochastic and deterministic Tre...

2 ways to model linear trend:

_Deterministic Trend_

$$
y_t=\beta_0 + \beta_1t+\eta_t
$$

The $\eta_t$ is an $ARIMA$ process.

_Stochastic Trend_ is the same model but where $\eta_t$ is an $ARIMA$ process with $d=1$. You can difference both sides so that you have:

$$
y_t = y_{t-1} + \beta_1 + \eta_t'
$$

Similar to a random walk with drift, but the error term is an $ARMA$ process instead of white noise. 

The models have different forecasting characteristics. The book gives examples. 

### Dynamic Harmonic Regression

Oh God... When there are long seasonal periods, a dynamic regression with _Fourier_ terms is often better than other models considered so far. Seasonal versions of $ARIMA$ and $ETS$ models are designed for _shorter_ periods, like 12 months for monthly data, for 4 quarters for quarterly data. Basically, there are $m-1$ parameter to be estimated for the initial seasonal states. So, for a big $m$, the estimations become unmanageable. 

Even in R, the `ARIMA()` function allows for $m \le 350$. 

For something like a daily period, we prefer a harmonic regression approach where seasonal pattern is modelled using Fourier terms with short-term time series dynamics handled by an $ARMA$ error. 

Many advantages and one significant disadvantage, check the book. 

###  Lagged Predictors

Consider an advertising campaign, or Covid. Sitting in a room of people with Covid won't immediately get you sick. You would have a lag of several days. A model that allows for lag can be expressed as:

$$
y_t = \beta_0 + \gamma_0 x_t + \gamma_1 x_{t-1} + \cdots + \gamma_k x_{t-k} + \eta_t
$$

Again, the $\eta_t$ is an $ARIMA$ process. The $k$ can be found using $AICc$, along with values of $p$ and $q$ for the $ARIMA$ error. 

---

## Knowledge Check

Q1: Which model or analysis involves the operation of sorting data variables according to their level of _changeability_ along data records?

This is the principal component analysis. 

Q2: Why apply clustering analysis to a dataset?

You would do this to group data records according to their similarities.

This analysis does not remove irrelevant variables, reduce data dimensionality, nor estimate missing values. 

Q3: What model or analysis provides the value of the independent variable?

It's **not** principal component analysis, nor _correlation analysis_.

It's a **Regression Model**! I clearly don't understand the wording of the question. 

Q4: The auto-regressive model assumes what?

A linear function between the future output and past output

Q5: What transformation approach transfers data variable to their frequency domain?

That is the Fourier transformation.

Better know the others too: radial, reciprocal, logarithm, etc...
