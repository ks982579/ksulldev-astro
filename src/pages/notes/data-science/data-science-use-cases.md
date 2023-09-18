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

---

```yaml
title: Key Performance Indicators
subtitle: Developing, Implementing, and Using Winning KPIs
edition: 4
authors: David Parmenter
publisher: John Wiley & Sons, Inc.
date: 2019-10-29
publication date: 2020
accession number: ihb.49461
ISBN:
	- 9781119620822
	- 9781119620792
```

# Key Performance Indicators: Developing, Implementing, and Using Winning KPIs

[Key Performance Indicators: Developing, Implementing, and Using Winning KPIs, 4th Edition | Wiley](https://www.wiley.com/en-us/Key+Performance+Indicators%3A+Developing%2C+Implementing%2C+and+Using+Winning+KPIs%2C+4th+Edition-p-9781119620822) Currently the e-book is $31. 

## Ch. 1 - The Great KPI Misunderstanding

pp. 3 - 24

### The Four Types of Performance Measures

2 groups of measures:
+ result indicators
	+ summation of more than on team's input
	+ hard to use to fix problems as you cannot tell which team is responsible for performance.
+ performance indicators
	+ Measures tied to a team, give clarity and ownership. 

2 measures for each group
1. Key Result Indicators (KRI) - give board an overall summary of how organization is performing.
2. Result Indicators (RI) - tell management how teams are combining to produce results.
3. Performance Indicators (PI) - tell management what teams are delivering
4. Key Performance Indicators (KPI) - tell management how the organization is performing 24/7, daily, or weekly in their critical success factors, and by taking action management is able to increase performance dramatically. 

Management taking action? 😂

KRIs are often mistaken for KPIs. However, they measure the results of many. Good to review quarterly with the board to understand progression with strategy. KRIs are always a past measure. As such, management cannot use to change direction. They also do not tell you how to improve results. 

Result indicators are good but less important summary of activities. They look at activity over _wider time horizon_, not just quarterly, but could be weekly or daily. So, yesterday's sales would be an RI. 

KPIs are indicators that focus on aspects of organizational performance. There are also **Critical Success Factors**, like the timely arrival of aeroplanes. Ascertaining the 5-8 CSFs is a vital step in any KPI exercise. 

The author gives example with airport and Ryaniar, with a focus on timeliness of planes. They aren't luxury, so they make money on timely flights. Basically, late arrivals cause late departures. But it was viewed as an issue "not invented by us." However, negative effects carried over. 

Taking ownership of the KPI and CSF, regardless of the cause is the real issue. And so other success factors like cleaning, refueling, and catering had to be reprioritized. 

The airport identified many costs associated with late departures and tried to handle as best they could with what they could do. 

#### The 7 Characteristics of KPIs

+ NonFinancial
	+ Putting a dollar amount to a measure converts it into a _result indicator_. KPIs are in layers below the financial results. 
+ Timely
	+ KPIs should be continuously monitored, at least weekly. Any duration over that, like monthly or quarterly, cannot be a KPI. Reasoning is that it cannot be a key to your business if you are monitoring it well after the "horse has bolted."
+ CEO Focus
	+ KPIs will wave CEO's constant attention. Daily calls can be made to relevant staff enquiring about exceptions or recognizing outstanding performance. 
+ Simple
	+ KPIs should tell you what action _needs_ to be taken. 
+ Team based
	+ KPI is deep enough in organization that it can be tied to a team. That is, the CEO can call someone to discuss. 
+ Significant Impact
	+ A KPI will affect a number of Critical Success Factors for organization. 
+ Limited Dark Side
	+ All measures have a _dark side_, unintended consequences like staff taking remedial actions that are contrary to desired intentions. 
	+ Very important that before becoming a KPI, performance measure is tested to ensure that it helps teams to align their behaviour in a coherent way to the benefit of the organization. 

The author continues with many examples. 

#### Performance Indicators

**Performance indicators** (PIs) are non-financial indicators that can be traced back to a team that are not fundamental to the organization's well-being. 

### Number of Measures Required: The 10/80/10 Rule

We want to answer questions like:
+ How many measures should we have? 
+ How many of each measure type?
+ What time frames are they measured in?

For a medium sized company, maybe 500 FTEs:

$$
\left.
\begin{array}{l}
\text{Key Result Indicators}\\
\text{(board KPIs)}\\
\\
\text{Result Indicators}\\
\text{Performance Indicators}\\
\\
\text{Key Performance Indicators}\\
\text{(operational KPIs)}\\
\end{array}
\right\} \ \
\begin{array}{l}
\text{10 reported every}\\
\text{board meeting}\\
\\
\text{80 reported daily, weekly}\\
\text{or monthly}\\
\\
\text{10 reported 24/7,}\\
\text{daily, or weekly}
\end{array}
$$

