---
layout: '@layouts/NotesLayout.astro'
title: 'Some Important Algorithms'
pubDate: 2024-03-25
description: 'Introduction to Algorithm Design'
author: 'Kevin Sullivan'
tags: ["computer science", "programming", "notes", "masters", "algorithmics", "algorithms"]
---

```yaml
title: Algorithmics
subtitle: DLMCSA01
authors: Prof. Dr. Cosmina Croitoru
publisher: IU International University of Applied Sciences
date: 2023
```

# Some Important Algorithms

pp. 71-100

## Introduction

Algorithms are designed for a wide range of problems, but many rely on searching and sorting tasks under the hood. Digital security is also a critical domain and mainly relies on data encryption and decryption techniques provided by cryptography algorithms such as the Rivest-Shamir-Adleman (RSA) algorithm. And in recent years, machine learning algorithms have taken the spotlight, with essential techniques like the k-means algorithm, which plays a crucial role in data clustering. 

## 3.1 Searching and Sorting

p. 72

We will dive into searching and sorting algorithms because of their _omnipresence_ in algorithmic tasks. It would also be nice to compare the efficiency of different algorithms, which will guide your decisions on which algorithms to use in certain circumstances.

### Searching Algorithms

We will look over the following search algorithms:
+ Linear
+ binary
+ hash

A search problem is just locating a position of a value in some set, or sequence. We will assume that sequence is an array and we will provide the position of the value in the array. 

It is typical to return $-1$ when nothing is found, which is simple in JavaScript. Rust has different tools, like `Option<T>` or `Result<T,E>` enumerators that are more idiomatic for the language. 

#### Linear Search

...