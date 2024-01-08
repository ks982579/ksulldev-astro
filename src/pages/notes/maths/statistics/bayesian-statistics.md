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

Derivation of **Bayes' Formula**:

$$
\begin{align*}
P(A|B) &= {P(A \cap B) \over P(B)}\\
P(A \cap B) &= P(A|B)P(B)\\
P(B \cap A) &= P(A\cap B) = P(A|B)P(B)
\\ &\text{then...} \\
P(B|A) &= {P(B\cap A) \over P(A)}\\
&= \frac{P(A|B)P(B)}{P(A)}
\end{align*}
$$

Writing it another way using $H$ to denote our hypothesis and $D$ to denote data (Sometimes people use $E$ for "evidence"):

$$
P(H|D) = \frac{P(D|H)P(H)}{P(D)}
$$

Let's discuss the meaning of each component:
+ $P(H|D) =$ is the _posteriori_ probability; the quantity we want to know. What is the probability of our hypothesis after looking at the data?
+ $P(H) =$ is the _prior_ and reflects our prior knowledge or hypothesis before looking at the data. 
+ $P(D|H) =$ is the _likelihood_. For a given hypothesis, this describes the probability of observing the data $D$ we have recorded.
+ $P(D) =$ is the _evidence_. A normalization constant that incorporates the probability to observe the data (i.e. all the ways we can observe the data). 

Note: the evidence does not depend on the hypothesis $H$ and is therefore the same for all hypotheses we might want to test. 

The **Posterior** (what we want) is given by the likelihood times the prior, normalized to the evidence. 

The course book gives an example regarding a smoke relating to fire. However, I always like medical test results to show how accurate tests need to be. 

For a Covid-19 test, suppose someone has covid and the test shows a 99% positive rate. The chance that someone randomly selected has Covid is a stunning 1% (made up). The chance people test positive is 1.1%, meaning we are getting a slight false-positive rate. We want to know what is the chance someone has Covid given they test positive?

Let $P(C+) = 1\%$ be covid and $P(T+|C+)=99\%$, and $P(T+)=1.1\%$ be the probability that a person tests positive. 

$$
\begin{align*}
P(C+|T+) &= \frac{P(T+|C+)P(C+)}{P(T+)}\\
&= {0.99\cdot 0.01 \over 0.012}\\
&= 0.90
\end{align*}
$$

Even with that small false-positive rate, you can see the test results drop quite a bit. 
+ The **posteriori** is being covid positive given a positive test result.
+ The prior is being Covid positive.
+ The likelihood is a positive test given the patient has Covid. 
+ The data / evidence are the positive test results. 

I made up a lot of the stats to make the example easy, but in many cases we do not have direct access to these quantities. However, we can decompose the evidence using the **total law of probability**:

$$
P(A) = \sum_iP(A|B_i)P(B_i)
$$

Which is the summing up all of the ways something can happen separately. We then tuck that into our Bayes' Theorem:

$$
P(H|D) = \frac{P(D|H)P(H)}{\sum_i\left(P(D|H_i)P(H_i)\right)}
$$

For the Covid example, the total probability of positive test is sum of positive tests given the patient has covid times probability they have Covid, plus a positive test given the patient does not have Covid times probability they do not have Covid. 

## 4.2 - Estimating the Prior, Benford's Law and Jerey's Rule

### The Role of the Prior

We made up the prior for an example, but it is actually an important piece. The course book covers HIV tests. This is much like the Covid example above, but we are given:
+ $P(T+|H+) = 0.999$, very accurate.
+ $P(T-|H+) = 0.001$ to normalize probability so that $P(T+|H+)+P(T-|H+)=1$. 
+ $P(T+|H-) = 0.05$, slightly high false-positive rate.

We are not given the prior, so must solve for it before we can find $P(H-|T+)$. The _prior_ is $P(H+) = 0.00035$ according to some data from Germany. 

The data then is:

$$
\begin{align*}
P(T+)&=P(T+|H+)P(H+)+P(T+|H-)P(H-)\\
&= 0.999*0.00035 + 0.005*(1-0.00035)\\
&= 0.05
\end{align*}
$$

Then we have:

$$
\begin{align*}
P(H+|T+) &= \frac{P(T+|H+)P(H+)}{P(T+)}
\\
&=\frac{0.999*0.00035}{0.05}
\\
&= 0.069
\end{align*}
$$

So if someone randomly takes a test and it becomes positive, there's really only a 7% chance it's correct because the relatively high false-positive rate. 

Doctors may narrow the sample pool by also including risk factors and symptoms. 

Defining the prior can be difficult in practice. 

### Benford's Law

Getting the prior is one of the most difficult aspects of Bayesian analysis. It can be suggested to use a _uniform_ or at prior, meaning use a uniform distribution. However, this is one of the most common mistakes. 