Author suggests an organization create a _Board Dashboard_ to show KRIs along with a summary financials all on one fan-fold page. For smaller organizations, they may reduce number of RIs and PIs. 

Depending on the text, it's recommended 10 KPIs, and seldom 20 at most. More KPIs might be applicable for a business of many businesses in many different sectors. 

### Difference between KRIs and KPIs and RIs and PIs

Might just list differences, or characteristics here:

+ KPIs
	+ Nonfinancial measures.
	+ frequently measures, from 24/7 to at least weekly.
	+ Available to all staff (transparent).
	+ All staff understand the measure and what corrective action is required.
	+ Responsibility can be tied to one team or a cluster of teams working closely together.
	+ significant impact
	+ focuses on specific activity
	+ Normally reported on intranet screen.
+ KRIs
	+ can be financial measures.
	+ Measured less frequently, monthly or quarterly.
	+ Reported to Board.
	+ Does not explicitly describe any areas of improvement.
	+ Person responsible is typically CEO.
	+ KRIs are designed to summarize progress in a particular area.
	+ KRI is result of many activities.
	+ Usually reported in trend graph covering about 15 months of activity.
+ PIs
	+ Mainly nonfinancial measures.
	+ Still measured frequently, but perhaps biweekly or monthly as well.
	+ Tied to discrete activities and still tied to a team or cluster of.
	+ Focuses on specific activity
	+ all staff understand action required to improve performance
	+ normally reported in a team scorecard
+ RIs
	+ can be financial or nonfinancial
	+ can be measured more frequently
	+ designed to summarize overall performance by a collection of diverse teams
	+ result of more than one activity
	+ Does not tell you how to handle issue, what to do
	+ normally reported in a division / department scorecard summarizing various team performance.

### The Lead and Lag Confusion

**Lead indicators** are performance driven and **Lag indicators** are outcomes. However, they're exact determination can be fuzzy. "Lead-and-lag labeling of measures is misleading."

### Mix 60% Past, 20% Present, 20% Future-Oriented Measures

KPIs are characterized as past, current, or future-focused measures. But mostly current measures because they are measured so frequently, right? We let current measure reflect those monitored 24/7 or daily. Future measures are the record of agreed future commitments, when an action is meant to take place. 

It is the author's recommendation to strive for a mix of 60% past, 20% present, and 20% future-oriented measures. 

The author provides a good list of examples of future measures:
+ Future innovations
+ Future key customer events
+ future PR events
+ Future recognitions - to maintain staff recognition
+ new products
+ in-house training
+ staff satisfaction - CEO should aim for 3 surveys a year
+ Health and safety

Again, the author iterates that a KPI provided to management that is more than a few days old is useless. So these other measures can also fall into the realm of KRIs, PIs and RIs. 

### Importance of Timely Measurement

The sooner management has their information, the sooner they can delegate changes. There is a recommended reporting framework for KPIs. 

### Where are You in Your Journey with Performance Measures?

The author provides a checklist to assess your progress with performance measures. 


```yaml
title: Top Five High-Impact Use Cases for Big Data Analytics
publisher: Datameer, Inc
date: 2014
url: http://orcp.hustoj.com/wp-content/uploads/2016/01/eBook-Top-Five-High-Impact-UseCases-for-Big-Data-Analytics.pdf
```

# Top Five High-Impact Use Cases for Big Data Analytics

