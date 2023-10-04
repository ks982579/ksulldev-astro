---
layout: '@layouts/NotesLayout.astro'
title: 'Data Processing'
pubDate: 2023-10-01
description: 'Explaining concepts and stages of data processing'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "processing"]
---

```yaml
title: Data Science
subtitle: DLMBDSA01
authors: Prof. Dr. Claudia Heß
publisher: IU International University of Applied Sciences
date: 2022
```

# Unit 4: Processing of Data

pp. 67 - 80

Learning objectives include:
+ Understanding concepts of data, information, and data processing.
+ Understanding the stages and cycles of data processing.
+ Understanding the different methods and types of data processing.
+ Understanding the output forms and file formats for processed data.

## Introduction

**Data processing** is the extraction of useful information from collected raw data. Similar concept to industrial production, raw inputs go in (data), labour transforms inputs (data processing), and a useful product comes out (insights and information). 

Benefits of data processing to organizations:
+ Better analysis and presentation of organization's data.
+ Reduction of data to only the most meaningful information.
+ Easier storage and distribution of data.
+ Simplified report creation.
+ Improved productivity and increased profits.
+ More accurate decision-making. 

## 4.1 - Stages of Data Processing

p. 69

Data processing transforms data into information. Stages are:
+ Data collection
+ Data preparation
+ Input
+ Data analysis
+ Data interpretation
+ Data storage

These stages should be completed in order, but can also be cyclical. 

### Data Collection

After raw data are collected from a source(s), they are converted into a computer friendly format to form a _data lake_.

**Definition - Data Lake**: A repository of data stored in both its natural and transformed formats. 

collecting data can be difficult for noisy, redundant, and contradicting data. 

### Data Preparation

This is the pre-processing stage where data is cleaned, organized, standardized, and checked for errors. This stage may require significant domain knowledge and is meant to handle missing values, and eliminate redundant, duplicate and incorrect records. See the previous section in Data Processing. 

### Data Input

After the data have been prepared and cleaned, they are input into their destination and translated into a format for the consumers to understand. An example of the destination is a _data warehouse_.

**Definition - Data Warehouse**: A store gathered from data sources and used to guide decision-making in an organization. 

To understand the data, one needs to have a grasp of their key characteristics such as
+ distribution
+ trends
+ attribute relationships

### Data Analysis

May be performed through multiple threads of simultaneously executed instructions using machine learning and AI algorithms. This is probably the _heart_ of the process, the one that makes many YouTube videos. 

This stage can involve converting data into more suitable format, ensuring correctness, _distilling_ detailed data into main points, and combining multiple groups of data records. 

Data analysis has its own 5 steps:
+ Feature Extraction
	+ Data are represented by a number of fixed features which can be categorical, binary, or continuous. 
	+ **Data Feature**: (AKA variable) are aspects of the data like name, date, age, etc...
+ Correlation Analysis
	+ To determine which pairs of data features have the highest degree of correlation. 
	+ One in a pair can often be removed from the feature set if highly correlated. 
+ Feature Selection
	+ Information and relevant features are selected by applying correlation analysis.
	+ Relevant features have low degree of intercorrelation with other features and high level of changeability across data records. 
	+ Domain expert may be needed to guide the process and review the list of suggested relevant features.
+ Machine Learning
	+ A _learning mathematical_ algorithm is developed to extract knowledge from and uncover properties of the data and predict future outcomes if new data is provided. 
	+ Descriptive analytics are used to understand underlying data patterns
	+ Predictive analytics are used to estimate new or future data based on performance
	+ Prescriptive analytics are used to optimize the dependent action.
	+ Also determines which learning technique to use: Unsupervised or Supervised.
+ Extracting Valuable Insights
	+ After the model is evaluated for accuracy and performance (previous step?), the most important and relevant information contained in the input data is retrieved and presented. 
	+ The model should be ready for predicting future events, gains/losses of a business under different scenarios. 

### Data Interpretation

Outcomes of machine learning predictions must be translated into _actions_. To do this, those outcomes must be _interpreted_ to obtain beneficial information for guiding decisions. 

### Data Storage

Finally, we store the data, instructions, developed numerical models, and information for future use. It should be stored to be accessed easily and quickly when needed. 

## 4.2 - Method and Types of Data Processing

### Manual Data Processing

**Manual Data Processing** is not _primitive_, but was used when technology was young and expensive. This is the paper and pencil way to perform calculations and data transformations. Very prone to human error and takes a lot of time.

### Mechanical Data Processing

Data is processed with mechanical, but not computer, devices. Things from printers and calculators to typewriters. Still prone to errors.

### Electronic Data Processing

**Electronic Data Processing**  is data processed automatically with computers and software. Both fast and accurate. 

Types of electronic data processing:
+ Batch
	+ input data and/or output information are grouped into _batches_ to permit sequential processing. 
+ Online
	+ Utilizes internet connections and online resources, like cloud computing.
+ Real-time
	+ An approach that responds immediately to changes in inputs and the requests of outputs. 
	+ Online processing is not as attentive to time parameters. 
	+ Think "banking transactions".
+ Distributed (multi-processing)
	+ Remote workstations connected to a large server. Like ATMs. Same information and instructions are given to each node. 
+ Time-Sharing
	+ When a single computing unit is utilized by multiple users according to predetermined, allocated time slot. 
	+ Usually performed by super and mainframe computers on bulk data, like a census survey. 

## 4.3 - Output Formats of Processed Data

p. 74
