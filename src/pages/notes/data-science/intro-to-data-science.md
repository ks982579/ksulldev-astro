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

### 5.3 - Collecting and Integrating the Data

Quality data is most important factor determining the accuracy of results. Data can be:
+ Primary Source $\rightarrow$ Your own data source, internal database or own research.
	+ You design the type of information required to solve the problem, so it _should_ be good quality. 
+ Secondary Source $\rightarrow$ Data you buy or you did not collect yourself. This could be like reports for a government. 

A **data warehouse** is an integrated database created from multiple databases within the organization. Warehouse technology typically cleans, normalizes and pre-processes data before it is stored. Warehouse technology also supports _Online Analytical Processing_ (OLAP). 

**NoSQL** databases were developed to overcome limitations of relational databases and meet the challenges of enormous amounts of data being generated on the Web. Stores structured and unstructured data. 

#### 5.3.1 - Sampling

Unless you have _big data infrastructure_, only a sample of the population is used to building analytical modeling. A **sample** is a smaller collection of units from a population used to determine truths about said population. It should represent the population. Techniques depend on the type of business problem. 

**Probability sampling** ensures all members of the population have an equal chance of being selected for the sample. There are different variations:
+ Random Sampling
	+ Sample is just picked randomly, every member has an equal opportunity to be selected.
+ Stratified Sampling
	+ Population is divided into groups and data is selected randomly from a group, or strata. 
+ Systematic Sampling
	+ Selecting members systematically in a particular time or event (eg every 10th member).

Calculating sample sizes is left to statistics or research methodology books. 

#### 5.3.2 - Variable Selection

For finding good relationship between $Y$ and predictor variables $X$, you need enough data. How much?

$$
6 \times m \times p
$$

Where $m$ is the number of outcome classes and $p$ is the number or variables. The more records, the better the results. 

### 5.4 - Preprocessing the Data

Data in a database may be susceptible to noise and inconsistencies. Various sources and collection methods and multiple people handling data over time can cause this. You must understand data in terms of data types, variables and characteristics of variables, and data tables. 

#### 5.4.1 - Data Types

Data can be...
+ Qualitative data -> not numerical, but descriptive like type or colour.
+ Quantitative data -> Numeric data. Measurable data. 
	+ Discrete -> countable values. 
	+ Continuous -> values within a range or interval that is not countable. 
	+ Nominal Data -> Data whose order is not important. Book uses race or ethnicity as example. 
	+ Ordinal Data -> Data that has an order, or hierarchy. Like Olympic medals where Gold is first, and then Silver and Bronze. 
		+ Likert Scale Surveys -> strongly disagree - strongly agree
		+ The theme is that interval values (states) are not equal.
	+ Interval data -> meaningful intervals between measurements and no _true_ starting zero. Like temperature in Kelvin. Like ordinal data except intervals between values are equally split. 
	+ Ratio Data -> ratios?

#### 5.4.2 - Data Preparation

Now you know the data's types, study the data! Check values, find missing values, correct unknown characters, etc... this can all impact your model's accuracy. How do you handle missing values?
+ Ignore the values
	+ Not the best method but if a label is missing and you cannot interpret the value's meaning, it may be only option. 
	+ Also, If a record is missing more information that it provides...
	+ Deleting a few records in a large sample should not have a huge impact.
+ Fill values with mean, median, or mode
	+ The simplest method. 
	+ Not recommended for time-series data
+ Fill value with _attribute_ mean belonging to same bin
	+ You have to categorize data, but may improve estimates. 

It is important to predict the values based on the most probable value. 

What about handling duplicate data, junk and null values? You should clean these from the database before analytics process. 

#### 5.4.3 - Data Preprocessing with $\mathbb{R}$ 

There are multiple solutions to perform the same tasks, so here's one:
+ Understand variable types
+ Changing the variable types
+ Finding missing and null values
+ Cleaning missing values with appropriate methods

Variables in R are represented as vectors. Here are basic data types in R:
+ Numeric - real numbers
+ Integer - whole numbers
+ Factor - categorical data to define a category.
+ Character - data strings of characters

