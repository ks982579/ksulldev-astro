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

In the above example the likelihood and log-likelihood functions were concave, which is a very important property. If they were not concave, the maximiser may converge to a local maximum instead of a global one. In practice, a transformation is performed to the observed data if it is not initially concave. 

A function is concave if its _second_ derivative is negative. 

Note that the likelihood functions and their maximisers are all technically _random variables_. This is because they are functions of observed data that are themselves also random variables.

Why is that important? The MLE estimator is a function of random variables. For large samples the MLE estimator approximately follows a Gaussian Distribution with mean $\theta^{\texttt{true}}$, the true value of the parameter, and variance-covariance matrix given by:

$$
\left[ I\left( \theta^{\text{true}} \right) \right]^{-1}
$$

The $I(\theta^{true})$ is the **information matrix**, which is the expected value of the matrix of second order derivatives (Hessian) of the negative log-likelihood function (crazy):

$$
I(\theta^{\text{true}}) = E\begin{bmatrix}
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_1^2} & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_1 \theta_2} &
\cdots & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_1\theta_n}\\
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_2 \theta_1} & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_2^2} &
\cdots & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_2\theta_n}\\
\vdots & \vdots & \ddots & \vdots\\
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_n\theta_1} & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_n \theta_2} &
\cdots & 
\frac{\partial^2 \mathscr{nll}(\theta)}{\partial\theta_n^2}\\
\end{bmatrix}
$$

That was fun to write in $\LaTeX$.

What is this information matrix? 

