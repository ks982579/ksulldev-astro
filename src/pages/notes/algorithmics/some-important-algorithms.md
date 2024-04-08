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

There are so many sorting algorithms, here's a few:
+ radix sort
+ merge sort
+ insertion sort
+ counting sort
+ bubble sort
+ bucket sort
+ quick sort
+ introsort
+ timesort
+ library sort 
+ burst sort

We will look at some fundamental sorting algorithms but not jump into how they were extended by other sorting algorithms.

#### Radix Sort

I think it is odd to start here, but Ok... This algorithm goes back to the 1880s, being invented by Hollerith. It seems to be aimed at sorting numbers, natural numbers. It uses 10 buckets numbered 0-9. Let's list the steps:
1. each number is put in the bucket of its least significant digit, starting with 0.
2. Each number is put into the bucket of its second least significant digit, being 1.
3. Continue this process for all buckets, until all digits' positions are covered. 

This [Radix Sort - Data Structures and Algorithms Tutorials | GeeksForGeeks](https://www.geeksforgeeks.org/radix-sort/) article might be helpful. 

You start sorting by the least significant _ones_ digit. Then you move onto the tens digit. If some numbers don't have a tens digit, you give it a zero and preserve the order. Then you continue until you are beyond the largest value.

This doesn't seem incredibly efficient, you would be running over the list for as many digits as there are in the largest number, or something of the sort. I think you keep sorting until all of the buckets are empty, leaving only the zero bucket... I'll try implement in Rust there. Note, by natural numbers, we mean positive integers. Also, zero is technically neither positive nor negative, it belongs to the set of whole numbers, which is the super set of natural numbers.

```rust
// Top of File
#[derive(Debug, Default)]
struct Bucket<T> {
    bucket: Vec<T>,
}

impl<T> Bucket<T> {
    fn new() -> Self {
        Bucket { bucket: Vec::new() }
    }
}

/// Radix sort is kind of hard to implement in Rust...
pub fn radix_sort(arr: &mut [i32]) {
    // Instantiate buckets for each digit
    let mut buckets: [Bucket<i32>; 10] = [
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
        Bucket::new(),
    ];
    let len: usize = arr.len();
    let mut divisor: i32 = 1;
    // get max; get digits of max; we run loop that many times
    let mut max_val: i32 = 0;

    // into_iter() so we don't assume ownership of array
    for i in arr.into_iter() {
        // making this positive is critical for finding most number of digits.
        // Then I remembered that Radix sort can really only handle Natural Numbers!
        let check_this: i32 = i32::abs(*i);
        if check_this > max_val {
            max_val = check_this;
        }
    }

    // Finding number of digits w/out converting to String...
    let mut number_of_digits: usize = 1;

    // encapsulated to drop unused values
    {
        let mut size_up: usize = 10;
        loop {
            if max_val > size_up.try_into().unwrap() {
                number_of_digits += 1;
                size_up *= 10;
            } else {
                break;
            }
        }
    }

    // Loop through for all digits.
    for _ in 0..number_of_digits {
        // Adding values to bucket based on digit in question.
        for i in 0..len {
            let digit: usize = ((arr[i] / divisor) % 10).try_into().unwrap();
            buckets[digit].bucket.push(arr[i]);
        }
        let mut tmp_vec: Vec<i32> = Vec::new();
        for each_bucket in buckets.iter_mut() {
            tmp_vec.append(&mut each_bucket.bucket);
        }
        // update our array
        for i in 0..len {
            arr[i] = tmp_vec[i];
        }
        divisor *= 10;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn sorts_online() {
        assert!(true);
    }
    #[test]
    fn test_radix_sort() {
        let mut actual: [i32; 6] = [100, 69, 24, 5123, 9, 420];
        radix_sort(&mut actual);
        let expected: [i32; 6] = [9, 24, 69, 100, 420, 5123];
        assert_eq!(actual, expected);
    }
}
```

Is that the prettiest looking code you've ever seen? No, probably not. A little too much work went into that but we made it in the end.

Each value is pushed into a bucket based on a particular digits value, and then combined into the array. Then, it progresses to the next digit, and so on... Implementing this has shown me it has limited use and just does not seem very efficient. It has many loops and creates 10 buckets, taking up a lot of space. 

#### Bucket Sort

The **Bucket Algorithm** assumes it is given different sorted ranges, or buckets, that various values to be sorted belong. It places each value inside its bucket before sorting each bucket with another sorting algorithm. Then the buckets are concatenated. This is like a divide and conquer approach. 

#### Insertion Sort

Insertion sort is one of my favourite to implement. Sorting in ascending order, it traverses up the list / array until it finds an element smaller than the one before it. The algorithm then inserts the element in the correct location before moving on.

The book actually does it a little different than how I learned it in the past. I think the book actually takes more of a selection sort approach.

Listen, "The Algorithm Design Manual", pp. 42-43, Section 2.5.2, agrees that the steps for this algorithm are to run up the list and insert elements in their correct place when you reach them. 

I have a Rust implementation I quite like

```rust
pub fn insertion_sort<T: PartialOrd>(unsorted: &mut [T]) {
    let length = unsorted.len();
    let mut counter = 0;
    while counter < (length - 1) {
        // If value greater than next, we swap and increase counter.
        if unsorted[counter] > unsorted[counter + 1] {
            unsorted.swap(counter, counter + 1);
            // Ensure counter does not go below zero
            if counter != 0 {
                counter -= 1;
            } else {
                counter += 1;
            }
        } else {
            counter += 1;
        }
    }
}
```

The generic `T` has a trait bound, it must be comparable to other elements. Other than that, you see we move up the list and swap our smaller value back to the bottom.

If a list is completely backwards, you can see we would go up and down this list many times. But it is very good for adding values to a mostly sorted list, and putting that new element where it belongs.

#### Selection Sort

The Course Book does not include this section but it is essential. Section 2.5.1 of "The Algorithm Design Manual", pp. 41-42, discusses this sorting algorithm. Sorting in ascending order, it moves up the array to find the smallest value and swaps it with the initial value. Then, starting at the second point in the array, performs the same action but swapping the smallest with the second element. Then it starts at the third element, and so on...

More code like, you have a main loop that traverses up the list. Don't use a for-loop that pulls actual elements from the list because modifying a list while looping through it can be difficult. Instead, loop through a consecutive list of index values. The inner loop starts at the index of the main loop and traverses up the list to find the next smallest value. Then swaps the elements.

Rust implementation looks something like:

```rust
pub fn selection_sort<T: PartialOrd>(arr: &mut [T]) {
    /*Function to sort in-place, no return value
     * https://www.interviewcake.com/sorting-algorithm-cheat-sheet
     * Selection sort finds the minimum value and puts in current location
     */
    let length = arr.len();

    // (length-1) so we don't unnecessarly check last value, and prevent index error in next loop
    for main_index in 0..length - 1 {
        let mut swap = false;
        let mut swap_index = main_index;

        // (main_index+1) so we don't unnecessarily check against itself.
        for current_index in (main_index + 1)..length {
            if arr[current_index] < arr[swap_index] {
                swap = true;
                swap_index = current_index;
            }
        }
        if swap {
            arr.swap(main_index, swap_index);
        }
    }
}
```


#### Bubble Sort

Bubble sort will continuously traverse a list, swapping values, and in an ascending order, bubble max values to the end of the list, and minimum values to the front. Basically, it is one of the easier algorithms to implement.

For sorting in ascending order, traverse a list. If the previous element is smaller than the current element, swap them and move on to the next element. It is like insertion sort, but we don't traverse backwards, we just keep looping over the list.

Here's a rust implementation:

```rust
pub fn bubble_sort<T: PartialOrd>(arr: &mut [T]) {
    let n = arr.len();
    for i in 0..n {
        for j in 0..n - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
}
```

We don't need to keep checking the last element because we are kind of assuming that each traversal puts the next correct element at the end of the list. 

My instructions are to check the previous element, but the code is to check the next element. Whatever is easier for you to implement is the correct choice. 

#### Merge Sort

p. 80