---
layout: '@layouts/NotesLayout.astro'
title: 'Data Visualization'
pubDate: 2024-01-09
description: 'Introduction to importance of data visualization and topics within.'
author: 'Kevin Sullivan'
tags: ["statistics", "notes", "masters", "math", "maths", "probability", "visualization"]
---

```yaml
title: Advanced Statistics
subtitle: DLMDSAS01
authors: Prof. Dr. Unknown
publisher: IU International University of Applied Sciences
date: 2023
```

# Unit 5: Data Visualization

Our learning objectives are as follows:
+ Understand the importance of visualizing data.
+ Discuss the general principles of visualizing data.
+ Identify the most important chart types.
+ Construct histograms, scatter plots and profile histograms.

## Introduction

Data visualization is a very important technique to understand the data to extract information or make inferences. We use a process called **exploratory data analysis** (EDA) to gain insights into the data. It is an easy way to get an idea about the distribution and variability of variables of the dataset. 

## 5.1 - General Principles

First step to data visualization is selecting the appropriate chart type or technique to do so. Within this step we can also choose the design elements used to create the visualization. 

It is important to remember that data visualization **is not** truly objective. By choosing a specific visualization type and style we are suggesting to the audience some associations they should make. This can lead to _cognitive biases_. 
+ Sometime intentional - We want audience to follow our narrative about the data.
+ Sometimes unintentional - Accidentally bias the audience into thinking a specific way.

The book goes into some examples using the Python Seaborn package. Things to note:
+ Just drawing data points:
	+ may indicate each point represents an independent measurement. 
	+ may indicate we do not know anything about the relationship between data points. 
+ Connecting data points may indicate:
	+ points are not independent but have a linear relationship between one point and the next. 
	+ We indicate values are not independent AND they have a linear relationship

Changing **hue** (or colour) is a good way to separate data. However, we intuitively interpret softer colours and dashed lines as _less important_. Sometimes this is intentionally done, but can mislead the audience if unintentionally done. 

**Make every design decision painfully deliberate.** Don't just rely on defaults of a program. 

Check out this PDF [Which Visualization](https://experception.net/Franconeri_ExperCeptionDotNet_ChartChooser.pdf), also [found at uxlib.net](https://uxlib.net/assets/subject/data-viz/datavis-quick-ref.pdf) as a cheat sheet to data visualization. It's actually a very nice sheet. 

With that, let's jot down some best practices:
+ Keep within the boundaries of a single screen. 
	+ Think carefully about what intended audience should see and how information should be presented. 
+ Provide sufficient context.
	+ indicate whether numbers are within a _good_ or _bad_ range. 
	+ May require expert advice.
+ Provide adequate level of detail or precision.
+ Start scales at zero.
	+ Starting at non-zero can introduce cognitive bias and distort the magnitude of differences.
+ Keep consistent colour scheme.
	+ Consistent
	+ use as few colours as possible but as many as necessary to avoid clutter.
+ Avoid decorations
	+ They mostly just clutter the visualization. 
+ All plots should be _clearly_ labelled. 
	+ Each axis should have relevant description.
	+ Units should be added
	+ Legend if more than one dataset. 
+ All labels should be large enough.
	+ Pretend you are showing plot to large venue and people in the last row need to read and interpret the plot.
+ Be inclusive in the choice of colours.
	+ Consider colour blind people. Some people cannot distinguish between red and green. 
		+ You can make the graph in black and white and check if it is still usable - a good test.
	+ Use different markers and line styles to distinguish between multiple elements. 

## 5.2 - One- and Two-Dimensional Histograms

p. 120

### One-Dimensional Histograms

here...
