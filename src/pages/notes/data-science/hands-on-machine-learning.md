---
layout: '@layouts/NotesLayout.astro'
title: 'Hands-On Machine Learning'
pubDate: 2023-10-20
description: 'Notes and an girthy O'Reilly ML book.'
author: 'Kevin Sullivan'
tags: ["data science", "notes", "masters", "Machine Learning", "scikit-learn", "keras", "tensorflow"]
---

```yaml
title: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow
subtitle: Concepts, Tools, and Techniques to Build Intelligen Systems
edition: 3
authors: 
	- Aurélien Géron
publisher: "O'Reilly Media, Inc."
date: Oct. 2022
```

This is a large book, over 800 pages, and the last for my Data Science course. If you are interested in reading yourself, you can get a nice pdf from [eBooks.com](https://www.ebooks.com/en-ie/book/210681725/hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow/aur-lien-g-ron/). I would love to do an extensive deep dive into this book, especially the Reinforcement Learning section, but I don't think it's possible right now. 

# Hands-On Machine Learning

## Preface

In 2006, Geoffry Hinton et al. published a paper, "A Fast Learning Algorithm for Deep Belief Nets", regarding how to train a deep neural network. Others previously gave up on the idea, but this was the start of the tech-splosion we are seeing today. 

Naturally, we want to also build cool technology. Luckily, this book assumes little-to-no previous knowledge of machine learning. It relies on Python frameworks:
+ `Scikit-Learn` - Great entry point for learning ML.
+ `TensorFlow` - More complex library for distributed numerical computation. 
+ `Keras` - a high-level DL API, comes bundled with TF. 

You should be familiar with Python and scientific libraries such as `Numpy`, `Pandas`, and `Matplotlib`. You should also be familiar with linear algebra. 

# Part I - The Fundamentals of Machine Learning

## Ch. 1 - The Machine Learning Landscape

This is the high-level overview chapter.

### What is Machine Learning?

Machine learning is the science and art of programming computer so they can learn from data. It is the field of study to give computers the ability to learn without being explicitly programmed. 

A system learns from a _training set_. A model is the part of the ML system that does the learning. There's training data too. One performance measurement is _accuracy_. 

### Why Use Machine Learning?

For the example of a spam filter, coding explicitly would generate a very long list of complex rule that becomes hard to maintain. A machine learning program can learn the rules based on data and sort emails in a much more efficient and maintainable way. Digging into data to discover hidden patters is called _data mining_. 

### Types of Machine Learning Systems

There are a lot of different systems, so we can give a little criteria here:
+ How supervised during training
	+ supervised
		+ data set has _labels_ (targets (term more common for regression))
		+ Typical learning task is _classification_
	+ unsupervised
		+ Training on data that has no labels. 
		+ typically uses clustering or hierarchical clustering algorithms
		+ Another important task is _anomaly detection_ and _novelty detection_.
	+ semi-supervised
		+ data is partially labeled
	+ self-supervised
		+ The ML generates fully labeled dataset from fully unlabeled one. 
	+ etc...
+ Can they learn incrementally on the fly?
	+ Online learning
		+ System is trained incrementally by feeding it data instances sequentially, individually or in _mini-batches_. 
		+ Each step is fast and cheap. 
		+ Good if a system need to adjust to change rapidly and for limited computing resources. 
		+ The _learning rate_ is how fast model should adapt to changing data.
	+ batch learning
		+ cannot learn incrementally
		+ must be trained with all available data
		+ When trained and deployed offline, it is called _offline learning_.
		+ Model performance decays over time because things just change. 
			+ called "model rot" or "data drift". 
		+ expensive in terms of time and computing resources
+ Do they compare new data to old data or do they actually learn patters? How do they _generalize_?
	+ instance-based learning
		+ System learns examples by heart and generalizes to new cases using similarity measure.
	+ model-based learning
		+ Build a model with examples and use the model to make _predictions_. 

The book goes over these in greater detail.

Transfer learning occurs when knowledge from one task is transferred to another. It is one of the most most important techniques in machine learning today, especially in deep neural networks. 

#### Reinforcement Learning

**Reinforcement learning** is very different from what we have previously discussed. It has a learning system that we call an _agent_. It observes the environment, selects and performs actions, and receives _rewards_ in return, or _penalties_. It learns on its own what the best strategy is, called a _policy_, to get the most reward over time. 

The book also throws in an example of using Scikit-Learn for a quick linear regression model (p. 25). It is really cool how easy it is.

### Main Challenges of Machine Learning

p. 27

The main tasks are selecting a model and training it with data. That means two sources or error:
+ Bad model
+ Bad data

#### Insufficient Quantity of Training Data

Even simple problems solved with ML require thousands of examples. More complex problems like image and speech recognition might need millions. There have been papers, like one titled "The Unreasonable Effectiveness of Data" that discusses how data can be just as important, or even more so, than the algorithms. 

#### Nonrepresentative Training Data

For either instance-based or model-based learning, it is crucial that the training data be representative of new cases you want to generalize to. 

If your data set is too small you can have _sampling noise_, which is like nonrepresentative data as a result of chance. And if sampling method is flawed for even large methods, they can be nonrepresentative, something referred to as _sampling bias_. 

_Nonresponse bias_ is a type of sampling bias that occurs in a survey when a majority of people done respond. 

#### Poor-Quality Data

There's another section on Data Quality, it's basically its own course. The majority of time spent in a data science project is on cleaning data. 

#### Irrelevant Features

"Garbage in, garbage out!" A data scientist needs to have the correct set of features to train on. This is called _feature engineering_, which involves the following:
+ Feature selection
+ Feature extraction (combining features)
+ Create new features with new data

#### Overfitting the Training Data

p. 30

**Overfitting** happens when a model performs well on training data but cannot generalize well when tested against other data. 

I like to think of it as studying for a math test. The computer first tries to learn patterns in questions and answers. However, if training too long, it begins memorizing answers to questions. That won't extend well to questions not in the training set. 

Additionally, if your data is noisy, the model may learn patterns in the noise itself. Also, if data is not great, the model could detect chance coincidences and remember them as policies.  

Overfitting happens when the model is too complex relative to the amount and noisiness of training data. Some possible solutions are:
+ Simplify the model by:
	+ selecting fewer parameters (linear model vs high-degree polynomial model)
	+ reducing the number of attributes in training data
	+ constraining the model
+ Gather more training data
+ Reduce the noise in the training data (fix errors, remove outliers)

Constraining the model to make it simpler is called _regularization_. The amount of regularization to apply during learning can be controlled by a _hyperparameter_, which is a parameter of the learning algorithm and not the model. 

#### Underfitting the Training Data

_Underfitting_ is the opposite of overfitting, and occurs when the model is too simple to learn patterns in the data provided. It you get poor results from a simple model, like a linear model, you could try the following:
+ Select a more powerful model, more parameters
+ Feed better features to the learning algorithm
+ Reduce constraints on the model

### Testing and Validating

Typically, before deploying in production, you test the model. Basically, split your data into training and testing sets. The error rate on the test set is the _generalization error_. If the training error is low, but testing is high, that's a sure sign of overfitting. 

#### Hyperparameter Tuning and Model Selection

Suppose we train a linear model and apply regularization to avoid overfitting. We choose the right hyperparameter by training 100 different models with same number of different hyper parameters. I think this is like cross-validation in scikit-learn or something. 

So, you get the right hyperparameter(s), only 5% error, deploy the model and... 15% error, what?!? Well, we measured the generalization error multiple times and found hyperparameters for that particular set. 

A common solution is having a **holdout validation set**, which is part of the training set to select the best candidate model. This has many name, _validation set_, _development set_... that's it actually. 

So, it is really a training set, testing set, and validation set. 
+ Train multiple models with various hyperparameters on reduced training set, without the validation.
+ Select best model based on results of validation set
+ Train that model on the full training set, including w/validation
+ evaluate final model on the test set

Yes, so you can perform repeated _cross-validation_ with many small validation sets to more accurately a models performance. This requires a lot of training 

#### Data Mismatch

It might be easy to get a lot of data but that doesn't mean it will perfectly represent data used in production. Important to remember that _both_ the validation set and test set must be as representative as possible of data you expect to use in production. 

Another solution is holding additional data, perhaps images, from the training set in another set dubbed the _train-dev set_. You train on training set and evaluate on the train-dev set. If the test goes poorly, it must have overfit the training set. This means perhaps simplify or regularize the model, get more training data or clean up existing data. 

If the train-dev test is ok, you move onto evaluation with the validation set. If that performs poorly, then the issue could come from **data mismatch**. 

All data the model sees should be similar, which can be difficult with images because of different formats, sizes, and quality. Data can be pre-processed if needed.

Finally, if the model performs well on train-dev, and validation sets, we evaluate it one last time against the test set to know how well it is likely to perform in production. 

Wow, that is a lot of testing. 

#### No Free Lunch Theorem

When you select a model, you are implicitly making assumptions about the data, whether it is linear, logarithmic, etc... If you make no assumptions, then you have no ground to choose one model over any other. This is what David Wolpert called the "No Free Lunch Theorem". You need to test and evaluate models to be completely sure they perform better than other choices.

In Economics, [No Free Lunch](https://www.investopedia.com/terms/t/tanstaafl.asp) is the concept that something always has a cost, no matter how free it appears. That cost might not be monetary, but could be another critical asset like time. I think it lends nicely to this Machine Learning concept, you might not realize the cost of choosing one model over another.

The author hosts a [Google Colab](https://homl.info/colab3) for notes and answers to questions. 

## Ch. 2 - End-to-End Machine Learning Project

p. 39

This Chapter is an example project as a data scientist at a real estate company. 

### Working with Real Data

Popular data repositories:
+ [OpenML.org](https://openml.org/)
+ [Kaggle.com](https://www.kaggle.com/)
+ [PapersWithCode.com](https://paperswithcode.com/)
+ [UC Irvine ML Repo](https://archive.ics.uci.edu/)
+ [Amazon's AWS Datasets](https://registry.opendata.aws/)
+ [TensorFlow Datasets](https://www.tensorflow.org/datasets)

Meta Portals listing open data repositories:
+ [DataPortals.org](https://dataportals.org/)
+ [OpenDataMonitor.eu](https://opendatamonitor.eu/frontend/web/index.php?r=datacatalogue%2Flist)

The book, I think, uses this [1990 California Housing Prices](https://www.kaggle.com/datasets/camnugent/california-housing-prices) dataset. Old but gold. 

### Look at the Big Picture

We will use that data set to predict the media housing price in any district given all other metrics. 

I will also be working through this on my Github, [ks982579/data-science-1990-california-housing](https://github.com/ks982579/data-science-1990-california-housing). I also want the new Python 3.12, so following some instructions...

```bash
sudo apt update && sudo apt upgrade -y
sudo add-apt-repository ppa:deadsnakes/ppa # only way right now on WSL
sudo apt update  # update apt cache
sudo apt install python3.12
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1
# update-alternatives --install <link> <name> <path> <priority>

sudo apt install python3-distutils

sudo apt install python3.12-venv
sudo python3.12 -m venv .venv
```

I had so many issues in WSL. You can always 

```bash
sudo apt remove python3.12
sudo apt install python3.12
```

Basially, deadsnakes PPA is a 3rd party Repo that doesn't include all of the standard library for each Python version. 

```bash
sudo apt install python3-full
```

That will get them all. Sorry this is in DataScience notes. 

The Author suggest using Appendix A as the ML project Checklist. 

There are 8 steps
1. Frame the problem and look at big picture
	1. define objective in business terms
	2. how will solution be used?
	3. what are current solutions / workarounds (if any)?
	4. how should you frame problem (supervised or unsupervised, online or offline learning, etc...)?
	5. how should performance be measured?
	6. is performance measure aligned with business objective?
	7. what would be minimum performance needed to reach business objective?
	8. what are comparable problems?
		1. can you reuse experience or tools?
	9. is human expertise available?
	10. how would you solve the problem manually?
	11. list assumptions made so far.
	12. verify assumptions where possible.
2. Get the data
	1. list data you need and how much you need
	2. find and document where you can get data
	3. check how much space it will take
	4. check legal obligations, get authorization if required
	5. get access authorizations
	6. create workspace
	7. get data
	8. convert data to a format you can _easily_ manipulate
	9. ensure sensitive information is deleted or protected (anonymized)
	10. check size and type of data (time series, geographical, etc...)
	11. sample a test set, put it aside, never look at it.
3. Explore the data to gain insights
	1. create a copy of data for exploration
	2. create a jupyter notebook to keep a record of exploration
	3. study each attribute and its characteristics.
		1. Like name, type, portion of missing values, type of distribution, etc...
	4. For supervised learning, identify target attribute(s).
	5. visualize data
	6. study correlations between attributes
	7. study how you would solve problem manually
	8. identify promising transformation you may want to apply
	9. identify extra data that would be useful
	10. document what you learn
4. Prepare the data to better expose patterns to ML algorithms
	1. Always work on copies of the data.
	2. Always write functions for data transformation because:
		1. easily prepare data again if needed.
		2. apply transformation in future projects.
		3. to clean and prepare test set.
		4. to clean and prepare new data instances once solution is live.
		5. to make it easy to treat preparation choices as hyperparameters.
	3. Clean Data
		1. fix/remove outliers
		2. fill or drop missing values
	4. Perform feature selection
		1. Drop attributes that provide no useful information
	5. perform feature engineering where appropriate
		1. discretize continuous features
		2. decompose features
		3. add _promising_ transformation of features
		4. aggregate features into promising new features.
	6. perform feature scaling
		1. standardize or normalize features
5. Explore many different models and shortlist best ones
	1. If data set is **HUGE**, you can sample smaller sets.
	2. train many quick-and-dirty models of different categories using standard parameters
		1. linear, naive Bayes, SVM, random forest, neural net, etc...
	3. Measure and compare performance
		1. Use N-fold cross-validation for each model and computer the mean and standard deviation of performance measure on the $N$ folds.
	4. Analyse most significant variables for each algorithm
	5. Analyse types of errors the models make
		1. What data would human use to avoid errors?
	6. perform a quick round of feature selection and engineering
	7. Perform one or two more quick iterations of the five previous steps
	8. shortlist top 3-5 most promising models, preferring models that make different types of errors.
6. Fine-tune models to combine them into greatest solution
	1. This step uses as much data as possible. Always Automate everything you can.
	2. Fin-tune the hyperparameters using cross-validation
		1. Treat data transformation choices as hyperparameters, especially when unsure about them. 
		2. Unless you have only a few hyperparameter values to explore, prefer random search over grid search. 
	3. Try ensemble methods. Combining best models will often produce better performance than running them individually.
	4. Once you have final model, measure its performance on test set to estimate generalization error. 
		1. Don't tweak model after measuring generalization error, this leads to overfitting the test set. 
7. Present solution
	1. Document what you have done
	2. Create a nice presentation
		1. Highlight the big picture first!
	3. Explain why your solution achieves the business objective
	4. Also present interesting points noticed along the way
		1. What worked and what did not?
		2. List assumptions and system's limitations
	5. Communicate key-findings through visualizations or easy-to-remember statements.
8. Launch, monitor, and maintain your system
	1. Get solution ready for production
		1. plug into production data inputs
		2. write unit tests, etc...
	2. write monitoring code to check system's live performance at regular intervals and trigger alerts when it drops:
		1. Be aware of slow degradation (model rot)
		2. measuring performance may require a human pipeline
		3. Also monitor inputs' quality
			1. Very important for online learning systems.
	3. Retrain models on regular basis on fresh data. Hence, automate as much as possible. 

#### Frame the Problem

p. 41

Ask, "What exactly are the business objectives?" In our example, we want to know whether it is worth investing in a given area. 

What does the current solution look like, if there is one? This can provide a reference for performance and insights. 

Aside: A sequence of data processing components is called a **data pipeline**. Components typically run _asynchronously_, they pull and process large amounts of data before sending to a data store. There are often multiple components and they are self contained so if one breaks, the system can still work.

Let's discuss:
+ We have a _supervised learning_ task, because labels.
+ It is regression because we want values (I think). 
	+ Multiple features makes this a _multiple regression_ problem. 
	+ _univariate regression_ as we only want to predict on value for each district
		+ in contrast to _multivariate regression_.
+ We will use batch learning because we do not have a continuous stream of data.

#### Select Performance Measure

p. 43

Regression typically uses _root mean square error_ (RMSE). 

$$
RMSE(X,h) = \sqrt{
\frac{1}{m} \sum_{i=1}^m\left(
h(x_i)-y_i
\right)^2
}
$$

The book uses $x^{(i)}$ which is awkward to write and a little misleading, it's not to the power of $i$. It is a particular vector of feature values, the $i^{th}$ instance. Also $X$ isn't a random variable, but a matrix of all the feature values:

$$
X = \begin{bmatrix}
(x_1)^T \\
(x_2)^T \\
\vdots \\
(x_m)^T
\end{bmatrix} = \begin{bmatrix}
42 & 420 & 69 & 88\\
\vdots & \vdots & \vdots & \vdots\\
\end{bmatrix}
$$

We let $h$ represent the system's prediction function, also called the _hypothesis_. In statistics, you may see $\hat{y}_i$. 

If there are many outliers, we may prefer the _mean absolute error_:

$$
MAE(X,h) = 
\frac{1}{m} \sum_{i=1}^m\left|
h(x_i)-y_i
\right|
$$

These are 2 ways to measure distance between 2 vectors, predictions and targets. There are many ways to measure distance between vectors

#### Check Assumptions

If our prices are converted later on downstream to investment categories, then our problem should be framed as a classification task, not regression. This is why you need to iron out those assumptions of how data will be used. 

### Get Data

Get ready to start coding! You'll probably need a Jupyter notebook at the least. The book uses Google Colab. I will run locally if possible. I bought a nice computer and plan to use it! But, Google Colab allows you to mount a Google drive, nice feature. 

I am using the Visual Studio Jupyter Notebook extension. I find it pretty much the easiest way to work. 

#### Downloading Data

In professional environments, you would probably pull information from a database or a common data store. Book creates a neat function to pull a tarball, extract, and put into a dataframe. 

Use `dataframe.head()` and `dataframe.info()` to look over data. 

You will find which fields have missing values, very important. You will also see that `ocean_proximity` is the only `object` type. What are its different values? Run `housing["ocean_proximity"].value_counts()` to see. 

`housing.describe()` is another great summarisation method for a dataframe. 

In this data, the median income is preprocessed, which is common in machine learning. It's not necessarily a problem, but you should understand how it was computed. Additionally median housing age and media house value were also capped. Since the house value is a target value this could be an issue. Our model might learn prices never go beyond the cap. You would have to check with the client if this is a problem. If you need precise predictions beyond the cap, you can:
+ collect proper labels for the districts that were capped
+ Omit the capped districts from the data set. This may provide poor predictions beyond the $500k cap. 

The scales between features are not consistent and many are skewed right, having long tails on the right. Both of these can have negative effects on a model if not dealt with. 

#### Create the Test Set

**Data snooping bias** is when you look through your data and discover a pattern in the test data that leads to a particular kind of ML model. However, estimating the generalization error using the test set will be too optimistic. 

Basically, your brain detects patterns, it's how we survive kind of. Don't look at the test data, because you might train a model for that unknowingly, and it won't generalize well. It's a little like testing with training data but not to that extreme. 

> Will the test set have missing values?

One issue is consistency. Even if you `np.random.seed(42)` it will give different data if you fetch an updated dataset. You could create a hash of each instance's identifier and put that instance in the test set if the hash is lower than or equal to 20% of the maximum hash value. This ensures the test set remains consistent across multiple runs.

You can `housing.reset_index()` to give our data an "index" column, as it doesn't have one. Then, the book give you a handy solution, [`sklearn.model_selection.train_test_split`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split). 

Random sampling is ok for very large datasets. You could accidently introduce _sampling bias_ for smaller datasets as parts of the population could be unintentionally excluded in the training or test set. 

**Stratified Sampling** divides population into homogeneous subgroups called _strata_, and the right number of instances are sampled from each stratum to guarantee the test set is representative of the overall population. 

In our example, suppose income is a big contributor, so we are told, to the housing prices. We want to ensure the test set is representative of the various categories of incomes in the whole dataset. This may involve creating a new category attribute. We can use `pd.cut()` to create a new column. 

```python
housing["income_cat"] = pd.cut(
    housing["median_income"],
    bins=[0., 1.5, 3.0, 4.5, 6., np.inf],
    labels=[1,2,3,4,5]
)

housing["income_cat"].value_counts().sort_index().plot.bar(rot=0, grid=True)
plt.xlabel("Income Category")
plt.ylabel("Number of Districts")
plt.show()
```

Now, we can perform stratified sampling based on income category. The `sklearn.model_selection` package provides a number of splitter classes, each with a `split()` method that returns an iterator, yielding the training and test _indices_, not the data itself. 

### Explore and Visualize Data to Gain Insights

We will work with the full dataset because it's relatively small. However, with larger sets, you might want to explore a subset to keep performance OK. 

Make a copy `housing = strat_train_set.copy()`. Renaming makes it easier to work with and preserves original data. 

#### Visualizing Geographical Data

Because we have latitude and longitude, you can create a scatterplot which will look like California!

```python
# Use `alpha` parameter to visualize density
explore.plot(
    kind="scatter",
    title="California",
    x="longitude",
    y="latitude",
    grid=True,
    alpha=0.2,
)
plt.show()
```

We can include more information:

```python
# Include option `s` for population and color for price!
explore.plot(
    kind="scatter",
    title="California",
    x="longitude",
    y="latitude",
    s=explore["population"] / 100,
    label="population",
    c="median_house_value",
    cmap="jet",
    colorbar=True,
    legend=True,
    sharex=False,
    figsize=(10,7),
    grid=True,
    # alpha=0.2,
)
plt.show()
```

You will see that housing prices are very related to location. A clustering algorithm should be useful for detecting main cluster and for adding new features that measure proximity to the cluster centers. Also, ocean proximity also appears useful but not really up north, so it would be a complicated policy to include. 

![Graph of 1990 California housing prices per district.](/images/notes/data-science/cal-housing-price-0001.png)