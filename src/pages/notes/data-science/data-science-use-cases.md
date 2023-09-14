---
layout: '@layouts/NotesLayout.astro'
title: 'Data Science Use Cases'
pubDate: 2023-09-13
description: 'Explaining and Exploring how to use data science in the wild.'
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

# Unit 2: Use Cases and Performance Evaluation

p. 33 - 50

Learning goals for this section:
+ The importance of a use case for business
+ How to identify use cases
+ Steps to develop a predictive model for a specific use case
+ Metrics to evaluate the performance of a predictive model
+ Role of KPIs in business-centric evaluation
+ Different cognitive biases which influence the decision-making process

I just want to note somewhere that I had a quick search for ML datasets and this website, [The 60 Best Free Datasets for Machine Learning | iMerit](https://imerit.net/blog/the-60-best-free-datasets-for-machine-learning-all-pbm/), lists Sooo many website, it's unreal. 
+ [‘Jeopardy!’ Question Database | Mental Floss](https://www.mentalfloss.com/article/611940/jeopardy-question-database)

## Introduction

The book discusses an example of studying TV show viewer habits and preferences to understand what variables affect a show's popularity and viewer preferences. "Use cases and scenarios show business managers the benefits data science tools can offer for enhancing decision-making within their organizations." 

There's a lot to think about. Once a model is created the performance must be evaluated. But users must also be aware of "cognitive and motivational biases that might impact model inputs." That can skew results and make a model less reliable. 

## 2.1 - Data Science Use Cases (DSUCs)

Data Science Use Case = DSUC

### Identifying DSUCs and Their Value Propositions

Businesses unlock value by in-depth investigation of its own collected data. Obvious challenges then become collecting and managing this data. Additionally, finding the right DSUC for their business objectives. The right application of data can provide valuable insights to limit risks and improve future gains.

A DSUC can be identified through 3 main (general) aspects:
+ Achieved value
+ Effort
+ Risk

Focus should be on increasing value, and reducing effort and risk. 

Business should ask themselves:
+ What is the value of the knowledge gained from applying data science tools to the dataset?
+ What will be learned about the dataset?
+ what will be learned about the hypothesis the data science tools will test?
+ what will be the value of that knowledge if the prediction model developed shows good business performance? What if it shows negative business outcome?

Text shows 3 images pp. 36 - 37. There are 3 types of DSUCs viewed with relevant questions. I like typing so I'll summarize:
+ Value Propositions in Customer-Related DSUCs
	+ what is influencing the deal size?
	+ what is the customer journey until making a deal?
	+ how can we acquire more customers at less cost?
	+ how can we proactively address churn before customers actually leave?
	+ which of the product features mostly attracts a customer?
	+ which parameter accelerates a deal?
	+ which features do users struggle with?
+ Value Propositions in Operational-Related DSUCs
	+ how can we align machines upgrades with future needs?
	+ how can we predict maintenance need before problems occur
	+ do we predict a failure in some machines if they are continuously overloaded?
	+ is it predictable to minimize the processing time by changing specific parameters?
	+ what is the expected product quality due to specific changes in the production line?
	+ can we predict outages based on connected device data?
+ Value Propositions in Fraud-Related DSUCs
	+ Is someone accessing unauthorized data?
	+ where do the hack attempts originate?
	+ what customer behaviour signals potential fraud?
	+ is this customer or prospect too high risk to service?

It is interesting to note that the value propositions mimic the aspects to identify a DSUC. 

### Learning the Dataset and building the Prediction Model

Suppose we have identified a **Data Science Use Case**. Now the data scientist must collect the relevant dataset from available data sources, build a new data source. Types of data sources include:
+ Internal databases
+ external databases
+ sensor data
+ static files
+ Web scraping

Collection can be expensive if human intervention is required to manually insert tags and such. Once data is collected it is then sent for preprocessing where it is _scrubbed_ for any noise and scanned for redundant records and missing values. 

"Cleaning data typically requires significant domain knowledge to make decisions about the best method to deal with errors in the data." 

Once the data is cleaned, the dataset will contain **variables** (i.e. **features**) with numerical, categorical, and/or textual values. Features should be carefully selected to be used to determine output value propositions. Some features may not be relevant for our DSUC.

After data is cleaned, the data scientist can build the prediction model. Its purpose to define relationships between inputs and outputs. Typically datasets are divided into training, test, and validation sets, or just training and test. These are covered in my previous section. 

Many approaches have been developed, machine learning in particular. 
+ Classification - used when outputs can be categorized into classes.
+ Regression - used if outputs are probability density distributions.

### Making Predictions and Decisions

When a prediction model is built, it may require many iterations of the model to produce reasonably high level of accuracy with respect to the testing set... Not sure I like how that is worded. 

The model and its predictions are given to the user to be used for decision making, or whatever they do with it. Sometimes its just the results, other times the entire model. The book suggests supplying the model to the user with a friendly front-end interface. 

Sometimes the _end user_ makes a decision that impacts the data records. Example being given some predictions about optimal selling price, a product owner may change the sale price of their product. The model should be developed to include a _feedback loop_ that accommodates these changes and can be retrained accordingly. 

The goal is complete automation of end users corresponding decisions. 

### Machine Learning Canvas

[OwnML.co](https://www.ownml.co/machine-learning-canvas) has a Machine Learning Canvas. You can search for it on the internet. It's meant to help the developer identify a use case and achieve its value proposition. 

## 2.2 - Performance Evaluation

p. 40