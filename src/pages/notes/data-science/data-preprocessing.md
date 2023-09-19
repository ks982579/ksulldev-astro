---
layout: '@layouts/NotesLayout.astro'
title: 'Data Preprocessing'
pubDate: 2023-09-19
description: 'Data preprocessing'
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

# Unit 3: Data Preprocessing

p. 51 - 66

Data typically comes from something, like a sensor, and is transmitted to a computer. When collecting mass amounts of data, sometimes errors can creep up either from the sensor or data transmission, or maybe some other source. 

There are many articles out there, but this [If Your Laptop or Phone Keeps Crashing, Maybe Blame Cosmic Rays | HowStuffWorks](https://science.howstuffworks.com/cosmic-rays-crash-electronics.htm) article talks about how cosmic rays can interfere with electronic devices.

Preprocessing is looking for missing values and incorrect values (outliers or values that do not make sense), and gracefully handling them. Additionally, preprocessing includes transforming variables with different scales into variables with one unique scale so all data carries the same weight. And also visualizing the data to discover errors and variable correlations. 

We will discuss the four activities from above:
+ Data transmission
+ Cleaning errors from data (cleansing?)
+ Transforming variables to a unique scale
+ Visualizing data variables

## 3.1 - Transmission of Data

Data transmission can be accomplished manually or electronically. Manual data transmission is simple yet prone to error, human error. Electronic transmission is performed using local and/or wireless area networks. 

Electronic transmission uses serial or parallel transmission links. 
+ Serial transmission: digital data are sent bit by bit over one channel.
	+ Cost less.
	+ order of data bits is important, dictating how data is organized by receiver.
	+ Considered more reliable because a bit is only sent if preceding bit was delivered. 
	+ achieved with either asynchronous or synchronous technique (below). 
+ Parallel transmission: multiple channels are used to deliver multiple data bits each time. 
	+ Faster.
	+ comes at higher cost and limited to short transmission distances. 

Asynchronous and Synchronous transmission:
+ Asynchronous
	+ bit stream has start and stop bits with variable period between transmissions.
	+ start bit tells receiver to expect transmission stream.
	+ Stop bit tells receiver transmission is terminated.
	+ Cheap and slow with additional overhead of start and stop bits.
+ Synchronous transmission
	+ Bit stream is combined into longer frames with constant period between transmissions.
	+ Any gaps among streams are filled with idle streams of bits of 0 or 1.
	+ It is fast, no additional overhead

Data transmission _rate_ is expressed in terms of number of bits transmitted per second (bps). 
