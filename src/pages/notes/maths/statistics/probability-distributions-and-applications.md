---
layout: '@layouts/NotesLayout.astro'
title: 'Probability Distributions and Their Applications'
pubDate: 2023-12-26
description: 'Introduction to important probability distributions and their applications.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 3: Important Probability Distributions and Their Applications

Our learning objectives are as follows:
+ Identify the most important probability distributions.
+ Discuss practical applications of these distributions
+ Understand the key characteristics of each distribution. 

## Introduction

p. 68

A _deterministic system_ is like a series of events where we can calculate the outcome with great certainty. Thinking like trajectories in physics, a catapult launching a melon could be a deterministic system. 

However, like adding aerodynamics to the melon example, even a simple system can become complex quickly. A coin toss, could be determined given force of the flip, placement of the force, duration force is exerted on coin, height of flip, etc... but with the ever growing number of variable needing to be known we end up more of a _random system_. 

More examples include how many customers enter a shop in an hour, or when a component will fail. These could be determined given enough information, but that information is nearly impossible to obtain. So, we gather what information we can about the system, studying events and outcomes, to find if they follow a **pattern**. This means the occurrence of events is not fully random.

We mean that given some information, we can match to a probability distribution and the provide a suite of outcomes and associate probabilities. We cannot provide exact numbers, like exactly when a component will fail, but the probability of something, like 95% chance of failure within the next 100 hours. 

We can describe the distributions in terms of their descriptive statistics such as expected value and variance. 

A formal description is, we say that a given system or specific events are described by a random variable $x$ that follows a specific probability distribution and the values of the random variable represents measurable outcomes. 

## 3.1 - Binomial and Negative Binomial Distribution

p. 68 

### Bernoulli Trials

The book gives a few examples, including the _A/B testing_. A **Bernoulli trial** is basically an event that has 2 outcomes. For the A/B testing example, a user visits a web page and are served either one of two versions. It is then assessed later which is more successful at generating revenue. 

This makes probabilities quite simple. If outcome $A$ is $P(A)=p$, then outcome $B$ is $P(B)=q=1-p$. 

When a random variable $X$ describes a Bernoulli trial, we generally write $X \sim B(p)$.

### Permutation and Combination

This is not in course book. At some point before this, probably in a discussion of Set Theory in an introductory probability course (Usually taught at the beginning), one learns counting rules. Check out the following book perhaps. 

```yaml
title: Introduction to Mathematical Statistics
edition: 8
authors:
	- Robert V. Hogg
	- Joseph W. McKean
	- Allen T. Craig
date: 2019
publisher: Pearson
```

To set the stage, we let $A$ be a set with $n$ elements. We are interested in $k$-tuples whose components are elements of $A$. 

A **permutation** is each such $k$-tuple. It has many notations, the book uses the following:

$$
P_k^n = n(n-1)\cdots(n-(k-1)) = \frac{n!}{(n-k)!}
$$

The book covers a well known _Birthday Problem_ where you calculate the probability that a given the number of people in a room, at least 2 people have the same birthday. 

A **combination** is:

$$
{n \choose k} = \frac{n!}{k!(n-k)!}
$$

Basically, the events of permutations are considered distinct from each other where they are not distinct in a combination. A hand of cards might be a good example. If you draw 3 cards and want Ace, King, Queen, in that order, you would be more along the line of permutation. However, if you just wanted Ace, King, Queen in any order, that is combination. 

$$
\begin{array}{ccc}
	4/52 & 4/52 & 4/52\\
	\text{Ace} & \text{King} & \text{Queen}
\end{array}
$$

Or

$$
\begin{array}{ccc}
	12/52 & 8/52 & 4/52\\
	\text{first} & \text{second} & \text{third}
\end{array}
$$

Just an example of why the probabilities would be different. Not my best work but also not the focus of this section.

If you expand the binomial series:

$$
(a+b)^n = (a+b)\cdots(a+b) = \sum_{k=0}^n{n \choose k}a^kb^{n-k}
$$

This interesting property is why sometimes it is referred to as the **binomial coefficient**.

### Binomial Distribution

p. 69

The **Binomial Distribution** describes the general outcomes of performing $n$ _independent_ Bernoulli trials. This implies that the result does not depend on the sequence of previous observations. 

The random variable $X$ then describes the probability that we observe event $A$, which is the _success_ $m$ times in our $n$ trials. $X$ is a discrete random variable taking on values $\lbrace 0, 1, 2, \dots,n \rbrace$. We then have $X$ successes, or occurrences of event $A$, and $n-X$ failures, or event $B$. 

