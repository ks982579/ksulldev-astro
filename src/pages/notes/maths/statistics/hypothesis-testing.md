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

We have two random variables in the definition of $t$, the sample mean and sample variance. Our value $t$ does not follow a normal distribution because of the use of the sample variance instead of the population variance. However, it will follow the **Student's t-distribution**, which has a single parameter, the number of degrees of freedom. 

The [Student's t-distribution | wiki](https://en.wikipedia.org/wiki/Student%27s_t-distribution) is a generalization of the _standard_ normal distribution. It's bell shaped and symmetric around zero. The difference is that $t_v$ (the t-distribution) has heavier tails, and the amount of probability given to the tails is controlled by its parameter $\nu$. For $\nu=1$ the t-distribution becomes the standard Cauchy distribution with _fat tails_. And for $\nu \to \infty$, the t-distribution becomes the standard normal distribution. 

The [Student's t-distribution | Simple.Wiki](https://simple.wikipedia.org/wiki/Student%27s_t-distribution) was developed by William Sealy Gosset in 1908 and named after the _pseudonym_ he used whilst publishing the paper. 

More information about the math can be found on the page [Student's t-Distribution | Wolfram MathWorld](https://mathworld.wolfram.com/Studentst-Distribution.html). 

If the variable $X$ follows a normal distribution, perhaps approximately via the central limit theorem, then $t$ will follow the t-distribution. In the sample variance case, the number of degrees of freedom is $\nu=n-1$. 

The **Student's t-Distribution** behaves much like the standard normal distribution but with more pronounced tails, essentially shifting some of the probability of outcomes. If a variable $X$ follows a Student $t$ distribution with $n$ degrees of freedom, we write $X\sim t(n)$. The PDF of $X$ is given as follows:

$$
f_n(t) = {1 \over \sqrt{(\pi n)}} \frac
{\Gamma((n+1)/2)}
{\Gamma(n/2)}
\left(1+ {t^2 \over n}\right)^{-(n+1)/2}
$$

Obviously not the easiest function to work with. 

Now, let us look at the case of two groups. We construct a test statistic similar to the $z$-score:

$$
t=\frac{(\bar x_1-\bar x_2) - \delta}{SE\left[
\bar x_1 - \bar x_2
\right]}
$$

We have there the difference in sample means on both the top and bottom. The constant $\delta$ is the known difference between the population means under the null hypothesis. And $SE[\bar x_1 - \bar x_2]$ is an estimate of the standard error of the difference between the two samples. 

In most practical applications we would set $\delta =0$ because we would not know that information unless we had further or external knowledge about the population. 

From the propagation of uncertainties, we can recall the standard error of the differences is given by:

$$
SE\left[ \bar x_1 - \bar x_2 \right] = \sqrt{V[x_1] + V[x_2]}
$$

Therefore, if you somehow know the variance of the population, the equation becomes:

$$
t=\frac{\bar x_1 - \bar x_2}{
\sqrt{{\sigma^2_1 \over n_1}+{\sigma^2_2 \over n_2}}
}
$$

However, it would be a bit odd (in my opinion) to have the population variance but no the population means. Therefore, we typically estimate them from the sample variance, giving:

$$
t=\frac{\bar x_1 - \bar x_2}{
\sqrt{{s^2_1 \over n_1}+{s^2_2 \over n_2}}
}
$$

This is a $t$-distribution (proven by Hogg et al. theorem 3.6.1) but the degrees of freedom (d.o.f.) can be difficult to determine when either the sample variances nor the number of elements in the sample are the same. 

The value of the number of degrees of freedom is between the limits:

$$
\min(n_1-1, n_2-1) \le \mathtt{d.o.f.} \le n_1+n_2-2
$$

If $n \approx 1,000$, you can see the range would be quite large.
+ If variances are similar the d.o.f. will be closer to the upper limit.
+ If variances are very different, the d.o.f. will be closer to the lower limit. 

A _reasonable_ approximation is the harmonic mean:

$$
\mathscr{d.o.f.} = \nu= \frac{2}{n_1^{-1} + n_2^{-1}}
$$

If we assume the variances in the two groups are the same, this is called the **Two-Sample Student's t-Test**. If we allow the variances to be different from each other, it is called the **Welch's Test**.

For **Paired Samples**, the test can be expressed as a special case of the one-sample t-test. Instead of viewing start and end as two different groups, we take the difference and work with that as just one group. Let $d_i=x_i-y_i$ be the difference between 2 samples. The test statistic becomes:

$$
t = \frac{\bar d - \mu}{s_d\div\sqrt n}
$$

Who uses the division sign anymore?

We know that $\bar d$ is the sample mean of the difference and that $s_d$ is the sample standard deviation of the differences. The population mean, $\mu$ is the hypothesis we want to test. And $n$ is the number of paired measurements, giving $n-1$ degrees of freedom. 

There is some confusion around number of samples and degrees of freedom, especially in the two-case scenario. 

Now, given that the null hypothesis is true, we can use the distribution of this test statistic to decide whether the observed value of the test statistic is unlikely or not. The observed value of the test statistic comes from replacing all the estimators by their observed values:

$$
t_{observed} = \frac{\bar x_1 - \bar x_2}{
\sqrt{ \left( {s_1^2 \over n_1} + {s_2^2 \over n_2}\right) }
}
$$

To observe if this test statistics is statistically significant, we need to see where it falls in the distribution. And to make a decision, we need to set a cut-off value, which we will denote $t_c$.

The book shows a graph for the example of the standard normal distribution. The cutoff point is at the tail(s) of the distribution, depending on your null hypothesis. If we have a _null_ hypothesis, and our test statistic lands in the high probability region of the distribution, the main bell, then we _fail_ to reject the null and accept there was no change. However, if the test statistic lands in the tail beyond the cut-off, we can more safely reject the null hypothesis. 

A note on the distribution. When we take a "large enough" sample, we generally just assume the sample mean follows a normal distribution. However, when we perform the analysis, we need to check if the distribution actually follows a normal distribution. The t-test works well for symmetric distributions, like the normal distribution. It does not work well for asymmetric distributions. 

This means that, in practice, if we have to deal wit ha situation where the assumption that the underlying distribution is a normal distribution is not fulfilled, we have to take this into consideration as a source of systematic uncertainty and quantify how big the effect of this non-normality is on our final result. 

## 7.1 - Type I and Type II Errors

p. 187

From above, to decide between the hypothesis we need to construct a function of t he measurements that maps the measured values into a number: 

$$
t=f(x_1,x_2,\dots,x_n) = f(x)
$$

This function can be anything from simple to a sophisticated machine learning algorithm. Using this function, we can show the distribution of this test statistic for the null and the alternative hypothesis, which we will discuss below.

To determine if we should reject the null hypothesis, we need to define a critical value $t_c$ such that:
+ for any value of the test statistic below this value, we accept the null hypothesis.
+ for any value above we reject the null hypothesis and accept the alternative hypothesis.

Unfortunately, in most _realistic_ cases we cannot distinguish between the null and alternative hypothesis perfectly. The distributions of the test statistics for the two cases will overlap. The course book shows a graph of 2 bell curves which I think is an interesting perspective. Basically, our data gives us a certain curve, and the t-test is also a certain curve. Their tails will overlap at a kind of meaningful portion of the curves. 

This leads to 2 types of Errors:
+ **Type I Error** - The null hypothesis **is** true, but the value of the test statistic we have computed from the observed sample is beyond the cut-off. Hence, we reject the null hypothesis and accept the alternative hypothesis, even though it is wrong. The probability for this is denoted $\alpha$.
+ **Type II Error** - The alternative hypothesis is true, but the value of the test statistics is lower than the cut-off. Hence, we do not reject the null-hypothesis even though it is wrong. The probability of this is denoted as $\beta$.

The course book also provides a nice table... 

I more mathematical terms:

$$
\begin{align*}
\alpha &= P(\text{reject } H_0|H_0 \text{ is true})\\
\beta &= P(\text{fail to reject }H_0| H_0\text{ is false})
\end{align*}
$$

The cut-off value $t_c$ will affect these probabilities. In many practical applications, $\alpha$ is chosen in advance, which determines the cut-off value $t_c$. We would decide ahead of time what kind of Type I error we are willing to tolerate. We do this before looking at the data because once we look at the data our tolerance become bias. Consider an edge case. If we look at the data and _believe_ we should reject the $H_0$, we might adjust probabilities to make it so.

### Power of the test

Our probabilities $\alpha$ and $\beta$ have an inverse relationship, which should be clear.

I do love this definition... The **rejection region** (RR) is the set of values of the statistic $t$ that are at least as extreme as the cut-off value. It was hard at first for me to understand, but these values are _at least_ as extreme. By "extreme", we mean that they are not near the null hypothesis, they are extreme values living in the tail end of the probability distribution. Anything at least as extreme, or more extreme, falls into the rejection region and causes us to reject the null hypothesis. 

The chosen value of $\alpha$ is a _naive_ metric for evaluating the performance of the hypothesis test. A more useful metric is the "power of the test".

The **Power of the Test** is a measure of the quality of a test with respect to the probability that the testing process will detect an effect. Informally, it is the probability that the hypothesis test will yield a decision to reject $H_0$: 

$$
\text{Power} = P(\text{reject } H_0|H_1 \text{ is true})
$$

and describes the probability to detect an effect if it is indeed there. 

Ok, let's have a look considering a test about parameter $\theta$, our favourite parameter. Suppose we have $H_0: \theta=\theta_0$, The alternative is $H-1:\theta \in W \subseteq \mathbb R$. Given $\theta_1 \in W$, the test statistic $T$, and the rejection region, the power of the test when the actual parameter is $\theta=\theta_1$ is:

$$
\begin{align*}
\text{Power}(\theta_1) &=  P(T\in RR\ | \ \theta=\theta_1)\\
&= P(\text{rejecting } H_0 \ | \ \theta=\theta_1)
\end{align*}
$$

The probability our test statistic $T$ is in the rejection region given that our parameter is in-fact extreme, is qual to rejecting the null hypothesis. 

Now, we go to our Type II error, $\beta(\theta_1)$ is the probability of failing to reject $H_0$ when the true value of the parameter is $\theta=\theta_1$:

$$
\text{Power}(\theta_1) = 1 - \beta(\theta_1)
$$

The book then flies into an example with $\sigma=3$, $\mu=15$ and we want a confidence level of $\alpha=0.05$. 

The Hypotheses tests are:

$$
\begin{align*}
H_0&:\mu=15\\
&\text{vs}\\
H_1&: \mu > 15
\end{align*}
$$

Note, sometimes the alternative is $H_1:\mu \ne c$ and so we would consider _both_ tails of the distribution. That is like cutting the confidence interval in half and applying each half to each side of the distribution (You can see why we like symmetry). In the above case, since we are only concerned with the greater than side, that is the right side of the distribution. 

The one-sample Student's t-test is given by:

$$
t(x|\mu=15) = \frac{\bar x - 15}{\sigma/\sqrt N}
$$

That little formula is based on the sample mean and the population standard deviation. If $N$ is sufficiently large, then by the central limit theorem, the distribution of $t$ will follow a normal distribution if we do know the population standard deviation. If we only have sample standard deviation (typically) then we fall back on the Student's t-distribution with $N-1$ degrees of freedom. 

With our chosen cut-off, we have $P(Z \gt z_c) = 0.05$. Our $z$-score will only follow the normal distribution in this example because we are pretending we know the population standard deviation. 

Now, I haven't covered how to look up values in a normal distribution table, but it's quite simple. You can find tables online, [Standard Normal Distribution Table | MathIsFun.com](https://www.mathsisfun.com/data/standard-normal-distribution-table.html). This has a cool slider. Because we know our alpha, we look in the table for its value. This one is actually a more difficult table because it only takes the right half, but the graph is symmetric. As such, we are looking for $0.50 - \alpha = 0.45$. It lands right between $z_c=[1.64, 1.65]$ so we split the difference linearly, $z_c=1.645$. This gives us $P(Z \gt 1.645) = 0.05$.

$$
\begin{align*}
Z &\gt 1.645\\
\frac{\bar x - 15}{\sigma/\sqrt N} &\gt 1.645\\
\bar x &\gt 1.645(\sigma/\sqrt N) + 15\\
\bar x &\gt 1.645(3/\sqrt N) + 15
\end{align*}
$$

We don't have $N$, but if we did, it's just a matter of comparison. 

Suppose the _true_ value of the $\mu=16$ (population mean). Let's look at $\beta(16)$ and power of the test at 16 too. Remember, our null hypothesis assumes $\mu = 15$.

$$
\begin{align*}
\beta(16) &= P\left(\frac{t(X|\mu=16)}{3/\sqrt N} \le \frac{
15+1.645\cdot 3/\sqrt N-16
}{3/\sqrt N}\right)\\
&= P\left( Z \le 1.645 - \sqrt N/3 \right)
\end{align*}
$$

And the power of the test:

$$
\begin{align*}
\text{power}(16) &= 1-P\left(Z \le 1.645 - \sqrt N /3\right)\\
&= P\left( Z\gt 1.645 - \sqrt N /3\right)
\end{align*}
$$

The probability of the Type II error decreases as the sample size increases, and the power of the increases with the sample size. 

The book continues the evaluate when $N=36$. The probability of a Type II error is about 36%. That is a large change to fail to reject the null hypothesis when the real parameter is just one unit large than assumed. If that is the case, and that unit would be significant, we would need more data to decrease that probability. 

Note that the probability of a type I error and the power of a test have an _inverse_ relationship. We want the power to be high and the probability of committing a type I error to be low. 

### The Neyman-Pearson Lemma

p. 193

We can approach hypothesis testing from another angle. If we look at the distributions of the test statistic for the null and alternative hypothesis, we might be tempted to choose the cut-off value $t_c$ where they intersect. This choice is not optimal if the _apriori_ probabilities of the null and alternative hypothesis are very different. 

Using the Bayesian priors for the null hypothesis $P(H_0)$ and the alternative hypothesis $P(H_1)$, we can define the cut-off as the biggest $t$ such that:

$$
P(H_0)f_0(t) \ge P(H_1)f_1(t)
$$

Function $f_i(t)$ is the distribution of the test statistic for the null and alternative hypothesis. The best choice is determined by the **Neyman-Pearson Theorem**.

Per the Introduction to Mathematical Statistics text, by Hogg et al., p. 472

**Theorem 8.1.1 - Neyman-Pearson Theorem:** Let $X_1, X_2,\dots, X_n$, where $n$ is a fixed positive integer, denote a random sample from a distribution that has pdf or pmf $f(x;\theta)$. Let $\theta$ be an the unknown distribution parameter(s). The likelihood of $X_1, X_2,\dots, X_n$ is 

$$
\begin{array}{cc}
L(\theta; \boldsymbol x) = \prod_{i=1}^nf(x_i;\theta),
& \text{for } x'=(x_1,\dots,x_n)
\end{array}
$$

Let $\theta'$ and $\theta''$ be distinct fixed values of $\theta$ so that $\Omega = \{ \theta \ : \ \theta=\theta',\theta'' \}$. We will also let $k$ be some positive number. And we let $C$ be a subset of the sample space such that

$$
\begin{array}{clr}
(a) & \frac{L(\theta';x)}{L(\theta'';x)}\le k,
& \text{for each point } x\in C\\
(b)& \frac{L(\theta';x)}{L(\theta'';x)}\ge k,
& \text{for each point } x\in C^c\\
(c) & \alpha = P_{H_0}[X\in C] & -\\
\end{array}
$$

Ok... Then C is the best critical region of size $alpha$ for testing the simple hypothesis $H_0:\theta=\theta'$ against the alternative simple hypothesis $H_1:\theta=\theta''$. 

$\Box$

The text book continues on with a proof. 

Our course book states, the most powerful test has a rejection region given by:

$$
\frac{\mathcal L(\theta_0)}{\mathcal L(\theta_1)} \gt k
$$

where $k$ is chosen so that the probability of the Type I error is $\alpha$. I do like the latter notation as it's not giving the impression that there's a derivative anywhere. 

The course book then dives into an example with a Poisson distribution. Poisson is a decent example because the exponents make easy work of the product of pdfs. 

## 7.2 - P-Values

p. 196
