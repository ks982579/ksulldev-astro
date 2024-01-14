---
layout: '@layouts/NotesLayout.astro'
title: 'Data Visualization'
pubDate: 2024-01-09
description: 'Introduction to importance of data visualization and topics within.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability", "visualization"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 5: Data Visualization

Our learning objectives are as follows:
+ Understand the importance of visualizing data.
+ Discuss the general principles of visualizing data.
+ Identify the most important chart types.
+ Construct histograms, scatter plots and profile histograms.

## Introduction

Data visualization is a very important technique to understand the data to extract information or make inferences. We use a process called **exploratory data analysis** (EDA) to gain insights into the data. It is an easy way to get an idea about the distribution and variability of variables of the dataset. 

## 5.1 - General Principles

First step to data visualization is selecting the appropriate chart type or technique to do so. Within this step we can also choose the design elements used to create the visualization. 

It is important to remember that data visualization **is not** truly objective. By choosing a specific visualization type and style we are suggesting to the audience some associations they should make. This can lead to _cognitive biases_. 
+ Sometime intentional - We want audience to follow our narrative about the data.
+ Sometimes unintentional - Accidentally bias the audience into thinking a specific way.

The book goes into some examples using the Python Seaborn package. Things to note:
+ Just drawing data points:
	+ may indicate each point represents an independent measurement. 
	+ may indicate we do not know anything about the relationship between data points. 
+ Connecting data points may indicate:
	+ points are not independent but have a linear relationship between one point and the next. 
	+ We indicate values are not independent AND they have a linear relationship

Changing **hue** (or colour) is a good way to separate data. However, we intuitively interpret softer colours and dashed lines as _less important_. Sometimes this is intentionally done, but can mislead the audience if unintentionally done. 

**Make every design decision painfully deliberate.** Don't just rely on defaults of a program. 