Basic operations in R are performed as vector operations (element-wise). The book then covers an example in R. They note that converting factors to numeric values may not give actual values. So, first they convert the value to a character and then a numeric. 

### 5.5 - Exploring and Visualizing the Data

This is the step of exploring and understanding what kind of data you have. You also need to understand the distribution of individual variables and the relationships between variables. Expect to use graphs and tables. 

Goals of exploratory analysis:
+ determine distribution and other statistics of the data set
+ determine whether data set needs normalization
+ determine whether data set can answer the business problem you are trying to solve.
+ come up with a blueprint to solve the business problem

> Provides example of showing a table in R. Then some graphs.

_Univariate analysis_ analyzes one variable at a time. A _histogram_ represents frequency distribution of the data, typically as a bar chart. I personally do not like the box plots, whisker plots, or box and whisker plots (all the same thing). They are a bit of work to just show a mere description of the data, like quartiles. The book shows the max and min values, and then the outliers beyond that, which is a nice touch.

There's also the _notched plots_, similar to the box plot.

_Bivariate_ data analysis is used to compare the relationship between 2 variables. The main goal is to explain the correlations of two variables. Then, you can suspect a causal relationship. If more than one variable is made on each observation, then multivariate analysis is applied. 

A **Scatter Plot** is most common data visualization for bivariate analysis and needs little to no introduction. Too little data makes it hard to draw an inference. Too much data can create too much noise to draw an inference. 

There's a **scatter plot matrix**, which takes pairs of variables and creates graphs in a table. 

```r
hou<-read.table(header=TRUE,sep="\t","housing.data")
str(hou) # shows table
pairs(hou) # creates scatter plot matrix.
```

So, each variable is represented on both the x and y-axis and their plots shown on the table. The diagonal would be plots of the same variable and is ignored (unless you changed the order of variable on the x-axis to differ from the y-axis). 

**Trellis Graphis** is a framework for data visualization that lets you examine multiple variable relationships. The trellis plot tries to solve the overplotting issue of scatter plots with different depths and intervals. 

A **correlation graph** is like a matrix of correlation values between two variables. The numbers can be transformed into a plot with colours and shapes, also refered to as a _heat map_. Note that sometimes variables are not related directly, but could be polynomial, exponential, logarithmic, inverse... 

```r
corrplot(corel, method="circle")
corel<-cor(stk1[,2:9])
corrplot(corel,method="circle")
corel # prints correlation plot.
```

You can also plot **density functions** to illustrate the separation by class. 

### 5.5.5 - Data Transformation

Your data might not always be the best. It could be skewed, not normally distributed, different measurement scales. This is when you must rely on data transformation techniques. Techniques include normalization, data aggregation, and smoothing. Then the inverse transformation should be applied.

We will go into detail about **normalization**. Techniques such as regression assume data is normally distributed and variables should be treated equally. However, different measuring units can lead to variables having more influence that others. All predictor variable data should be normalized to one single scale. 
+ Z-score normalization
	+ $X' = (X - \mu_X) / \sigma_X$
	+ This creates a new value around the mean as a ratio to its standard deviation. 
	+ Useful if we do not know the minimum or maximum values or if an outlier dominates results. 
