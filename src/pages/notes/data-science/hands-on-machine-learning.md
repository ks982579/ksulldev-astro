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