---
layout: '@layouts/NotesLayout.astro'
title: 'Vector Spaces'
pubDate: 2023-07-26
description: 'Notes on vector spaces'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths", "vectors"]
---

```yaml
title: Advanced Mathematics
subtitle: DLMDSAM01
Author: Dr. Robert Graf
publisher: IU International University of Applied Sciences
year: 2023
```

> I would imagine this to be a dense section where the notes would (eventually) be split into different categories. Until then, they are here 😊

# Unit 6 - Information Theory

p. 127

Quick overview of our learning goals:
+ How to express the difference between a prediction and observed event using the _MSE_
+ What the Gini Index is and how to determine it
+ Concepts of information entropy, Shannon entropy, and Kullback Leibler divergence
+ How to use _cross-entropy_ to compare 2 probability functions

## Introduction

What is information theory? There's always [a wikipedia article](https://en.wikipedia.org/wiki/Information_theory), which states it is "the mathematical study of the quantification, storage, and communication of information." It is in the realm of applied mathematics, and a combination of probability theory, statistics, computer science, and some other fields. It is a vastly wide field that has roots in many, many other applications such as statistical inference, cryptography, neurobiology, quantum computing, black holes, etc...

A major concept of information theory is _entropy_. It was introduced by Claude Shannon.

## 6.1 - Mean Squared Error (MSE)

To predict a quantity from observed values, we can turn to regression. Independent variables are often called _features_ and the dependent variable is called a label. 

$$
y=f(X,a_i)
$$

where $a_i$ can be one or more parameters. 

So, $X$ is a class, which is a collection of variables in a given dataset. Corresponding $\vec{x}$ is a specific set of values. This vector is more of a notation and the domain of the vector may not necessarily fulfil all requirements of an actual vector space, as we've studied previously. 

For observations, the mapping $f(\ldots)$ results in a prediction, $\hat{y}$. Linear regression is the simplest _nontrivial_ example of building a prediction model. It takes a form like $y=mx+b$.

**Definition - Free parameters:** Free Parameters are those parameters in a model that need to be determined using the data. 

We have **free parameters** $a_1=m$ and $a_2=b$. To determine their value, we need observations of both $x$ and $y$. 

Without diving into regression analysis, we'll just look at ways to assess the accuracy of the model. The simplest metric is the mean squared error.

**Definition - Mean Squared Error:** self describing equation for assessing accuracy of prediction model

$$
MSE = \frac{1}{N}\sum_{i=1}^{N}(y_i-\hat{y})^2
$$

There's also a mean absolute error, and the difference between the two is interesting, easier seen with a plot, but should be left for regression notes. I believe the use of squaring over absolutes is for the mathematical convenience of using in other equations. Absolutes don't play as nicely with others.

Because the MSE squares the difference, it "puts a strong penalty of predictions $\hat{y}$ that are far from observed value $y$." This means the metric can be become tainted and dominated by a few extreme values. 

Model accuracy metrics like MSE can be used during model construction and during model testing and assessment.
+ **Loss function** = Used during model building while the parameters $a_i$ are optimized.
+ **Score function** = Used to compare the value predicted by the model with the observed values after the model has been built. 

It would be interesting to build a small algorithm to optimize accuracy of a regression model.

## 6.2 - Gini Index

p. 129

