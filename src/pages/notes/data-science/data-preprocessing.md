---
layout: '@layouts/NotesLayout.astro'
title: 'Data Preprocessing'
pubDate: 2023-09-19
description: 'Data preprocessing'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters"]
---

```yaml
title: Data Science
subtitle: DLMBDSA01
authors: Prof. Dr. Claudia Heß
publisher: IU International University of Applied Sciences
date: 2022
```

# Unit 3: Data Preprocessing

p. 51 - 66

Data typically comes from something, like a sensor, and is transmitted to a computer. When collecting mass amounts of data, sometimes errors can creep up either from the sensor or data transmission, or maybe some other source. 

There are many articles out there, but this [If Your Laptop or Phone Keeps Crashing, Maybe Blame Cosmic Rays | HowStuffWorks](https://science.howstuffworks.com/cosmic-rays-crash-electronics.htm) article talks about how cosmic rays can interfere with electronic devices.

Preprocessing is looking for missing values and incorrect values (outliers or values that do not make sense), and gracefully handling them. Additionally, preprocessing includes transforming variables with different scales into variables with one unique scale so all data carries the same weight. And also visualizing the data to discover errors and variable correlations. 

We will discuss the four activities from above:
+ Data transmission
+ Cleaning errors from data (cleansing?)
+ Transforming variables to a unique scale
+ Visualizing data variables

## 3.1 - Transmission of Data

Data transmission can be accomplished manually or electronically. Manual data transmission is simple yet prone to error, human error. Electronic transmission is performed using local and/or wireless area networks. 

Electronic transmission uses serial or parallel transmission links. 
+ Serial transmission: digital data are sent bit by bit over one channel.
	+ Cost less.
	+ order of data bits is important, dictating how data is organized by receiver.
	+ Considered more reliable because a bit is only sent if preceding bit was delivered. 
	+ achieved with either asynchronous or synchronous technique (below). 
+ Parallel transmission: multiple channels are used to deliver multiple data bits each time. 
	+ Faster.
	+ comes at higher cost and limited to short transmission distances. 

Asynchronous and Synchronous transmission:
+ Asynchronous
	+ bit stream has start and stop bits with variable period between transmissions.
	+ start bit tells receiver to expect transmission stream.
	+ Stop bit tells receiver transmission is terminated.
	+ Cheap and slow with additional overhead of start and stop bits.
+ Synchronous transmission
	+ Bit stream is combined into longer frames with constant period between transmissions.
	+ Any gaps among streams are filled with idle streams of bits of 0 or 1.
	+ It is fast, no additional overhead

Data transmission _rate_ is expressed in terms of number of bits transmitted per second (bps). 

## 3.2 - Data Quality, Cleansing, and Transformation

Issues in data are due to values being noisy, inaccurate, incomplete, inconsistent, missing, duplicate, or outlying. 

An **outlier** is a data record that is seen as an exceptional and incomparable case of the input data. There are _real_ outliers, those that are accurately recorded but truly different from other records, and _fake_ outliers, which are the result of poor data quality. 

Vast majority of data science time is spent cleaning data. The _prior_ in the Bayesian sense is the basis on which predictive models are built. Thus, resolving missing values and outliers will change the prior, which alters the basis on which the machine learning model operates. 

### Missing Values and Outliers

Several methods are typically used to resolve missing values and outliers:
+ Remove record
	+ recommended for large datasets where removing some records will not affect comprehension of data. 
	+ Only follow this method if it does not influence results. 
+ Replacement with interpolated value from neighbouring records
	+ Sounds more applicable to time series data.
+ Replacement of missing value or outlier with average
+ Replacement of missing value or outlier with the mode

Note that the median is not referenced. Additionally, you may introduce a new variable with "0" to denote normal data and "1" to denote records containing missing and/or outlier values that were handled. This ensures original information is not completely lost. 

### Duplicate Records

Typically duplicate records are removed to reduce compute time. However, they do not _degrade_ the outcome of the analysis.

### Redundancy

Different from the _duplicate records_, here we discuss redundant or irrelevant variables. This is why we would perform a correlation analysis between each pair of variables. Correlation can be easy to spot visually. 

Recall that correlation coefficient $\rho$ between 2 data variables is

$$
\rho(x,y)=\frac{\sum_{i=1}^n(x_i-\bar{x})(y_i-\bar{y})}
{\sqrt{\sum_{i=1}^n(x_i-\bar{x})^2} \sqrt{\sum_{i=1}^{n}(y_i-\bar{y})^2}}
$$

The correlation coefficient is a static measurement for the degree relationship between 2 variables. It ranges from $[-1,1]$. If $\rho=0$, there is no indication of correlation or independent variables. 

Correlation is a measure of linearity between variables. So, just because it is close to zero does not imply there is no relation, just not a linear one. If a relationship can be seen visually, it might be worth transforming a variable. 

You may also apply a dimensionality reduction approach, like **principal component analysis** (PAC). It sorts variables according to their importance, removing variables that have a minor influence on the data's variability. This would result in a dataset with fewer number of variables.

### Transformation of Data

**Data Transformation** is a requirement to basically convert data in the dataset into a form suitable for applying the data science models. There are 3 main transformation methods:
+ Variable Scaling
+ Variable Decomposition
+ Variable Aggregation

Because scaling requires formulas, I'll use headings to cover

#### Variable Scaling

By scales, we can talk about different units like dollars, centemeters, rooms in a house, litres of petrol, etc... Modeling techniques work on scaled variables (eg between $[-1, 1]$) to ensure variables are weighted equally. There are a few ways to scale a variable. 

##### Max Value Scaling

$$
x_i'=\frac{x_i}{\max(X)}
$$

##### Average Value Scaling

$$
x_i'=\frac{x_i-\bar{x}}{\sigma_x}
$$

I am using the $X$, which typically refers to the random variable that represents the entire set. Also, $\sigma_x$ is the standard deviation of said random variable. 

#### Variable Decomposition

Some variables may require further decomposition into more variables for better representation. I think this can be typical of a categorical variable, like colour. Instead of one variable of multiple colours, you might expand into binary/Boolean variables to represent each colour. Then, you might realize it only matters if the object is green or something. This seems to lend itself to the fuzzy logic, get to that later though.

Also, you might decompose a date into year, month, day, hours, minutes and seconds, day of week, week of month, etc... Then, you might discover that only the month is important or something. 

#### Variable Aggregation

Two separate variable may become more relevant when combined, adding, subtracting, multiplying, etc... Example being if you notice gross income and tax paid are both important variables, perhaps then the _net income_ is what you are after.

## 3.3 - Data Visualization

Common data visualizations include histograms, scatter plots, geomaps, bar chart, pie chart, bubble chart, heat maps, etc...

The course book continues to explain and show examples of different graphs. A geomap kind of self describing, very political or economical. It colours different regions or countries on a map to display the values in question, show the scale of the variable. 

A _combo chart_ can be like a line chart on top of a bar chart, shows different types of information from different types of variables. Suppose their scales on the axes would need to overlap or the chart wouldn't make sense though. 

Bubble charts can represent many concepts across several categories. The book shows chance of success as the size of the bubble, colour represents department, and the axes are monetary values. 

And the heat map shown in the book is of the continuous type. Colour scale can represent densities within a selected geographical area. 

---

# Video Lectures

This begins the data pre-processing discussion. We begin discussing Transmission Direction of data:
+ Simplex (directional)
	+ transmission takes place in just one direction
	+ sender $\rightarrow$ receiver
+ Semi-Duplex (intermittent)
	+ data are transferred with an offset in both directions (fax)
	+ sender $\leftrightsquigarrow$ receiver
+ Full-Duplex (simultaneous)
	+ Data are transferred in both directions simultaneously (telephone)
	+ sender $\leftrightarrows$ receiver

**Multiplexing** is an approach to transmit multiple signals over a common medium. This can be different frequency bands or a timely delay. 

**Synchronous** sending of data, which is data sent one piece at a time. The sender sends a _synchronisation_ message, which are bits like begins with $10101010\dots$ This is technically high-voltage, low-voltage, etc... This allows the receiver to calculate the rate/frequency the sender sends data to synchronise clocks. Or, if the receiver cannot handle the data input speed, it provides feedback. Always necessary. Then it sends data, eight bits or something.
+ faster in that it send entire frames of data once synchronized
+ It is a little more complicated though

We can work **Asynchronously**, we transfer data in bytes with a start and stop bit. The line is kept at like $111$ which is negative voltage. When a message will be sent, we change to positive voltage. The receiver then knows 8 bits are coming. 
+ It is simpler but slower
+ Also works with irregular intervals

We need to define rules how this works before we can send any data. We look now at an ethernet packet. Covers from Preamble to Check Sum. There's an _interpacket gap_ at the end which gives the receiver a moment to read the packet. Not counted in bits, but 96 cycles of the frequency. 

The synchronous and asynchronous methods come into play in the packet in the payload where the Transport layer protocol is defined. 

The Transmission Control Protocol (TCP) has many bits as flags, and one is a _synchronize_ bit. If the bit is 1, the sender want to synchronize. The receiver, if accepting, will send back the packet with (ACK) Acknowledge bit set to 1 as well. The the sender sends ACK = 1 but Syn = 0 to tell receiver the data is coming! There's no data up to this point, it's all handshake. 

More simple approach is **User Datagram Protocol**. It is _connectionless_ protocol that is faster than TCP but:
+ Sent packet is not acknowledged
+ Correct packet sequence is not ensured
+ A packet might be sent or received multiple times
+ interception of data is not recognized. 

It's good for just a request that does not need a complete connection, like to a Domain Name System. 

Now, actual pre-processing! How do we pre-process data?
+ missing values
	+ removal of record
		+ removal of records could target an important part of population, ones not comfortable answering said question. That could remove a feature or introduce bias. 
	+ interpolation - using average between neighbouring data
	+ overall average - using average of the value over all data
	+ overall mode - using the model of the value over all data
+ Dereplication
	+ removing duplicates - they can change weight of data
+ correlation analysis
	+ removing highly correlated variables - highly correlated data is similar to duplicate data, which can create bias and such. 

Besides classification, measuring distance between two objects is the second fundamental approach in data analysis. A **norm** is a function that describes the abstract extent of an object. Applied to a vector, it represents the magnitude of a vector, $\|x\|$. 

It is often used to **normalize** (balance) data of different magnitude. Again, in terms of vectors, it's the _distance_ between the vectors, $\|x-y\|$.

What are some of these distance measures?

The **L-Norm (Minkowski Distance)** (Lebesgue norm $L^p$ norm) is a generalization referring to the length of a vector of $n$ components given the $p$-th root of the sum or integral of the $p$-th powers of the absolute values of the vector components. Given $x=(x_1, x_2, \dots, x_n)$:

$$
L^p = \|x\|_p = \sqrt[p]{\sum_{i=1}^n|x_i|^p}
$$

Where $p$ is a non-zero real number. But that is merely the length of a vector. What about the distance. Pretend the distance is a vector...

$$
d(x,y) = \sqrt[p]{\sum_{i=1}^n(x_i-y_i)^p}
$$

**$L^0$-norm** is the number of non-zero components in a vector. It's not actually a norm because it doesn't behave homogeneously. It's a cardinality function that simply measures a number of non-zero elements. 

Ok, but we start with $L^1$-norm which is sum of absolute components. This is the **Manhattan Distance**. 

$$
d(x,y) = \sum_{i=1}^n|x_i-y_i|
$$

Depends on rotation of the coordinate system, but not the translation. Typical applications would be:
+ chess software
+ navigation system
+ measure differences in frequency distribution (e.g. DNA sequencing)

The name comes from cab drivers in Manhattan, as the roads have a grid like system, this would be how they would calculate the shortest distance. 

The $L^2$-norm is the **Euclidean Distance**. We should be familiar with this:

$$
d(x,y) = \sqrt{\sum_{i=1}^n(x_i-y_i)^2}
$$

Typical applications:
+ assessing similarity in frequency distributions
+ localization of sensor networks
+ statics (construction)
+ movement control in robotics
+ identifying molecular conformation

There's then the **Canberra Distance**, which is a normalized Manhattan distance that acts like a transform of the coordinate system. It is sensitive to small changes when both coordinates are close to 0. 

$$
d(x,y) = \sum_{i=1}^n \frac{|x_i-y_i|}{|x_i|+|y|}
$$

typically used:
+ measure disorder in ranked lists
+ identify server request anomalies for intrusion detection in cyber forensics. 

There is the $L^{\infty}$-norm referring to the largest vector in the vector space. 

$$
\lim_{p \to \infty} \sqrt[p]{\sum_{i=1}^n|x_i|^p}
$$

and is the limit of the $L^p$ generalization or the Minkowski distance in order $p$. For multiple vectors, it is the maximum difference between two vectors, aka **Chebyshev distance**. 

Typical Applications:
+ Identification of longest path for instruments moving on x-y plane, like plotters or overhead cranes.
+ Content-based image retrieval (CBIR) for comparison of colour, shape and texture. 

We have the **Mahalanobis Distance**, the measure of the distance between points of an observation and a distribution in terms of standard deviations:

$$
D = \sqrt{\frac{ (\vec{x}-\vec{\mu})^{\sf T}}{\Sigma} (\vec{x}-\vec{\mu})}
$$

Sigma is the covariance matrix. This is used to detect outliers and anomalies. In contrast to the Euclidean distance, the Mahalanobis distance is independent of weights of individual points. 

These measures are like very low-level learning for our Error Measures
+ Sum of squared difference (SSD)
	+ Like the Euclidean distance
+ Mean Squared Error (MSE)
	+ The normalized version of SSD
+ Mean Absolute Error (MAE)
	+ Normalized version of the Manhattan distance. 

You can find formulas above or somewhere. 

Now, we talk about normalisation and standardisation.

**Normalisation** can be done over a range or over the maximum. The formulas are the same and you will find them somewhere above probably. We use a normalisation approach if we don't know anything about the probability distribution. 

**Standardisation** is done via the Gaussian distribution where you divide by standard deviation or you go full Z-score on it

$$
x_i'= \frac{x_i-\mu}{\sigma}
$$

Again, these are things we do before we even start analysing data. Correlation analysis is an analysis method, but it's also useful for pre-processing. So we use it in both parts. 

At this point, the raw data is not in a form appropriate to answer our question. That is when we do transformation. From tabular to graphical is a way to visualise patterns. But we may also transform data logarithmically. We might also use the **Fourier Transform**. The continuous Fourier transform is given by:

$$
\mathcal{F}f(y) = \int_{-\infty}^{\infty} f(x) e^{-iyx}\ dx
$$

with $e^{-iyx}=\cos(yx)-i\sin(yx)$. Yes, you should remember this from the Advanced Maths notes. It stems from Euler's Formula:

$$
e^{i\varphi} = \cos(\varphi) + i\sin(\varphi)
$$

The Fourier transform can be seen as decomposition of a signal into sine waves of different frequency. 

Then we dive into an example... by explanation. But there's the cool graph you typically always see where there's a decomposition of a wave into individual frequencies. 

A time-dependent continuous signal can be represented as superposition or periodic sine functions:

$$
\mathcal{F}f(t)=\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty}
f(t)e^{-i \omega t}\ dt = f(\omega)
$$

