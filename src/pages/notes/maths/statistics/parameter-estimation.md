---
layout: '@layouts/NotesLayout.astro'
title: 'Parameter Estimation'
pubDate: 2024-01-14
description: 'Introduction to Parameter Estimation.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability", "parameter"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 6: Parameter Estimation

pp. 145 - 180

Our learning objectives are as follows:
+ Find maximum likelihood estimates by directly maximizing the log-likelihood function and the ordinary least squares (OLS) approach to parameter estimation.
+ Define the OLS cost function and understand how OLS is implemented to find parameter estimates for linear regression.
+ Use the expectation maximization (EM) algorithm.
+ Understand Gaussian mixture models and how the EM algorithm is applied to estimate its parameters with incomplete data.
+ Analyse the role regularization plays in parameter estimation, including how ridge and lasso perform regularization, and the specific penalty terms they add to the cost function. 
+ Understand how uncertainties are encoded for a vector of random variables.
+ Compute the uncertainties of the transformation (linear and non-linear) of a vector of random variables. 

## Introduction

One primary goal of statistical inference is to use the observed data to make inferences about one or more of the following:
+ How data were generated.
+ Relationship between two or more variables of the observed data and theoretical values.
+ Relationship of two or more variables of the observed data.

In each scenario an assumption is made about either the underlying probability distribution that generated the data, or the functional form and the family of models that describe the relationship of two ore more variables of the observed data. 

_Domain Knowledge_ is typically used to assume the probability distribution or the model. Regardless, the assumptions contain unknown parameters. 

Hence the topic of this section, giving you the tools to **estimate** parameters. It is crucially important to know not just the different methods, but when they are appropriate to apply. 

Additionally, there are properties that we wish for our estimates to strive for. In practice we usually cannot have all properties, but we want parameter estimates to be:
+ Unbiased - The expected value of the estimated value should be the true value. The method we choose should not introduce additional bias. 
+ Consistent - Adding more data to the same, the estimate should converge to the _true_ value. $\lim_{n\to \infty} \hat a = a_0$ where $a_0$ is the true value. 
+ Effective - The variance of the estimated parameter should be as small as possible.
+ Robust - the estimator should be insensitive to wrong data or any assumptions we may make. 
+ Sufficient Statistics - The estimator includes all the information in the observed data relevant to the parameter. 

Different approaches and assumptions have their strengths and weaknesses. We will learn which to choose and in particular situations. Actually, we will look at two popular methods, the maximum likelihood approach and the method of least squares. 

## 6.1 - Maximum Likelihood

The **Likelihood** is the probability of observing a given dataset or the joint distribution of the dataset. So, if we believe that our observed data was generated from a distribution, for random variable $X$, with pdf $f(\cdot|\theta)$, parameterized by an unknown parameter (or set of), the likelihood is the probability (distribution) of observing this data for a specific value of this parameter:

$$
\mathcal L(\theta) = P(x_1, \dots,x_N|\theta)
$$

The $x_n$ values represents the given data. The **likelihood** is the joint probability distribution of the observed data and describes the probability of observing the data given a specific value of $\theta$ for a specific choice of probability density function. 

The likelihood depends on the choice of the _unknown_ parameter. So, if we pick a good value for the parameter(s), then the likelihood will be _relatively_ large. If we pick a bad value, it will be _relatively_ small. Therefore, the optimal value of $\hat \theta$ is called the **maximum likelihood estimate**. 

If we want to use this method we must fulfil the following prerequisites:
+ Requires a sample of $n$ measurements of a random variable $x_1,\dots,x_N$, where the $x_i$ can either be a single variable or a vector of variables. 
+ Assume we know the underlying probability density distribution $\left( f(\cdot \ | \ \theta)\right)$, but not $\theta$. 
	+ This means there is a data generating process that can be described using a probability density function or probability mass function.
	+ Note, this can be a bold assumption to make with consequences of everything else being incorrect if our assumption is incorrect. 

The course book covers a quick example of the Poisson distribution. Poisson random variables are independent, so the set of our 10 occurrences are independent and identically distributed. The associated joint PMF is thus the product of the individual PMFs. 

The Poisson parameter $\lambda$ is the unknown average rate of occurrences in our example. So if we have our equation:

$$
\begin{align*}
f(x|\lambda) &= \frac{e^{-\lambda}\lambda^x}{x!}\\
f(x_1,\dots,x_{10}) &= f(x_1)f(x_2)\dots f(x_{10})\\
&= \prod_i \frac{e^{-\lambda}\lambda^{x_i}}{x_i!}\\
&= \frac{e^{-10\lambda}\lambda^{\sum_ix_i}}{x_1!x_2!\dots x_{10}!}\\
\end{align*}
$$

And if we know the sum of the $x$ values, pretend it is 42, we can start guessing what $\lambda$ values will maximize the likelihood function. The denominator is not a function or the parameter, so we can ignore it for testing. So, try for values of $\lambda = 3$, $\lambda = 4$, maybe $\lambda = 3.5$... 

We can determine the best parameter from the data in this method but this method does not tell use the best distribution. We could assume a normal distribution and maximize for those parameters as well.

Let's dive into the formality of it. 

Define the likelihood function: Let $(x_1, \dots, x_N)$ be a realization of the random variables $X_1, \dots, X_N$. Suppose that each random variable $X_i$ has a PDF (or PMF) given by $f(\cdot | \theta_j)$ for $i=1,\dots,N$. The parameters $\theta_j$ are the parameters of the distribution, each could be a scalar or a vector. For example, a normal distribution requires the mean and variance. 

