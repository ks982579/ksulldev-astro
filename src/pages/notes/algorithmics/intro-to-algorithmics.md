---
layout: '@layouts/NotesLayout.astro'
title: 'Introduction to Algorithmics'
pubDate: 2024-02-29
description: 'An introduction into computer algorithms'
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

# Course Learning Objectives

This course suggests several books for reading

- [ ] Introduction to Algorithms; MIT Press
- [ ] The New Turning Omnibus, MacMillan Education
- [ ] Algorithmics: The Spirit of Computing; Springer
	- [ ] [Sprinter Website](https://link.springer.com/book/9783642272653) soft and hardcover books - expensive enough
- [ ] Algorithms; Pearson Education; Sedgewick, A., & Wayne, K.
	- [ ] [For Free!!!](https://algs4.cs.princeton.edu/home/) but only online
- [ ] The Algorithm Design Manual; Springer
- [ ] The Power of Algorithms; Springer

It would be difficult to read them all with probably a big overlap of material. Apparently the first is quite good. I am reading The Algorithm Design Manual which is also good so far.

**Algorithmics** aims to discuss the historical and theoretical foundations of computer science and explore key concepts on the design and programming of algorithms. Another interesting concept are the societal implications of the use of the computer applications, which come from programming algorithms. We are all aware of the 2000s dot-com bubble and the 2022 AI Hype train. We may also investigate some futuristic paradigms of algorithms. 

# Unit 1: Introduction to Algorithmics

pp. 15-32

Our learning objectives are as follows:
+ Basic concepts of algorithmics.
+ Key issues in the algorithm quality and the difficulty levels of computational problems.
+ Important features of the interplay between algorithms, programming languages, and data structures using Rust programming language.
	+ The course actually uses the JavaScript programming language.
+ Historical and Contemporary role of algorithmics.

## Introduction

Computer programming is perceived as they platform that the other main technologies stand on in the Fourth industrial revolution. Those technologies are _digital_, _biological_, and _physical_. Computer programs are algorithms written in a programming language. So, you can almost say that algorithms are the real platform the other technologies can stand high on. 

**Algorithmics** is the study of algorithms. 

## 1.1 Basic Concepts and Historical Overview

An **algorithm** is a sequence of steps towards the resolution of a computational problem. Other definitions appear similar.

### History of Algorithmics

The [algorithm | Wiki](https://en.wikipedia.org/wiki/Algorithm) can stretch as far back as the year 825. An Iranian scientist, Muḥammad ibn Mūsā al-Khwārizmī, wrote a book that were lost in translation so to speak, but his name became the work "algorithm" to us today. 

#### Ancient Iraq and Ancient Egypt

The Sumerian people of ancient Iraq are some of the first people to have used algorithms around 2500 BCE. From 2000 to 1650 BCE, the Babylonians also wrote algorithms on tablets to teach mathematical concepts. from 1900 to 1800 BCE, people of ancient Egypt wrote algorithms on papyrus to teach concepts of geometry.

#### Ancient Greek Civilization

Around 500 BCE, the ancient Greece ruled the world. Hellenistic mathematicians Eratosthenes and Euclid found the first algorithms on the identification of prime numbers and on the calculation of the greatest common divisor of two numbers.

#### Ancient Islamic Translations

Muslim rulers build the House of Wisdom around 820 which was a place to translate Hellenistic and other manuscripts into Arabic. 

#### The Byzantine Empire

The Roman Empire split into the Western and Eastern Empires in 390. The Eastern Empire, Byzantine, continued until 1453. Italian Fibonacci was born around 1170 in Pisa, present-day Tuscany. He was skillful at merging al-Khwārizmī Hindu-Arabic algorithms with Euclidian mathematics. His work contains many algorithmic and mathematical solutions for many domains such as mathematics, accounting, and games. 

#### Post-Renaissance and Contemporary Western Mathematicians

"Historical hardware" devices started with clay tablets and papyrus. Then came the "algorithmic mechanical machines" are also a huge milestone in the development of algorithms. $18^{th}$ century French inventor Jacquard created the programmable sewing machines for the silk industry. 

Charles Babbage and Ada Lovelace, in the mid $19^{th}$ century created basically the first actual "turning-complete" computer, and the first computer algorithm respectively. Something about using punch cards to automate astronomical calculations.

### Algorithmics Basic Concepts

We ran through a quick history of algorithms. It's actually been a non-computer concept longer than it has been on computers. We now want to dive deeper into some basic algorithmic concepts and differentiate between algorithms and algorithmics. 

#### Computational Problems

The purpose of algorithms is to solve computational problems composed of the following three components:
+ Inputs with preconditions
+ Outputs with post-conditions
+ Set of relationships between inputs and outputs.

The course book then looks at identifying the highest common divisor of two strictly positive numbers as an example.
+ inputs = two numbers
	+ preconditions = strictly positive natural numbers
+ Output = one number
	+ post-condition = it is highest common divisor of the two inputs
+ relationship = the output is the largest natural number that is divisor of both inputs. 

A **Decision Problem** is a computation problem whose output yields a Boolean answer. An example would be, is a number prime? A non-decision problem is like the example given above, highest common divisor. 

#### Computability and Decidability

A computational problem is said to be **computable** if there exists an algorithm that can solve it. Our above example regarding the highest common divisor is said to be computable. However, there's something called the classical "Halting Problem", which I think there's a paper suggested for reading, that is not computable. The dichotomy (division or contrast between 2 things) between decision problems and non-decision problems makes it possible to speak of decidability as a synonym of computability for decision problems.

[**Decidability** | Wiki](https://en.wikipedia.org/wiki/Decidability_(logic)) is the ability of a problem to have a solution, or for there to exist an effective method for deriving a correct solution. It sounds like the course book is trying to make a similar argument as Wikipedia.

#### Algorithms and Algorithmics

An **Algorithm** is a finite sequence of _doable_ (by a Turning machine) steps aimed at solving a given computational problem. 

**Algorithmics** is the study of algorithms and computational problems since many computational problems are known to be non-computable. An Algorithmics course studies the computability, solvability, and decidability of computational problems, as well as the design and the analysis of algorithms.

## 1.2 Algorithms, Programming Languages, and Data Structure

And another one.