[Gini Coefficient -- from Wolfram MathWorld](https://mathworld.wolfram.com/GiniCoefficient.html)

> The **Gini coefficient** $G$ is a summary statistic of the Lorenz curve and a measure of inequality in a population. It can range from 0 to 1, from all individuals being equal to a theoretical infinite population in which every individual, except one, has a size of zero.

It is a statistical measure of the degree of inequality of values in frequency distributions. 

[InvestoPedia](https://www.investopedia.com/terms/g/gini-index.asp) seems to agree that it measures distribution of something across a population. A high Gini Index indicates greater inequality. That is why, if all values are zero and one is 1, the Gini index is 1. That one value holds all of the wealth.

[WikiPedia](https://en.wikipedia.org/wiki/Gini_coefficient) also describes it as a measure of statistical dispersion. 

It was developed by Italian Statistician and Sociologist Corrado Gini in 1921. A value of 0 means perfect dispersion or equality, and a value o 1 means perfect inequality. You can also obtain values greater than one if you consider negative values, like people with debt. 

Finding the Gini Index is probably easiest to discuss when talking about income of people in a country. Gather all the data you can. Present data as cumulative percentage of population against cumulative share of income earned. You'll get a resulting _Lorenz Curve_.
+ Think like a histogram, and then let the width of each bar approach 0.

A simple equation is something like

$$
G = \frac{A}{A+B}
$$

Where $A$ is the amount between the line of equality and the Lorenz Curve, and $B$ is the area under the Lorenz Curve. 

We can say a few things about that equation
+ If $A=0$ the Lorenz Curve coincides with the line of Equality
+ if $G=0$, it is "perfect" equality, or perfectly uniform distribution of income. 

**EXAMPLE**

Consider if we represent the Lorenz curve as $y=x^5$. Can we determine the Gini Index?

The area under the Lorenz Curve is $B$. That is simply

$$
\begin{align*}
B &= \int_0^1 x^5 dx \\
&= \left. \frac{1}{6}x^6 \right|_0^1\\
&= \frac{1}{6}(1) - (0) = \frac{1}{6}
\end{align*}
$$

And now the Line of Perfect Equality

$$
\begin{align*}
A+B &= \int_0^1 x dx \\
&= \left. \frac{1}{2}x^2 \right|_0^1\\
&= \frac{1}{2}(1) - (0) = \frac{1}{2}
\end{align*}
$$

This is the entire area. $A$ is the area between the perfect equality and the Lorenz Curve

$$
\begin{align*}
A + \frac{1}{6} &= \frac{1}{2}\\
A &= \frac{1}{2} - \frac{1}{6}\\
A &= \frac{3}{6} - \frac{1}{6}\\
A &= \frac{2}{6} = \frac{1}{3}\\
\end{align*}
$$

Which leads to the Gini Index

$$
\begin{align*}
G &= \frac{ \frac{1}{3}}{\frac{1}{2}}\\
&= \frac{1}{3}\frac{2}{1}\\
&= \frac{2}{3}\\
\end{align*}
$$

### Gini Impurity

p.134

The **Gini Impurity** is often confused with the Gini Index. However,

**Definition - Gini Impurity:** A measure of the homogeneity of a distribution of elements in a set. It is related to the probability of incorrectly classifying an object in a data set. 

Suppose we have a data set and there are $N$ classification groups, or classes. Let $p_i$ be the probability of a random instance belonging to class $i$. We have the following cases for 2 subsequent experiments of assigning a class to an element:
+ Obtain an identical output for the same category $i$ with probability $p_i^2$. 
+ Obtain identical output, irrespective of the category with probability $\sum_{i=1}^N p_i^2$.
+ From above, we obtain two different outputs with probability $1-\sum_{i=1}^N p_i^2$.

**Proposition - Gini Impurity:** To find this, we find the probability of being wrong about any given classification, and sum over all classifications

$$
G = \sum_{i=1}^N \sum_{j \ne i} p_ip_j
$$

Now, we can use probability theory to rewrite the equations. Mainly,

$$
1 = \sum_N p_i
$$

That just means all of the probabilities of a system must equal one. That is, for a system to be complete, something must happen. On the same note,

$$
\begin{align*}
p_i = 1-\sum_{j \ne i} p_j\\
\sum_{j \ne i} p_j = 1-p_i\\
\end{align*}
$$

The above reflects that all of the probabilities must again, sum to 1. This time, we are using that fact to solve for the particular one we want though.

Now, for the rewrite,

$$
\begin{align*}
G &= \sum_{i=1}^N p_i \sum_{j \ne i}p_j\\
&= \sum_{i=1}^N p_i (1-p_i)\\
&= \sum_{i=1}^N p_i-p_i^2\\
&= \sum_{i=1}^N p_i- \sum_{i=1}^N p_i^2\\
&= 1 - \sum_{i=1}^N p_i^2\\
\end{align*}
$$

Trade a double summation for sum of squares. 

## Entropy, Shannon Entropy, Kulback-Leibler Divergence

p. 135

### Entropy

**Entropy** is a measure of the degree of randomness in a system. 

It is said that entropy defines the _arrow of time_. The **arrow of time** is a concept that time always moves forward, not backward, and that reactions follow this direction. So, what you do now cannot affect the past. 

Hold tight, we are diving into entropy on a fundamental level before introducing applications to information science. 

The reader is suggested to read "Physical Chemistry" (Atkins & de Paul, 2006, p. 573 ff). Entropy is introduced in thermodynamics. Think of a cup of coffee as it cools to room temperature. It doesn't spontaneously heat up or combust. Or does it? 

In Thermodynamics, entropy relies on the idea that change in a system is related to the energy lost in it process. This can usually be expressed by the amount of energy transferred by heat. 

The **inner energy** is the measure of how much work a system can do. The energy changes by either transferring energy as heat or performing work

$$
dU=\delta Q + \delta W
$$

Now, we denote entropy as $S$, $Q$ can be the incremental amount of heat exchanged, and $T$ the temperature of the system. We can propose the given formula

$$
dS = \frac{\delta Q}{T}
$$

The larger $T$ is, the less of an impact a given amount of heat has. Isn't that neat. 

That's cool, thinking about a ball hitting the ground and transferring energy into random movements to reduce bounce height, but that doesn't help with our study of information science.

Let's look at statistical physics? This field looks more at the bigger picture and less at just a few atoms or molecules on a quantum level. A **mole** is a measure of count, anything containing $6.02214076\times 10^{23}$ particles. It's such a large number, that we can kind of look over the fact they are individual particles. Like when we approximate really big things are infinite. 

Just to state, highly improbable event do happen in that mole, and they happen all of the time because there are so many changes for them to happen, over $10^{23}$ chances. However, they are so few and far in between, they get drown out by the regular occurrences, and hence, we see more consistent physical properties.

So, we neglect the individual contribution of each individual particle, and assume things fly around as tiny "billiard balls", or something. They bounce on each other, exchanging energy and changing modes of motion. The system has $N$ balls, each in a state of energy $\epsilon_i$. The concept of energy is seen as discrete. **Ground state** is the lowest energy of a particle. 

Because we have a mole of shite, on average $n_i$ molecules occupy energy state $\epsilon_i$. And the distribution of molecules across the possible states is governed by the single parameter, temperature. 

In general, the population of the system's energy states is described by $\{ n_0, n_1, n_2, \ldots \}$. Let $W$ be the _weight_ of configuration given by

$$
W=\frac{N!}{n_0!n_1!\ldots}
$$

We now define the _Boltzmann entropy_

$$
S=k_B \ln(W)
$$

where $k_B$ is the **Boltzmann constant** $(k_B=1.38\times 10^{-23}m^2kgs^{-2}K^{-1})$ and $W$ is the weight of the configuration. This equation acts the same way as the thermodynamic definition. The only parameter that defines the system is $T$ the temperature. And, if we take the limit $T \to 0$, only the ground state is accessible. Then only one configuration is possible, $W=1$, and hence, $S=0$ and $\ln(1) =0$. 

Since only one state is accessible, the amount of _randomness_ is minimal and increases as we increase temperature because more states become accessible.

The book covers a fun example using Carbon Monoxide (CO). I'm no chemist, but apparently as the molecule's temperature gets lower and lower, accessible states are actually $OC$ and $CO$. The configurations are similar in terms of energy and it can happen that after a flip, the system doesn't have enough energy to flip again. This can result in a lattice looking like: $COOCCO\cdots$. 

That is apparently also a glimpse of how entropy can be used in relation to Information Science. You can imagine the sequences to represent a _bit stream_, it might read like $010$. 

You can rewrite Boltzmann entropy as 

$$
\ln(W) = \ln(\frac{N!}{n_0!n_1!\ldots})
$$

And, based on properties of logarithms, you can expand it to

$$
\begin{align*}
&= \ln(N!) - (\ln(n_0!)+\ln(n_1!)+\ldots) \\
&= \ln(N!) - \sum_i \ln(n_i!)
\end{align*}
$$

**Proposition - Stirling's Approximation:** Without proof, we have a factorial approximation that

$$
\ln(x!) \approx x \ln(x) - x
$$

Let us apply this to our current situation. For the last bit, note the $N=\sum_i n_i$. 

$$
\begin{align*}
\ln(W) &= \ln(\frac{N!}{n_0!n_1!\ldots}) \\
&= \ln(N!) - (\ln(n_0!)+\ln(n_1!)+\ldots) \\
&= \ln(N!) - \sum_i \ln(n_i!) \\
&\approx (N\ln(N)-N) - \sum_i \left( n_i\ln(n_i)-n_i \right)\\
&\approx N\ln(N) - \sum_i \left( n_i\ln(n_i) \right) +\sum_i (n_i) - N\\
&\approx N\ln(N) - \sum_i \left( n_i\ln(n_i) \right)\\
\end{align*}
$$

We can then pass this approximation into our calculation of _Boltzmann entropy_.

$$
\begin{align*}
S &= k_B \ln(W)\\
&\approx k_B N\ln(N) - \sum_i \left( n_i\ln(n_i) \right)\\
&\approx  k_B \ln(N)\sum_i n_i - \sum_i \left( n_i\ln(n_i) \right)\\
&\approx  k_B \sum_i \left( n_i\ln(N) - n_i\ln(n_i) \right)\\
&\approx  k_B \sum_i \left( n_i(\ln(N) - \ln(n_i) \right)\\
&\approx  k_B \sum_i \left( n_i\ln(\frac{N}{n_i})\right)\\
&\approx  -k_B \sum_i \left( n_i\ln(\frac{n_i}{N})\right)\\
&\approx  -\frac{N}{N}k_B \sum_i \left( n_i\ln(\frac{n_i}{N})\right)\\
&\approx  -Nk_B \sum_i \left( p_i\ln(p_i)\right)\\
\end{align*}
$$

where $p_i=n_i / N$ is the fraction of molecules in state $i$ or the probability that the molecule is in state $i$. 

### Shannon Entropy

p. 139

Claude Shannon introduced the term entropy to describe the minimum encoding size necessary to send a message without data loss. It has 2 components
+ What is maximal compression rate we can achieve to transmit the information?
+ What is the technical implementation and maximal capacity of a transmission channel?

We will focus now on the first part, as it relates to entropy. 

In information theory, we are concerned with the amount of information that we can obtain from a system and the information content of some event $A$ is defined

$$
I(A) = - \log_2(p(A)) = \log_2\left(\frac{1}{p(A)}\right)
$$

where $p(A)$ is the probability that event $A$ occurs. 

$p(A)=1$ is an extreme case where an event always occurs and no further information is added. 

Also, information due to independent events is additive: $I(A_1\cap A_2)=I(A_1) + I(A_2)$. 

Now we look at a larger system that is described by some discrete variable $X$ that can take values $\{ x_1, x_2, \ldots, x_n \}$ according to probability distribution $p(X)$. The **Shannon Entropy** is defined as the average information content of an outcome

$$
\begin{align}
H &= E[I(X)]=E[-\log_2(p(X))]\\
&= - \sum p(x_i)\log_2(p(x_i))
\end{align}
$$

Of course, where $E[X]$ represents the expected value of a random variable. 

Now, consider a probability density function (continuous) instead of our discrete probability distribution function. From probability theory, we rewrite the equation as

$$
\begin{align}
H(x) &= E[I(X)]=E[-\log_2(p(X))]\\
&= - \int p(x_i)\log_2(p(x_i)) dx
\end{align}
$$

**EXAMPLE**

Calculate the entropy of a coin toss. Since the coin is _fair_, we have

$$
\begin{align*}
H &= E[I(X)]=E[-\log_2(p(X))]\\
&= - \sum p(x_i)\log_2(p(x_i))\\
&= - \sum_{i=1}^2 \frac{1}{2}\log_2\left(\frac{1}{2}\right)\\
&= - \left( \frac{1}{2}\log_2\left(\frac{1}{2}\right) + \frac{1}{2}\log_2\left(\frac{1}{2}\right)\right)\\
&= - \left( (-\frac{1}{2})+ (-\frac{1}{2})\right)\\
&= 1
\end{align*}
$$

So, we need one bit per coin toss to encode the resulting information, if heads or tails comes up. Apparently the entropy is _maximal_ as we cannot predict the outcome of the next coin toss from what we have observed so far. 

**EXAMPLE**

Can we calculate the Shannon Entropy of the string "00100010"?

Our system has 2 states, either zero or one. Of the 8 characters, we have 6-zeros and 2-ones. We can say

$$
p(x_i) = \left\{ 
\begin{array}{lr}
x_i = 0 & \frac{6}{8}=\frac{3}{4}\\
x_i=1 & \frac{2}{8}=\frac{1}{4}\\
\end{array}
\right.
$$

Then, we plug and chug

$$
\begin{align*}
H &= E[I(X)]=E[-\log_2(p(X))]\\
&= - \sum p(x_i)\log_2(p(x_i))\\
&= - \sum_{i=0}^1 p(x_i)\log_2(p(x_i))\\
&= -\left( p(x_0)\log_2(p(x_0))+p(x_1)\log_2(p(x_1)) \right)\\
&= - \left( \frac{3}{4}\log_2(\frac{3}{4})+\frac{1}{4}\log_2(\frac{1}{4}) \right)\\
&= - \left( \frac{3}{4}(-0.415)+\frac{1}{4}(-2) \right)\\
&= 0.811
\end{align*}
$$

Because the zero occurs more frequently than the one, the entropy drops below 1bits. 

### The Kullback-Leibler Divergence

p. 141

Entropy can be used to compare probability distributions. As we dive into probability distributions, there's a discrete and continuous part to our topics now. The _relative entropy_, or the **Kullback_Leibler (KL) Divergence** between $p(x)$ and $q(x)$ is

Discrete:

$$
D_{KL}(p \| q)=\sum p(x) \log_2\left( \frac{p(x_i)}{q(x_i)} \right)
$$

Continuous:

$$
D_{KL}(p \| q)=\int p(x) \log_2\left( \frac{p(x_i)}{q(x_i)} \right) dx
$$

It satisfies _Gibb's Inequality_

$$
D_KL(p \| q) \ge 0
$$

It is a measure of how different two distributions are over the same random variable.

Note that $D_KL =0 \iff p(x) = q(x)$. 

## 6.4 Cross Entropy

p. 142