The total frequency is a summation of many sine waves. You'll have to check the math notes but the coefficient in the start is the duration of a cycle, or a period I believe. 

This is important in data science because sometimes we need frequencies instead of time. Consider **Amplitude Modulation**. It's the superposition of two periodic oscillations in amplitude modulation (AM). The example has a carrier wave of 25Hz and a constant modulation at 400Hz signal frequency. 

How can this be used? **Sound Analysis**! it can show you if there's a cello in an orchestra. Like a frequency fingerprint. 

The continuous Fourier Transform is great mathematically, but computers must digitalize their data. This makes it more _discrete_. The **Discrete Fourier Transform** (DFT) is the equivalent of the continuous Fourier transform with signal $f(t)$ represented by $N$ samples in $x_k$ at time interval $T$:

$$
F[\omega] = \mathcal{F}f[x] = \sum_{k=0}^{N-1} x_ke^{-i \omega k T}
$$

This can be used for audio compression (cool). The signal can be decomposed into small segments, transformed, the resulting Fourier coefficients of non-perceptible high frequencies are discarded, and a back-transformation yields a compressed signal. So, you sort of trim the audio. 

This compression is great for pre-processing, either sharing or analysing. Like, why should we transfer frequencies that you cannot here anyway? 

Then the **Inverse Discrete Fourier Transform** (IDFT)