Check out this PDF [Which Visualization](https://experception.net/Franconeri_ExperCeptionDotNet_ChartChooser.pdf), also [found at uxlib.net](https://uxlib.net/assets/subject/data-viz/datavis-quick-ref.pdf) as a cheat sheet to data visualization. It's actually a very nice sheet. 

With that, let's jot down some best practices:
+ Keep within the boundaries of a single screen. 
	+ Think carefully about what intended audience should see and how information should be presented. 
+ Provide sufficient context.
	+ indicate whether numbers are within a _good_ or _bad_ range. 
	+ May require expert advice.
+ Provide adequate level of detail or precision.
+ Start scales at zero.
	+ Starting at non-zero can introduce cognitive bias and distort the magnitude of differences.
+ Keep consistent colour scheme.
	+ Consistent
	+ use as few colours as possible but as many as necessary to avoid clutter.
+ Avoid decorations
	+ They mostly just clutter the visualization. 
+ All plots should be _clearly_ labelled. 
	+ Each axis should have relevant description.
	+ Units should be added
	+ Legend if more than one dataset. 
+ All labels should be large enough.
	+ Pretend you are showing plot to large venue and people in the last row need to read and interpret the plot.
+ Be inclusive in the choice of colours.
	+ Consider colour blind people. Some people cannot distinguish between red and green. 
		+ You can make the graph in black and white and check if it is still usable - a good test.
	+ Use different markers and line styles to distinguish between multiple elements. 

## 5.2 - One- and Two-Dimensional Histograms

p. 120

### One-Dimensional Histograms

When analysing a small dataset, you can look at individual elements. But when dealing with a large dataset, you cannot view them all. However, a histogram is a good way to visualize and work with large numbers of continuous data. 

A **histogram** will split the $x$-axis into $J$ intervals. A **bin** is a discrete set of intervals along an axis. The $y$-axis then represents the count of data points that falls into each bin. The histogram was first introduced by Pearson (1895).

Choosing the appropriate number of bins is one of the most difficult and also important aspects. The book gives a good example of data with 10 bins appears to have one "peak", but with 50 bins shows 2 peaks. This can change both our understanding and further analysis of the data going forward. 

We can use histograms to determine parameters of an empirical or theoretical model from observed data. Ideally, we would use each data point to determine parameters in an unbinned maximum likelihood fit. However, this becomes numerically challenging as the number of data points gets very large. We can fill data into a histogram and use these binned values to determine the parameters of the model. 

The course book shows a histogram with points instead of bars. The larger points also have small _error bars_. Understand as follows: we discretisize the data by defining $J$ bins and place data into bins accordingly. Each bin has $n_j$ entries. Sum of all entries $\sum_{j=1}^Jn_j=n$. We can interpret the number of observations in each bin as a random number and $n_j$ as the expectation value of the probability distribution. 

$$
\mu_j(\theta) = n \int_j f(x|\theta) dx \approx n \cdot f(x_c|\theta) \cdot \Delta x
$$

Most variables are self-explanatory. The $f(x|\theta)$ is the underlying probability distribution for our process with parameter $\theta$. Because we choose the bins so that variation of the probability distribution is not too large from bin to bin, we can replace the integral by the approximation. That is the value in the centre of the bin, times the bin width $\Delta x$, multiplied by the total number of events. 

We can then interpret the number of events in each bin $j$ as a random variable that follows a Poisson distribution!

$$
P(n_j|\mu_j) = \frac{\mu_j^{n_j}e^{-\mu_j}}{n_j!}
$$

The course book gives a different formula, but I am following the loved [Poisson Distribution | Wiki](https://en.wikipedia.org/wiki/Poisson_distribution) that I believe is right. The book seems to think that $k=n$ for the Poisson distribution, but then also confuses $\lambda=n$ which makes a mess of everything. The standard deviation of a normal Poisson distribution is $\sigma = \sqrt{\lambda}$. If $\lambda = \mu_j$, which I think it should, then use this value. The estimation is proportional to $n$ either way...

The error bars are defined from the standard deviation.

Note that if a bin has no entries, the expected uncertainty is calculated to be 0, which would clearly no be the case. The associated uncertainty we calculate is what _we observe_. error-bars indicate the uncertainty we would expect if we were to repeat the same experiment repeatedly. 

### Choosing the Right Binning

Choosing the right bin size, and number of bins, is very important, as mentioned before. Choosing them is not a straightforward answer. One such suggestions by Scott is:

$$
W = 3.49 \sigma N^{-1/3}
$$

Izenman (1991) gives a similar equation:

$$
W = 2(IQR)N^{-1/3}
$$

where $IQR$ is the interquartile range, the 75% percentile minus the 25% percentile. 

Sturges (1926) suggests $k$ bins:

$$
k = [\log_2n]+1
$$

> Gholamy, A., & Kreinovich, V. (2017). What is the optimal bin size of a histogram: an informal description.

[Choose Bin Sizes | Statistics How To](https://www.statisticshowto.com/choose-bin-sizes-statistics/) covers the above rules and a couple more. I would say that you want to choose the smallest number of bins to display the information you want to communicate about the data, and avoid gaps. 

There's no exact one choice that is always right. But we, in general, have two solid choices for binning:
+ Choose to equidistant bins where all bins have the same width.
	+ split $x$-axis into $J$ intervals of equal length. 
+ Choose to have variable bins where the width of the bins is _not_ fixed. 

The formulas assume we can measure the data with unlimited precision. Realistically, data is acquired with a measuring device with finite resolution. If the width of the bins is lower than said resolution we cannot always make a firm statement if an observation belongs to particular bin. Hence, the width of the bins should at most be matched by the resolution. 

We may also have _variable_ bin widths. On approach is to choose bins such that they all have the same number of elements. The advantage is avoiding empty bins or bins with only one entry. I think this begins to distort the data and mislead the audience as it is more difficult to determine the width of a bin. Keeping one element of the graph constant makes it easier to interpret in my opinion. 

### Kernel Density Estimation

We typically assume that data are concrete realizations of a random variable for a process described by a probability distribution. The histogram therefore allows us to sort of see what the underlying probability distribution looks like. As discussed above, choice of binning can impact the visualization. 

**Kernel Density Estimation** (KDE) approaches this challenge in a different way. We treat each measurement as the position of a suitable kernel instead of a single building block. We will use Gaussian distribution mostly as the kernel. Each measurement is taken as the central value of the Gaussian Kernel and the size of the kernel is controlled by further hyperparameters $h$, the kernel bandwidth. 

Getting to the formality of it...

The kernel density estimation tries to approximate a probability density function $f(\cdot)$ of a random variable $X$. We say we observe $n$ concrete realizations of this variable, or we have $n$ data-points $x_1,\dots,x_n$. 

We define the kernel density estimator as:

$$
\hat f_h(x) = \frac{1}{nh} \sum_{i=1}^{n}K\left(\frac{x_i-x}{h}\right)
$$

The factor $1/nh$ is a normalization and the function $K(\cdot)$ is the kernel. Typically a Gaussian function is used as the kernel. The kernel density estimator places a kernel at each observation, and the sum of all kernels then gives a smooth approximation of the original probability density function. The parameter $h$ controls how wide each kernel is and the smoothness of the resulting approximations. 

It has pros and cons:
+ Pros:
	+ resulting distribution is much smoother and less prone to small differences in measured data points.
	+ Can be used as a method to build and empirical probability distribution without relying on a theoretical model.
+ Cons:
	+ KDE plot no longer shows where the data are in the visualization. 
	+ Cannot be used to fit a theoretical curve
	+ Cannot include the finite resolution of a measurement device. 

### Two-Dimensional Histograms

p. 127

Each axis is used to depict a variable. Corresponding bin are increased if the value of the variable along the $x$-axis and value of the variable along the $y$-axis fall within respective interval. 

It looks like a blocky colour graph, different colours representing counts that fall in those categories.

Same considerations for choices of binning as for one and two dimensional histograms. 

## 5.3 - Box and Violin Plots

Histograms are good for really visualizing the data, but not for showing summarization characteristics. 

### Box Plots

The **Box Plot** is such a way to show quantitative information. Developed as a range bar and then later augmented. You can look up more historic information if you would like. 

Box plot visualizes the most common metrics used in descriptive statistics and typically consists of the following elements:
+ Minimal value in the data (excluding outliers)
+ Maximum value in the data (excluding outliers)
+ The median (50% quantile)
+ First and third quartiles (25% and 75% quantiles)
+ $IQR = Q_3-Q_1$

The **IQR** is short for _interquartile range_. You might expect it to be the median, but if not, it is a could indicate the skew.

There's no clear definition of an outlier. But it is common to consider points outside the following interval as **outliers**:

$$
[\ Q_1-1.5\cdot IQR, \enspace Q_3+1.5\cdot IQR\ ]
$$

The Box plot can be sub-optimal for heavily skewed distributions though.

### Violin Plots

Box plots are good but do not visualize the distribution and shape of the data themselves. 

**Violin plots** are a variation of the box plot that includes a visualization of the data themselves. The quantitative elements of the box plot such as the IQR and median are still shown on the central line. But instead of a box, a kernel density estimate is used to give/illustrate the shape of the data distribution. 

In the course book, the median is given by a small white dot and the IQR is the thick black line. 

## 5.4 - Scatter and Profile Plots

Now, what if we are looking to better understand the relationship between two variables?

### Scatter Plot

A **Scatter Plot** is a great tool for better understanding the relationship between two variables. We will start with some statistical jargon. The **correlation** ([correlation | wiki](https://en.wikipedia.org/wiki/Correlation)) is a statistical relationship, whether causal or not, between 2 random variables or bivariate data. Statistics generally measures it as the degree which a pair of variables are _linearly_ related. 

The Pearson correlation coefficient:

$$
\rho_{X,Y} = \text{corr(X,Y)} = \frac{E[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X\sigma_Y}
$$

The numerator is _covariance_. 

If there are not too many variables we want to investigate, we can turn to a scatter plot matrix as well. Each element of the scatter plot matrix shows the behaviour of the respective variable or variables. 

They are not super helpful when you plot too many data points as they basically just form a blob on the graph. There are of course multiple approaches to improve the visualization in these cases:
+ Project the marginal distribution (histogram) on the opposite but respective axis. That is, if you label the bottom $x$-axis, you project to the top. 
	+ Does not make the scatter plot look nicer, but you can better see the density of data, which looks flat with points drawn over each other in a normal scatter plot
+ You can also represent the scatter plot as a histogram, a 2-D histogram. The book shows an example using hexagonal bins, which look very nice. They are green, and the darker the bin represents the more dense the region. 

### Profile Plot

Scatter plots and 2-D histograms help illustrate how one variable behaves as a function of another, but they have some shortcomings. Neither approach can help express the relationship between the variables in terms of a fitted function or a theoretical model. 

Before we dive into the profile plot, we need to define something. A **Dispersion Parameter** is a metric for the variance or volatility of a distribution. A [dispersion parameter | Probability How To](https://probabilityhowto.com/dispersion-parameter/) describes the degree of variance inflation or overdispersion in general linear models. The course book says common parameters are:
+ standard deviation of the distribution of $y$ in each bin of $x$. 
+ error on mean (?)
+ root mean square (RMS) of distribution. 

Root Mean Square Error:

$$
x_{RMS} = \sqrt{{1 \over n} \left(x_1^2+\dots+ x_n^2 \right)}
$$

The **Profile Plot** is a one-dimensional representation of the 2-D data and constructed as followes:
+ $x$-axis representing one variable is discretized into $n$ bins. 
+ Bin borders are applied as constraints or selection criteria on the other variable for the $y$-axis.
	+ For bin $j$, we analyze all values of $y$ for which $bin-border_j \le x \lt bin-border_{j+1}$. 
+ Within each bin calculate a localization parameter (usually sample mean), and the _dispersion parameter_ (picking from the choices).
+ For each bin $x$:
	+ marker is placed in middle of bin such that its position in $y$ corresponds to mean we have computed as the localization parameter earlier. 
	+ Error bars in $x$ direction indicate the width of the bin, error bars in $y$ direction indicate the dispersion parameter. 

You can see which parts have move variability, revealing the structure of the data more clearly. It becomes a one-dimensional histogram whose data points can be used to extract the parameters of an empirical or theoretic model using a suitable fit to the data.

One thing I can see from the examples is that compared to the 2-D histogram, we cannot see the density of data again. 

## 5.5 - Bar Plots

We have been focusing on the analysis of continuous variables. However, we often work with categorical data as well. 

### Bar Chart

The **bar chart**, or bar plot, is one of the longest used visualization techniques. There are vertical and horizontal bar charts. One axis is the categories and the other is the data falling into said category. 

You can use the **stacked bar plot**, if you have categories within your categories, and data pertaining to them. Example could be sales per day of the week. And sub categories to see maybe how well the credit system is doing is sales on the customer loyalty program, and those not. 

### Pie Chart

A pie chart shouldn't need an introduction. It represents a category as 100%, like "pets" and then lists the sub categories, like "cat", "dog", "fish", etc... as percentages. 

That's it really...

---

## Knowledge Check

1: What is the best diagram form to display the relative sizes of a numeric distribution when there is less than a handful? 

Going with stacked histograms because we didn't cover heat map, I don't think it would be a pie chart, and a violin plot is only for 1 numeric distribution at a time. This is **incorrect**!

As such, a _violin-plot_ may be good, But also **incorrect**. 

The best diagram form to display the relative sizes of a numeric distribution when there is less than a handful is **pie chart**. Pie charts are particularly effective for small data sets, as they can accommodate a limited number of categories without becoming cluttered or difficult to read. Additionally, pie charts are well-suited for emphasizing the relative differences between the values, making them ideal for comparing the frequency of different categories.

Here's a comparison of the four options:

| Option | Description | Advantages | Disadvantages |
|---|---|---|---|
| Heat map | A color-coded matrix that represents the values of a data set. | Effective for visualizing patterns in large data sets. | Can be difficult to interpret with small data sets. |
| Stacked histograms | Histograms that are stacked on top of each other, showing the distribution of data across multiple categories. | Effective for comparing the distribution of a variable across different groups or categories. | Can be less effective for small data sets. |
| Pie chart | A circular chart divided into pie slices, each representing the proportion of a value in the data set. | Simple, easy to interpret, and can effectively communicate the relative frequency of each value in the distribution. | Can be less effective for comparing multiple data sets. |
| Violin plot | A combination of histograms and boxplots that shows the distribution of data and its central tendency. | Effective for visualizing the distribution of data, including its central tendency and spread. | Can be less intuitive to interpret compared to other options. |

Given these considerations, pie charts are the most appropriate choice for visualizing the relative sizes of a numeric distribution with fewer than a handful of values. Their simplicity, ease of interpretation, and ability to highlight relative differences make them a valuable tool for communicating data insights in a clear and concise manner.

2: Can you use a histogram to display a real random variable? 

Yes, you can use a histogram to display a real random variable. A histogram is a graphical representation of the frequency distribution of a dataset. It is a bar chart where the height of each bar represents the number of data points that fall within a particular bin of values. Bins are typically of equal width, but they can be adjusted to better represent the underlying data distribution.

Histograms are particularly useful for visualizing the distribution of real random variables because they can capture the shape, central tendency, and spread of the data. For instance, if a histogram shows a bell-shaped curve, this suggests that the data is normally distributed. On the other hand, if the histogram shows a skewed distribution, it indicates that the data is not evenly distributed across all values.

So, yes, histograms are a valuable tool for visualizing the distribution of real random variables. They can provide insights into the shape, central tendency, and spread of the data, helping us understand the underlying patterns and characteristics of the random variable.

Histograms and density plots are both common tools for visualizing the distribution of data, but they serve slightly different purposes and have different characteristics.

**Histograms** are bar charts that divide the data into a series of bins and count the number of data points in each bin. The height of each bar represents the frequency of the respective bin. Histograms are useful for displaying the overall shape of the data distribution and identifying any patterns or trends. However, they can be less effective for comparing distributions or showing subtle changes in the data.

**Density plots**, on the other hand, are smoother curves that represent the probability density function (PDF) of the data. The PDF describes the probability of observing a particular value of the random variable. Density plots are better suited for comparing distributions and highlighting subtle changes in the data. However, they can be less intuitive to interpret compared to histograms.

In summary, histograms are more suitable for visualizing the overall shape and frequency of data distributions, while density plots are better for comparing distributions and showing subtle changes in the data. Both techniques have their strengths and weaknesses, and the choice between them depends on the specific task and the desired insights.

Here's a table summarizing the key differences between histograms and density plots:

| Feature | Histogram | Density Plot |
|---|---|---|
| Data representation | Bar chart | Smooth curve |
| Purpose | Display overall data distribution | Compare distributions, visualize subtle changes |
| Strengths | Intuitive, easy to interpret | Effective for comparing distributions, highlighting subtle changes |
| Weaknesses | Less effective for comparing distributions, showing subtle changes | Less intuitive to interpret |

Going to say "yes, if you discretize the values."

3: Which plot allows you to display the spread of a big sample of data with a single dimension?

From the choices I would say the "box-and-whiskers".

4: Principles of readability of a data visualization include: 

"Avoid particular colours for colour-blind people." The other choices are also kind of legit, as we are meant to ensure everyone in a conference, from the back-to-front can view the data. 

5: To see if a sample of variable $(X,Y)$ shows a linear dependency between the two variables, one should use what plot? 

Because we are looking for the relationship between 2 variables, it's probably a "scatter-plot".