The **Likelihood Function** is a function mapping the parameter to the probability of observing the given dataset. That is, the likelihood function $\mathcal L(\theta_1, \dots, \theta_k)$, defined by the parameters of each distribution, is the mapping from the parameters to the joint density evaluated on the observed data $(x_1, x_2, \dots, x_N)$. It describes the probability of observing the data given the parameter(s) $\theta = (\theta_1, \dots, \theta_k)$. 

We let $f(\cdot | \theta)$ be t he joint density of the random variables $X_1, \dots, X_N$ where $\theta$ denotes the tuple $(\theta_i)^k_{i=1}$ (all parameters, either scalar or vector). The likelihood function is given by:

$$
\mathcal L(\theta) = f(x_1, \dots, x_N | \theta)
$$

So far it makes sense. The course book continues that if the random variables are independent (a convenient assumption), the joint density is given by the product, which reduces the likelihood to:

$$
\mathcal L(\theta) = \prod_{i=1}^N f_i(x_i|\theta)
$$

There's some sly notation there, you can see we have $f_i$, indicating different kinds of distributions. However, we usually also assume only one underlying probability distribution that  describes the data. Then data are independent and identically distributed (i.i.d.), giving:

$$
\mathcal L(\theta) = \prod_{i=1}^N f(x_i|\theta)
$$

Remember that $\theta$ can either be a single parameter or a set of parameters. Also, the likelihood function gives the probability of observing the given data for the parameter(s) $\theta$, that is $P(x|\theta)$. It **is not** the probability of the parameter $\theta$ being correct given the observed data, which would be $P(\theta | x)$. 

With our convenient assumptions, we will work with a specific probability function when we use the maximum likelihood approach to find the best value for parameter $\theta$. Our probability function must be normalized at all stages of the procedure. That is:

$$
\int f(x|\theta) dx = 1
$$

for all values of $\theta$. A good part of the numerical implementation of the maximum likelihood estimation is concerned with making sure that this normalization is fulfilled at all times.

In most practical applications, we do not work with the likelihood function directly. Instead, we use the log-likelihood function. The **log-likelihood** function is used for analytic and computational efficiencies over the likelihood function. It is the logarithm of the likelihood function. 

Why would we use this? Composing a function with a logarithm allows us to find the maximum as the logarithm is monotonic and increasing. We can also use log arithmetic such as the product of logs is the sum of their components. Also, the products of densities (or probabilities) can get very small, much smaller than the minimum value of the data type that a computer can handle. 

The logarithm is monotonously increasing for positive number $x$. Therefore, the maximiser(s) of the likelihood function is also the maximiser(s) of the **log-likelihood** function:

$$
\mathscr l(\theta) = \ln \mathcal L(\theta)
$$

Closely related to this is the **Negative log-likelihood function**, used over the likelihood because optimization schemes tend to be programmed to minimize rather than maximize. It is given by:

$$
\mathscr{nll}(\theta) = - \prod_{i=1}^N \ln(f_i(x_i|\theta))
$$

Any maximiser of the likelihood function is a maximiser of the log-likelihood function, and a minimiser of the negative log-likelihood function. 

Now we assume observations are drawn from identically distributed random variables with common PDF (or PMF). 

$$
f(\cdot | \theta) = f_1(\cdot | \theta) = f_2(\cdot | \theta) = \dots = f_N(\cdot | \theta)
$$

The course book then lists the likelihood, log-likelihood, and negative log-likelihood functions as follows:

$$
\begin{align*}
\mathcal L(\theta) &= \prod_{i=1}^N f_i(x_i|\theta)\\
\mathscr l(\theta) &= \prod_{i=1}^N\\
\mathscr nll(\theta) &= - \prod_{i=1}^N \ln(f(x_i|\theta))\\
\end{align*}
$$

**Example:**

Pages 152-154 go over an example with a possibly biased coin being tossed. Suppose a coin is tossed 10 times, and lands heads up 7 of those times. What is the maximum likelihood estimate of the probability of heads?

See that each toss is a Bernoulli trial. We have 10 independent observations, and success is defined as heads up. 

$$
X_1, \dots, X_N \sim \text{Bernoulli}(\theta)
$$

The PMF would be:

$$
f(x;\theta) = \theta^x(1-\theta)^{1-x}
$$

This is written a little confusing because I was expecting $q^{k-x}$, but right now for each toss, $x$ is either 0 or 1. So technically $k=1$ for each trial. 

Now, to combine the trials into a likelihood function:

$$
\begin{align*}
\mathcal L(\theta) &= \prod_{i=1}^{10}\theta^{x_i}\left( 1-\theta \right)^{1-x_i}\\
&= \theta^\left( \sum_{i=1}^Nx_i \right)\cdot 
	\left(1-\theta\right)^\left(10-\sum_{i=1}^Nx_i \right)\\
&= \theta^7(1-\theta)^3
\end{align*}
$$

This function is continuous for $\theta \in [0,1]$, the extreme value theorem guarantees a maximiser. Since this function is differentiable on those bounds, we will use a derivative to find the maximiser:

$$
\begin{align*}
\frac{d\mathcal L}{d\theta} &= 7\theta^6(1-\theta)^3 + (-3)\theta^7(1-\theta)^2\\
&= \theta^6(1-\theta)^2(7-10\theta)
\end{align*}
$$

This equation has a single solution in $(0,1)$ at $\hat \theta = 7/10$. We do not consider values of theta being 0 or 1 because this formal solution would not represent what we are seeing in the data. 

This should not be a surprising solution. You can also confirm that the log-likelihood function provides the same result. The derivative in this instance is not as easy to handle though. 

$\Box$

p. 154