$$
f[x] = \mathcal{F}^{-1}F[\omega] = \frac{1}{N} \sum_{k=0}^{N-1} x_ke^{-i \omega k T}
$$

Same principle can be used for images, considering that an image can be represented as a frequency of colours. Think of the webpage, if the background is white, why should we send all of that information for each pixel? Send it for just one pixel. 

Image compression comes in lossless and lossy methods. But, if we don't need irrelevant information, we can accept the lossy methods. The idea is to transform RBG colours into something that removes redundancies and is easier to transfer. It is a _colour-space_ transformation. 

In data science, we want to find features, we want to highlight the most important aspects of data. We aren't removing _outliers_ here, but characteristics, and hopefully unimportant characteristics. This comes from a question. 


---

## Test Your Knowledge

The bit stream is combined into long frames, and there is a constant period between deliverables in which type of transmission?

> The answer is in _Synchronous Data Transmission_. It's important to know the other data transmission options like manual, parallel, and asynchronous. 

What is not an operation of data pre-processing?

> Data transformation, transmission, and cleaning are all parts of data pre-processing (supposedly). However, _Data Collection_ is **not** part of pre-processing. 

Why would we apply correlation analysis on a data set?

> We would apply correlation analysis to identify _redundant variables_. Correlation analysis will **not** help fill in missing values, nor identify duplicate records or outliers. 

What do we call the process of removing the variable's average and dividing by the standard deviation?

> This process is called _Variable Scaling_. Other things we may do but are not this include variable decomposition, variable correlation analysis, and variable aggregation. All are terms to be familiar with.

What kind of chart is a data visualization tool that shows portions of a whole, where the value of the variables sum to 100% of it...

> It's a _Pie Chart_. Know you charts, like area chart, combo chart, and bubble chart. 

