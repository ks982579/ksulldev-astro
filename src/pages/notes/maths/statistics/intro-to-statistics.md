---
layout: '@layouts/NotesLayout.astro'
title: 'Introduction to Statistics'
pubDate: 2023-11-20
description: 'A gentle or abrupt introduction into the great world of statistics'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "kolmogorov"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 1: Introduction to Statistics

p. 11 - 42

Learning goals include:
+ Understanding fundamental aspects of statistics
+ Identify Kolmogorov Axioms
+ Discuss problems of dimensionality
+ Grasp principal component and linear discriminant analysis

## Introduction 

Statistics as a science is the science of collecting, presenting, analysing, and interpreting facts and data. This sounds a bit like Data Science.

Statistics can also be the plural for statistic, which is a single measure of a sample. More about this later. 

What are the two main branches that Statistics as a science are commonly subdivided into?
+ Descriptive Statistics
	+ Comprised of presenting and analysing observed data. 
	+ This statistics strictly limits itself to data collected from a specific group of observed units (such as people).
	+ Not assumed that data come from a larger population, nor is any inference made about non-observed data.
+ Inferential Statistics
	+ Data from a subset of a population (aka sample) is used to estimate corresponding data of a larger population using statistical methods. 
	+ Estimates take the form of points or intervals. 

How do we bridge the two branches of statistics, descriptive and inferential statistics?
+ Through the theory of probability

