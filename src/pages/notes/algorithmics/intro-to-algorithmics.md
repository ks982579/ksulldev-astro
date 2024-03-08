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

Firstly, how do we write algorithms? How do we convey information and instructions to others to complete a process and solve a problem? [Pseudocode | Wiki](https://en.wikipedia.org/wiki/Pseudocode) is intended to be human readable, and provide a description of the steps in an algorithm using mixed conventions. What conventions? You can make up those because there's really no broad standard for pseudocode syntax either. 

Check out this article, [What is Pseudocode? | FreeCodeCamp](https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/) for a deep dive into the topic. 

Computers use programming languages to execute algorithms and complete tasks. As such, a computer programmer must translate the Pseudocode into a programming language for the computer. A **Programming Language** automates the processes leading to the execution of algorithms. 
+ [Programming Language | Wiki](https://en.wikipedia.org/wiki/Programming_language)
	+ you can find a link to a list of languages - always good fun.
+ [What is a Programming Language? | Codecademy](https://www.codecademy.com/resources/blog/programming-languages/)
+ [What is a Programming Language? | How-To Geek](https://www.howtogeek.com/838826/what-is-a-programming-language/)

No shortage of information online. A Programming language can be thought of as a bridge between how a programming communicates instructions to their computer. 

### Programming Languages

Doesn't look like we are diving into levels and generations of programming languages. The course uses JavaScript, a weird dynamically typed and interpreted language used in browsers. I want to use a powerful, lower-level statically typed and compiled language, Rust. 

#### "Hello, You!"

I guess the first thing we do is create a program that can ask for your name and then display it. 

```rust
use std::io::stdin;

fn main() {
    let mut line: String = String::new();
    println!("What is your name?");
    let _bytes_read: usize = stdin().read_line(&mut line).unwrap();
    println!("Hello, {}!", line.trim());
}
```

This program doesn't utilize all the features of rust but gets the job done. Had to add a `trim()` to the line because it captures the new-line added as well. 

#### Greatest Common Divisor (GCD)

Looking again at the greatest common divisor, what is the problem? We want to identify the largest natural positive integer that divides two given _strictly_ positive natural numbers. Can we create an algorithm?

Start by assuming the smallest of the two given numbers is the largest divisor and test the assumption. How do we test? The modulus operator should return 0 for both cases. If the assumption is wrong, reduce the value and try again. 

Implement in Rust?

```rust
// Rust prelude might take care of trait imports
use std::env;
use std::str::FromStr;

fn gcd(n1: i32, n2: i32) -> Option<i32> {
    let mut div: i32 = if n1 < n2 { n1 } else { n2 };
    loop {
        if div <= 0 {
            break;
        } else if (n1 % div) == 0 as i32 && (n2 % div) == 0 as i32 {
            break;
        } else {
            div -= 1;
        }
    }
    if div > 0 {
        Some(div)
    } else {
        None
    }
}

fn strictly_positive_ints(nums: &[i32]) -> Result<(), String> {
    for val in nums.iter() {
        if *val <= 0 as i32 {
            return Err(format!("{} not strictly positive", val));
        }
    }
    Ok(())
}

fn main() {
    let clargs: Vec<String> = env::args().collect();
    let num1: i32 = i32::from_str(&clargs[1]).expect("Could not convert value into integer.");
    let num2: i32 = i32::from_str(&clargs[2]).expect("Could not convert value into integer.");
    let _ = strictly_positive_ints(&[num1, num2]).unwrap();
    let num3 = gcd(num1, num2);
    match num3 {
        Some(n) => println!("GCD = {}", n),
        _ => println!("No GCD... something wrong probably happened."),
    }
}

```

Rust makes you consider error handling as part of the implementation by utilizing functions that return `Result<T,E>`. Also, note that you must import the trait you wish to use, such as the `FromStr` trait. Rust does this to be dynamic, multiple traits can use the same method names, and you tell the compiler what you want to use based on the import. Finally, I started using the `isize` data type, but the modulo operator did not work correctly. I had to go through and make everything an `i32` in the end. 

The course book makes use of asking the user for numbers at runtime. However, it's really just easier, I think, to pass in arguments. Also, the course book wraps the entire look into a while loop with the condition being the check. That's also a good implementation, but I like the additional check of being greater than 0 to avoid possibility of an infinite loop situation. 

#### Data Structures

The previous examples are simplistic in that they only handle very few values collected by the user. We will call that "data". In many (realistic) situations, an algorithm, or program, must collect data that is more diverse, either in quantity or variety. This adds an additional layer of preplanning to organize or structure input data into relevant data structures the algorithms can work with. 

The course book dives head first into a Selection Sort Algorithm, but I think Bubble Sort is more appropriate as a first sorting algorithm to learn, as that is how I was taught previously. 

```rust
pub mod sorting {
	pub fn bubble_sort<T: PartialOrd> (arr: &mut [T]) {
		let n = arr.len();
		for i in 0..n {
			for j in 0..n-i-1 {
				if arr[j] > arr[j+1] {
					arr.swap(j, j+1);
				}
			}
		}
	}
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_int_bubble_sort() {
        use sorting::bubble_sort;
        let mut arr = [5, 2, 9, 1, 5, 6];
        bubble_sort(&mut arr);
        assert_eq!(arr, [1, 2, 5, 5, 6, 9]);
    }

    #[test]
    fn test_int_vec_bubble_sort() {
        use sorting::bubble_sort;
        let mut arr = vec![5, 2, 9, 1, 5, 6];
        bubble_sort(&mut arr);
        assert_eq!(arr, vec![1, 2, 5, 5, 6, 9]);
    }
}
```

Bubble sort is quite simple but effective. We will (hopefully) cover sorting more in the future. I'll introduce my algorithms for selection and insertion sort there. If you are not familiar with Rust, the input of the function is a generic we refer to as `T`. Languages like Python and JavaScript don't care the type you pass into a function. For the function to work though, it cannot be any ordinary generic, but it must implement the `PartialOrd` trait. The [`PartialOrd` trait](https://doc.rust-lang.org/std/cmp/trait.PartialOrd.html) is what allows you to use the comparison operators. There's some confusion regarding `Ord` and `PartialOrd`, but we usually use the partial version because regular `Ord` means everything is compared. 

The algorithm itself loops through the list for as many elements as it contains. I think we cover it more later on in the course, but it sends the largest values to the back of the list, one at a time, allowing the smaller value to bubble to the top. That is why the inner loop has the range of `0..n-i-1`. For every iteration `i`, we have sent the largest value to the end of the list, and no longer need to include it in our sorting. 

The data structure used in our sorting algorithm is an array, or a vector. Rust has a **Type Coercion** engine that will change a value's type in certain situations, if t hey are similar enough. [Rust Reference: 10.7. Type Coercions](https://doc.rust-lang.org/reference/type-coercions.html) from The Rust Reference is a good place to start if you need some more information. 

Another thing to note is that we pass in a mutable reference to the array, and make the modification to the data structure itself. I may refer to this as modifying the array _in-place_. Another possibility is to make a copy of the array, then sort and return the copy, leaving the original array unchanged. That will consume more memory though. 

#### Control Structures

In an Algorithm, the two main controls are:
+ Conditions
	+ Think of as `if` and `match` statements. 
+ Loops
	+ Typically `for` and `while` loops. Rust also has a `loop` for infinite scenarios. 

The purpose of control structures is to control the flow of logic through the algorithm, indicating how instructions will follow one another. 

## 1.3 Quality Algorithms: Correctness, Accuracy, Completeness, and Efficiency

When proposing an algorithm for a given computational problem, we must ensure it is:
+ Correct
+ Accurate
+ Complete
+ Efficient

### Correctness

Can only be established through mathematical correctness proof of its partial or total correctness. An algorithm is _totally correct_ if there is a mathematical proof that the algorithm the algorithm is partially correct and, for all its inputs that fulfil its preconditions (correct inputs), the algorithm will always terminate. 

An algorithm is _partially correct_ if one can prove mathematically that it has two types of inputs fulfilling its preconditions:
+ Inputs where the algorithm does not terminate and the outputs are therefore unknown.
+ Inputs where the algorithm terminates and whose outputs fulfil its post-conditional (are correct).

### Completeness

An algorithm is complete if for all its correct inputs (that fill preconditions), it _always_ renders the correct outputs (that fulfil its post-conditions). Else, it terminates with an indications that no solution was found. 

### Accuracy

When performing calculations, values will have desired level of accuracy. That is, they should be close as possible to reality and a good representation of what they are meant to represent. 

Accuracy becomes a hot topic in approximation algorithms.

### Efficiency and Complexity

An algorithm is a process of _doable_ steps to solve a problem. We aim to use appropriate data structures and take the best steps. You can measure an algorithms efficiency, something we will look at later, with space complexity and time complexity. There's usually a trade-off. 

**Space efficiency**, regard the amount of memory that is required for the data structures of an algorithm. Like how sorting can be in-place or make a copy of the list to sort. 

**Time efficiency**, regards the number of steps an algorithm takes. 

**Complexity** has more to do with the level of difficulty of a given computational problem. 

## 1.4 The Role of Algorithms in Society

Algorithms in computer science are different than the definition adopted by modern societies. Modern societies consider algorithms as "powerful elements of computing devices and applications whose mission it is to assist as much as possible in the management of our lives in decision-making choices and execution of activities."

### Application Domains

Examples of influences on modern life:
+ Search engines;
+ Public-key cryptography and digital signatures
+ Errors correction,
+ Patterns matching
+ Data Compression
+ Databases

Mostly fun things we all want to know more about. 

#### Search Engines

Search engines allow users to query the Web to find and select the right information from all of the content hosted on the internet. 

#### Public-Key Cryptography and digital Signatures

Public-Key Cryptography and digital Signatures are mainly used to secure information. 

Private-key or symmetric cryptography, there's a single private key to lock and unlock information. Information is locked by the key through _encryption_, and unlocked through _decryption_. 

Public-key or asymmetric cryptography are a little different. The course book says to suppose the information is locked with the private key, and only one person has this key. Basically, anyone with a public key can encrypt information. But only the holder of the private key can decrypt it. 

#### Error Correction

Computing devices, their applications, and algorithms handle large quantities of data. Sometimes, that data contains errors. Error correction algorithms automatically detect and correct such data errors. 

The book gives an example of validating a 13-digit ISBN Code. How?
1. multiply all even positions digits by three and sum all results to the sum of all other digits except the 13th. 
2. Calculate the remainder from division of the sum by ten.
3. If the addition of that remainder to the 13th digit gives ten, the ISBN is valid. 

The course book looks at ISBN `978-3-540-48663-3`. They do a switch, starting with index 0 and saying the "odd positions digits"... 

#### Data Compression

Data compression is a fascinating topic, and takes advantage of existing redundancies in data to present the data in a more compact form. An example is the "Run Length Encoding" compression algorithm.  This simply give you the lengths of 0s and 1s in a binary string, instead of the whole string. 

#### Pattern Matching

A pattern matching algorithm's goal is to find occurrence(s) of a given pattern in a given object. A popular tool for find text within text is _regular expressions_ (RegEx). The book gives a JavaScript RegEx example. 

Rust has a [regex crate](https://docs.rs/regex/latest/regex/) as RegEx isn't part of the standard library. 

#### Databases

A database can be thought of as a repository to store data that is typically structured in a specific way to be easy to use for certain cases. They have been around for very long time, since about 1960. Some popular database management systems (DBMS) include: Oracle, SQL Server, DB2, MySQL, Access, MongoDB, Solr, CouchDB...

Those are the course book's examples. I am surprised they left off PostgreSQL.

### Challenges

In _modern societies_, Algorithms use personal data for various reasons. Seems mostly like marketing... However, this raises many issues and challenges such as:
+ applicability of current legal and ethical frameworks,
+ promotion of unfair and opaque practices,
+ lack of accountability,
+ privacy breaches,
+ disruption of the labour system.

#### Applicability of Current Legal and Ethical Frameworks

The course book says many organizations, such as the Association of Computing Machinery, are in agreement on the ethical principle for the use of data by algorithms:
+ Algorithms should only use data if it is for the general benefit of society. 

Does it benefit society that Google and other tech giants use and sell your data for the purpose of targeting you in another marketing campaign for another b\*llsh!t product you never knew you needed? Purchasing the product might generate revenue for some company, funnelling money straight to the 1%. And when you forget about the product or throw it away in a month, it generates waste future generations will have to contend with. 

Since the mid-2018, the European Union legal system follows a General Data Protection Regulation (GDPR) law that requires all algorithms to give an explanation to anyone requesting an explanation of when their data were used by an algorithm without their consent or when they are affected by the processing and outcome of the algorithms. 

#### Promotion of Unfair and Opaque Practices

The book gives an example of budgets given to fixing neighbourhood streetlights if you use a mobile app. This obviously excludes those who are unaware or do not use the mobile app. So, collecting data to for budget allocation is biased for those using the mobile app. 

Another concern is that development of algorithms is so complex they become a black box for most people who then must simply put their trust in the hands of developers. I issue happens when the trust is betrayed, and your data is unknowing sold to hundreds or more companies without you knowing. 

Search engines betray your trust, illustrating the opacity of algorithms, when you enter something into the engine and are returned pages that correspond to things in your personal profile, even when such keywords do not contain personal data. That's the search engine targeting you with advertising.

I think it was found that Google was behind the scenes altering users' search requests to direct them towards more shopping sites. This was a bad user experience, not getting what they were looking for. It is/was also bad for companies paying for real marketing solutions, as many users not interested in shopping were directed to their websites, and they were charged for that. The only winner is the Search Engine...

#### Lack of Accountability

Both the [Association of Computing Machinery](https://www.acm.org/) and the [European General Data Protection Regulation](https://gdpr.eu/what-is-gdpr/) are _adamant_ that individuals are entitled to question algorithmic decisions. It is difficult to enforce because typical end-users are non-specialists, which makes asking the questions and explaining the answers both a difficult process. 

#### Privacy Breaches

A good example is when companies sell or share users' social media data without prior knowledge and prior consent of the owners and generators of such data. This can lead to managers and government authorities using social media applications to invade people's privacy, sometimes with negative consequences. 

#### Disruption of the Labour System

Algorithms, especially the machine and deep learning kind, are a bit of a black-box to most and are designed for decision making. There's unrest that the labour force currently in charge of these decision-making choices and activities may eventually become redundant. The concern is that we end up with an algorithmic society where algorithmics' workers are the only active population and all others are unemployed. That's drastic. 

---

## Test Your Understanding

...

---

```yaml
title: The Power of Algorithms
subtitle: Inspiration and Examples in Everyday Life
authors:
	- Giorgio Ausiello
	- Rossella Petreschi
publisher: Sprint-Verlag Berlin Heidelberg
date: 2013
```

> Required to read chapter one, "Algorithms, An Historical Perspective". 

# The Power of Algorithms

## 1. Algorithms, An Historical Perspective

Algorithms go as far back as third millennium BCE, which is period of 3000-2001 BC. In the ninth century, Persian mathematician al-Khwarizmi played a very important role in the development of numerical algorithms, and is where the word "algorithm" is derived from. The precise definition of "algorithm" and notion of computability were established by A.M. Turning in the 1930s. His work is considered the beginning of the history of Computer Science. 

### 1.1 Introduction

There are 2 relevant aspects both historically and today in the design of modern algorithms:
+ The need to find a correct sequence of precise and elementary operations that duly executed allow one to reach a solution of a problem "in a finite number of steps."
+ The need to communicate to others the sequence of computing steps to be performed. 

### 1.2 Teaching Algorithms in Ancient Babylonia and Egypt

The oldest "nontrivial" example of numerical computation humanity has discovered so far is on a Sumerian clay tablet dated to be from around 2500 BCE. It was found in Shuruppak on the Euphrates river. 

We also have found some Babylonian tablets from 2000 to 1650 BCE, I think that's the second millennium BCE. There are similar algorithms found on Egyptian papyrus dated to the first centuries of the second millennium BCE as well. The Egyptian papyrus example is called the Rhind papyrus and has a multiplication algorithm based on a techniqu of "duplicating and halving". 

### 1.3 Euclid's Algorithm

One of the first algorithms taught in beginner's classes in maths and computer science is Euclid's algorithm for computing the greatest common divisor of two integers. The algorithm is presented in book VII of the Elements, from Euclid's main work. Considered an ancient algorithm. The algorithm we presented earlier used a loop, but Euclid implicitly used a technique known as **recursion**, where an algorithm calls itself. 

Euclid pushed forward the industry by providing the algorithm to be followed with arbitrary input values and the proof of its correctness. Even algorithms presented today often come without rigorous correctness proof. Formal proofs of correctness only happen rarely and only for the most sophisticated applications. Unqualified personnel, hired at a discount, producing spaghetti code without making use of scientific programming methods, are a reason why some, sometime critical, software applications behave differently than expected. 

### 1.4 Al-Khwarizmi and the Origin of the Word Algorithm

In 772 CD, the seat of the calphate was moved from Damascus to Baghdad. Baghdad became an important centre for development of maths and science. Translations of Greek scientific works into Arabic had already begun in sixth and seventh centuries. However, the early Islamic period was also filled with violence from religious fanatics that lead to the destruction of books and other scientific works. Still, knowledge was gathered from all over the known world and processed.

As Bagdad flourished in the early ninth century, around 820, al-Mamum founded a scientific academy, the House of Wisdom. And one of its mathematicians was Abdallah Mohamed Ibn Musa al-Khwarizmi al-Magusi; whose name was basically given to computational procedures. Not much is known about him, he lived around 780-850, but made a great impact. He played a role in the number zero and the positional decimal system. 

### 1.5 Leonardo Fibonacci and Commercial Computing

Leonardo Pisano, AKA Fibonacci, lived between 1180-1250, became a famous name in the algorithm community. His most important work, the "Liber abbaci" was written in 1202. In it, he explains how he integrated Indian and Arab computing (learning from al-Khwarizmi's works) with Euclidean mathematics. 

Fibonacci is well known for sequence of Fibonacci numbers, apparently being derived from the "rabbit problem" in recreational mathematics. An interesting property is the ratio of $F(n)$ and $F(n-1)$ tends to a constant $\phi=1.618$, which you may know as the golden ratio. 

### 1.6 Recreational Algorithms: Between Magic and Games

Many historic algorithms were aimed to solve practical problems. However, the Fibonacci numbers came about an algorithm designed to solve a game or puzzle, recreational algorithmics. The graph data structure is apparently another example of this kind. The book also dives into the construction of _magic squares_ and traversal of labyrinths. 

Magic squares are interesting because many famous names in maths had a look into them including Pascal, Fermat, Euler, and Cayley. Other mathematicians, such as Manuel Moschopoulos and Ibn Qunfudh, also proposed different techniques of filling magic squares. 

### 1.7 Algorithms, Reasoning and Computers

Automatic reasoning is one of the most ambitious and interesting research domains of artificial intelligence. We emphasize that this is an indirect attempt to transform reasoning into an algorithmic process. 

German philosopher Gottfried Leibniz wanted to organize all human knowledge in an _encyclopedia_ and apply to it, knowledge and reasoning, the same computation rules that had been successfully applied to mathematics. 

top of p. 22