---
layout: '@layouts/NotesLayout.astro'
title: 'Introduction to Data Science'
pubDate: 2023-09-01
description: 'Just a brief introduction into what is data science and different topics and elements of the field.'
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

# Unit 1: Introduction to Data Science

p. 12 - 32

We will explore a framework to create values from data through the study of data science. You will learn...
+ Introduction into the importance of the field
+ how to outline main activities in data science and label different data sources
+ concepts of descriptive analytics and probability theory, with focus on Baysian statistics. 
+ how to identify a data science use case 
+ analyse a developed prediction model through evaluation metrics
	+ measure how it will be effectively implemented in orgainzation's business through key performance indicators. 
+ apply preprocessing techniques to raw data to improve its quality and validity for forthcoming predictive analysis
	+ emphasis on data visualization tools to help understanding input data.
+ How to develop data prediction model through common mathematical techniques of machine learning and artificial intelligence approaches. 

Study Goals 
+ Meaning of Data Science
+ Common terms and definitions in data science
+ different applications of data science
+ typical sources of data
+ types and shapes of data
+ Probability distributions and Bayesian Statistics.

## Introduction

[Data science - Wikipedia](https://en.wikipedia.org/wiki/Data_science)

**Definition - Data:** Facts, observations, assumptions or incidences that can be analysed to get meaningful information. 

**Definition - Information:** Patterns and relationships among data elements are instances of information. It is data that has been processed, interpreted, organized, structured or presented to be meaningful or useful. 

**Definition - Data Science:** A field concerned with the systematic practice of analysing data, exploring the information contained in the data, and creating useful predictions to advise and guide the decision making process. 

## 1.1 - Overview of Data Science

Data in its raw form is typically not useful. Data Science is concerned with the arrangement, analysis, _visualization_, and interpretation of collected data for the purpose of extracting embedded knowledge and useful information and predicting scenarios should new or different data be introduced. Output of Analysis can be used in by decision-makers.

**Definition - Data Mining:** The Process of discovering patterns in large datasets. 

Data Science is sort of a cross between many fields:
+ Artificial intelligence and machine learning
+ data mining
+ pattern recognition
+ knowledge discovery (KDD)
+ database storage and data processing
+ data visualization
+ statistics
+ neurocomputing

Per the book's Venn diagram, it looks like Data Science is also a subset of Knowledge Discovery, and Data Visualization also crosses over into every field as well, it at most just a little. 

**Definition - Business Intelligence:** A set of strategies for identifying, extracting, analyzing, managing, and delivering imporant trends relevant to business metrics. 

Another book, "Intelligent Techniques for Data Science" I believe, also covers Business Intelligence (BI) and Data Science, and how _business intelligence_ is very different in that it requires less computing skills and much more domain knowledge. BI is meant to generate a descriptive analysis of data for use in reporting the past behaviour of a business. Data Science uses predictive analysis for estimating a business's future behaviour. 

### Data Science Terms

+ **Artificial Intelligence:** concerned with development of models that enable a computer to _think_ and learn by itself through feeding of relevant data. 
	+ **Narrow AI:** (Hackernoon 2018) AI which is able to handle just one particular task
	+ **General AI:** A system able to cope with any generalized task which is asked of it.
+ **Machine Learning:** A subset of AI where numerical models are developed to predict probability of a future event or new data record. 
	+ **Supervised Learning:** machine learning task of inferring a numerical function for data with a predefined target output. 
		+ **Classification:** Forecasting technique that categorizes a dataset into predefined classes.
		+ **Regression:** Forecasting technique for determining how a target variable is related to the input variables and then predicting a value for this target variable given new data scenarios. 
	+ **Unsupervised Learning:** Blind machine learning task of inferring a binary function where the target output is not defined. Think "cluster analysis". 
	+ **Reinforcement Learning:** An objective is defined and the computer learns the best approach to achieve this objective typically through a rewards system. 
+ **Training and Testing Sets:** training set train the model and testing sets help measure performance of the model. 
+ **Data Variables:** Measurable and observable quantities about data records (eg height, length). 
	+ **Dimensionality reduction:** Process of reducing a dataset to a list of selected variable while ensuring it conveys similar information. Goal is to remove variables that are redundant and/or have little influence on the results. This helps reduce computational costs required to develop an ML model. 
+ **Types of Errors:** Error is the deviation of a predicted value from an actual values. 
	+ **Type I Error:** (Does this differ from statistics?) Represents number of false positives.
	+ **Type II Error:** Represents number of false negatives. 

Along with our errors are **sensitivity** and **specificity**

$$
\begin{align*}
\text{sensitivity} &= 1 - \frac{\text{type II error}}{\text{number of real positivies}}\\
\text{specificity} &= 1 - \frac{\text{type I error}}{\text{number of real negatives}}\\
\end{align*}
$$

Formulas seem a little backwards, but maybe that is what the minus one is for. 

Regression prediction model output is measured with metrics like absolute error, mean square error, and relative error. 

### Data Science Applications

+ Industrial processes applications
+ Business applications
+ Text data applications
+ Image data applications
+ Medical data applications

## 1.2 - Data Science Activities

There are 3 dimensions: 
+ Data Flow
	+ data collection
	+ data storage
	+ data accessing
+ Data Curation
	+ data cleaning
	+ data preservation
	+ data evaluation
+ Data Analytics
	+ statistical analysis
	+ modelling & simulations
	+ visual techniques. 

Each has its own set of challenges, solution methodologies and numerical techniques. 

### First Dimension: Data Flow

Starts with collection of data including a list of possible sources and attributes. Stored data must be transparent, complete, and accessible.

### Second Dimension: Data Curation

Put simply, **data curation** is the process of _refining_ collected data. There are different ways to do this:
+ Data preservation means data are cleaned from noise (typing errors in data entries) and fake outliers. Determine how to handle missing values. 
	+ Improving data quality typically requires detailed knowledge of domain in which data are recorded. 
+ Data description includes data structure, schemes, and metadata.
+ Data publication helps make data available to be used effectively.
+ Data security is necessary to secure and protect data. Also, determine legal frameworks and policies to be followed. 

### Third Dimension: Data Analytics

Data analytics uncovers hidden patterns in data and transforms data into relevant and useful information. Techniques include modelling and simulation, machine learning, artificial intelligence, and statistical analysis. 

## 1.3 - Sources of Data

Sources must be _trustworthy_ to ensure collected data are robust and high quality. There's a saying, "Garbage In, Garbage Out," with accompanying acronym GIGO. Sources include:
+ **Organizational and Trademarked data sources:** Large companies like Google and Facebook. Almost all companies possess their own data collected from internal systems. 
+ **Government data sources:** Federal governments are committed to providing open data. 
+ **Academic data sources:** Academic research creates large datasets.
+ **Web page data sources:** You may often find valuable numerical and textual data on web pages. This includes peoples attitude toward topics on social media. 
+ **Media data sources:** This includes videos, audios, podcasts that provide quantitative and qualitative information on the characteristics of user interaction. 

### Data Types

Think quantitative and qualitative data types. 

**Definition - Quantitative Data:** measurable values. Subtypes include
+ Categorical nominal do not have an inherent order (eg eye colour)
+ Categorical ordinal do have an inherent order (eg. salary grade). May come in either ordered or unordered sequences. 
+ Categorical binary data are divided into "this-or-that" categories.
+ Discrete, think countable data
+ Continuous is data attribute within a range, like temperature. 

**Definition - Qualitative Data:** information about quality of a good or service such as customer feedback. 

### Data Shapes

You have the following shapes

**Definition - Structured Data:** These data have high level of organization, such as information shaped in tabular forms of rows and columns. Rows may also be called "records". 

**Definition - Unstructured Data:** Data with unknown form or structure. Think text and multi-media content. It is data in raw form that requires some processing.

**Definition - Semi-Structured Data:** All data shapes between structured and unstructured. Data might not be tabular but do have organizational properties that make them easier to analyze. 

### The Five "V"s of Data

These are main obstacles to handling any type of data and describing data overloads.

**Definition - Volume:** The amount and scale of data. Volume of data captured is expected to double every two years. Experts believe with advances in computational power and decreasing storage costs, this will not be a problem. 

**Definition - Variety:** Data come from many sources, are of many types, and have different levels of complexity. Much data generated today can be considered unstructured. 

**Definition - Velocity:** Speed at which data are created, stored, analysed, and visualized. 

**Definition - Veracity/Validity:** Veracity refers to data quality. Validity refers to the value of data in extracting useful information for making a decision. Data contains _veracity_ with elevated levels of noise obtained during data collection or data processing. Data can also become outdated and invalid, even if noise-free. 

**Definition - Value:** Also called _usage value_, refers to the application the data are used for and the frequency of their use.

## 1.4 - Descriptive Statistics

Statistics provides a summary of the data. Several statistical parameters are calculated to describe a variable clearly (a Random Variable?). These include minimum, maximum, mean, median, mode, variance, and standard deviation. Definitions are better left to standard texts in statistics. 

Important to note that the mean, $\mu = \frac{1}{N} \sum p_iX_i$, is more sensitive to extreme values than the median. However, it is mathematically more convenient to work with. That is, many other statistical formulas can be derived from or with the mean. 

### Probability Theory

**Definition - Probability:** The chance of an even happening. 

Essentially, data science overlaps a great deal with statistics. And statistics is a branch of mathematics that is intertwined with Probability Theory. 

I think core topics should be left to text in probability theory, but sure we can cover some here as well. 

The probability of an event occurring must be between 0 and 1 inclusive. The probabilities of all possibilities must always sum to 1 as well. That is, an event must always occur, even if that event is "do nothing". Like rolling a die (singular dice). If you roll it, the chance of any side appearing, given a fair 6-sided die, is $1/6$. The sum that it lands on a side, given you roll the die, is the sum of all sides, or $6 \times 1/6 = 1$.

Please ignore the possibility that it would amazingly land and balance on an edge. It is so tiny we can say $P(edge) \approx 0$. 

If you roll the die, it cannot simultaneously land on two sides at once. That is, you cannot role a 3 and a 4 with the same die in one roll. Events of this nature are called **mutually exclusive**, and represented as

$$
P(M \text{ and } N) = P(M \cap N) = 0
$$

So, the capital $P$ represents generic probability function, and other capital letters typically represent _random variables_, being the input parameters. For now, think of it like a whole set of values (or outcomes) in an event space, each with its own probability of occurring given that an event has occurred, like given we rolled the die. 

In a Venn diagram, mutually exclusive events are non-overlapping fields. A direct result of mutually exclusive events is that summing their probabilities is as easy as actually summing them. That is, the probability of either a 3 or a 4 being rolled is $1/6+1/6=1/3$. 

$$
P(M \text{ or } N) = P(M \cup N) = P(M) + P(N)
$$

For events that are _not_ mutually exclusive, we then consider if the events are independent. **Independence** just means that the events occurring simultaneously do not affect the probability of the other event occurring, increasing or decreasing the odds. You can roll two die and the outcome of one does not affect the outcome of another. However, if you have a standard deck of cards and you draw one card, the probability of the second draw is dependent on the first because there goes from 52 cards to 51. Maybe there are better examples....

Anyway, mutually independent events that are not mutually exclusive have their own maths

$$
\begin{gather*}
P(A \text{ and } B) = P(A \cap B) = P(A) \cdot P(B)\\
P(A \text{ or } B) = P(A \cup B) = P(A) + P(B) - P(A) \cdot P(B)
\end{gather*}
$$

If you look at a Venn diagram, you can see that adding $P(A)$ and $P(B)$ double counts the $P(A) \cdot P(B)$ portion, which is why we subtract one part.

#### Conditional Probability

If two events are correlated, so perhaps neither mutually exclusive nor independent, we run into conditional probability. The probability that $A$ occurs given event $B$ has occurred is

$$
P(A \ | \ B)=\frac{P(A \cap B)}{P(B)}
$$

You can see that if they are independent events, the $P(B)$ factors would cancel out. 

In Data Science, _all_ predictions from developed models are probabilities or a probability density distribution (for regression models). A **probability density function** is a function whose value at any given sample in the sample space can be interpreted as providing a relative likelihood that the value of the random variable would be equal to that sample. 

#### Probability Density Function

The PDF as a function takes in a range of possible values as inputs and returns the probability of that value occurring. Density is a continuous concept, so the probability of one singe point is approximately 0. 

[Wiki - Probability Density Function](https://en.wikipedia.org/wiki/Probability_density_function)

For discrete distributions, we should refer to them as Probability **Mass** Functions. It appears the text confusing them. But no problem as when you integrate density, you can obtain mass. 

The text shows how to calculate probability as sum of event you desire over the total number of possible events. As the sum of two dice, you can create a more interesting graph for a probability mass function that actually appears kind of normal. 

### Probability Distributions

Every variable of a dataset meets a particular frequency distribution that reflects how often each value of this specific variable occurs. There are some general and classical distributions that appear more regularly for many datasets. A perk of associating to a known distribution is they can usually be described mathematically with closed form expressions of a _few_ parameters. 

We will only cover a few distributions. Since this is not a course in probability and statistics, I would refer readers to those notes (when I write them).

#### Normal Distribution

The **bell-curve**, appearing in nature at every turn. The normal distribution has $68\%$ of values within one standard deviations, $\sigma = \pm 1$. Then, $95\%$ within 2 standard deviations, $\sigma = \pm 2$, and $99.7\%$ within 3, $\sigma = \pm 3$. 

#### Binomial Distribution

Monitors success of an event occurring. Like a coin toss. 

[Wiki - Binomial Distribution](https://en.wikipedia.org/wiki/Binomial_distribution)

[Supported Functions · KaTeX](https://katex.org/docs/supported.html)

PMF is

$$
\begin{gather*}
f(k,n,p) = Pr(k;n,p) = Pr(X=k) = \binom{n}{x} p^k(1-p)^{n-k}\cr
\text{ Where ...}\\
{n \choose x} =\ _{n}C_k= \frac{n!}{k!(n-k)!}
\end{gather*}
$$

The "n-choose-k" is the _binomial coefficient_. It has some other convenient properties such as

$$
\begin{gather*}
E[X] = np \cr
Var(X) = npq
\end{gather*}
$$

Wiki also has a bit about moments, possible the moment generating functions. 

#### Poisson Distribution

A discrete probability distribution that expresses probability of given number of events occurring in a time interval. Events need properties like constant mean rate and independence from time since last event. 

[Wiki - Poisson Distribution](https://en.wikipedia.org/wiki/Poisson_distribution)

The PMF is

$$
f(k;\lambda) = Pr(X=k) = \frac{\lambda^ke^{-k}}{k!}
$$

It has a fun property of

$$
\lambda = E[X] = Var(X)
$$

An example might be how many calls a call centre receives in a day. There's also cosmic rays, radioactive decay and sales records!

#### Bayesian Statistics

Back to Bayes Theorem

$$
P(A | B)=\frac{P(B|A)P(A)}{P(B)}
$$

Naming convention?
+ $P(A)=$ _prior_
+ $P(B|A)=$ _likelihood_
+ $P(B)=$ _evidence_
+ $P(A|B)=$ _posterior belief_

An example is a drug test, and positive and negative results. Even if the test is 99% accurate, if the pool of drug users is relatively small, like 1%, then the chance a positive result actually means the user is on drugs is... the probability the user is on drugs given they tested positive.

$$
P(U|+) = \frac{P(+|U)P(U)}{P(+)} = \frac{0.99*0.01}{(0.99*0.01)+(0.01*0.99)}=0.5
$$

If the denominator is confusing, it is the probability of a positive result. That is 99% likely for active users (1%) _plus_ the unlikely false positive (1%) from non-users (99%).

But isn't that just **amazing**. If we have a known pool of users, we can determine the test is positive with 99% accuracy. But just relying on the test itself to determine who is a user can only give us 50%. That means if a person tested positive, it's a coin-flip whether or not they are actually a user.

This comes from the disproportionate sample sizes. Even with 1% error, the very large set of non-users ramps up the false positives, decreasing predictive power. 

This is why domain knowledge is very important. If we know the person does not have a history of drug abuse maybe we would set $P(U) = 0.01\%$ for their case. Or if you know the person actively does drugs, you might set $P(U) = 50\%$. In fact, just knowing there's a 50% chance they should test positive could increase the accuracy $99\%$. 

It's an example to show how prior probability of $P(U)$ is adjusted according to the posterior probability $P(U|+)$. This can be the result of designing a classifier to predict the occurrence of an output for a new training set and is the main idea behind the **Naïve Bayes Classifier** for categorical data of independent random variables. 

---

```yml
title: Business Analytics Using R
subtitle: A Practical Approach
authors:
	- Dr. Umesh R. Hodeghatta
	- Umesha Nayak
publisher: New York Apress
year: 2017
doi: 10.1007/978-1-4842-2514-1_5
iu_an: ihb.44870
```

> Just a side note, these will not be the most intensive notes taken.
## Ch. 5 - Business Analytics Process and Data Exploration

This chapter covers data exploration, validation, and cleaning required for data analysis. Good to know why we clean and prepare data, and some useful methods and techniques.

### 5.1 - Business Analytics Life Cycle

The purpose of business analytics is to derive information from data to help make good business decisions. There are about 8 phases to the business analytics project life cycle. 
+ **Phase 1** - Understand business problem
+ **Phase 2** - Collect and Integrate data
+ **Phase 3** - Preprocess data
	+ Raw data is typically not ready out of the gate. May have formatting issues, data type issues, missing values, etc...
+ **Phase 4** - Explore and Visualize data
	+ I want to skip this part, but it is important to understand distribution of data and relationships among variables. 
+ **Phase 5** - Choose modelling techniques and Algorithms
	+ You decide to use supervised or unsupervised ML techniques...
		+ Do you really choose? I thought that depends on the data... interesting. 
	+ Is it classification or regression
+ **Phase 6** - Evaluate the Model
	+ You must have your model to evaluate it. 
	+ This is measuring accuracy and performance in the field. 
	+ Requirements: _in-depth_ knowledge of statistics, ML, algorithms. 
+ **Phase 7** - Report to Managment and Review
	+ Repeat cycle if changes should be made.
+ **Phase 8** - Deploy model
+ *Phase 9* - not in the book, but maintenance is probably important once deployed. 

There's also the **Cross-Industry Standard Process for Data Mining** (CRISP-DM), which has the following 6 phases:
1. Business Understanding
2. Data Understanding
3. Data Preparation
4. Modeling
5. Evaluation
6. Deployment

### 5.2 - Understanding the Business Problem

Know exactly what the client really wants you to solve and document it. Determine availability of data, data format, quality, amount, and the data stream for final model deployment. 

Document business objective, data source, risks, limitation. Define timeline, required infrastructure to support the model, and expertise required to support project. 
