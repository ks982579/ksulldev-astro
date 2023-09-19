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

p. 56 