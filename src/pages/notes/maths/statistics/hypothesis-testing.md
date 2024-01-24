---
layout: '@layouts/NotesLayout.astro'
title: 'Hypothesis Testing'
pubDate: 2024-01-23
description: 'Introduction to Hypothesis Testing.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability", "hypothesis"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 7: Hypothesis Testing

pp. 181 - 205

Our learning objectives are as follows:
+ Understand the _basics_ of a hypothesis test including the null and alternative hypotheses and test statistics.
+ Define Type I and Type II errors and compute a cut-off value using Type I error rate.
+ Define and compute Type II errors and compute the _power_ of a test. 
+ Determine a rejection region that maximizes the power of a test.
+ Compute and interpret p-values, and some common misconceptions about them.
+ Understand the context of multiple hypothesis testing.
+ Define a familywise error rate and understand how the Bonferroni method offers a solution.
+ Define and control a false _discovery rate_.

Buckle up for a wild ride

## Introduction

We often want to make a "statement" about the entire population, but we only have samples of said population. It is usually impossible to analyse an entire population of anything. We therefore must define a _suitable_ sample(s) that we can use to make such a "statement" about the entire population. For example, we cannot give medicine to every human on earth, but want to state "this vaccine protects you against Covid-19."

One challenge is to avoid biases and ensure the sample is representative of the population. 

If we assume that we have gathered such an unbiased sample that is a good representative of the population then we want to develop and test a hypothesis, deciding if it is true based on the sample.

The **Null Hypothesis** is a statement that represents no effect. Typically denoted as $H_0$ (said "H-not"), and it denotes the _absence_ of an effect. The **Alternative Hypothesis**, denoted as $H_1$ is the presence of the effect we want to establish. 

How do we do this? 
+ Using knowledge, we propose a mathematical model
	+ Random variables with a particular family of distributions along certain parameters.
+ Assume certain conditions
	+ Independence and identically distributed, etc...
+ The model provides a decision rule to decide by a calculation when a hypothesis is probable. 

The course book dives into a quick example about cholesterol medication that I will include to learn notation. When participants take the medicine we gather data, say changes to their Cholesterol. Well, you'd get the cholesterol levels and find the changes yourself. Then, we would be interested in discriminating between the null hypothesis, $H_0: \theta=0$ that the medicine did not have an effect, versus $H_1:\theta\ne 0$ that the medicine caused some change in cholesterol. 

Because the aim would be to lower cholesterol, you might change the null hypothesis to include if the cholesterol increased, and modify the test hypothesis to only include if the cholesterol levels decreased. 

The hypothesis tests is defined as a rule that we can use to do either:
+ Fail to reject the null hypothesis $H_0$.
+ Reject the null hypothesis $H_0$, and accept the alternative hypothesis $H_1$ as true.

A **paired test** is the case when we have at least two measurements from the same source, a person in the example above. 

**Randomized controlled** trial removes biases by having two groups, a control group to monitor without introducing changes like a new medicine, often using a placebo, and the test group that has the change introduced. Participants are randomly selected and ideally concealed from people administering the tests. Instead of pairing data points like above, this trial considers two independent samples.

When we take measurements we obtain a large dataset of values taken from each sample, $x_1, x_2, \dots, x_n$. You can say we obtain a _distribution_ of values for each group. To perform the hypothesis test to decide whether to accept or reject the null hypothesis, we must construct a test statistic $t=f(x_1,x_2,\dots,x_n) = f(x)$. We use this to derive our decision formally.

The easiest way to discriminate between the null and alternative hypothesis is to compare the (sample) mean of the two groups. Per the central limit theorem, any sum of identically distributed random numbers will approximate a normal distribution. If the number of individuals in each sample is sufficiently large then the samples follow an approximate normal distribution.

What is "sufficiently large"? In an old statistics course I took, we were told $n\ge 40$ was a good _rule of thumb_. The course book drops this down to $n\gt 30$. 

We must walk before we run, and stand before we walk. We start with only one group that we want to determine whether it is compatible with a given hypothesis. But first, what is a z-score? The **z-score**, for a statistic $t$, is defined as:

$$
z=\frac{t-\mu}{\sigma}
$$

where $\mu$ is the mean and $\sigma$ is the standard deviation of the population. I don't think this is a proper introduction as it is rooted in the normal distribution. Basically, we let $z$ be the standard normal distribution. Then we note that a normal distribution $t=z\sigma+\mu$, where the spread and alignment are determined by $\mu$ and $\sigma$. 

Our test $\mathbf{z}$-score with the group mean as $\langle \mathbf x \rangle$:

$$
\mathbf z= \frac{\langle \mathbf x \rangle - \mu}{\sigma/\sqrt n}
$$

Good to note that the more elements we consider in our sample, the larger $n$ becomes, and the smaller the standard deviation. If the samples are taken from a normal distributed sample, $z$ will also follow a normal distribution without relying on the central limit theorem... because it is the standard normal distribution.

In most cases, we do not know the population statistics and need to rely on sample statistics, like sample standard deviation $s$, which has one less degree of freedom than the population.

$$
t = {\bar x - \mu \over s/\sqrt n}
$$

I changed the sample mean to be $\bar x$ because that is how I was taught and the $LaTeX$ way for angle brackets is a lot of typing. 

Quick recall of sample variance:

$$
s^2={1 \over n-1}\sum_{i=1}^N\left(x_i - \bar x\right)^2
$$

This is an _unbiased_ estimator because of the correction factor $1/(n-1)$.

pick up at top of p. 184
