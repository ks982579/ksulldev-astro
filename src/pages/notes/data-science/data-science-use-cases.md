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

We evaluate the model at two times really: during development of prediction model, usually to improve power, and after development with the test set to gather information on model accuracy and such.

Evaluation of how well the DSUC has been modelled and its predicitve values applied successfully within a business can also be divided into 2 parts:
+ First part involves evaluating the developed prediction model and measuring performance through a list of _known_ numerical metrics.
+ Second part involves evaluating how the model's outputs are used to better understand and improve the business.
	+ Usually accomplished using a defined list of Key Performance Indicators (KPIs).

Per the very official seeming website [KPI.org](https://www.kpi.org/kpi-basics/), KPIs are "critical (key) quantifiable indicators of progress toward an intended result. KPIs provide a focus for strategic and operational improvement, create an analytical basis for decision making and help focus attention on what matters most." That's really all you probably need to know for now because KPIs are more of a business management topic. 

### Model-Centric Evaluation: Performance Metrics

Just going to cover several metrics to measure performance of prediction model, both classification and regression

#### Classification Model Evaluation Metrics

The output of these prediction models is a probability that determines which class the output is assigned to. There are really four possible results of classification:

| Classification | Guess | Actual | Error Type |
| --- | --- | ---| --- |
| True Positive (TP) | Yes | Yes | None|
| False Positive (FP) | Yes | No | Type I |
| True Negative (TN) | No | No | None |
| False Negative (FN) | No | Yes | Type II |

So we have different types of right and wrong. In a statistical sense:
+ Type I error (FP) -> reject a null hypothesis that is true in population.
+ Type II error (FN) -> fail to reject null hypothesis that is actually false in the population.

Talking about the _null_ hypothesis makes is a little confusing and backwards sounding. But for the type II, you would accept the null hypothesis, that a thing does not belong to a class, when in fact it does.

The book does a _confusion matrix_ to list counts as well. Metrics for these models are **Accuracy**, **Precision**, **Recall**.

**Accuracy** is the ratio of the number of correct predictions to total predictions:

$$
\text{Accuracy} = \frac{\text{count}(TP)+\text{count}(TN)}
{\text{count}(TP)+\text{count}(TN)+\text{count}(FP)+\text{count}(FN)}
$$

**Precision** measures how correct model is when returning _positive_ results:

$$
\text{Precision} = \frac{\text{count}(TP)}
{\text{count}(TP)+\text{count}(FP)}
$$

**Recall** measures how _often_ the model produces true positives. This metric is used if we can tolerate false positives more than false negatives. 

$$
\text{Recall} = \frac{\text{count}(TP)}
{\text{count}(TP)+\text{count}(FN)}
$$

It's a bit of a weird measure. You wouldn't want you data to be unbalanced. What do we mean by that tolerance bit? If a false positive is not an issue, like for a Covid case. Better safe than sorry, you stay in doors and take another test. However, a false negative is detrimental, where the person could unknowingly spread the disease and cause many people to become sick.

So, if there are many _false negatives_, you'll see recall drop significantly. Between precision and recall, you can tell what the model is doing.

A classification model can apply different thresholds to distinguish between classes which can alter the results from the model. 

A **Receiver Operator Characteristic** (ROC) curve displays the trade-off between the true positive rate and the false positive rate at every possible threshold. The best model can classify with 100% TP and 0% FP. The ROC curve helps find the best threasholds to result in the highest scores. 

To generate your own ROC curve:
1. Choose cutoff value between $[0 : 100]$ percent of maximum value of model output
2. Assign the test set according to their classes and count TP, TN, FP, FN values
3. Calculate FP and TP rates (below)
4. Form a single point on ROC curve with coordinate `{x: false positive rate, y: true positive rate}`
5. Choose another threshold and repeat from step 2. 

Formulas:

$$
\begin{gather*}
\text{FP rate} = \frac{\text{count}(FP)}{\text{count}(FP)+\text{count}(TN)}\\
\text{TP rate} = \frac{\text{count}(TP)}{\text{count}(TP)+\text{count}(FN)}\\
\end{gather*}
$$

Why choosing the TN and FN counts in the denominators is not well explained. Looking it up, apparently it is because, for example $N = FP + TN$, where $N$ is the number of total negatives. That makes sense because a false positive is a negative case. 

I guess if this were calculus, you'd solve when the slope is one. You want to minimize the FPs, get the numerator close to zero, and maximize the TPs. 

#### Regression Model Evaluation Metrics

The output of a regression prediction model is a probability density distribution, which is translated into a number (optimal point estimator) to be useful. Evaluation of said model is a comparison of predicted values to actual. We usually use:
+ Absolute error
+ Relative error
+ Mean absolute percentage error
+ Square error
+ Mean square error
+ Mean absolute error
+ Root mean square error

**Absolute error**

$$
\epsilon = |d-y|
$$

So, the book uses $d$ as the desired output. But statistics uses $\hat{y}$ as the predicted, so the equation will look like

$$
\epsilon = |y-\hat{y}|
$$

**Relative error** is a normalization of absolute error

$$
\epsilon^* = |\frac{y-\hat{y}}{y}|\cdot100\%
$$

**Mean absolute percentage error** is an average of relative error. We are building up our formulas

$$
\text{MAPE} = \frac{1}{n} \sum_{i=1}^n
\left|
\frac{y_i-\hat{y}_i}{y_i}
\right| \cdot 100\%
$$

This is helpful if the underlying probability density distribution of the values is _sufficiently far_ from zero, such that zero does not have a significant impact. As you can see, parts of the summation become undefined with $y_i=0$. 

**Square error** ensures a positive is obtained in a different way, but adds significant _weight_ to larger errors. 

$$
\epsilon^2=(y-\hat{y})^2
$$

**Mean square error** (MSE) is the average of square errors

$$
\text{MSE} = \frac{1}{n} \sum_{i=1}^n (y-\hat{y})^2
$$

**Mean absolute error** is more robust than the mean squared error with respect to datasets that contain outliers

$$
\text{MAE} = \frac{1}{n} \sum_{i=1}^n
\left|
y_i-\hat{y}_i
\right|
$$

**Root mean square error** is the squared root of the MSE, making the magnitude easier to interpret.

$$
\text{RMSE} = \sqrt{\text{MSE}} = \sqrt{\frac{1}{n} \sum_{i=1}^n (y-\hat{y})^2}
$$

### Business-Centric Evaluation: The Role of KPIs

At this point, you have evaluated your model with the previously described metrics, or more. It is ready to be implemented to produce the DSUC value for the associated business problem. Back to KPIs as the model is helping the business achieve these. They are often related to improving revenue, reducing costs, increasing efficiency, and/or enhancing customer satisfaction.

#### Characteristics of Effective KPIs

Most helpful KPIs:
+ Easy to comprehend
+ simple to measure
+ comprised of small, measurable elements
+ assigned to appropriate, relevant task manager
+ able to indicate positive/negative variations from business objective
+ achievable within the resource constraints (from machines to people)
+ defined with both start and end dates for measuring
+ visible across entire organization

#### Examples of KPIs

Some KPIs routinely implemented in organizations to measure DSUC performance include but are not limited to:
+ growth/shrinkage per year
+ cost of service delivery
+ workload of staff
+ number of complaints
+ revenue per employee

When KPI is defined, we determine the best method to a assess performance against it. 

### Cognitive Biases and Decision-Making Fallacies

Cognitive and motivational biases may be disruptive to the collected dataset and basically all other stages of the data process. They influence the quality of the model and can be the cause of significant inaccuracies. A data scientist must be aware of biases

The course book has an image of Cognitive Bias Codex.

#### Relative Cognitive biases

Common cognitive and motivational biases
+ Anchoring
	+ when estimation of a numerical value is based on an initial value, which is then insufficiently adjusted to provide final answer.
+ Affect influenced
	+ emotional predisposition for or against a specific outcome.
+ Ambiguity aversion
	+ people tend to prefer gambles with explicitly stated probabilities over gambles with diffuse or unspecified probabilities.
+ Equalizing bias
	+ when decision makers allocate similar weights to all objectives.
+ Confirmation
	+ desire to confirm one's belief. Can lead to unconscious selectivity in the acquisition and use of evidence.
+ Base rate fallacy
	+ ignoring base rates when making probability judgements and rely instead on specific individuating information.
+ Desirability of options
	+ Over or underestimating probabilities that favours a desired alternative.
+ Insensitivity to sample size
	+ Ignore sample size and consider extremes equally likely in small and large samples. 

#### De-biasing Techniques

These are meant to reduce or eliminate bias. Most common alternative is to consult other experts. Consider that an answer to each bias. 

Common cognitive and motivational biases and debasing techniques
+ Anchoring
	+ Avoid anchors.
	+ provide multiple and counter anchors.
+ Affect influenced
	+ Cross-check judgments with alternative elicitation protocols.
	+ Avoid loaded descriptions.
+ Ambiguity aversion
	+ Model and quantify ambiguity as probability distribution.
	+ Model as parametric uncertainty or secondary probability distribution.
+ Equalizing bias
	+ Rank events first, then assign ratio weights.
	+ Elicit weights or probabilities hierarchically.
+ Confirmation
	+ Challenge probability assessments with counterfactuals.
	+ Probe for evidence for alternative hypotheses.
+ Base rate fallacy
	+ Split the task into an assessment of the base rates for the events and the likelihood or likelihood ratio of the data, given the events.
+ Desirability of options
	+ Use analysis with multiple stakeholders providing different value perspectives
	+ Use multiple experts with different opinions
	+ Use incentives and adequate levels of accountability
+ Insensitivity to sample size
	+ Use statistics to determine the probability of extreme outcomes in samples of varying sizes.
	+ Use the sample data and show how and why extreme statistics are logically less likely for larger samples.
