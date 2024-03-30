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

Linear search algorithm goes through each element of a sequence of values in search of the expected one and returns with its position if found, or indicates the element was not found. An example shouldn't be necessary to loop through a list.

#### Binary Search

A **binary search** algorithm assumes its sequence of elements is already sorted. An informal description of the algorithm is:
1. find the middle of the sequence.
2. check if the middle value is our element.
3. If yes, return the value's position.
4. If no, check if the middle value is greater than ours.
5. If yes, repeat this entire process with the sequence of smaller elements.
6. If the middle value is greater than our, repeat the process with the sequence of larger elements. 

The sequence being searched continuous shrinks by half until it eventually reaches the size of one, in the worst case. I think that includes the value not being present. The size of the sequence follows this pattern:

$$
n, {n \over 2}, {n \over 2^2}. {n \over 2^3}, \dots, {n \over 2^{s-1}}, {n \over 2^s}
$$

And the algorithm stops when the sub-sequence is reduced to a length of one. This implies the following:

$$
\begin{align*}
{n \over 2^s} &= 1 \\
2^s &= n \\
s &= \log_2(n)
\end{align*}
$$

where $s$ would be the maximum number of sequences looked at. You can get an idea of the _logarithmic efficiency_ of the binary search algorithm. 

Now, what if that give you a decimal value. Let's consider what we should do with a quick example. Suppose we have a sequence with 10 elements. When we split it in half (1), we have to pick what to look at. Suppose we set the algorithm to compare the larger value, but our search element is smaller. We take the sequence of 5 smaller numbers (2) and look at the middle value. Again, our element is smaller than the middle, so we take the sequence of 2 smaller elements (3). We can look at the larger and see it isn't that, so we look at the other (4), and hey, it's not that either. 

I think it's safe to assume we run the risk of comparing values a number of times equal to the ceiling of that logarithm.

#### Hash Search

The **hash search** algorithm assumes there is a sequence of elements where each element is identified by a unique key that is either a natural number or a string. Searching strings is possible because we can transform strings into integers using ASCII codes. 

How does it work? Consider the hash table to be an array. If the key is a string, we can pass the key into a _hash function_ as an argument to return the position in the array to store the data. That is, the data is stored in the position of the hash function of the data's key. 

The first that arises is called a **collision**, when the hash of a key is the same as another. You can mitigate this risk with tailored hash functions for a uniform distribution of keys, and expanding the size of the table to allow for more possible positions. Additionally, each position could hold a list of data, and you can do a linear search once you reach the position.

Another issue is that there is no standard hash function for all types of keys. We will look at the **MAD** has function, which uses multiplication, addition, and division. 

We select a table (array) of size $n$ to search from. Let $p$ be the smallest prime number that is greater or equal to $n$. Two random numbers are then selected between $(0, p-1)$, which we can call $a$ and $b$. The MAD hash function $h$ is then:

$$
h(k) = \left( (ak + b)\ \text{mod}(p) \right) \ \text{mod}(n)
$$

The course book gives a slightly confusing example because it combines 2 tables, but saves space. The hash table is designed not in the greatest way, and several positions are left empty whilst other have as many as 3 keys associated with them. The speed of the hashing algorithm really depends on the speed of the algorithm of the hash function, and t he number of collisions.

Suppose worst case scenario when all elements are collisions, we would be performing linear search.

### Sorting Algorithms

p. 74