+ Min-Max Normalization
	+ $X'=((X-Min_X)/(Max_X-Min_X))(\text{Range}(X'))+Min_{X'}$
	+ Where $\text{Range}(X') = Max_{X'} - Min_{X'}$
	+ This is like a mapping. I suppose you can set you own new min-max values. 
+ Data Aggregation
	+ Application of mathematical functions, such as multiplication, average, etc... to one or more variables to create a new set of variables. 
	+ Sometimes you would use log, exponential, or Box-Cox transformation. 

### 5.6 - Using Modeling Techniques and Algorithms

Ready to perform further analysis. Analytics is about explaining the past and predicting the future. 

#### 5.6.1 - Descriptive Analytics

**Descriptive Analytics** explains the patterns hidden in data. You can group observations into the same clusters and call it **cluster analysis**. There is also **affinity analysis**, or _association rules_, that can uncover patterns in a transactional database. 

#### 5.6.2 - Predictive Analytics

There's either classification or regression analysis.
+ Classification
	+ Basic form of data analysis where data is classified into classes. 
	+ Binary classes like "approved" or "denied" may be helpful to think about. 
	+ The classification model is tasked with determines the class of data from a new data set not seen before.
+ Regression
	+ Predicting value of numerical variable.

Then there is _Logistic Regression_, which is also described in [this Wikipedia article](https://en.wikipedia.org/wiki/Logistic_regression), that is like continuous classification. Classification isn't true or false, but more like a probability like 80% sure. 

The typical logistic function is like

$$
p(x) = \frac{1}{1+e^{-(x-\mu)/s}}
$$

Where $\mu$ is the location parameter and $p(\mu) = 1/2$. And $s$ is a scale parameter. 

#### 5.6.3 - Machine Learning

This is about making computer learn and perform tasks better based on historical data. Instead of humans writing code, we provide the computer instructions on how to build mathematical models. The computers build the models and can perform tasks without the intervention of humans. 

Machine learning has two main flavours: supervised and unsupervised. There's also reinforcement learning, not discussed here apparently.
+ Supervised ML
	+ Computer builds model with help of training data set. 
	+ The model is based on an iterative process.
	+ Classification and regression can be grouped under this category. 
	+ Common classification supervised-learning algorithms include
		+ Support vector machines
		+ naïve Bayes
		+ k-nearest neighbour
		+ decision trees.
+ Unsupervised ML
	+ The book says there's no training data, but I don't think that is the best way to say it. There is data to train with, but there's no _target variable_ to predict. 
	+ Examples of unsupervised learning
		+ Association rules
		+ Clustering
	+ The computer clusters records based on patterns it finds. 
	+ Evaluation of the model requires further analysis. 

### 5.7 - Evaluation the Model

You need to evaluate your model to understand if it is good at making predictions on _new_ data. To remove bias from assessing with data from development, the data must be partitioned into:
+ Training set
+ testing set
+ validation set - sometimes optional

Let's discuss the different sets:
+ Training set
	+ The largest set, typically 80-90% of the data depending on how large total is.
	+ More data usually means better performance.
+ Testing set
	+ Smaller subset used to assess performance of model on _new_ data. 
+ Validation
	+ Small set used to _fine-tune_ model performance and reduce overfitting problems.
	+ This helps the model extend predictions and generalize results. 

The usual analogy is studying for a test. The training set is the course material, the validation might be practice exams, and the testing set is the maths test. 

#### 5.7.1 - Cross-Validation

To avoid bias, the data set is portioned _randomly_. If you have limited amount of data, you achieve an unbiased performance estimate with the **k-fold cross-validation** technique. This divides data into "k-folds" and builds the model using $k-1$ folds. The last one is used on testing. You repeat the process $k$ times, and each time the test set is different. 

#### 5.7.2 - Classification Model Evaluation

To assess performance of classifier, we look at number of mistakes. This is the _misclassification error_, the observation belongs to a class other than what was predicted. A **confusion matrix** gives an estimate of true classification and misclassification rates. 
+ Accuracy -> Correct predictions
+ Precision -> ratio of positive cases correctly identified
+ Recall (sensitivity) -> ratio of actual positive cases that are identified correctly
+ Specificity -> ratio of actual negative cases identified correctly

A **Lift Chart** is used for marketing problems by helping to determine how effectively an advertisement campaign is doing. The _Lift_ is a measure of effectiveness of the model, calculated by ratios of with and without model. So, it sounds like a _placebo-controlled trial_. 

A **Receiver Operating Characteristic** (ROC) chart is similar to a lift chart with true positives plotted on the y-axis, and false-positives on the x-axis. Good for representing the performance of a classifier. That is Sensitivity vs Specificity. The Area under the curve (AUC) should be between $0.5-1$. 

#### 5.7.3 - Regression Model Evaluation

There are many metrics for regression
+ Root-Mean-Square Error

$$
\text{RMSE} = \sqrt{\frac{\sum_{k=0}^n(\hat{y}_k-y_k)^2}{n}}
$$

### 5.8 - Presenting a Management Report and Review

Now, your model is presented to business leaders. This requires business communication. If changes are required, you would start over here. Usual topics of discussion are:
+ Problem description
+ Data set used - and sources of data
+ method used to create model
	+ Goal is to convince management that your approach is moving the business in the right direction to solve their problem. 
+ Model deployment Prerequisites
	+ data requirements
	+ Hardware and software requirements
+ Model deployment and usage
	+ how to...
+ Issue Handling
	+ Present process for recording issues and how they will be analysed and addressed. 

### 5.9 - Deploying the Model

Your model may perform predictive analytics or simple reporting. Note that the model can behave differently in the production environment because it might see completely different data. This may require revisiting the model for improvements. 

Success depends on
+ Proper hardware
+ Proper programming 
+ proper data integration and cleaning
+ effective reports, dashboards, views, etc... to be used by end-user
+ effective training to the users of the model. 

What are typical issues observed?
+ Hardware issues like note enough memory, RAM, or CPU power. 
+ Programs used are not effective in using parallelism and hence reduce possibility of effectively using results.
+ Data integration from multiple sources in multiple formats. 
+ Data sanitization or cleaning before use.
+ not recognizing changes in data patterns
+ Not having redundant hardware for backup. 

There are many more, but that's just a general outline. 


---

# R

Should probably have an $\LARGE{\mathscr{R}}$ Section but this will do for now. Check out this article [from DataQuest.io](https://www.dataquest.io/blog/installing-r-on-your-computer/) about the R language. It is a _lexically scoped_ language, AKA static scoping. So, structure determines the scope of a variable, and not most recently assigned. 

```r
x <- 5 # What is this <- shit?
y <- 2

multiple <- function(y) y*x

func <- function() {
	x <- 3
	multiple(y)
}
func() # returns 10
```

Although we define an `x` in the `func()` function, the `multiple()` function refers to the `x` in the global scope. If this is confusing, that is OK. These functions are impure and I wouldn't recommend this architecture for anything other than learning purposes. 

If you declare a `y` in the `func()` function, that will have an affect because we pass `y` in as an argument. 

To download, for the [CRAN.R-Project.org](https://cran.r-project.org/) and download it. It comes with its own basic GUI. You can also look for **RStudio IDE** or use a Jupyter Notebook, which requires an R kernel. This may require Anaconda. 

---

# Video Lecture

Data Science resembles sciences in that:
+ Use scientific methodology
+ explore patterns or relationships that may not be apparent
+ generate models
+ are interdisciplinary

Data Science is different from other sciences because it focuses on:
+ digitalised data as primary source of evidence
+ mathematics and computation to analyse data.
+ predictive models and decision-making

Knowledge pyramid:
+ Top:
	+ Abstraction
		+ Theory - Explanation
+ Middle:
	+ Reasoning: 
		+ Knowledge - understanding 
		+ Information - Semantics
		+ Metadata - context
+ Base:
	+ Interpretation:
		+ Data - facts and results from measurements

Data is not super useful without _context_, which is why we add metadata. We interpret data to create information, which provides meaning. Then we can understand it and relationships to create knowledge. That eventually leads to a theory, basically and explanation. 

Data are like facts, they are quantity or quality. There are ways to categorise data, and three ways are:
+ Time:
	+ Analog - continuous (like a musical note)
	+ Digital - time-discrete
+ Type:
	+ quantitative - amount
	+ qualitative - state
+ Structure:
	+ structured - think database
	+ semi-structured - think HTML
	+ unstructured - documents

Metadata is beyond data, it provides context. So, it tells you what data is about. It also comes in three flavours:
+ Describe:
	+ header - identification
	+ state - condition
	+ unit - magnitude
+ Measure:
	+ scale - ordinal, ratio
	+ series - continuous, discrete
+ Classify:
	+ typology - types
	+ taxonomy - hierarchy

A unit and data give things like measurements. 

Now discussing discrete and continuous quantitative variables. There's also quantitative variable scales:
+ Intervale scale: like days or degrees Celsius... values give a meaningful interval but not a _natural_ zero. Celsius has an _arbitrary_ zero, where water freezes. 
	+ saying that 10 degrees is twice as hot as 5 is only correct numerically. But since there's a whole slew of negative values to account for, it's not a true doubling of temperature. How strange to think of it like that. 
+ Ratio scale: values have a meaningful ratio and a natural zero (non-arbitrary). This is like a length or temperature in Kelvin. Such a _natural_ zero allows for creating meaningful ratios. 

Qualitative variables are always categorical and discrete. You can name with numbers, but it is still qualitative. There are no scales, that wouldn't really make sense they say. We have types of categories though:
+ Binary (dichotomous) = 2 categories.
+ Nominal = multiple _unordered_ categories, order wouldn't matter.
+ Ordinal = multiple _ordered_ categories. 

Typical business scenarios try to convert unstructured data into structured data. Documents are not structured for computers, only to humans. We add metadata to make it at least Semi-Structured, like a webpage. We use HTML to give tags for web browser to read and understand. The goal is to get enough metadata to create tables of structured data. 

This leads us to Data Science Activities. There are three activity containers to remember:
+ **Data Flow** - data must be obtained
	+ collection
	+ access
	+ storage
+ **Data Curation** - data must be cleaned
	+ cleaning
	+ description (using metadata)
	+ security (make sure data is long term stable and secure)
+ **Data Analytics**
	+ visualisation
	+ modelling
	+ simulation

Cleaning data can be a lot of things, checking the dataset for accuracy, completeness, and adherence to predefined rules or constraints:
+ removal of:
	+ outliers - you do not want to include bias.
	+ duplicates - can affect distribution.
	+ invalid entries
	+ incomplete records
+ impute missing data (like with median or average)
+ correct errors, typos, or inconsistent data formats.
+ normalise values to a default scale or range
+ standardise values to ensure consistent units and representation.

Feature extraction is like taking the maximum temperature from a day. Transformation of data can be different data types, like:
+ calculation of frequencies from survey responses
+ coding of text passages

We can also transform data by changing visualizations:
+ Scatter plot
+ heat map
+ bar chart

We can also change transform the data domain, which is more mathematically complicated:
+ Integral transformations (Fourier, cosine, wavelet transform)
+ Colour space transformation. (image processing)

This leads to modelling! Models are abstract and simplified representations of complex systems or phenomena in a concrete scenario. In basic terms, they explain a causational relationship. Models can be mathematical, statistical, logical computational, or visual representations. They include classes and relationships and if we can quantify the relationship, we can: explain, simulate, and predict!

We hope towards statistics now. **Descriptive statistics** covers the methods for summarizing data via:
+ calculation of descriptive measures,
+ appropriate visualizations

Some useful terms perhaps... Descriptive statistics is used to describe features of a data set through measures of:
+ central tendency (mean, median, mode)
+ dispersion (range, quartiles, variance, standard deviations)
+ distribution (normal distribution, skewness, kurtosis)

Overall goal is to identify the distribution of the population, which is the foundation for inferential statistics. Underlying distribution would have some _static_ parameters, as well as the data used. Distribution functions are typically characterized by 3-parameters:
+ location - defining the central tendency, such as $\mu$ for a normal distribution.
+ scale - defining the dispersion, such as $\sigma$ for normal distribution
+ shape - defines form by one or more parameter, such as $\alpha$ and $\beta$ in beta distributions. 

We then look at the Poisson Distribution (discrete). It models the number of events occurring within a given time interval. Below is the probability mass function and the cumulative distribution function for a Poisson distribution.

$$
\begin{array}{cc}
P(x) = \frac{1}{x!} \lambda^xe^{-x} & \text{PMF}\\
F(x) = \displaystyle\sum_{i=0}^x \frac{1}{x!}\lambda^xe^{-x} & \text{CDF}
\end{array}
$$

$\lambda$ happens to be the mean and I believe variance for this distribution. 

The Normal Distribution is a continuous distribution. 

$$
\begin{array}{cc}
P(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-(x-\mu)^2/2\sigma^2} & \text{PDF}\\
F(x) = \frac{1}{\sqrt{2\pi}}\displaystyle\int_{i=-\infty}^x e^{-x^2/2} & \text{CDF}
\end{array}
$$

The **standard normal distribution** is when the mean is 0 and standard deviation is 1. There is also an example of a probability tree to show what the values of the standard deviation represent which is very interesting. 

We are looking at Normal Distribution again. 

Then we look at Venn Diagrams to represent classes. Overlapping areas represent similarities of classes. Then, we express:
+ Intersection = A and B
+ Union = A or B
+ Symmetric Difference = A XOR B
+ Relative Complement - this is like A that is not part of B, so the intersection is removed. 

Now we can represent Joint and Disjoint events. Below is the probability that either A or B occurs, or both:

$$
P(A \cup B) = P(A)+P(B)-P(A \cap B)
$$

Looking at a Venn diagram, you can see that the intersection would be included twice if we just add the sets. Now, for the $XOR$, same thing but:

$$
P(A \Delta B) = P(A)+P(B)-2P(A \cap B)
$$

Apparently referred to as the _symmetric difference_.

And if events are disjoint (mutually exclusive), the intersection is the empty set, so you don't need to worry about it at all. 

This naturally leads to unconditional and conditional events. 
+ Unconditional events - an event that does not depend on a condition. The only condition that applies is the sample space $P(A|\Omega)$. 
+ Conditional event - an event that depends on a condition, like another event occurring. 

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

We look at a _probability tree_ which basically tracks the sequence of events of all possible events. It helps you see:
+ what is an independent probability of and individual event
+ what is the dependent probability of consecutive events
+ what is the conditional probability given another event happened or outcome occurred.

We cover an example of a tree with a box of balls, say 2 red and 3 blue colours. Going over for terminology is important.

Q1: Probability of drawing a red ball on first attempt?

That is $2/5$ 

Q2: Probability to draw a red ball _individually_ in any second attempt?

This means if we previously drew a red, we have $1/4$, and if we drew a blue the next red is drawn at $2/4$. So total probability is $1/4+2/4=3/4$. 

Note: with the word "_individually_" we actually do not want the combined probability. If asked like this on an exam, give individual cases and associated probabilities, not conditional either apparently. 

Q3: What is probability to draw two red balls in a row?

I know there is a distribution to solve this, forgot what it is. He says it is $1/10$ as it is intersection of draw red and draw red. The question should say within first 2 attempts. 

Q4: What is probability to draw any red ball in second consecutive attempt?

It is sum of 2 intersections. $2/5+1/4$

Q5: What is the probability that the first ball drawn is red given the second drawn is blue?

This is true conditional probability.

$$
\begin{align*}
P(A|B)&=\frac{P(A \cap B)}{P(B)}\\
&=\frac{P(A)P(B)}{P(B)}\\
&=\frac{(2/5*3/4)}{(2/5*3/4)+(3/5*2/4)}\\
&=\frac{3/10}{3/10+3/10} = 1/2
\end{align*}
$$

We use fact that they are independent events. I was nearly there but lost confidence. Don't lose confidence!

We now must look at Bayes Theorem, because it allows us to flip the conditional event, solving for new probabilities. 

$$
P(A|B) = \frac{P(B|A)\cdot P(A)}{P(B)}
$$

Where:
+ $P(A|B) =$ Posterior probability
+ $P(B|A)=$ Likelihood
+ $P(A)=$ Prior probability (belief or knowledge)
+ $P(B) =$ Probability of evidence

A Derivation is provided but isn't too tough. The concept is used throughout Bayesian statistics and creates new distributions based on prior knowledge. 

**Inferential statistics** covers methods to generalizing data, such as prediction, estimation, and hypothesis testing. Allows researchers to assess their ability to draw conclusions that extend beyond the immediate data:
+ whether sample represents the population
+ if there are differences between two or more groups
+ if there are changes over time (might use Markov things)
+ if there are relationship between two or more variables.

Example of inferential statistics include:
+ linear regression
+ correlation
+ cross-correlation
+ autocorrelation
+ convolution
+ artificial neural networks

We now go into Linear Regression, which relies on general model for _ordinary least squares_. I think the formulas would be listed above or else where. 

When we use ANN (artificial neural networks), we do something very similar to nature with how the brain works. We are shown a biological neuron diagram...

The presentation draws a parallel, which is nice. So the inputs are similar to the _dendrites_ and then the _synaptic strength_ are the weights we give to the inputs as they come in. In the nucleus, we sum all the individual weights to get a _net-weight_. The _Axon hillock_ is represented by a transfer function, example being a sigmoid function giving an "S" shape. And it provides an output if the Axon threshold is met, or something like that. 

Lets dive a bit deeper into an **Artificial Neural Network**. Input values are passed into the input layer of your ANN model. Then, the processing happens in all the hidden layers. Finally, an output comes out of the output layer. All nodes in one layer are attached to all nodes in the proceding layer. Then, we train! 

We start with feedforward, where information is passed in a forward fashion. During training, if the output is incorrect, we perform a _backpropagation_ to calculate the difference to a desired output and correct the weights accordingly. 

Supervised learning has inputs and labels. We tell the model what we expect exactly. Good for predictions and classification.

Unsupervised learning is more complicated and we only provide a model/network with inputs and ask it to create its own labels. It can be used for classification. This network can help us discover hidden patterns or relationships! 

We also have reinforcement learning. We make a model and:
+ it observes current state of environment
+ Chooses an action based on current policy 
+ performs action
+ observes new state
+ Adjusts parameters accordingly. 

This helps discover optimal strategies.

Short Summary:

Data and metadata can be transformed into information which can be derived into knowledge. 

We find some _raw_ data and clean it to have regular data. Then, we extract useful features from data and classify those features to find patterns. Then, those patterns are learned to create a relationship in the data. Once we have relationship, we can create models for predicting. 

If we do the leg-work up to the _learning_ step, then we have supervised learning. If we don't know how to classify the data, then we perform unsupervised learning. And if we are quite lazy or there is too much data and features to figure it all out, we let **Deep Learning** extract the features for us. Then, if we only feed a system _raw data_, we are probably going for reinforcement learning. 

Good to have an overview like that. 

---

## Check Your Understanding

> Which of the following is the blind machine learning task of inferring a binary function for unlabeled training data?

This is _unsupervised learning_.

Incorrect choices include regression, supervised learning and data processing. The last isn't machine learning. The first two are supervised. 

> The true positive rate achieved by a developed machine learning model is defined as...

This is when a "yes" record is correctly labelled "yes". _Accuracy_ is the total of correctly labelled "yes" and "no" records. _Precision_ is the correctly labelled "yes". 

However, the answer is not "Precision". 

Possible Choices:
+ Type II error
+ Sensitivity -> ratio of actual positive cases correctly identified.
+ Specificity
+ Precision

> In which process are the data cleared from noise and the missing values are estimated/ignored?

This is part of data curation process. It is _Data Preservation_. 

Incorrect choices are: data description, data publication, data security, all topics to be familiar with. 

> The data source which crosses all demographical borders and provides quantitative and qualitative perspectives on the characteristics of user interaction is the…

"Media includes videos, audios, and podcasts that provide quantitative and qualitative information on the characteristics of user interaction. Since media crosses all demographical borders, it is the quickest method for businesses to identify and extract patterns in data to enhance decision-making."

Reader should be familiar with other sources as well!

> The probability p(A|B) measures…

The probability that event $A$ occurs given that event $B$ has occurred. 