We let $P(A)=p$ and $P(B)=q=1-p$. The overall probability is given by $p^xq^{n-x}$ because they are independent events. 

Let's look at a small set of just 5 events. Of these 5 events, we want 2 successes, just so we need to do a little bit of math. Given the events of $A$ and $B$ to represent success and failure, one possible outcome could be $AABBB$, and another $BBBAA$, or $BABAB$, etc... 

We have:

$$
\begin{align*}
n, k &= 5,2\\
n!, k! &= 120,2\\
(n-k)! &= 3! = 6\\
P^5_2 &= \frac{n!}{(n-k)!} = \frac{120}{6} = 20
\end{align*}
$$

So, there are 20 unique combinations. However, we would consider $AABBB$ to be the same as $BABAB$. Both have 3 failures and 2 successes. This would be how our probability in the distribution is set up. Therefore, we go from **Permutation** to **Combination**:

$$
\begin{align*}
{n \choose k} &= \frac{n!}{k!(n-k)!} = \frac{P^n_k}{k!}\\
{5 \choose 2} &= P^5_2/2! = \frac{20}{2} =10
\end{align*}
$$

In the context of our situation, we have 10 uniquely different combinations. The binomial distribution does not care about the order in which success and failures occur. It's goal is to describe the probability of observing $k$ "successes" in $n$ trials, where $p$ is the probability of observing a "success". The distribution is given as follows:

$$
X \sim B(n,p) \Longleftrightarrow P(X=k) = {n \choose k}p^kq^{n-k}
$$

You can continue the example yourself, giving reasonable values for success and failure. 

The expected value is given by:

$$
\begin{align*}
E[X] &= \sum_{k=0}^nkP(k)\\
&= np
\end{align*}
$$

In this situation, $x_k=k$, being the number of successes, which is why it is written this way I think. This is kind of intuitive, being the probability of success times the number you want. 

The variance is given by:

$$
\begin{align*}
\text{Var}(X) &= npq
\end{align*}
$$

