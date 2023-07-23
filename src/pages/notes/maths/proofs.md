---
layout: '@layouts/NotesLayout.astro'
title: 'Proofs in Maths'
pubDate: 2023-19-07
description: 'Various proofs'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths"]
---

$$
\textbf{Proof by Contradiction}

\text{Assume that} \sqrt{2} \text{ is rational.}

\text{By definition, a rational number can be expressed as} \frac{a}{b}, \text{ where } a \text{ and } b \text{ are integers with no common factors except } 1.

\text{So, let's assume that} \sqrt{2} = \frac{a}{b}, \text{ where } a \text{ and } b \text{ are integers with no common factors except } 1.

\text{Now, we can square both sides to get} \sqrt{2}^2 = \left(\frac{a}{b}\right)^2.

2 = \frac{a^2}{b^2}

\text{Multiplying both sides by} b^2 \text{ gives} 2b^2 = a^2.

\text{Since } a^2 \text{ is even, } a \text{ must also be even (because the square of an odd integer is odd).}

\text{So, we can write } a = 2k, \text{ where } k \text{ is an integer.}

\text{Substituting the value of } a \text{ into the equation } 2b^2 = a^2 \text{ gives} 2b^2 = (2k)^2 = 4k^2.

\text{Dividing both sides by } 2 \text{ gives} b^2 = 2k^2.

\text{Since } b^2 \text{ is even, } b \text{ must also be even.}

\text{However, if both } a \text{ and } b \text{ are even, they have a common factor of } 2, \text{ which contradicts our initial assumption.}

\text{Therefore, our assumption that } \sqrt{2} \text{ is rational must be false.}

\text{Hence, } \sqrt{2} \text{ is irrational.}

$$
