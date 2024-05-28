---
layout: '@layouts/NotesLayout.astro'
title: 'Some Important Algorithms'
pubDate: 2024-03-25
description: 'Introduction to Algorithm Design'
author: 'Kevin Sullivan'
tags:
    [
        'computer science',
        'programming',
        'notes',
        'masters',
        'algorithmics',
        'algorithms',
    ]
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

-   Linear
-   binary
-   hash

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

-   radix sort
-   merge sort
-   insertion sort
-   counting sort
-   bubble sort
-   bucket sort
-   quick sort
-   introsort
-   timesort
-   library sort
-   burst sort

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

The **Merge Sort Algorithm** efficiently joins two already sorted arrays into a newly sorted array. Haven't built this one yet, so it'll be fun!

The algorithm starts with partitioning of its sequence of values into a set of singleton arrays (single-element arrays). This allows the merge sort algorithm to continuously merge all neighbouring pairs of arrays until the entire array is sorted.

The number of comparisons made during the merging of two already sorted sequences is _almost_ equal to the total number of values in those two sequences. We can also consider the number of merges. Since we continuously split the arrays in half, you have something like:

$$
\begin{align*}
m &= \left\{ {n \over 2},{n \over 4}, {n \over 8}, \dots, {n \over 2^{s-1}}, {n \over 2^s} \right\}
\end{align*}
$$

Basically, we let $s$ represent the total number of times that the merge sort algorithm changes the size of the sequences being merged, the following equation must be fulfilled by $s$:

$$
\begin{align*}
{n \over 2^s} &= 1\\
2^s &= n\\
s &= \log(n)
\end{align*}
$$

This indicates the merge sort algorithm roughly changes its merging size $\log(n)$ times, and makes about $n$ comparisons for each of those merging sizes. That makes for a total of $n \log(n)$ comparisons for the entire merge sort algorithm.

The book does not implement a JavaScript merge sort. Can we do it in Rust?

```rust
use crate::lists::NonPriorityQueue;

/// Takes in reference to list of things that can be compared.
/// How to proceed? We could...
pub fn merge_sort<T>(unsorted: &mut [T])
where
    T: PartialOrd + std::fmt::Debug + Clone,
{
    // This is single threaded and such
    let half: usize = unsorted.len() / 2;
    // `split_at_mut` relies on unsafe code.
    let (left, right) = unsorted.split_at_mut(half);
    // dbg!(left);
    // dbg!(right);
    if left.len() > 1 {
        merge_sort(left);
    }
    if right.len() > 1 {
        merge_sort(right);
    }
    let mut left_q: NonPriorityQueue<T> = NonPriorityQueue::new();
    let mut right_q: NonPriorityQueue<T> = NonPriorityQueue::new();
    // Good example of creating and "into()" method.
    for val in left.iter() {
        left_q.enqueue(val.clone());
    }
    for val in right.iter() {
        right_q.enqueue(val.clone());
    }
    let left_val = left_q.dequeue();
    let right_val = right_q.dequeue();

    for i in [..unsorted.len()] {
        match left_val {
            Some(val) => todo!(),
            None => todo!(),
        }
    }
}
```

ToDo => must finish the sorting part. Note, there is no claim this is the most efficient way to do this. In fact, using our previously created non-priority queue, you can see we clone the value because it wants to take ownership of what it holds. In this situation, it is wasteful memory usage, but I wanted to sort of push and pop elements in order. The vector, just looking it up, does have a `Vec::remove(&mut self, index: usize) -> T` method, but it has a worst case performance of $O(n)$ because it shifts all the elements. The Queue is more of a linked list.

There also appears to be `std::collections::VecDequeue`, which has `pop_front` method to pop the first value, and a `push_back` method to push onto the queue. It also implements `FromIterator<T>`, making it interesting.

We could also just skip that nonsense and straight use an iterator, calling `Iterator::next()` over and over until only `None` appears.

For more information, check out "The Algorithm Design Manual", 3rd edition, section 4.5, starting on page 127. They provide a C++ implementation.

#### QuickSort