What is a "population" in the context of statistics?
+ A [population | Investopedia](https://www.investopedia.com/terms/p/population.asp) in statistics is "the pool of individuals from which a statistical sample is drawn for a study."
+ It would be the whole, every element that could be included in your analysis. 
+ You can also think of future data elements as being part of your population, like children not yet born, and therefore we can only take samples in our current present. 

What does the term "measurement" mean in statistics?
+ A general observation, such as colour of an object or quality of hotel service. 

Not everything can be measured the same way. Therefore, there are several different _levels_ of measurement. What are four commonly used levels of measurement?
+ Nominal Scale
	+ Labels are assigned to denote the possible values of objects.
	+ It is not meaningful to sort nominally scaled objects by value. For example, you cannot sort hair colour in ascending order. You can only sort alphabetically. 
+ Ordinal Scale
	+ Categorical objects that _can_ be arranged in order, like a rating.
	+ Typically denoted as labels, but can also be numerical values. 
	+ Inherent problem is that the difference between two values is not well-defined. Even if using numerical values, calculating the differences and ratios is not appropriate.
	+ Example being like "great, good, ok, bad, awful". These have inherent order.
+ Interval Scale
	+ Distance between individual units are equal. 
	+ Note that the value 0 can be just another possible value because both negative and positive values are possible. This means $+5\degree C$ is **not** twice as hot as $-5\degree C$. 
+ Ratio Scale
	+ Similar to the interval scale, but 0 is the absolute lowest value possible. With this property, we can make statements like this is twice as long as that.
	+ Typical examples include length, mass, weight. 

## 1.1 - Probability Theory

I image one day, in the far future, if I revisit these notes I would separate probability from statistics as they are actually 2 different fields of study. 

What is probability theory generally concerned with?
+ It is generally concerned with events whose outcomes are uncertain. 

What is the difference between deterministic and random events?
+ Deterministic events are certain to happen with 100% probability.
+ Random events live in a pool of other possible outcome, each with probability of happening between 0% and 100% exclusively. 

What is a **random experiment**?
+ An experiment for which the outcome cannot be predicted with certainty. 
+ Examples include a coin toss or roll of dice. 

What is a **sample space**?
+ The set of all possible outcomes of a random experiment.
+ denoted by $S$.

What is a **set**?
+ It is a defined collection of distinct elements. 
+ Order of elements within a set does not matter. 
+ _Probability measure_ $P$ assigns probabilities to events, each with 0 or more outcomes. 

What is an **event**?
+ [According to Wikipedia](https://en.wikipedia.org/wiki/Event_(probability_theory)) it is a set of outcomes of an experiment to which a probability is assigned. 
+ It is a subset of the sample space. 

What is an **outcome**?
+ [According to Wiki](https://en.wikipedia.org/wiki/Outcome_(probability)), it is a possible result of an experiment or trial. 

What are the two _extreme_ events?
+ An impossible event has a probability of 0.
+ An absolutely certain event has a probability of 1. 

What is a **random variable**?
+ A variable whose value depends on the outcome of a random experiment.
+ A function that assigns a unique numerical value to the outcome of a random experiment. 
+ It can be discrete or continuous. 

What is the **Expectation value** (aka: expected value)?
+ For a discrete random variable, it is the probability-weighted mean of all its possible values. 
+ For a continuous random variable, it is the integrand of the random variable with respect to its probability.
+ Basically, a sum of the product of value multiplied by probability. 

What is the **union** of 2 events?
+ For events $A$ and $B$, it is the combination of all elements in $A$ and in $B$, including their intersection. 
+ Denoted $A \cup B$. 

What is the **intersection** of 2 events?
+ For events $A$ and $B$, it consists only of elements that are common to both $A$ and $B$. 
+ Denoted $A \cap B$. 

What do we mean when 2 events are **mutually exclusive** (aka: disjoint)?
+ [According to wiki](https://en.wikipedia.org/wiki/Mutual_exclusivity), this means that the two events cannot occur at the same time.
+ In mathematical terminology, this means that the events do not intersect, or that $A \cap B = \emptyset$.

There are other things, like the empty set is a set with no elements. It's like set theory 0. We say $\bar A$ is the complement of $A$, which consists of all outcomes in the sample space $S$ that are not in $A$. You may also see it as $A^c$. 

What are some fun properties?

$$
\begin{align*}
\emptyset &= A \cap \bar A \\
S &= A \cup \bar A
\end{align*}
$$

We use $x \in A$ to say element $x$ is contained in the event $A$. Also, $S \subset A$ means that all elements in sample space $S$ are contained in event $A$. We use $S \subseteq A$ for subset or equal. If you see $|A|$, that is the count of elements in an Event. 

A popular way to visualize sets of events is with a Ven diagram, introduced by John Venn in the 19th century. The book provides examples on page 16. Spend time learning Venn diagrams if you are unfamiliar. 

## 1.2 - Kolmogorov Axioms

In 1956, Andrey Kolmogorov introduced 5 axioms that became central to probability theory. They are commonly reduced to 3 axioms you need to remember. 

What are Kolmogorov's 3 Axioms?
+ Positivity
	+ Probability $P$ of an event $E$ is a non-negative real number
	+ $P(E) \ge 0,\, P(E) \in \mathbb{R}$  
+ Normalization
	+ Probability that at least one event of a sample space $\mathcal{S}$ occurs is 1
	+ $P(\mathcal{S}) = 1\mathcal{S}$   
+ Additivity
	+ If 2 events $A$ and $B$ are mutually exclusive then the probability of either $A$ or $B$ occurring is the sum of $A$ and $B$. 
	+ $P(A+B) = P(A)+P(B)$
	+ Applies to sequence of mutually exclusive events as well. 

Remember, _mutually exclusive_ just means that $A$ and $B$ have no elements in common. So if one event happens, the other cannot. 

If two events are not mutually exclusive, how do we add them?

$$
P(A+B)=P(A)+P(B)-P(A \cap B)
$$

That is, we add $A$ and the part that intersects $B$, with $B$ and the part that intersects $A$. If that sounds confusing, it is because we essentially added the intersection of the two events twice, which is why we remove it. We also use the same logic when we added mutually exclusive events. But in this niche case, the intersection of $A$ and $B$ is 0. 

### Conditional Probability

How is conditional probability different than regular probability?
+ It incorporates the knowledge that the occurrence of one event may give _more_ information about the assessment of a current event. 

How do we define conditional probability mathematically?

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

Also, $P(A|B)$ is said "The probability of A given B." I have also realized we are discussing conditional probability without having defined the simpler case of independence first. 

What is meant when we say that two events are independent?
+ [Independence | Wiki](https://en.wikipedia.org/wiki/Independence_(probability_theory)) means that the occurrence of one event has no affect on the probability the other will occur. 
+ Other names might be "statistically independent", or "Stochastically independent". 
+ Notation include: $A \perp B$... and same but with 2 vertical line. Can't find symbol though.

How is independence represented mathematically?

$$
P(A \cap B) = P(A) \times P(B)
$$

Simple multiplication for the probability of both events occurring. If it is anything but this, it's indicative that the events have some dependence.

What happens to conditional probability if events $A$ and $B$ are independent?

Based on the above, you would have

$$
\begin{align*}
P(A|B)&=\frac{P(A\cap B)}{P(B)}\\
&= \frac{P(A)P(B)}{P(B)}\\
&= P(A)
\end{align*}
$$

This is a good explanation of above and I will walk through this logically (hopefully). If events $A$ and $B$ are independent, then $P(A|B) = P(A)$. That is, the probability of event $A$ happening given event $B$ has happened, is still just $P(A)$, because there's no dependence on event $B$. 

Therefore, in this sort of backwards logical way:

$$
\begin{align*}
P(A|B)&=P(A)=\frac{P(A\cap B)}{P(B)}\\
P(A \cap B) &= P(A)P(B)
\end{align*}
$$

A sticking point for me is independence and mutual exclusivity. 

What is the difference between two event being independent and two events being mutually exclusive?
+ If two events are mutually exclusive then: $P(A \cap B) = \emptyset$.
+ If two events are independent then: $P(A \cap B)=P(A)P(B)$
+ Mutually exclusive could imply dependence if the events individually have positive probability. We would say something like if event $A$ occurs then $B$ cannot occur, outlining their dependence. 

What is the **total law of probabilities**?

Bare with me... the [Law of Total Probability | wiki](https://en.wikipedia.org/wiki/Law_of_total_probability) is a theorem that allows us to decompose a probability of an event $A$ into its constituents. It is a _fundamental rule_ for relating marginal (subset) probabilities to conditional probabilities and expresses the total probability of an outcome as several distinct events.

$$
\begin{align*}
P(A) &= \sum_n (A \cap B_n)\\
&= \sum_n P(A|B_n)P(B_n)
\end{align*}
$$

It's like a weighted average. Because of this, the marginal probability $P(A)$ may be called the "average probability". 

Consider and example of trying to determine probability of a machine failing. It can be expressed as a sum of probabilities for each way the machine can fail. 

The course book covers an example on p. 22 that also covers formulas for _sensitivity_ and _specificity_. Sensitivity is, did we catch all the positive cases? This is important in medical testing. 

What are Type I and Type II errors?
+ Type I error is a _false positive_.
+ Type II error is a _false negative_. 

## 1.3 - Probability Distributions

What is **set theory**?
+ [Set Theory | Wiki](https://en.wikipedia.org/wiki/Set_theory) is a branch of mathematics that studies sets!
+ A set can be thought of as a collection of objects. 

What is a _mapping_ between two sets, $A$ and $B$? 
+ Apparently denoted $(a,\ b)$ with exactly one pair for each $a$. 
+ One says $a$ is mapped / associated / in a relation to $b$. 
+ Also denoted with small _Roman_ letter to look more like $f(a) = b$. 
+ You may see $f(x)=x^2$ with context that $f:\mathbb{R} \to \mathbb{R}$ conveying additional information. 
+ Random variables (aka distributions) may look like $X:S \to \mathbb{R}$ 
	+ This article about [Numbers | Wiki](https://en.wikipedia.org/wiki/Number) doesn't list $S$, so assuming that just represents the random variable. 

How do we characterize a _discrete_ probability distribution?
+ with the probability mass function.

What does a **probability mass function** do?
+ It assigns a probability to each possible value.
+ $P(X=x)=f_X(X)$

How do we characterize a _continuous_ probability distribution?
+ with the [probability density function](https://en.wikipedia.org/wiki/Probability_density_function). 

What does a **probability density function** do?
+ A function whose value at any given point in the sample space can be interpreted as providing a _relative likelihood_ that the value of the random variable would be equal to that sample. It is probability per unit length. 
+ $P(X=x)=f_X(X)=0$ because the length would be 0. 

How can we derive probabilities from the PDF?
+ By taking the integral of the PDF over a particular range, you derive more meaningful probabilities. 
+ This is the **cumulative distribution function** $P(X \le x)$. 

What is the mathematical definition of cumulative distribution function?

$$
P(X \le x) = \int_{-\infty}^{x} f_X(t)dt = F_X(x)
$$

Often, the cumulative distribution function is denoted with a capital letter. 

Can you describe the Gaussian distribution?

Also called the Normal distribution, it is expressed in terms of its mean and standard deviation:

$$
X \textasciitilde \mathcal{N}(\mu,\sigma)
$$

And has a density distribution written as (one of a few ways):

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

You see we use lowercase $x$ variables to denote values of the random variable $X$. Sometimes you will see the random variable subscript such as $f_X(x)$. It's similar to the partial derivative subscript but not to be confused. 

Additionally, you may also have parameters of the distribution provided in the function's definition as well such as:

$$
f(x; \mu,\ \sigma) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

This make the distribution parameters explicit. I don't mind this notation.

What characteristics arise in probability distributions because of the Kolmogorov axioms?
+ Positivity
	+ Value of probability distribution is always positive semi-definite... non-negative
	+ $f_X(x) \ge 0 \; \forall \ x$
+ Normalization
	+ The probability distribution is _always_ normalized.
	+ $\sum f(x_i) =1$ for discrete probability distributions.
	+ $\int f(x)dx=1$ for continuous distributions. 

For the continuous case, probability is always assigned for a range and not a specific value because each pin point value is infinitesimally small. 

p. 26 covers important probability distributions!

Discrete:

$$
\begin{array}{ccc}
\text{Name} & \text{Notation} & \text{pmf} \\ \hline
\text{Binomial} & X\sim B(n,p) & f_X(k)= {n\choose k}p^k(1-p)^{n-k} \\
\text{Negative Binomial} & X \sim NB(r,p) & f_X(k)={(k+r-1)\choose k} p^k(1-p)^r \\
\text{Poisson} & X \sim P(\mu) & f_X(k) = \frac{\mu^ke^{-\mu}}{k!}
\end{array}
$$

Continuous:

$$
\begin{array}{ccc}
\text{Name} & \text{Notation} & \text{pdf} \\ \hline
\text{Gauss (NormaL)} & X\sim N(\mu,\sigma) & f_X(x)= \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}} \\
\text{Exponential} & X \sim Exp(\lambda) & f_X(x)=\lambda e^{-\lambda x} \\
\text{Gamma} & X \sim \Gamma(k, \theta) & f_X(x) = \frac{x^{k-1}e^{-x/\theta}}{\Gamma(k)\theta^k} \\
\text{Cauchy} & Xa \text{ Cauchy distro} & f_X=\frac{1}{\pi}\frac{1}{1+x^2}\\
\text{Student t} & T \text{ of } v \text{-degrees freedom} & f_T(t)=\frac{1}{\sqrt{\pi v}}\frac{\Gamma((v+1)/2)}{\Gamma(v/2)}\left(
1+\frac{t^2}{v}
\right)^{-(v+1)/2}\\
\text{Weibull} & X \sim W(\lambda, k) & f_X(x)=\left\lbrace
	\begin{array}{lr}
	\frac{k}{\lambda}(\frac{x}{\lambda})^{k-1}e^{-(x/\lambda)^k} & x \ge 0 \\
	0 & x \lt 0
	\end{array}
\right. \\
\end{array}
$$

Words of warning:
+ exponential PDF for $x \gt 0$

To save on space, we did not include explicit distribution parameters in the function definition, but you can find those in the notation. 

We can extend these concepts and define probability distributions for two or more random variables. 

What do we call a probability distribution that combines multiple random variables?
+ **Joint probability distribution**.

What is the notation for a joint probability distribution for random variables $X$ and $Y$?

$$
f_{X,Y}(x,y)
$$

What is a **marginal distribution**?
+ A [marginal distribution | wiki](https://en.wikipedia.org/wiki/Marginal_distribution) of a subset of a collection of random variables is the probability distributions of _only_ the variables contained in the subset.
+ For joint probability distributions, a [marginal distribution | Statology.org](https://www.statology.org/marginal-distribution/) is just the distribution of each of the individual random variables
	+ Comes with nice discrete table.
+ You can think of it as a projection of the joint distribution such that we only keep the the variation along one axis and _integrate (or sum) out_ the other RVs. 

Considering random variables $X$ and $Y$ as continuous, what are their marginal distribution functions?

$$
\begin{align*}
f_X(x)=\int_{-\infty}^{\infty} f_{X,Y}(x,y)dy\\
f_Y(y)=\int_{-\infty}^{\infty} f_{X,Y}(x,y)dx\\
\end{align*}
$$

Integrate the joint probability distribution function over the variable you are looking to exclude. The book goes on to explain how this notation can be confused with partial derivatives. To avoid confusion, we will use the fraction notation like $\partial f / \partial x$ to denote partial derivatives. 

We can extend the two-dimensional case to even more random variables! We are going to look at the [Normal Distribution | wiki](https://en.wikipedia.org/wiki/Normal_distribution), but more specifically the [Multivariate Normal Distribution | Wiki](https://en.wikipedia.org/wiki/Multivariate_normal_distribution). Unfortunately, the text cover this much but only gives an example. 

###### What is the [sum of normally distributed random variables](https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables) (independent)?

The Wiki page gives several proofs, with convolutions, Fourier transform, and Geometric proofs. However, the outcome is if $X$ and $Y$ are independent normally distributed random variables,

$$
\begin{align*}
X &\sim N(\mu_X, \sigma^2_X)\\
Y &\sim N(\mu_Y, \sigma^2_Y)\\
Z &=X+Y
\end{align*}
$$

Then,

$$
Z \sim N(\mu_X+\mu_Y, \sigma_X^2+\sigma_Y^2)
$$

Yes, the sum is also a normally distributed random variable. 

###### What is the [Law of Total Variance | Wiki](https://en.wikipedia.org/wiki/Variance)?

It goes by very many names, like variance decomposition formula, or "Eve's Law", but states that if $X$ and $Y$ are random variables on the same _probability space_, and variance of $Y$ is finite, then;

$$
Var(Y)=E[Var(Y|X)]+Var(E[Y|X])
$$

Right, this doesn't relate to our current topic but I will leave it in because why not. 

$\Box$

###### Going on about properties of [Variance | Wiki](https://en.wikipedia.org/wiki/Variance), what is [Beinaymé's Identity | Wiki](https://en.wikipedia.org/wiki/Bienaym%C3%A9%27s_identity)?

Bienaymé's identity states that:

$$
\begin{align*}
Var\left(\sum_{i=1}^n X_i\right) &= 
\sum_{i=1}^n\sum_{j=1}^n \text{Cov}(X_i,X_j)\\
&= \sum_{i,j=1}^n \text{Cov}(X_i,X_j)\\
\end{align*}
$$

The second expression is just shorthand notation for the first. An important thing to note is that the $\text{Cov}(X_i, X_i)=\text{Var}(X_i)$. So, whenever $i=j$ we are actually summing the variance of that particular random variable in the mix. This is why, if the random variables are independent, all of the covariance factors will equal zero, and we just sum the variance. 

$\Box$

###### What is [Correlation | Wiki](https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables#Correlated_random_variables)?

Correlation, or dependence, is any statistical relationship between two random variables or bivariate data. 

$$
\begin{align*}
\text{corr}(X,Y) &= \rho_{X,Y}\\
&= \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}\\
&= \frac{E[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X \sigma_Y}\\
\end{align*}
$$

for $\sigma_X \sigma_Y \gt 0$. 

$\Box$

###### What is the sum of jointly normally distributed random variables?

Ok, if we have again $X$ and $Y$ as univariate independent normally distributed random variables and their sum is $Z$, $\mu_Z=\mu_X+\mu_Y$. However, not sure if this goes as far as [Analysis of Variance | wiki](https://en.wikipedia.org/wiki/Analysis_of_variance), probably not but it's a good read. 

The answer is in [Sum of Normally Distributed Random Variables | Wiki](https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables#Correlated_random_variables). If the random variables are not independent, then we have:

$$
\sigma_{X+Y}=\sqrt{\sigma_X^2+\sigma_Y^2+2\rho \sigma_X \sigma_Y}
$$

It may seem silly to use correlation instead of covariance, but in other calculations, we may be using a [covariance matrix | wiki](https://en.wikipedia.org/wiki/Covariance_matrix). 

$\Box$

###### What is a [Multivariate Normal Distribution | Brilliant](https://brilliant.org/wiki/multivariate-normal-distribution/)?

The [Multivariate Normal Distribution | Wiki](https://en.wikipedia.org/wiki/Multivariate_normal_distribution) of a k-dimensional random vector $X=(X_1, X_2, \dots, X_k)^T$ can be written as:

$$
X \sim N_k(\mu, \Sigma)
$$

Where you have a k-dimensional mean-vector

$$
\mu=E[X]=(E[X_1], E[X_2], \dots, E[X_k])^T
$$

and a $k\times k$ covariance matrix:

$$
\Sigma_{i,j}=E[(X_i-\mu_i)(X_j-\mu_j)] = \text{Cov}[X_i,X_j]
$$

The course book continues to something like:

$$
\begin{align*}
f_X(x_1, x_2, \dots, x_k) &= f(\vec x; \vec \mu, \Sigma)\\
&= \frac{
\text{exp}\left(
-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)
\right)
}{\sqrt{(2\pi)^k|\Sigma|}}
\end{align*}
$$

Where $\Sigma^{-1}$ is the inverse of the covariance matrix and sometimes called the precision matrix and denoted $Q$. 

$\Box$

## 1.4 - Sample and Statistics

p. 28

A population in statistics refers to any measurable object. We understand that a population includes all elements of a set of data, as opposed to a sample drawn from the population. 

###### Why do we draw samples from a population?

We would do this simply because the population is often too large to measure each individual object. 

$\Box$

### Order Statistics

What are **order statistics**?

These describe the sample in an ascending order to help us describe the sample in a structured manner. 

How do we denote ordered statistics?

Of variable $Y$:

$$
Y_{(1)} \le Y_{(2)} \le Y_{(3)} \le \dots \le Y_{(n)}
$$

Why would ordered statistics be useful?

You could divide the number of observation into four equal parts, called **quartiles**. It aids in finding the _median_, a useful and popular statistic of data. Helps find the _range_, which is just max minus min. 

So, very good for providing summary statistics of a given series. 

## 1.5 - Problems of Dimensionality

p. 29

Buckle up, it's a long ride.

Another name for problems of dimensionality is "curse of dimensionality". 

The main question is as follows:

###### We see that as we add features to a classification algorithm, say between cats and dogs, we obtain better results. Can we obtain a perfect classification model by carefully designing a few hundred, or more, features? Why or why not?

No, this will not work as intended. There will probably be a point where increasing the dimensionality by adding new features would actually degrade the performance of the classifier. This implies there being an optimal number of features for each model to maximize the classifier's performance. 

$\Box$

The book continues to look at adding features one at a time to a linear classifier starting with average "red" colour of a photo. Then average "green" colour and then average "blue" colour. 

Notice that the _density_ of training samples decreases exponentially when we increase the dimensionality of the problem. For example, if we have 10 images of cats and dogs to train on, and we have one feature, then we can have something like $10/5 =2$ samples per interval, assuming our width of 10 has 5 unit intervals. Seems arbitrary.

However, with the second dimension, we still have just 10 samples. But they now cover a feature space with an area of $5 \times 5 = 25$ square units. The sample density quickly falls to $10/25 = 0.4$ samples per interval. Go ahead and consider the 3rd dimension.

###### What does adding additional features to a classification model do to the feature space of that model?

Adding additional features increases the dimensionality of the feature space, giving it more space and making sample instances more sparse. 

###### What is a **Hyperplane**?

This is a plane in a higher-dimensional vector space. 

A [Hyperplane | Wiki](https://en.wikipedia.org/wiki/Hyperplane) is a subspace whose dimension is one less than that of its ambient space. So, if you have points in 3-dimensional space, a _hyperplane_ is a 2-dimensional plane. 

$\Box$ 

Due to sparsity, it becomes easier to find separating _hyperplanes_ with higher dimensions because the likelihood that a training sample lies on the wrong side of the best hyperplane becomes infinitely small when the number of features becomes infinitely large. 

That sounds like what we want, so what is the issue?

Given the graph in the book, you can see there is obvious _overfitting_. 

How does [overfitting | Wiki](https://en.wikipedia.org/wiki/Overfitting)? 

In contrast to underfitting, **overfitting** occurs when a training model learns the training data too well and cannot generalize to real world data well, or will fail to fit additional data or predict future observations reliably. 

How does overfitting occur?

In our case with classifying dogs and cats, adding the three-dimensional space to obtain better classification results corresponds to using a complicated non-linear classifier in a lower dimensional feature space. The classifier learns the appearances of specific instance and specific details of our training data set, leading to overfitting.

This is a result of the _curse of dimensionality_.

In the context of ML models, what does the term **generalize** refer to?

It refers to the ability of a classifier to perform well on unseen data, even if that data is not exactly the same as the training data. 

By using fewer features, we can avoid the curse of dimensionality with our classification model. It may perform worse on training data, but because it did not overfit it will generalize to other data more effectively. 

Then there's this train of thought that to train a classifier using only a single feature whose value ranges from zero to one, and is unique for each cat and dog... If we want to training data to cover 20% of this range, you need 20% of the complete population of cats and dogs. Adding another feature results in two-dimensional feature space. To cover 20% of a two-dimensional range, you need 45% of the population in each dimension. This is because $0.45^2 \approx 0.2$. 

The data required to cover a static percentage of the feature range frows exponentially with the number of dimensions. You can think of it like, as you increase dimensionality, gaps in data emerge, or almost all the sample space becomes empty. The book illustrates with images. 

The more features we use, the more sparse the data becomes, and accurate estimation of classifier's parameters becomes more difficult. 

What is a [hypercube | Wiki](https://en.wikipedia.org/wiki/Hypercube)?

In _Geometry_, a **hypercube** is an $n$-dimensional analogue of a square and a cube. For our purposes, it is a generalization of a cube into more than 3 dimensions. Wiki shows how to build a 3-cube into a _tesseract_ (aka 4-cube). 

We note that the data sparseness may not, and probably is not, uniformly distributed over the _search space_. In terms of a hypercube, the average of the feature space would be the center of the unit square. Data that is not near average will end up in the corners of the hypercube, and will be difficult to classify. Classification is easier if most samples fall inside the inscribed unit circle. 

The issue is the volume of the hypersphere, which would contain the sort of averages, tends to zero as the dimensionality tends to infinity. Somehow, the volume of the surrounding hypercube remains constant. 

This surprising, and kind of counter-intuitive, observation partly explains the problems with the _curse of dimensionality_ in classification. In high dimensional spaces, most of the training data reside in the corners of the hypercube, defining the feature space. But data in the corners is harder to classify. 

If you get anything from this discussion, dimensionality is a double edged sword. 

## 1.6 - Principal Component Analysis and Discriminant Analysis

p. 35

### Principal Component Analysis vs Discriminant Analysis

Real-world data are often structured in a complex manner. The challenge is reducing dimensions with minimal loss of information. 

###### What are the two commonly-used techniques to reduce dimensionality of a data set?

Principal component analysis and discriminant analysis

$\Box$

Good datasets to work with are:
+ Iris dataset by Fisher.
+ Palmer penguins dataset. 
+ Wheat seeds dataset.

PCA and DA are both _linear transformation_ methods. 

###### PCA and DA are similar in many ways. What is the difference between these two linear transformation methods?#

PCA is used to find components (directions) that maximize the variance in our dataset. Discriminant Analysis is additionally interested in finding the components (directions) that maximize the separation (discrimination) between different classes. In contrast, PCA ignores class labels. 

So PCA will treat the entire data set as one class, where DA will retain classes within the data set. As such, DA maximizes variance within classes and the spread between classes. 

$\Box$

The book begins analysis of the Iris dataset.  First step is visualization of data. Some features, like the sepal length, are overlapping between species. This means we cannot separate one species from another with this feature. 

### Principal Component Analysis (PCA)

###### What is the goal of [**Principal Component Analysis?**](https://en.wikipedia.org/wiki/Principal_component_analysis) 

The goal is to find the components (directions) that maximize the separation (discrimination) between different classes. 

###### How does PCA achieve its goal?

This technique transforms data into a _subspace_ that summarizes properties of the whole dataset with a reduced number of dimensions. The new dimensions are called **principal components**. We can use these newly formed dimensions to visualize the data.

$\Box$

Where is most variability expressed in PCA? The least?

The first principal component holds the data that expresses most of its variability. It descends from there.

Note: Principal components are orthogonal to each other and therefore not correlated. That is part of its power, to un-correlate variable. 

###### What are the steps of of the Principal Component Analysis?

There are 6 steps:

1. Start from the original sample, without class labels.
2. Compute the mean of each variable.
3. Compute the covariance matrix between all variables.
4. Determine the EigenVectors $\vec e_1, \dots, \vec e_n$ and the EigenValues, $\lambda_1, \dots, \lambda_n$ of the covariance matrix. 
5. Sort the Eigenvalues and corresponding Eigenvectors starting from the highest Eigenvalue and place the Eigenvectors in the corresponding matrix. Choose a suitable cut-off such that only $k \lt n$ Eigenvalues and Eigenvectors remain. 
6. Transform the data using $\vec y = W^T \vec x$, where $\vec x$ describes the original dataset and $\vec y$ the transformed. Here we transform each part of the data-set individually. That is, one _row_ at a time. 

$\Box$

[Covariance](https://en.wikipedia.org/wiki/Covariance) is expressed by:

$$
\begin{align*}
cov(X,Y) &= E[(X-E[X])(Y-E[Y])]\\
&= \frac{\sum_{i=1}^N
\left( (x_i-\bar x)(y_i-\bar y)  \right)
}{N}
\end{align*}
$$

You can also take a different route following Wiki:

$$
\begin{align*}
cov(X,Y) &= E[(X-E[X])(Y-E[Y])]\\
&= E[XY-XE[Y]-YE[X]+E[X]E[Y]]\\
&= E[XY] - E[X]E[Y] - E[X]E[Y] + E[X]E[Y]\\
&= E[XY]-E[X]E[Y]
\end{align*}
$$

The middle may be a little confusing. The expected value of an expectation is just the expected value. 

Using a tool like _scikit-learn_ to perform PCA can show us how much variance is explained by each new variable. 

Note that new variables created by PCA do not have intuitive names. This is because the PCA method finds the best linear combination of the original features such that the new variables are ordered by retaining the maximum variance found in the data. We keep the data that is above our arbitrary variance threshold. Thus, we can limit ourselves to a much smaller list of new variables. 

The Iris data set has four features, so the power of PCA can be hard to see. Imagine reducing a dataset of a hundred features (or more) down to twenty features (or less). This is significant computational advantages.

### Discriminant Analysis

[Linear Discriminant Analysis](https://en.wikipedia.org/wiki/Linear_discriminant_analysis) (LDA) goes by many names and is most commonly used as a dimensionality reduction technique in the _pre-processing_ step for pattern-classification and machine learning applications. 

###### What is the goal of Linear Discriminant Analysis?

The goal is to project a dataset onto a lower-dimensional space with good class-separability in order to avoid overfitting and to reduce computational costs. 
+ reduce dimensionality.
+ reduce computational costs.

LDA is similar to PCA in that they both find component axes that maximize the variance of data. However, LDA is additionally interested in the axes that maximize the separation between multiple classes. 

Main goal of Linear Discriminant Analysis is to _project_ a feature space onto a smaller subspace while maintaining the class-discriminatory information. 

There are 5 steps (Raschka, 2014b) for LDA:
1. Compute the means for each class in original dataset with $n$ elements and $d$ variables (dimensions). 
2. Compute the scatter matrix both for each class as well as between each class.
3. Determine Eigenvectors $\vec e_1, \vec e_2, \dots, \vec e_n$ and the Eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ of scatter matrix. 
4. Sort Eigenvalues and corresponding Eigenvectors starting with _highest_ Eigenvalue and place Eigenvectors in corresponding matrix. 
	1. Choose a suitable cut-off such that $k \lt n$ Eigen values and Eigenvectors remain.
5. Transform data into a new subspace using $d \times k$ matrix $W$. 

In step 5 we can write as matrix multiplication $Y=W \times X$ where $X$ represents the whole _original_ dataset, and so $Y$ is the whole new dataset.

---

## Test Your Knowledge

Is a density function symmetric around the zero axis?
+ No, not all are. Some might be like the standard normal, but many are not even symmetric. 

Is a density function (of a real continuous random variable) also a continuous function?
+ No, not necessarily. 

Does a discrete random variable $X$ always go to the set of natural numbers (so $X=0,1,2,\dots$)?
+ No, a discrete random variable could easily include decimal or fractions, and negative numbers. 

Can the density function $f_x$ of a real continuous random variable $X$ be extended to be defined over all real numbers.
+ Yes, it apparently can.

Consider the random variable $X$ whose probability distribution is defined by $P(X\gt t) = \frac{1}{2}+\frac{1}{2} \cos (t)$ for $t \in [0,\pi]$ .

Is the above distribution actually a probability distribution?

Yes, although I think they are usually expressed as $P(X \lt t)$, the sum of all probabilities will equal one. 

What is the density function of $X$ 

$$
\begin{align*}
F(X) &= P(X \gt t) = \frac{1}{2} + \frac{1}{2} \cos (t) \text{ for } t \in [0,\pi]\\
f(t) &= \frac{dF(x)}{dt} = \frac{1}{2} \sin (t) 
\end{align*}
$$

What is the expected value of the above distribution function?

$$
\begin{align*}
E[X] &= \int_0^{\pi} x \frac{1}{2} \sin(x) dx\\
\int uv' &= uv-\int u'v\\
&\begin{matrix}
u=\frac{1}{2}x & u'=\frac{1}{2}\\
v'=\sin(x)dx & v=-\cos (x)
\end{matrix}\\
&= -\frac{1}{2}x\cos(x)|_0^{\pi}+\int_0^{\pi}\frac{1}{2}cos(x)dx\\
&= \int_0^{\pi}\frac{1}{2}cos(x)dx-\frac{1}{2}x\cos(x)|_0^{\pi}\\
&= \frac{1}{2}sin(x)|_0^{\pi}-\frac{1}{2}x\cos(x)|_0^{\pi}\\
&= \frac{1}{2}\left( sin(x) - x\cos(x)\right)|_0^{\pi}\\
&= \frac{1}{2}((0 + \pi) - (0-0))\\
E[X] &= \frac{\pi}{2}
\end{align*}
$$


You find that a friend tells you that it is easy to calculate the density of the sum of two random variables given the density of each of them. You then search the web for this. Which citation could you use for this so as to include in a workbook or in a report for customers of the data-processing department you work for?

Taboga, Marco (2017). Sums of independent random variables, Lectures on probability theory and mathematical statistics, Third edition. Kindle Direct Publishing. Online appendix. https://www.statlect.com/fundamentals-of-probability/sums-of-independent-random-variables (accessed 2021-03-01).


What is Kolmogorov's 1st Axiom?

**Positivity**! the probability $P$ of an event $E$ must be a non-negative _real_ number. 

What is Kolmogorov's 2nd Axiom?

**Normalization**! The probability that some event occurs in a sample space must be 1.

What is Kolmogorov's 3rd Axiom?

**Additivity**! If events $A$ and $B$ are disjoint then the probability of either $A$ or $B$ occurring is the sum of their individual probabilities. 


Consider a sample 7,10,7.5,7 of a random variable X∼N(0,10)�∼�(0,10). Which of the following is a statistic?

We are told that $X\sim N(0,10)$ is a random variable. We are then given a sample from this random variable, $[7, 10, 7.5, 7]$. Find statistics of mean, median, and variance of this sample. 

Right, so we are told what the distribution is, but then given a _sample_! Use the sample:

$$
\begin{gather*}
\bar x = \frac{7 + 10 + 7.5 + 7}{4} = 7.875\\
s^2 = \dots = 2.0625\\
\end{gather*}
$$

The median is somewhere between 7 and 7.5 based on the sample. The mode of the sample is 7. 
