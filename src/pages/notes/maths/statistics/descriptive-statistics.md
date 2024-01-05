---
layout: '@layouts/NotesLayout.astro'
title: 'Descriptive Statistics'
pubDate: 2023-12-17
description: 'Covering topics of descriptive statistics.'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "math", "maths", "statistics"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 2: Descriptive Statistics

Our learning objectives are as follows:
+ Summarize a dataset.
+ Compute and interpret location parameters such as mean, median, mode, and quantiles of probability distributions.
+ Compute and interpret dispersion parameters such as variance, skewness, and kurtosis of probability distributions. 

## Introduction

p. 44

Data analysis starts with collection of raw data. Assuming no issues with data quality, we can visualize the data next. However, raw data points cannot tell us much alone. Summarizations of the dataset can help describe the main characteristics; these are called **descriptive statistics**. 

We define the **arithmetic mean**:

$$
\bar x = \frac{\sum_i x_i}{N}
$$

This is helpful but not a lot of information. Other useful metrics would include those that quantify the dispersion or how _wide_ the data are spread out. And to quantify the distribution, if the data is symmetric or not. 

Note, if you reduce the description of data to a few key metrics, you lose a lot of details that may be critical in understanding the data. Don't only relate on metrics. 

Descriptive statistics used to describe samples are aptly called **Sample Statistics**. Basically, a population typically cannot be measured directly. We want to infer the population metrics from the sample(s). 

It is typically seen that large samples begin to re ect the behaviour of the population. Statisticians then try to infer or model the underlying probability distribution. 

## 2.1 - Mean, Median, Mode, Quantiles

### Mean

Given a vector of data points $\vec x = x_1, x_2, \dots, x_n$, the **arithmetic mean** is given by:

$$
\bar x = \frac{\sum_i x_i}{N}
$$

We call it the arithmetic mean because it is a sum of all data points. This is the most common, but there are other variations. The **geometric mean** is defined as:

$$
\bar x_g = \left( \prod_{i=1}{N}x_i\right)^{1/N}
$$

The geometric mean is often suited to describe _growth_ or growth rates. We can also define the **harmonic mean** as follows:

$$
\bar x_h = \frac{N}{\sum_{i=1}^N \frac{1}{x_i}}
$$

This is like an upside-down arithmetic mean and used when we describe rates or ratios. Finally, there is the **root mean square**:

$$
\bar x_{rms} = \sqrt{
\frac{\sum_{i=1}^Nx_i^2}{N}
}
$$

Yes, it appears the divisor is also in the squareroot as well. This is used in electrical engineering or to compare a model prediction to observed values. 

These are all forms of _expected value_. It's like if the probability of each event is the same. Now consider if the probability of events in a discrete random variable $X$ followed probability mass function $P(X=x)$:

$$
E[X] = \sum_{i=1}^N x_i \cdot P(X=x_i)
$$

This is like a weighted average. We multiply each $x_i$ with its associated probability. 

Extend that concept to continuous random variable $X$ with density function $f(x)$:

$$
E[X] = \int_{-\infty}^{\infty} xf(x)dx
$$

Again, this is like a sum of the product of point and probability, just a near infinite amount of points. 

We will shift quickly into _transformed_ random variables. Suppose we transform values of $x$ with a given function $h(x)$. 

$$
E[h(X)] = \int_{-\infty}^{\infty} h(x)f(x) dx
$$

A strict notation should be $h \circ X$ because it is the composition of mapping from the sample space to another. 

We will now provide another rule you can probably discover yourself:

$$
E[a\cdot g(x) + b \cdot h(x)] = a \cdot E[g(x)] + b \cdot E[h(x)]
$$

The book goes into an example with the exponential distribution:

$$
f(x) = \frac{e^{-x/\lambda}}{\lambda}
$$

where $0 \le x \lt \infty$ and $f(x) = 0$ for $x \lt 0$. Also, $\lambda \gt 0$. Finding the expected value may seem difficult but use integration by parts.

### Median

p. 49

The median is literally the middle number of an ordered sample. You may be given a more formal definition:

$$
m = \left\{ 
\begin{array}{lr}
x_{(N+1)/2} & \text{if } N \text{ is odd}\\
\frac{1}{2}(x_{N/2}+x_{(N/2)+1}) & \text{if } N \text{ is even}\\
\end{array}
\right.
$$

For discrete distributions, the median $x_{0.5}$ is defined as:

$$
\begin{array}{ccc}
P(x \le x_{0.5}) \ge \frac{1}{2} & \text{and} & P(x \ge x_{0.5}) \ge \frac{1}{2}
\end{array}
$$

It is the half way point of the distribution. In a continuous respect:

$$
0.5 = \int_{-\infty}^{x_{0.5}} f(x) dx
$$

Generally speaking, the mean and median are the same for symmetric distributions. They begin to deviate for asymmetric probability distributions though. We say that the _median is more robust_ compared to the mean. This means that the median is less sensitive to outliers or behaviour in the tails of the distributions. 

We can illustrate with an example. Suppose we have the following set of numbers: `[1, 2, 3, 4, 5]`. Both the mean and the median are 3. However, let's append an outlier to our set: `[1, 2, 3, 4, 5, 42]`. The mean is not... 9.5, but the median is 3.5. 

These are calculations with just samples of numbers and not really including probability distributions. 

### Quantiles

p. 52

The **quantile** is a point $x_q$ where $q\%$ of points are _below_ this point, and $(1-q)\%$ are above. The median is a quantile, it is $x_{0.5}$. The formulaic definition is like:

$$
q= \int_{-\infty}^{x_q} f(x)dx
$$

What are quantiles used for?

They can be used to describe the overall shape of a distribution. 

The **cumulative distribution function** (CDF) for a probability distribution function $f(x)$ is defined as:

$$
F(x) = P(X \le x)= \int_{-\infty}^{x} f(x)dx
$$

It is the probability that a value being less than or equal to $x$. We can then say that the median is given by:

$$
x_{0.5} = F^{-1}(\frac{1}{2})
$$

$F^{-1}(x)$ is the inverse of the cumulative distribution. It may not always be defined _but_ it can be proven that it exists when the density function is continuous and its domain of definition is an interval. 

### Mode

The **mode** is the most likely value to occur, or just the one that has the most occurrences. It specifies the highest point of a probability distribution. 

Mathematically, you have:

$$
mode = \underset{x}{\text{argmax}}f(x)
$$

The mode is not considered a _stable location parameter_. Even small details in the distribution will shift the mode noticeably. If multiple values occur the same number of times, and are the most occurring values, there are multiple modes. 

## 2.2 - Variance, Skewness, Kurtosis

The mean, median, and mode only provide a bit of information. What about how "wide" the distribution is, or how symmetric a distribution is?

### Variance

The **variance** is a _dispersion_ parameter and measures how much the values fluctuate around the mean. 

[Sample Variance | Statistics How To](https://www.statisticshowto.com/probability-and-statistics/descriptive-statistics/sample-variance/) should be defined as:

$$
s^2 = \frac{\sum (X - \bar X)^2}{N-1}
$$

I think the book accidently calls it sample variance but means _population variance_, or just **variance**:

$$
\sigma^2 = \frac{\sum_i (x_i-\bar x)^2}{N}
$$

Why is the sample variance denominator slightly smaller? It has to do with biased and unbiased estimates of the population statistic. This is called [Bessel's Correction | Wiki](https://en.wikipedia.org/wiki/Bessel%27s_correction). In a sample, we technically do not know the population mean, so all of our calculations are done with the sample mean. You can think of it in terms of degrees of freedom in the residuals vector (not errors). Because the population mean is unknown, the sum of residuals will sum to zero. All residuals are free to be what they want to be, except one, which brings the sum to zero. 

The [standard deviation | wiki](https://en.wikipedia.org/wiki/Standard_deviation#Sample_standard_deviation) is a bit different. Doing $\sqrt{s^2}$ reintroduces the bias. And there's no one size fits all solution. So we typically go about our day with a biased estimator. However, for large distributions, it's not a huge bias. 

With some effort, you can prove:

$$
\sigma^2 = E[X^2] - E[X]^2
$$

Now we dive into variance of probability distributions:

$$
Var[X] = E[(X - E[X])^2] = \int_{-\infty}^{\infty}(x-\bar x)^2f(x)dx
$$

which is nearly the same for discrete:

$$
Var[X] = \sum_{i=1}^{N}(x_i-\bar x)^2f(x_i)dx
$$

### Moments

For moments like this...

A good introduction into moments, and how I learned back in the day, is [Moment-generating function | Wiki](https://en.wikipedia.org/wiki/Moment-generating_function). We _transform_ our value through some function $h$. 

The book takes $h(x)=x^n$, such that

$$
\mu_n = \int_{-\infty}^{\infty}x^nf(x)dx
$$

The _central moment_ is then defined as:

$$
\mu_n' = \int_{-\infty}^{\infty}(x- \bar x)^nf(x)dx
$$

which really just means $h(x) = (x- \bar x)^2$. 

An important application of the moments is that a probability distribution is defined by all its moments. So if we know all of the moments of a distribution, we can recreate the distribution. 

Moments are an interesting topic and probably used more extensively at higher levels. But even in actuarial science, I merely learned about them but never actually worked with them. 

### Skewness and Kurtosis

p. 60

**Skewness** is a measure of how symmetric a distribution is. If the skewness is negative, it has a tail to the left. If positive, a tail to the right. And if 0, it is perfectly symmetric. Mathematically expressed as:

$$
\begin{align*}
g_3 &= \frac{\mu'_3}{\mu'^{3/2}}\\
&= \frac{\mu'_3}{\sigma^3}\\
&= E\left[ \left( \frac{X-E[X]}{\sigma} \right)^3 \right]
\end{align*}
$$

I like how we bring in _moments_... like this... into our expression. 

Interesting notes, if the skewness is negative (left tail) then we probably have $\mu \lt m \lt \text{mode}$. The reverse is also true. Images in book give example. The tail really affects the mean, and kind of affects the median. 

[Skewness | Wiki](https://en.wikipedia.org/wiki/Skewness) is a great article that also tackles moments in skewness. 

The book only lists the later of the next two equations, but for a sample of $n$ values, two _natural_ estimators of population skewness are:

$$
b_1 = \frac{m_3}{s^3} = \frac{
\frac{1}{n} \sum_{i=1}^n(x_i-\bar x)^3
}{
\left[\frac{1}{n-1} \sum_{i=1}^n(x_i-\bar x)^2\right]^{3/2}
}
$$

or

$$
g_3 = \frac{m_3}{m_2^{3/2}} = \frac{
\frac{1}{n} \sum_{i=1}^n(x_i-\bar x)^3
}{
\left[\frac{1}{n} \sum_{i=1}^n(x_i-\bar x)^2\right]^{3/2}
}
$$

The latter is a [Method of Moments | Wiki](https://en.wikipedia.org/wiki/Method_of_moments_(statistics)) estimator, which is an estimator of population parameters with moments. It is an easy(ish) way to derive simple and consistent estimators. However, these estimators are often _biased_. 

So, if skewness tells you which side the tail is on, then **Kurtosis** will tell you how pronounced the tails of a distribution are. [Kurtosis | Wiki](https://en.wikipedia.org/wiki/Kurtosis) is a measure of the _"tailedness"_ of a probability distribution. Different measures of this value have different interpretations. The standard measure, from Karl Pearson, is the scaled version of the fourth moment of the distribution. 

$$
\begin{align*}
\text{Kurt}[X] &= E \left[ \left( 
\frac{X-\mu}{\sigma}
\right)^4 \right]\\
&= \frac{
E\left[ \left( X-\mu \right)^4 \right]
}{
\left(E\left[ \left( X-\mu \right)^2 \right]\right)^2
}\\
&= \frac{\mu_4}{\sigma^4}
\end{align*}
$$

That is from Wiki, but the book give a similar definition. Kurtosis of the standard normal distribution is $\kappa=3$. 

Be careful using kappa to mean kurtosis. The [Cumulant | Wiki](https://en.wikipedia.org/wiki/Cumulant) is like an alternative to a moment of a distribution, and is known to use kappa. The course book does not cover cumulants though. 

The book provides this discrete calculation here:

$$
\kappa = g_4 = \frac{
\frac{1}{N} \sum_{i=1}^N(x_i-\bar x)^4
}{
\left[\frac{1}{N} \sum_{i=1}^n(x_i-\bar x)^2\right]^{3/2}
}
$$

A high value of kurtosis indicates the existence of outliers in the sample. **Excess Kurtosis** is calculated by subtracting $g_4-g_3$. 

The general formula as you may have noticed is:

$$
g_k = \frac{\mu_k'}{\mu_2'^{k/2}} = \frac{\mu'_k}{\sigma^k}
$$

higher order quantities beyond kurtosis are rarely used in practice. 

#### Descriptive Statistics and Distributions

These metrics are helpful at gaining insights into behaviour of a sample or distribution. However, they neglect many details so do not rely to heavily on them. The course book then goes into why we should not rely to heavily on these metrics.

The examples are interesting in that the metrics appear similar, if no the same, yet the regression line really only fits to one set of points. 

Descriptive statistics are a valuable tool in any statisticians toolbox. However, don't forget to try and visualize your data as well. 

---

# Knowledge Check

Consider the RV $W\sim [1,5,7,9,11,11]$. What is the sample mean, median, mode, and variance?

The sample mean is $7.\bar3$. The quiz calls it **variable expectation** which I cannot find in the course book for whatever reason. This is an expected value probably for the population. We only have a sample so it's not correct. 

The sample median is 8. 

Sample mode is 11.

The sample variance would require $n-1$. 

Suppose now we have random variables $X$ and $Y$, which are independent and identically distributed RVs. Apparently $E(X+Y)\ne E(X)+E(Y)$. 

The quiz would go on to claim the following assertions to be true then:
+ $f_{(x+y)}(s)=f_x(s)+f_y(s)$
+ $\text{Var}(X+Y) = 2 \cdot \text{Var}(X)$
+ The support of $X+Y$ is the union of the support of $X$ and $Y$. 

The other questions involve a percentile (just remember that median is 50th percentile), Something weird about standard deviation I'm not sure I believe, and skewness.

If $X$ has skewness of $-10$ and $Y$ has skewness of $+10$, how can we compare them?

They are not necessarily inverse of each other nor symmetric. However, because $X$ has a negative skew, it is left tailed, meaning it will tend to have higher values compared to $Y$, which has a right tail. This is assuming of course perhaps they are bound to the same interval of numbers or something. 