p. 82

The **QuickSort** algorithm is meant to be a very fast sorting algorithm. You start by selecting a _Pivot Point_. A possible value is just the first element. This value will be placed such that all values to the left of it are smaller than it, and all values to the right are larger. The assumption is of course sorting for an ascending list.

There are two cursors, one moving left-to-right (ltr) and the other right-to-left (rtl). They should start at the ends of the sequence, where values are not yet sorted. The LTR cursor moves until it finds a value that is greater than the pivot point. The RTL cursor moves until it finds a value smaller than the pivot point.

Values do not move apparently until both cursors stop moving. When they both stop we have 2 cases:

-   If $RTL_p > LTR_p$ (where the $X_p$ indicates the **position** of the cursor (not the value))
    -   The cursors must swap values.
    -   Then, from their current positions, continue checking values.
-   if $RTL_p < LTR_p$ (the cursors have passed each other)
    -   The RTL cursor exchanges values with the current pivot value!
        -   starting from the first value makes this kind of easier as we will see.
        -
    -   The entire quicksort algorithm starts over again for the sub-sequence on the left side of the RTL cursor and for the one on its right side until both sub-sequences are left with one element maximum.
-   Working through problem, if the pivot is max or min value, then one of the cursors will get stuck. This should be accounted for.
    -   If max value, the LTR curser will not find a value greater and move out of right of list. The RTL would be stuck on first right value, since everything is smaller than the max. Thus, the max should switch with the end value.
    -   If min value, the RTL cursor would not find a smaller value and move out of left of list. The LTR value would be stuck on first value since everything is greater than the minimum. $RTL_p$ would be like $-1$, so we wouldn't want to swap. Just split and move on.

We cannot guarantee the pivot point will divide the sequence into almost equal-sized sub-sequences. So the worst case scenario implements roughly:

$$
(n-1) + (n-2) + \dots + 2 + 1 = {n(n-1) \over 2}
$$

That number of steps...

I need to work this out...

```rust
/// Swap when r_p > l_p; only restart else
// Start...
[3, 4, 6, 2, 9, 1, 8, 4, 7, 5]
[p, l, -, -, -, -, -, -, -, r]
// r > l = just swap
[3, 4, 6, 2, 9, 1, 8, 4, 7, 5]
[p, l, -, -, -, r, -, -, -, -]
// Swapped
[3, 1, 6, 2, 9, 4, 8, 4, 7, 5]
[p, l, -, -, -, r, -, -, -, -]
// r > l = just swap
[3, 1, 6, 2, 9, 4, 8, 4, 7, 5]
[p, -, l, r, -, -, -, -, -, -]
// Swapped
[3, 1, 2, 6, 9, 4, 8, 4, 7, 5]
[p, -, l, r, -, -, -, -, -, -]
// r and l have passed, so exchange with pivot
[3, 1, 2, 6, 9, 4, 8, 4, 7, 5]
[p, -, r, l, -, -, -, -, -, -]
// Pivot Swap and restart WITH SUBSEQUENCES
[[2, 1], [3], [6, 9, 4, 8, 4, 7, 5]]
[[p, l], [x], [p, l, -, -, -, -, r]]
// 1. l will not find anything greater than pivot, it stays at end
//    r  is stuck, r_p > l_p, swap and split?
// 2. We also have a swaps situation here
[[2, 1], [3], [6, 9, 4, 8, 4, 7, 5]]
[[p, r], [x], [p, l, -, -, -, -, r]]
// 1. Did the swap and partition
// 2. Did swap and found another swap pair...
[[1], [2], [3], [6, 5, 4, 8, 4, 7, 9]]
[[x], [x], [x], [p, -, -, l, r, -, -]]
// 1. ...
// 2. l and r have passed, so we swap the pivot with r and partition...
[[1], [2], [3], [6, 5, 4, 4, 8, 7, 9]]
[[x], [x], [x], [p, -, -, r, l, -, -]]
// Restarting
// 1. l > p & r < p, swap l and r...
// 2. ...
[[1], [2], [3], [4, 5, 4], [6], [8, 7, 9]]
[[x], [x], [x], [p, l, r], [x], [p, l, r]]
// 1. Swapped, and r will fall out of list, so no pivot swap
// 2. l has passed r, so we pivot swap and partition
[[1], [2], [3], [4, 4, 5], [6], [8, 7, 9]]
[[x], [x], [x], [p, r, l], [x], [p, r, l]]
// Restarting
[[1], [2], [3], [4], [4, 5], [6], [7], [8], [9]]
[[x], [x], [x], [x], [p, l], [x], [x], [x], [x]]
//...
```