An internet search lead me [to this link](http://orcp.hustoj.com/wp-content/uploads/2016/01/eBook-Top-Five-High-Impact-UseCases-for-Big-Data-Analytics.pdf) of a 16 page book that promotes [DataMeer](https://www.datameer.com/). These are just some notes for personal reference. 

Companies able to gain insights from their data gain a competitive edge over their peers. However, getting insights quickly may be beyond the limitations of traditional _enterprise data warehouses_ and _business intelligence_ software. 
1. It can take time to collect, prepare, and analyze all fragmented and (often) unstructured data.
2. Most business professionals rely on IT to gather and organize data into a data warehouse. This can render data obsolete by the time it is ready. Business needs could change or something.
3. The amount of data, especially unstructured data, can be hard to analyze. 

You know it is **big data** when it is so large and complex that it becomes difficult to manage with existing data management tools. 

## Big Data Analytics

**Big data analytics** is meant to enable users to analyze all structured, semi-structured, and unstructured customer data together, all at once. Datameer's services do what a data scientist does:
+ Integrate
+ Cleanse
+ Prepare
+ Analyze
+ Visualize

... your data.

Datameer puts it all into Hadoop and provides the analyzing and visualizing tools you need. 

## Customer Analytics

You need insights into customer buying journey because that is how you improve customer conversion rates, personalize campaigns to increase revenue, predict and avoid customer churn, an lower customer acquisition costs. 
+ Seems like tricking the customer into your product instead of providing a great service?

The issue is customers interact with companies through many points of contact, social media, stores, websites, etc... Making it more complex and creating many types of data. Analyzing all this data can give insights into:
+ Who are high-valued customers
+ What motivates them to buy more
+ how they behave
+ how to best reach them

### Big Data Analytics Work

Big data analytics is the key to unlocking insights from customer behaviour data. It combines, integrates, and analyses all data, structured and unstructured, all at once. 
+ Increase customer acquisition
+ Increase Revenue per customer
+ decrease customer acquisition cost
+ reduce customer churn
+ product enhancement

Again, Datameer can get all data from web, social media, transaction, etc... into Hadoop. Then, data is enriched with 3rd party data, analysed and visualized. 

You can use Datameer to correlate customer purchase histories and information on social media to target new customers. 

You can predict which customers are going to move funds from your investment firm so you can launch retention campaigns... instead of continuously providing a great service to retain them the whole time...

## Operational Analytics

### Understanding Machines, Devices and Human Interactions

Executives of manufacturing, operations, service or product are pressured to optimize asset utilization, budgets, performance, and service quality. So, how can IT executives help? IT can provide high-impact data projects, in a timely manner, to predict product failures, optimize existing infrastructure, and reduce operational and capital expenditures. The secrets are buried in log, sensor and machine data. If only there was a platform that could ingest and combine data from multiple sources...

### Big Data Analytics at Work

You can combine your structured and unstructured data and use the results to detect outliers, perform run time series and root cause analyses, and parse, transform and visulize data. 

You can use historic machine data and failure patterns to predict and improve mean time-to-failure. User Datameer to:
+ Industrial monitoring and optimization
+ Network planning
+ IT operation analytics
+ Internet of Things
+ Supply chain analytics

Datameer offers many _out-of-the-box_ connectors and a file parser to integrate any data and join data with enrichment functions. They also have many visual widgets and free-form infographics for stunning visualizations.

Then the short book provides several customer case studies.

## Fraud and Compliance

Data driven insights can help uncover hidden and suspicious actions in a timely enough manner to mitigate risks. 

### Big Data Analytics at Work

You can combine you data, from financial transactions, geo-location data, to authorization and submission data, plus social media channels. Then, use the data to address fraud and compliance-related challenges. Perform time series analysis, data profiling and accuracy calculations, root cause analysis, breach detection, etc...

Can help with:
+ Credit card fraud detection
+ Criminal behaviour
+ Regulatory compliance
+ Cyber attack prevention

## Data-Driven Products and Services

Some companies use big data to create new products and service offerings, based on said data. You can harness your **Customer Relationship Management** (CRM) data, social media, transaction, geo-location, device, sensor, and product data. Turn data into insights for more impactful ad campaigns and such.

Again, combine all your data in one place to:
+ Monetize data
+ new product innovation
+ new service innovation

Also good to know how fast you can get a prototype of a data product, scale users' data and more. 

Case studies in the online book.

## EDW Optimization

**Enterprise Data Warehouses** (EDWs) are critical business and IT resources. However, too much data can turn timely data into outdated as it takes to long to process to meet business needs. It also becomes very expensive for some services to store all of your data. 

But Datameer to the rescue. You can:
+ Offload expensive analytics
+ Offload expensive data preparation to lower cost
+ data discovery
+ deal with various data types
