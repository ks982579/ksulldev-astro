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