Ok, so nearly there, I think we get it. Once you get all the individual elements where they go you would reconstruct the list. Thinking in Rust, you could use the `Slice::split_at_mut(index: usize)` method to get mutable lists that allow you to more easily swap values. Then, hopefully, reconstructing the list wouldn't be a necessary step. Or you can copy values into vectors.

Refering to [QuickSort | GeeksForGeeks](https://www.geeksforgeeks.org/quick-sort/), the algorithm is based on **divide and conquer**. It picks an element as a pivot and partions the given array around the picked pivot by placing the pivot in its correct position. This article says the `QuickSort::partition()` function has a goal to place all smaller elements to the left of the pivot, and larger elements to the right. The _partition_ is done recursively on each side of the pivot after the pivot is placed in its correct position, which finally sorts the array.

There are 4 main choices for picking your Pivot:

-   Always select the first element.
-   Always select the last element.
-   Try to select the most middle element.
-   Go random.

We can also checkout "The Algorithm Design Manual", 3rd edition, section 4.6, starting on page 130. The logic is quite the same, and explains that where merge sort sorts while merging, QuickSort sorts while partitioning. The book also drills into the happy and unhappy cases of the algorithm. It runs in $O(n \cdot h)$ time, where $h$ is the height of the recursion tree. If you luckily pick the median element every time, you have a small recursion tree, and $h=\lceil \ln (n) \rceil$. If you are unlucky, the pivot splits the list as unequally as possible (always max or min), each subproblem is $n-1$ in size, giving a worst case time of $\Theta(n^2)$.

That sounds bad, but the average case is $O(n \log(n))$ time. The best pivot is the median, so we might think the average pivots land somewhere around the 25% and 75% percentiles. Then you work until you have 1 element in each subproblem. The situation looks like:

$$
\begin{align*}
1 &= \left( {3 \over 4} \right)^{h_g}n\\
n &= \left( {4 \over 3} \right)^{h_g}\\
\log_{4/3}(n) &= h_g \log_{4/3}(4/3)\\
h_g &= \log_{4/3}(n)
\end{align*}
$$

Little log trivia in there. There are a few ways to reduce it with approximations, but we end up with $O(n \log(n))$ time on average.

You also have to think about the chances of running the average time given certain lists, like an already sorted list. Picking an end element for the pivot on a sorted list will run in $O(n^2)$ every time. It checks every element of the sub problem, $O(n)$, then partitions on every element to try again, another $O(n)$. Those together are $O(n^2)$. The book quotes:

"Quicksort runs in $\Theta(n \log(n))$ time, with high probability, _if_ you give it randomly ordered data to sort."

The takeaway is to randomize your pivot values. _Randomization_ tends to be a powerful tool to improve algorithms with bad worst-case scenarios but goo average-case complexity.

This book continues with a "nuts and bolts" problem beginning on page 134.

```rust
pub fn quick_sort<T>(unsorted: &mut [T]) {
	todo!();
}
```

Yes, I will defer the actual Rust implementation due to time constraints.

## 3.2 Pattern Matching

p. 85

This section focuses on two different applications of pattern matching:

1. Using regular expressions, a set of characters that acts as instructions for pattern matching.
2. Defining a pattern and matching it against a JavaScript Object Notation (JSON) object.

It seems like this section heavily relies on JavaScript.

### Regular Expressions or RegExps

A **Regular Expression** (RegEx) describes the format of how a given text _should_ be written. They are constructed from the following building blocks:

-   basic operations
-   ranges
-   escape features
-   anchors
-   commonly used classes

You can specify looking for most characters by just writing that character. The dot (`.`) stands for _any character_. You concatenate them by placing them next to each other. You use the pipe (`|`) to search for either expression. The book explains square brackets awkwardly.

You can always refer to [Regular Expression Syntax Cheat Sheet | mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet). The pipe operator is called a "disjunction". Example used is `/green|red/` will match to "green" or "red". Square brackets are very similar, think of `[abc]` functionally equivalent to `(?:a|b|c)`. Looks like whole words aren't as easy to match with using square brackets.

The caret (`^`) operator negates the matching such that something like `[^xyz]` would not match to those letters. Notes that it also can indicate the beginning of a line such as `/^A/` meaning it matches if the line begins with "A". Probably then can combine like `/^[^a-z]/` to match lines not beginning with lowercase letters. On the contrary, we have `/\.$/` finds lines ending with a period. Snuck in the escape operator there too.

Round bracketing of regular expressions forces them to be evaluated, whatever that means.

The glob operator (`*`) repeats its regular expression zero or more times. The plus operator (`+`) repeats one or more times. The question mark (`?`) checks if the expression appears _at most_ once.

You can also place the minus sign just after left square bracket (`[-`) if you don't want it to represent a range. The book then goes through many of the shortcut escapes like `\d` standing for numeric digit or `\s` representing a white space character. Typically capitalization stands for the negative of the lowercase. Double check the Mozilla guide though.

There's also the `\b` to match word boundaries, depending where you stick it. The word is either not followed or preceded by another word-character. These might be `\<` or `\>` depending on if you are using JavaScript or another language.

### `jq` and JSON Objects

[`./jq` | jqlang.github.io](https://jqlang.github.io/jq/) is a lightweight and flexible command-line JSON processor.

The course book does not provide much introduction, just lists what it can do and how to use the `jq` command. The book gives an example:

```bash
jq 'fltPat | fct ("regExp" ; "flg")' f.json
```

The book goes on where if you analyse real JSON with `test()` (giving boolean results), `match()` (giving the matches), `capture(<>)` (giving matches differently) you can get more results.

There's an online version of JQ-Lang at the link above, along with a whole manual. The book only provides an image of the JSON, so you much type it in. I'll help...

```json
{
    "RespId": ["0028", "50706", "0109"],
    "ContId": ["ZA", "AF", "EU"],
    "Gender": ["m", "Fe", "bfm"],
    "Issues": {
        "Voting": ["20", "1000", "19"],
        "Internet": ["free", "paid", "paid"]
    }
}
```

It's actually pretty cool, and the online tool is really helpful. You basically specify, kind of in JSON syntax, the path to the object you want to query. Then you specify the RegEX you want to query with.

The first example is `.RespId[] | test("^([0-9]{4})$")`, which is like RegEx for it begins and ends with 4 numeric digits. The online editor tells you the command would be `jq '.RespId[] | test("^([0-9]{4})$")'`, nearly the same. And it gives a list of `true` or `false` values.

The code `.Gender[] | test("^[FMUfmu]")` means test if each element begins with a letter in the square brackets. The last gender begins with "b", so the answer is `[true, true, false]`.

There's also `.Issues.Voting[] | test("^([0-9]{2})$")` that gives `[true, false, true]`. That is, two of the "Voting" elements are two digits long. So, `.Issues.Voting[] | test("^([0-9]{4})$")` gives us just `[false, true, false]`. And `.Issues.Voting[] | test("^([0-9]{1,3})$")` returns `[true, false, true]` because it matches elements that are numeric and 1 to 3 digits long!

Using the `match()` function returns objects about what it matched to with a bit of metadata. The `capture()` function requires you to specify the "key" you want printed in the return. So, `.Issues.Voting[] | capture("^(?<vote-age>[0-9]{1,3})$")`.

## 3.3 The RSA Algorithm

p. 92

The **RSA Algorithm** is used to secure the transmission of data worldwide. It stand for Rivest, Shamir, and Adleman, the three scholars that authored the algorithm in 1978. It is a public-key asymmetric encryption algorithm that uses both private and public keys.

As usual, [RSA (cryptosystem) | Wikipedia](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) gives a wonderful layout of the algorithm. [RSA Algorithm in Cryptography | GeeksForGeeks.org](https://www.geeksforgeeks.org/rsa-algorithm-cryptography/) also give a good breakdown. It is neat how you can generate numbers that can use the modulus operator to obscure information.

### Encryption, Decryption, and Signatures

**Encryption** (of a message) is to transform it so that it cannot be understood without having been decrypted. The book appears like it will tell us about how to do this.

Encryption is done by raising a number to a power and taking the modulus of it. Decryption is done in the same fashion, but raising the encrypted result to a different number, and taking the modulus of it by the same number, I think. The goal is finding these linked numbers.

I will follow the book's example, elaborating on points I believe necessary to learn the topic. We start by selecting two prime numbers, and finding their multiple and another multiple:

$$
\begin{align*}
p_1 &= 11\\
p_2 &= 17\\
m_1 &= 11 * 17 = 187 \\
m_2 &= (p_1-1)(p_2-1) =(10-1)(16-1) = 160
\end{align*}
$$

**Finding "e"**: Now, we must find a _strictly_ positive number $e$ that is less than $m_2$ and with **coprime** it, which means that the two values share no common divisor except for 1. This part is tricky.

This article, [Coprime integers | Wikipedia](https://en.wikipedia.org/wiki/Coprime_integers) explains coprime numbers the same. Best I can think of is a table:

$$
\begin{align*}
160 \div2 &= 80\\
160 \div4 &= 40\\
\dots
\end{align*}
$$

Let's not go down that road. You would notice a turning point actually around the divisor of 12 and 13, where the pairs of numbers are just reverse. For example $160/10=16$ and then the next integer solution is $160/16=10$. So you only really need to solve for integers below $\sqrt{160} \approx 12.649$.

Verified by multiple sources, this is going to be the public key exponent. We don't want to be raising numbers to extremely large powers, risk of overflow. The value of $e$ is arbitrary, as long as it is positive and less than $m_2$. You can check out this [Coprime Calculator | MathIsFun.com](https://www.mathsisfun.com/numbers/coprime-calculator.html). Our $m_2 = 160 = 2^5 \times 5$. We can pick $e=13$.

**Finding "d"**: We also must calculate $d$ such that $e \times d$ is the immediate successor of a multiple of $m_2$. This means we want:

$$
\begin{align*}
e \cdot d &= 1+(x \cdot 160)\\
d &= \frac{1+(x \cdot 160)}{e}\\
37 &= \frac{1+(3 \cdot 160)}{13}\\
\end{align*}
$$

Note: I originally took $e=9$, which set $d=89$ as a low value. You would want to play around with values to ensure you can calculate the encryption and decryption.

We can now encrypt and decrypt a number $n$ with the following formulas:

$$
\begin{align*}
\text{Encrypt}(n) &= n^e \text{mod}(m_1)\\
\text{Decrypt}(n) &= n^d \text{mod}(m_1)\\
\end{align*}
$$

So, take the phrase "Hello, world!". The unicode representation would be
`[72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]`. Usually information is stored in hexadecimal:

```d
[48 65 6C 6C 6F 2C 20 77 6F 72 6C 64 21]
```

I will try implement in Rust, although Python was a tad easier. However, Rust encodes strings in unicode. So, you merely tell Rust to represent a character as a number. It's a cool feature I think, no function required. However, you are also provided `u64::from<char>(c: char)`, which is more explicit, but less readable.

Note, Gemini says that `as` can be compiler optimized where the `from()` method requires a function call during runtime, which may add to overhead.

```rust
fn main() {
    println!("{}", u128::MAX); // 340282366920938463463374607431768211455
    let e: u64 = 13;
    let d: u64 = 37;
    let m1: u64 = 187;
    let phrase: &str = "Hello, world!";
    let phrase_enc: Vec<u128> = phrase.chars().map(|c| {
        let tmp: u64 = c.into();
        let ency: u128 = u128::pow(tmp as u128, e as u32) % (m1 as u128);
        ency
    }).collect();
    println!("{phrase_enc:?}")
}
```

Which prints

```bash
[106, 118, 146, 146, 144, 11, 87, 102, 144, 31, 146, 155, 33]
```

It was a bit of a pain to convert those into characters, which they aren't letters anyway. Ironic the "!" made it all the way back around.

Ok, unfortunately Rust is also having overflow issues. Python does not have these issues out of the box. You would probably have to import a library. But something like `106^37 % 187 = 72` which means the decryption also works.

The values for $e$ and $m_1$ are considered the public keys because they do the encrypting. The $d$ value is the private key as it decrypts.

However, it sounds like the reverse is also possible. And because the public key works to decrypt, it assures the public key holder the messages were encrypted with the private key. And that is how a private key is used as the digital signature of its owner.

The RSA algorithm is _asymmetric_ because, although messages can be encrypted and decrypted, the keys to do so are different.

### Strengths and Weaknesses of the RSA Algorithm

p. 94

**Data Clustering** is a concept that refers to the process of dividing a dataset into clusters or groups in a way where the closest elements in the dataset are assigned to the same cluster. Because data clustering only relies on the data, it is classified as a subset of _data mining_.

Applicable applications include:

-   image processing
-   market research
-   geographical information systems

Check out the [Cluster Analysis | Wikipedia](https://en.wikipedia.org/wiki/Cluster_analysis) article for a deep dive.

It looks like Stuart P. Lloyd published a paper [Least Squares Quantization in PCM](https://ieeexplore.ieee.org/document/1056489) in 1982, which might be when you say the algorithm was _invented_. However, the [Lloyd's Algorithm | Wikipedia](https://en.wikipedia.org/wiki/Lloyd%27s_algorithm) article mentions his work was first produced as far back as 1957.

There are many kinds of clustering algorithms. Lloyd's algorithm, also called "k-means algorithm", is a _centroid-based clustering_ algorithm. Each cluster is represented by some central vector which actually might not be a member of the data set.

> I remember discussing this algorithm in the Data Science course.

The name of "k-means" refers to the dataset being divided into $k$ clusters. Each cluster is built based on the distance to the mean value of each cluster.

The course book gives a visual example. We can also go through the steps here.

First - select a value for $k$, the number of clusters you want to divide the data into. Th

Second - You must choose initial mean values of each $k_n$ cluster. Don't worry too much about the initial value, the algorithm updates these values automatically. Just try not to pick anything beyond the bounds of the data as you could risk a cluster with no members.

Third - Calculate the Euclidean distance of each element to each mean value for every $k_n$. Assign the element to the cluster that it is closest to with regards to the aforementioned distance.

Fourth - Once all values are assigned to a cluster, we recalculate the mean of each cluster.

Fifth - Repeat the third and fourth steps until the mean does not change for all clusters.

And that's it.

---

## Knowledge Check

Q: What is a _collision_ and in which algorithm may collisions occur?

A: Collisions are when multiple data elements are assigned to the same space in memory. This occurs in Hash algorithms.

Q: What is the fastest sorting algorithm in the worst case?

A: Insertion and Bubble sort are very-very bad when lists are backwards. I think you need to know [Big O Notation | Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation). However, this [BigOCheatSheet.com](https://www.bigocheatsheet.com/) website quicksort to be one of the best algorithms on average, but one of the worst worst-case scenarios. Merge Sort is king.

Q: What does the `\w` represent in RegEx?

A: [Regular Expression | Wikipedia](https://en.wikipedia.org/wiki/Regular_expression) shows the `\w` represents alphanumeric characters. Also, did you know that Vim has RegEx?

Q: History is important. How were the lads that founded the RSA algorithm?

A: Scholars Rivest, Shamir, and Adleman; authored in 1978.

Q: What type of algorithm is the k-means algorithm? Sort, Search, cCluster, Cryptography, etc...?

A: It is clustering.