Most systems are not uniform. Newcomb (1881) describes a formula for pages worn in books like:

$$
P(d) = \log_{10}\left( 1 + {1 \over d} \right)
$$

Benford (1983) revisited this equation and so it became known as "Benford's Law". It has many applications across many fields. 

The key point in understanding the emergence of this phenomenon is we are combining many different numbers from many different sources. 

### Jerey's Rule

We also might not know much about the system we want to analyse using Bayesian statistics. We would want to avoid specifying a prior, but Bayes' formula demands it. We could assume a uniform prior, but as we have seen, that is probably not correct. 

We would want to use the uniform distribution as a prior to express we do not know the value the parameter should take, and we do not want to impose any constraints.

Consider that the parameter of the family of random variables $\theta$ is assumed to follow a uniform distribution in the interval $(0,1)$, and we _hope_ this expresses we do not know anything about $\theta$. 

When setting up our model, there is no single best parameterization. We could express $\theta$ in terms of the logit function and applied the transformation:

$$
\theta'= \log\left( {\theta \over 1-\theta} \right)
$$

Where $\theta'\sim(-\infty, \infty)$. The transformed parameter is no longer uniformly distributed. We are going to try to define this more formally:

Start with $\theta$. Transform $\theta$ with transformation function $g$ to get new variable $\phi$, where $\phi=g(\theta)$. The transformation rule is defined as:

$$
f(\phi) = f(g^{-1}(\phi))\left| \frac{dg^{-1}(\phi)}{d\phi} \right|
$$

And because $\theta$ is assumed to follow the uniform distribution, $f(\theta)$ is constant. But this contradicts our previous assumption that we have no knowledge about the prior. Applying a transformation should not make a difference. Therefore, uniform as a prior is not suitable. 

The Jerey's prior (Jereys, 1946) defines a prior for a parameterized random variable that is invariant under transformations and defined by pdf:

$$
f(\theta) \propto \sqrt{J(\theta)}
$$

The $\propto$ means "proportional to". And $J(\theta)$ is the expected Fisher Information of the parameter $\theta$. There's also a constant such that $f(\theta) = c\cdot\sqrt{J(\theta)}$. And $f(\theta)$ is unique because the integral over all real numbers is 1.

What is the **Fisher Information**? It is a metric that measures the amount of information that a random variable $X$ contains about the parameter $\theta$ given an observed sample $x_1, \dots, x_n$. It measures the amount of information about the parameters $\theta$ and is given by the negative of the second derivative of the log-likelihood function:

$$
I(\theta) = - \frac{d^2\log(L(\theta))}{d\theta^2}
$$

Another book says that Fisher Information is the variance a specific random variable and written as:

$$
I(\theta) = \text{Var}\left( \frac{\partial \log f(X;\theta)}{\partial\theta} \right)
$$

#### Log Likelihood function

We will denote the likelihood function $\mathcal L$. It measures the probability, or likelihood, of observing the current data given a specific model that depends on one or more parameter:

$$
\mathcal L(\theta) = f_X(x|\theta)
$$

We assume to know the density of the underlying probability distribution $f_X(.|\theta)$, except the parameter $\theta$. We often use the log-likelihood function given by $ln(\mathcal L)$ for practical reasons. 

The _first_ derivative of the log-likelihood function is called the **score function**:

$$
S(\theta) = \frac{d\log(L(\theta))}{d\theta}
$$

The Fisher Information can be written as:

$$
I(\theta) = -\frac{d^2\log(L(\theta))}{d\theta^2}
= -{dS(\theta) \over d\theta}
$$

The expected Fisher information is then the expectation value of $I(\theta)$:

$$
J(\theta)=E[I(\theta)]
$$

The **regularization assumption** is that we can change the order of differentiation and integration. With this we can show that:

$$
\begin{align*}
E[S(\theta)] &= 0\\
\text{Var}[S(\theta)] &= E[S(\theta)^2] = J(\theta)
\end{align*}
$$

The book, on pp.105-106, shows the Jerey's prior is invariant under bijective transformations. 

Then pp.106-108 gives an example of Jerey prior for Poisson distribution. This means you make the _likelihood_ distribution Poisson, then take the derivative of the log-likelihood. The Jerey's prior is the variance of the score function. 

### Other Approaches

We will often know many details about the system we want to analyze. We can, in a way, interpret the training data used in a machine learning approach as the prior knowledge. This highlights the role of data quality as faulty or biased data can potentially have a significant impact on the output. 

## 4.3 - Conjugate Priors

p. 109

The prior is very important. We just looked at how to use the prior to include our "_a priori_" knowledge of the system and how to encode as little information as possible. Now, if we write the _posteriori_ probability with the sum total probability:

$$
P(A_j|B) = \frac{P(B|A_j)P(A_j)}{\sum_iP(B|A_i)P(A_i)}
$$

