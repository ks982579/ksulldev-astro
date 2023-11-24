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

p. 22