You can check out [Binomial Distribution | Wiki](https://en.wikipedia.org/wiki/Binomial_distribution) for proofs I think, and just more information. 

The following _recurrence formula_ is helpful in practical applications:

$$
P(X = k + 1) = \frac{p}{1-p} {n-k \choose k+1}P(X=k)
$$

### Negative Binomial Distribution

The [Negative Binomial Distribution | Wiki](https://en.wikipedia.org/wiki/Negative_binomial_distribution) predicts the number of failures in a sequence of independent and identically distributed _Bernoulli trials_ before a specified (non-random) number of successes occurs. Example could be rolling die, a success is rolling the number one, and we want to roll two of them. The probability distribution is thus the number of failures that will occur before our success, and their associated probability of occurring. 

The question is "What is the probability of only $n$ failures before we observe the $k^{th}$ success?" The **Negative Binomial Distribution** is given by:

$$
M \sim NB(k,p) \Longleftrightarrow P(M=m) = {m+k-1 \choose k-1}p^k(1-p)^m
$$

where $m$ is the number of failures before the $k^{th}$ success and $p$ is the probability to observe a success. 

The mean is given by:

$$
E[M] = \frac{k(1-p)}{p}
$$

And the variance is given by:

$$
V[M] = \frac{k(1-p)}{p^2}
$$

## 3.2 - Gaussian or Normal Distribution

p. 72

Author refers to "The Evolution of the Normal Distribution" in _Mathematics magazine_ by S. Stahl (2006) for a deeper historical dive into the normal distribution. A normal random variable $X$ for $x \in (-\infty, \infty)$ has PDF:

$$
f(x) = \frac{1}{\sqrt{(2 \pi \sigma^2)}}\text{exp}
\left( {\frac{-(x-\mu)^2}{2\sigma^2}} \right)
$$

where $\text{exp}(x) = e^x$, written only to better view the exponent. The density only depends on $\mu$ and $\sigma^2$, the mean and the variance. 

Setting $\mu=0,\ \sigma^2=1$ gives the **standard normal distribution**. 

Notation for the normal distribution is often indicated with:

$$
\mathcal{N} (\mu, \sigma^2)
$$

Some texts may refer to the standard deviation which can indeed make some notations confusing. I will do my best to use the variance when possible for consistency and because variance comes before standard deviation. 

### Law of Large Numbers

The [Law of Large Numbers | Wiki](https://en.wikipedia.org/wiki/Law_of_large_numbers) is a theorem that the average of the results obtained from a large number of _independent_ and identical random samples converges to the true value, if it exists. That is, the sample mean converges to the true mean. This guarantees stable long-term results for the averages of some random events. 

The LLN only applies to the _average_ of the results obtained from repeated trials and claims that this average converges to the expected value. It **does not** claim that the sum of $n$ results gets close to the expected values times $n$ as $n$ increases. 

Distributions such as the Cauchy distribution have problems converging as $n$ becomes larger because of _heavy tails_. 

Mathematically we have something like, the sample average:

$$
\overline{X}_n = {1 \over n} (X_1+\cdots+X_n)
$$

converges to the expected value:

$$
\begin{array}{ccc}
\overline X_n \to \mu & \text{as} & n \to \infty
\end{array}
$$

Also, for _identical finite variance_, $\text{Var}(X_i)=\sigma^2$, and **no** correlation between random variables, the variance of the average of $n$ random variables is:

$$
\begin{align*}
\text{Var}(\overline X_n) &= \text{Var}({1 \over n}(X_1 + \cdots + X_n))\\
&= {1 \over n^2}\text{Var}(X_1 + \cdots + X_n)\\
&= {n\sigma^2 \over n^2}\\
&= {\sigma^2 \over n}
\end{align*}
$$

Variance is a very fun topic. 

There is a strong law and a weak law. You can read about them online. 

### Central Limit Theorem

The normal distribution is very important to the [Central Limit Theorem | Wiki](https://en.wikipedia.org/wiki/Central_limit_theorem). The Wiki page provides a proof that spans over a good portion of mathematics from characteristic functions and little "o" notation to Taylor's theorem. 

Also check out the book referenced earlier, section 5.3.

**Theorem - Central Limit Theorem**: Let $X_1, X_2, \dots, X_n$ be observations of a random sample from a distribution that has mean $\mu$ and _positive_ variance $\sigma^2$. Create random variable $Y_n$:

$$
\begin{align*}
Y_n &= \frac{\sum_{i=1}^{n}(X_i-n\mu)}{\sqrt{(n\sigma^2)}}\\
&= \left({\sqrt n \over \sqrt n}\right) \frac{\sum_{i=1}^{n}(X_i-n\mu)}{\sqrt{(n\sigma^2)}}\\
&= (\sqrt n) \frac{\sum_{i=1}^{n}(X_i)- n^2 \mu}
{n\sigma}\\
&= (\sqrt n) \left( \frac{\sum_{i=1}^{n}(X_i)}
{n\sigma} - \frac{n^2 \mu}
{n\sigma} \right)\\
&= (\sqrt n) \left( \frac{ \overline X_i}
{\sigma} - \frac{n \mu}
{\sigma} \right)\\
&= (\sqrt n) \left( \frac{ \overline X_i - n \mu}
{\sigma} \right)\\
\end{align*}
$$

This random variable _converges_ in distribution to a random varialbe that has a normal distribution with $\mu=0,\ \sigma^2=1$. 

The book "Introduction to Mathematical Statistics", section 5.3, also provides a proof using moment generating functions. 

The course book states that a probability distribution being the sum $W = \sum_{i=1}^n X_i$ of $n$ independent random variables $X_i$ that follow some probability distribution with mean and variance $\mu$ and $\sigma^2$; it will converge towards a normal distribution with $\mu=E[W]=nE[X]$ and $\text{Var}[W]=n\sigma^2_X$. That means the standard deviation is a factor of the square root of $n$. 

Additionally, the random variables $X_i$ are generally required to be identically and independently distributed. 

The book refers to the _Galton Board_, sometimes called a "bean machine". Each bean, as it fall through the machine, goes through many **Bernoulli trials**, an experiment with two distinct outcomes. This is repeated many times for many beans, creating a normal distribution. 

> Because of its enormous importance in practical applications, we typically assume a normal distribution when we report measured or determined values as well as a dispersion relation. 

Deviations are as follows for a normal distribution

$$
\begin{array}{lr}
|x-\mu| \ge \sigma & 31.74\%\\
|x-\mu| \ge 2\sigma & 4.55\%\\
|x-\mu| \ge 3\sigma & 0.27\%\\
\end{array}
$$

## 3.3 - Poisson, Gamma-Poisson and Exponential Distribution

p. 76

We will now consider questions like, how many lightning bolts will strike the ground in a given area? Which amount of a specific product will be sold on any given day at a specific store location? The idea is a random count over some given dimension, be it area, location, possibly time, etc...

### Poisson Distribution

I was looking at [Poisson Distribution | LibreTexts](https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Introductory_Statistics_(OpenStax)/04%3A_Discrete_Random_Variables/4.07%3A_Poisson_Distribution) initially, a good resource. 

[Poisson Distribution | Statology](https://www.statology.org/poisson-distribution/) also appears to be a nice recourse. 

The Poisson distribution describes the count data for a fully random process. Popular for modelling the number of times an event occurs in an interval of time or space. Like shoppers buying items or entering a store. 

It is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space. The distribution, written $X \sim P(\lambda)$ is defined as:

$$
P(X=k) = \frac{\lambda^ke^{-\lambda}}{k!}
$$

Where $k$ is the number of events we would like to observe and $\lambda$ is the average number of events we observe per unit time. So, if you want to know customers entering store per hour, then $\lambda$ must be the average per hour. 

The Poisson distribution emerges as the limit if we take _many_ trials $n$ while keeping the mean $E[X]=\lambda=np$ fixed. 

The course book gives some examples and notes that as $\lambda$ increases, the Poisson distribution approximates a Gaussian or Normal Distribution. How do we increase lambda? You can increase the time span for events to occur. Then more events would occur and lambda would get bigger.

The course book also gives the proof that the Poisson distribution emerges as the limit of the Binomial distribution as $n \to \infty$. It is more of an approximation. 

From this approximation though, we can derive two important characteristics:
1. The Poisson probability distribution gives the probability of a number of events occurring in a **fixed interval** of time or space.
2. The Poisson distribution can be used to approximate the binomial if the probability of success is "small" and the number or trials is "large". A small success rate is $p \le 0.01$ and a large number of trials is $n \ge 1,000$. 

Another fun fact is:

$$
E[X] = \text{Var}[X] = \lambda
$$

The course book quickly covers an example of customers entering a store and noting that the variance does not quite equal the mean. This means that the assumption of a Poisson distribution does not quite hold. However, the Poisson distribution can still describe the data _reasonably well_.

Since the Central Limit Theorem is the sum of independent and identically distributed probability distributions, what is the sum of Independent Poisson random variables? The sum of independent numbers distributed according to a Poisson distribution is... a Poisson distribution! 

The book shows the proof on pp. 78-81. 

The new lambda is $\lambda = \lambda_1 + \lambda_2 + \dots + \lambda_n$. And remember that the larger the parameter lambda becomes, the closer it is to resembling a normal distribution, which we would expect from the central limit theorem.

### Gamma-Poisson Mixture Model

p. 81

The Poisson distribution has the limitation that it is not great for modelling _over-dispersed_ data where $\sigma^2 \gt \lambda$. This will require a more general approach to describe discrete count data. 

Having the parameter lambda for Poisson implies that we know the value of the mean without uncertainties. However, in practical applications, the mean itself is typically a random variable and therefore needs to be described by a probability distribution. This can be done with [Bayesian Statistics](https://en.wikipedia.org/wiki/Bayesian_statistics). This field uses the information of a sample and the prior assumption to allow you to compute the modelled distribution. 

**Definition - Conjugate Prior:** The prior is of the same family of distributions as the posterior.

The Gamma family of distribution is a _conjugate prior_ for the Poisson distribution. We will use it as a prior for the Poisson parameter $\lambda$. 

$$
\begin{array}{lcr}
X\sim \text{Poisson}(\lambda) & \text{where} & \lambda\sim\text{Gamma}(r,p)
\end{array}
$$

This is typically parameterized as Gamma

$$
\Lambda\sim\text{Gamma}(r,{p \over 1-p})
\Longleftrightarrow
P(\Lambda \lt t) = 
\int_{-\infty}^t \frac{
\left({p \over 1-p}\right)^r
}{\Gamma(r)} \lambda^{r-1} e^{-{p \over 1-p}\lambda} \ d\lambda
$$

That is a bit to take in. So, $r$ is a form parameter and the rate $p/(1-p)$ is chosen from the binomial distribution. That indicates the prior describes the total count of $r-1$ in ${p \over 1-p}$ prior observations. 

We can also express this by the following _convolution_ integral:

$$
P(\gamma \lt c \ | \ r,p) = 
\int_0^{\infty} f_{\text{Poisson}(\lambda)}(c) \cdot f_{\text{Gamma}(r,{p \over 1-p})}(\lambda) \; d\lambda
$$

The Gamma-Poisson mixture model can also be expressed as the negative binomial distribution. You start with the convolution integral above and insert the definition of the distributions. 

Let $\alpha$ be a shape parameter and $\beta$ be an inverse scale parameter:

$$
f_{\alpha, \beta}(x) = {
\beta^{\alpha}x^{\alpha-1}e^{-\beta x} 
\over
\Gamma(\alpha)
}
$$

Gamma has some fun properties. The Gamma function arises from the extension of the factorial to non-integer numbers via:

$$
x!=\int_0^{\infty}y^xe^{-y}dy
$$

And

$$
\Gamma(x+1) = x!
$$

We let $\alpha = r$ and $\beta = {1-p \over p}$ (because it is inverse), and pop those into our equations. The book does a great job pp. 82-83. It ends up with

$$
P(k \ | \ r,p) = {k+r-1 \choose k}p^kq^r
$$

This means that we can describe a Poisson-process where we treat the parameter as a random variable following a Gamma function as prior using a negative binomial distribution. We can use the following relationship between mean and variance of the distribution with the parameters of the negative-binomial distribution:

$$
\begin{align*}
p &= {\mu \over \sigma^2}\\
r &= {\mu^2 \over \sigma^2 - \mu}
\end{align*}
$$

where we assume $\sigma^2 \gt \mu$. 

### Exponential Distribution

p. 85

We have been counting events occurring in an amount of time or space. But we can flip the question and ask how long do we wait to observe the next event? This begins down the road of failure modelling and life contingencies. 

A **fixed rate** means that the rate and mean are static and connected by $\mu=\lambda t$. In that equation, we are letting $\lambda$ be the fixed rate. 

For the Poisson distribution, lambda was the mean, so we can replace that with the more expressive mean equation.  There's a good section here, [The Exponential Distribution | Stats.LibreTests](https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Introductory_Statistics_(OpenStax)/05%3A_Continuous_Random_Variables/5.04%3A_The_Exponential_Distribution), about this distribution. 

Basically, you can derive the cumulative distribution function from the Poisson like:

$$
\begin{align*}
P(k\text{ events in time }t) &= \frac{(\lambda t)^ke^{-\lambda t}}{k!}\\
P(\text{no events until time }t) &= \frac{(\lambda t)^0e^{-\lambda t}}{0!}\\
P(L \gt t) &= e^{-\lambda t}\\
P(L \le t) &= 1-e^{-\lambda t} = F(t)\\
f(t) &= \begin{array}{cc}
	\lambda e^{-\lambda t} & t\gt 0\\
	\end{array}
\end{align*}
$$

We let $P(L \gt t)$ mean the probability that the time it takes for one event to occur is greater than $t$. Sorry to throw a Random variable (pun intended) into the mix half way through. 

Exponential distribution has a fun _memoryless_ property. If you wait some time for an event to occur and it does not occur, then you check the probability again, it will not change. Something like:

$$
P(X \ge x + y \ | \ X \ge x) = P(X \ge y)
$$

The "Introduction to Mathematical Statistics" book leaves 2 cases of this property to the reader to solve. Good luck. 
## 3.4 - Weibull Distribution

p. 87

The exponential distribution describes when it is most likely that the next event occurs. Looking at the density function though, you'll see that the absolute most likely moment for the next event is always "now". This is because the exponential distribution falls _monotonously_. This is not always desired. 

The **Weibull Distribution** was originally developed in the context of materials science to describe failure of materials under stress. It has many other applications. It is given by:

$$
P(X=x; \lambda,k) = \begin{cases}
{k \over \lambda}({x \over \lambda})^{k-1}e^{(x/\lambda)^k} & x \ge 0\\
0 & x\lt 0
\end{cases}
$$

where $k\gt 0$ is the "shape" parameter or the **Weibull modulus**. In the case that $k=1$, the Weibull distribution reduces to the _exponential distribution_! There are 3 different _regimes_ for the shape parameter $k$:
+ $k \lt 1$:  failure rate decreases with time, meaning that most failures occur early on ("infant mortality").
+ $k = 1$: The Weibull distribution becomes the exponential distribution. Failures occur randomly with a fixed rate over time. 
+ $k \gt 1$: Failure rate increases with time. This means that there are few to no failures early on but then failures occur at later times. For example, due to aging. 

The distribution becomes more symmetric and localized for values $k \gg 1$, much greater than. The course book shows graphs where even for $k=5$ it begins looking more symmetric. 

For predictive maintenance, we can use observational data from the component to predict the parameters of the Weibull distribution. We could then define a threshold where the risk of failure is acceptable and schedule the maintenance once the probability of failure approaches this threshold. 

## 3.5 - Transformed Random Variables

The new question is centred around **multivariate random variables**. The book "Introduction to Mathematical Statistics" designates Chapter 2 to Multivariate Distributions. They start with basic coin flip example. 

**Definition - Random Vector:** given a random experiment with a sample space $\mathcal C$, consider two random variables $X_1$ and $X_2$, which assign to each element $c$ of $\mathcal C$ one and only one ordered pair, $(X_1(c), X_2(c))$. The ordered pair is the **random vector** and lives in the **space**, or set of ordered pairs, $\mathcal D = \lbrace (x_1,x_2)\ : \ x_1=X_1(c), x_2=X_2(c), c \in \mathcal C \rbrace$. 

The course book looks at 2 Gamma distributions $X \sim \Gamma(2,5)$ and $Y \sim \Gamma(2,5)$. What can we then say about $T=X-Y$? 

We can say that $T$ is also a random variable that maps sample space to some real numbers $T:S\to R$, with any real values. We can also compute the density of $T$ provided the following general theorem that requires to reason over multivariate random variables. 

### Transformed Variables

Need to lay down some of the ground work. 

A **multivariate continuous random variable** is a _mapping_ from the sample space $S$ to the set of vectors in $\mathbb R^n: X:S \to \mathbb R^n$.  

Let $\mathcal D$ be the set of possible values of $X(s)$. So, in the above, we have that $X$ is like a function that takes in $s \in S$ and maps to $d \in \mathcal D$ now. Something like in our Gamma example, $\mathcal D$ is the set of $(x,y)$ where both $x,y \gt 0$. 

Now, suppose we have a mapping $g:\mathcal D \to E$  where $E$ is a subset of $\mathbb R^n$. It is like we have another function $g(d)$ that takes in elements of $\mathcal D$, which are themselves functions of $X(s)$. We have then $g(X(s))$, often written as $g \circ X$ or $g(X)$.  

The course book continues that it is the same as having a series of continuous random variables, expressed as $X_i(0 \le i \le n)$ and a series of functions $g_i:\mathbb R^n \to \mathbb R$. Consider:

$$
g(X)(s) = \left(
\enspace g_1(X_1(s),\dots,X_n(s))
\enspace, \dots,
\enspace g_n(X_1(s),\dots,X_n(s))\enspace
\right)
$$

I added spaces to hopefully clarify what is encapsulated. For the two Gamma random variables example, we'd have that $X_1=X$ and $X_2=Y$. Then, we can take, as transformation the mapping $g(x,y)=\left( x-y, x+y \right)$ from $\mathcal D = \mathbb R^+ \times \mathbb R^+$. 

Now suppose that $g()$ is _differentiable transformation_. This means that $g_i(x_1,\dots, x_n)$ is differentiable, that ${\partial g_i \over \partial x_j}$ exists for each $0\le i,\ j\le n$. We also suppose that the inverse $g^{-1}:E \to \mathcal D$ of $g$ also exists. We can then have the following transformation theorem, proven in "Introduction to Mathematical Statistics" book by Hogg:

+ g(X) is a continuous random variable.
+ if $X$ has a probability density function $f_X: \mathcal D \to \mathbb R$, then the _pdf_ of $g(X)$, noted, $f_{g(X)}$ is as follows: $\forall e \in E$:

$$
f_{g(X)}(e) = f_X(g^{-1}(e))\cdot |J_{g^{-1}}(e)|
$$

$J_{g^{-1}}(e)$ is the Jacobian of the transformation $g^{-1}$ and is non-zero at least in on $e$. I think I have notes from the Advanced Maths course, but the **Jacobian** is the determinant of the matrix of each partial derivative of $g^{-1}$. 

The _transformation theorem_ allows us to calculate the probability density function of a transformed random variable allows us to calculate the probability density function of a transformed random variable by combining the density with the inverse of the transformation and multiplying by the Jacobian of the inverse of the transformation. 

Example of $T=X-Y$ provided on pp. 91-93. 