And if we move toward continuity, we can replace the sum with an integral and probabilities with the likelihood function:

$$
f(\theta|x) = \frac{f(x|\theta)f(\theta)}{\int f(x|\theta)f(\theta)d\theta}
$$

From what I understand, numerator probabilities would be so small they are basically zero, but let's keep learning... this is only creating a _new_ pdf to cumulate over!

Let's cover the parts of that equation:
+ Parameter $\theta$ is the parameter of the distribution that we need to determine. 
+ $f(\theta)$ is the prior
+ $x$ are the observed data
+ $f(x|\theta)$ is the likelihood
+ $f(\theta|x)$ is the posteriori distribution. 

The **likelihood** formalizes the description of the observed data. We cannot influence it too much, but we can influence the prior. Since we need to perform the sum (or integral) over the likelihood time the prior, we can choose the parameterization of the prior so the sum (or integral) becomes easier. Basically, when we combine the two, we want the result to be a probability distribution that we can use easily. In particular, on that can be expressed in _closed form_ of a commonly used probability distribution. 

A class of priors is called a **Conjugate Prior** with respect to a given likelihood function if the _a posteriori_ distribution is of the same family of probability distributions as the prior. 

Keep in mind that choosing a conjugate prior is a convenience. If we cannot describe our _priori_ knowledge in terms of a conjugate prior then we should not try to "force" it. However, it would make further handling of the Bayes' formula easier. 

The book lists conjugate priors and continues into an example of conjugate beta prior. 

## 4.4 - Bayesian and Frequentist Approach

There are two ways to think about probabilities. The typical way is through counting, or frequency. If you flip a coin, the probability of heads is the number of times we observe the head of the face up, divided by the number of total tosses. And for a large number of events, a large sample:

$$
P(E) = \lim_{n \to \infty} {k \over n}
$$

This reasoning suggests probability is a frequency of events in the _long run_. This is the **Frequentist** approach to statistics. 

However, this is not the way we usually actually think of probabilities. When you look into the night sky and see a flashing light you probably think of a plane, not an alien spaceship. We assign a degree of plausibility, or belief, to what we observe. This is the **Bayesian** way of thinking about probabilities. 

With the light in the sky example, we see that, use our _prior_ for probability of what it is, like how we assume a coin is 50-50 heads or tails. But we can also update our belief and adapt the prior so that it matches our observations (such as that the coin is a fair coin).

2 Major differences:
+ The Bayesian approach requires a defined prior that expresses our _priori_ knowledge or belief. 
	+ The prior does not exist in the Frequentist definition. 
+ Parameters in the Frequentist's view are fixed and probabilities determined in that way.
	+ Bayesian method states that the data is fixed, it is what we observe. 
+ Major difference is how they understand probability
	+ Frequentist: probabilities are frequencies of occurrences of events in long running experiments or a population.
	+ Bayesian: probabilities represent our degree of "belief" and are modelled as a random variable using a probability distribution. 

Predicting the results of an election doesn't make sense to a Frequentist because an election with the same settings and population cannot be replicated infinitely number of times to observe outcomes and determine the probabilities. But in Bayesian statistics, we can model our assumptions in the prior and calculate the _a posteriori_ probability. 

---

## Assess Yo-Self

Suppose that we know $P(T)$, $P(U)$ and $P(U|T)$. What can we find from using Bayes' formula?

I'm not too sure what the question is really asking to be honest, but if we have the latter "PUT"

$$
P(U|T) = \frac{P(T|U)P(U)}{P(T)}
$$

So we can solve then for $P(T|U)$. (yes)



Given an experiment yielding a RV $X$ whose distribution is defined by $\lambda$, which we suppose to follow a Gamma distribution $\Gamma(3,5)$, what can we say about $X$?

A conjugate prior... I'm saying $X\sim \Gamma(3\lambda, 5\lambda)$ (no)
I am saying $X\sim \Gamma(3\lambda, 5)$  (no)
Just $X\sim \Gamma(3,5)$ (no)
Only that $\lambda\sim\Gamma(3.5)$ and nothing about $X$.



Now we have an experiment yielding $X\sim P(\lambda)$ and we have $\lambda \sim \Gamma(3,5)$ (look familiar?). An experiment following this model gives a sample $[2,3,5,7]$. How can we calculate the posterior?

The calculation of the posterior can be done by evaluating a statistic on the sample using the Bayes formula. (yes)



Benford's law tell us that the lower digits appear more frequent than higher ones in which medium?

It was first reported in logarithm tables, but later applied just about everywhere. (no)
In numbers found in the literature...(yes)



What information do you need to calculate a Jerey's prior? (The course asks for _Jeffrey's prior_... who dat?)

saying the prior distribution and derivative of the parameter. (no)
The prior distribution family. (yes)