This article, [Information Matrix | Statlect.com](https://www.statlect.com/glossary/information-matrix), by Dr. Marco Taboga, states "The information matrix (also called Fisher information matrix) is the matrix of second cross-moments of the score vector." 

Google Bard says the following:

Imagine you're trying to find out how much a candy bar costs. You ask your friends, and they all tell you different prices. This makes it hard to know for sure how much the candy bar actually costs.

The information matrix is like a special tool that helps you make sense of all this confusing information. It tells you how much information each person's answer gives you about the true price of the candy bar. The more information a person's answer gives you, the more confident you can be about your estimate of the price.

So, the information matrix is like a map that helps you navigate through the world of information. It shows you which pieces of information are most important and helps you make the most of what you know.

This article, [Fisher Information | Wiki](https://en.wikipedia.org/wiki/Fisher_information) Covers in depth the concept of Fisher Information. 

The information matrix captures information regarding the curvature of the negative log-likelihood function. The course book talks about a "low point". The more variance the MLE estimator has results in a _flatter_ low point. So the less variance means a sharper low point. It terms of a probability distribution, the negative of one, this sounds like it makes sense. 

Where there is only one parameter, the variance of the estimator reduces to:

$$
\sigma^2_{\theta^\text{MLE}} = \frac{1}{\left.\frac{\partial^2\mathscr{nll}}{\partial \theta^2}
\right|_{\theta^{\text MLE}}}
$$

Let's try to really understand what is going on, I would like that. 

Suppose we only have one parameter, $\theta$. The negative log-likelihood function is given by $\mathscr{nll}(\theta)$. The optimal parameter is given by $\hat \theta$. 

Let's expand the negative log-likelihood function around the optimal parameter:

$$
\mathscr{nll}(\theta) = \mathscr{nll}(\hat \theta) + {1 \over 2}\frac{d^2\mathscr{nll}(\theta)}{d\theta^2}(\theta - \hat \theta)^2 + \cdots
$$

The negative log-likelihood function approximates the shape of a parabola. The likelihood function approximates a normal distribution:

$$
\begin{align*}
\mathcal L &\approx \text{const .}\cdot \text{exp}\left[
-{1 \over 2}\frac{d^2\mathscr{nll}(\theta)}{d\theta^2}(\theta - \hat \theta)^2
\right]\\
&= \text{const .}\cdot \text{exp}\left[
-\frac{(\theta - \hat \theta)^2}{2\sigma^2}
\right]
\end{align*}
$$

Then we identify the following:

$$
\sigma = \left[\left.\frac{\partial^2\mathscr{nll}(\theta)}{\partial \theta^2}
\right|_{\theta=\hat \theta}\right]^{-1/2}
$$

We can use this to define the uncertainty of the optimal parameter in analogy to the variance of the normal distribution. At the minimum $\theta=\hat \theta \pm n\cdot \sigma$, and for the negative log-likelihood function $\mathscr{nll}(\theta) = \mathscr{nll}(\hat \theta) + {1 \over 2}n^2$. 

Note, if the log-likelihood function does not approximate to a parabola, we can usually find a suitable variable transformation.

If there are multiple parameters instead of just the single one like in the above discussion, we then resort to using the information matrix in place of the second derivative. 

The book covers the Poisson example, which has only the 1 parameter. 

Then, pp. 156-158 gives and example "MLE for the Mean of a Gaussian Function". It's a good example I would like to include maybe in the future.

Let's discuss some of the properties of the Maximum Likelihood Estimator. 

It is **consistent**. The book references the _weak law of large numbers_, which [Weak Law of Large Numbers | ScienceDirect.com](https://www.sciencedirect.com/topics/mathematics/weak-law-of-large-number) gives many resources for. The course book states for a sequence of i.i.d. random variables, each with its own mean, we define a new random variable:

$$
X = \frac{X_1+X_2+\dots+X_n}{n}
$$

Then for $n\to\infty$ the sample mean approaches the population mean. This is true because if the number of observations approaches infinity, then it is approaching the entire population.

The book has some information that is slightly different than Science Direct. And even when compared to [This Wiki Article](https://en.wikipedia.org/wiki/Law_of_large_numbers#Weak_law) it looks like small mistake in course text, which I will correct in my notes...

So, the weak law of large numbers assures us that:

$$
\lim_{n\to\infty}P\left(
\left| \overline X_n -\mu\right| \lt \epsilon
\right) = 1
$$

for any positive $\epsilon$. An equivalent statement would be:

$$
\lim_{n\to\infty}P\left(
\left| \overline X_n -\mu\right| \ge \epsilon
\right) = 0
$$

I am assuming that epsilon represents the error. These statements say that the probability as the sample size approaches the population, the probability of having a near-zero error increases to near certainty. On the flip side, as the sample size increases, the probability of observing a larger than tiny error becomes nearly impossible. 

We can also apply this argument to the variance, remembering that $Var[ax] = a^2Var[x]$. 

Also, remember that although the MLE estimate of the mean may be unbiased in certain examples or situation, this is _not_ an intrinsic property of MLE estimators in general. 

Also important to understand the $\hat\mu^{MLE}$ is a non-random quantity based on the observed data. To compute the estimate for an observed _sample_ we would use this. However, the corresponding quantity $\overline X_N$ is a random variable based on the sequence of random variables. We use this to explore properties of an MLE estimator. 

The book covers an example pp. 159-160 of an MLE for the Variance of a Gaussian Function. It piggy-backs off of the last one, so another time in the future I might add it. 

Unlike the estimator for the mean, the maximum likelihood estimator for the variance is biased. We can construct an unbiased estimator as follows:

$$
\hat\sigma^2 = {N \over N-1}\hat\sigma^2_{MLE} = 
{N \over N-1}\sum_{i=1}^N\left(x_i-\hat\mu\right)^2
$$

## 6.2 - Ordinary Least Squares (OLS)

p. 160

For MLE, a critical assumption was that we know the underlying probability distribution of the observed data points. Realistically, we do not know that but we have a model that can be used to describe the data. This can be an empirical model or a theoretical description of the stochastic process we wish to understand.

The point being that even if we do not know the underlying probability distribution, we have a method to generate or predict values from a model that we can compare to the observed data. Again, we will need some parameter(s) $\theta$ for our model. 

We turn to the method of **Ordinary Least Squares** (OLS) that requires only the functional dependence of two observed variables: 
+ The independent variable(s)
	+ related to measurements or experimental quantities that we can manipulate.
+ The dependent variable(s)
	+ depends on independent variables

Before diving into a fun derivation, let's discuss _uncertainty_. The **Uncertainty** associated with a value quantifies our knowledge about its _precision_. As we will see, the variance such a measure of uncertainty. 

We let $X$ represent independent variables and $Y$ represent the dependent ones. Suppose we observe the following, $(X,Y) = \left( (x_1,y_1), \dots, (x_N,y_N) \right)$. We assume that:

$$
y_i = h_{\theta}(x_i)
$$

Which is basically saying that $y$ is a function of the data $x$ and some parameter(s) $\theta$ for $i \in 1,\dots,N$. 

To be clear, the $x_i$ are observed data points and the $y_i$ are the observed outcomes. The function $h$ is the model that depends on parameter(s) $\theta$. 

For a fixed value of the parameter(s), $\theta = \hat\theta$, we can define the prediction as $\hat y_i = h(x_i | \hat \theta)$. 

Another important consideration is the **error** or **residual**, of the $i^{th}$ prediction, which we denote as:

$$
r_i = y_i-\hat y_i
$$

It's merely the difference of the observed and predicted values. It's important because the method of ordinary least squares' goal is to minimize the sum of squares of the residuals. That is, we want to create a model that minimizes the following:

$$
\tilde C(\hat \theta) = \sum_{i=1}^{N} r_i^2 = \sum_{i=1}^N\left(y_i-\hat y_i\right)^2
$$

To compare the cost of various sample sizes we can use the _average_ cost function:

$$
C(\hat\theta) = \frac{1}{2N} \sum_{i=1}^N\left(y_i-\hat y_i\right)^2
$$

The Cost function is also known as the [Loss Function | Wiki](https://en.wikipedia.org/wiki/Loss_function). Don't look to hard into that $1/2$ in the equation. I think it's a matter of convenience for taking the derivative later on. 

Even if we assume the model is correct, we must still account for measurement error. We introduce this uncertainty in the simplest case:

$$
Var[Y_i|X_i] = \sigma^2
$$

for $i \in 1,\dots,N$. Note that $(Y_1|X_1), (Y_2|X_2), \dots, (Y_N|X_N)$, all of the "Y given X" distributions, all have the same unknown distribution. Also:

$$
Y=h_{\theta}(X) + \varepsilon
$$

The epsilon is our error, hopefully unbiased. We note the following properties about the error:

$$
\begin{align*}
E[\varepsilon] &= 0\\
Var[\varepsilon] &= \sigma^2\\
\end{align*}
$$

Now, each data point has a different associated uncertainty, $Var[X_i]=\sigma_i^2$, or when it does, the least squares cost function becomes:

$$
\sum_{i=1}^N \frac{\left( y_i-\hat y_i \right)^2}{\sigma_i^2}
$$

We also note that if the measurements are correlated, then the cost function is adjusted to contain the covariance matrix to account for such correlation (yuck):

$$
(y-\hat y)^T[Cov(X)]^{-1}(y-\hat y)
$$

The last equation reduces to the one above it for uncorrelated measurements. 

### Linear Regression and OLS

p. 162

We will look at linear regression as a demonstration of how OLS estimates the parameters of the assumed model. We have $f(\cdot|\theta)$ as a linear function with parameter(s) $\theta$. 

When our random variable $X$ is just a single dimension, this is called **simple linear regression**. When it is a vector, it is called **multiple linear regression**.

Basically, we are assuming our $\hat y_i$ is a linear function, so we substitute the function into the cost / loss function. 

> I think the course book uses _Cost_ function because the _Loss_ function would be $L()$, which could become confusing with the Likelihood function. However, when I learned it back in the day, it was the _Loss Function_.

$$
\begin{align*}
C(\theta) &= \frac{1}{2N}\sum_{i=1}^N (y_i-\hat y_i)^2\\
&= \frac{1}{2N}\sum_{i=1}^N (y_i-\theta x_i)^2\\
\end{align*}
$$

Minimizing means taking the derivative:

$$
\begin{align*}
{dC \over d\theta} &= \frac{2}{2N}\sum_{i=1}^N (y_i-\theta x_i)(-x_i)\\
&= {-1 \over N} \sum_{i=1}^N x_iy_i + {\theta \over N} \sum_{i=1}^n x_i^2
\end{align*}
$$

We set this equal to zero to obtain:

$$
\hat \theta^{OLS} = \frac{\sum_i=1^Nx_iy_i}{\sum_{i=1}^Nx_i^2}
$$

This is just a generic equation for data points. But we want to find the parameters for the distribution. This means now we evaluate the estimate with the corresponding random varialbes:

$$
\theta= \frac{\sum_{i=1}^NX_iY_i}{\sum_{i=1}^NX_i^2}
$$

Then, we solve for the expected value of our parameters, given the observations we have obtained. This would like like:

$$
\begin{align*}
E[\Theta | X_1, \dots, X_N] &= \frac{\sum_{i=1}^NX_iE[Y_i]}{\sum_{i=1}^NX_i^2}\\
&= \frac{\sum_{i=1}^NX_i(\theta X_i)}{\sum_{i=1}^NX_i^2}\\
&= \frac{\theta \sum_{i=1}^NX_i^2}{\sum_{i=1}^NX_i^2}\\
&= \theta
\end{align*}
$$

This means that the estimator is **unbiased**! We then look at the variance estimator:

$$
\begin{align*}
Var[\Theta | X_1, \dots, X_N] &= \frac{\sum_{i=1}^NX_i^2Var[Y_i]}{\left(\sum_{i=1}^NX_i^2\right)^2}\\
&= \frac{\sigma^2}{\left(\sum_{i=1}^NX_i^2\right)}\\
\end{align*}
$$

The above approach can be extended if we want to consider more than one independent variable. We would use vectors instead of scalars and then move towards linear algebra. 

## 6.3 - Expectation Maximization (EM)

p. 163

