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

