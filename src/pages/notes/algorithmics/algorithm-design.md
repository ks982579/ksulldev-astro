---
layout: '@layouts/NotesLayout.astro'
title: 'Algorithm Design'
pubDate: 2024-03-12
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

# Algorithm Design

pp. 34-70

Our learning objectives are as follows:
+ How to organize the data of your algorithms into suitable data structures.
+ The user of iteration and recursion in algorithm design.
+ Key algorithm design strategies.

## Introduction

You will eventually need to create an algorithm for a computational problem in the field of computer science. It is handy to know of existing algorithm design techniques to draw inspiration from. It's also important to have experience with other computational problems to find similarities and differences between various computational problems. Because some differences come from the nature of the underlying data, an understanding of different data structures is also critical in design. 

## 2.1 Data Structures

pp. 34-59

As stated above, algorithms use different data structures, which may represent different data. What is a data structure? A **Data Structure** organizes data into a suitable format that allows an algorithm to apply operations to it. Examples include arrays, lists, heaps, queues, stacks, trees, and graphs. 

### Arrays

We said an array is an example of a data structure, but what is it? You can read up on [array (data structure) | wiki](https://en.wikipedia.org/wiki/Array_(data_structure)) for more information. But, an **Array** is a finite collection of elements, each taking up the same amount of space in memory and identified by at least one array index, or key. 

We say the length of an array is equal to the "length of its sequence of elements". Elements are accessible through their indices. Arrays can allow for insertion and removal of elements in or from any position in the array. 

Note, arrays do not grow in size. If you push an additional element into an array then the program allocates a new amount of memory to transfer the information. Here's a quick example of the [Primitive Type Array](https://doc.rust-lang.org/std/primitive.array.html) in Rust. 

```rust
fn swap(vals: &mut [i32], i1: usize, i2: usize) {
    let tmp: i32 = vals[i1];
    vals[i1] = vals[i2];
    vals[i2] = tmp;
}

fn main() {
    println!("Arrays in Rust");
    let ar: [i32; 5] = [1,2,3,4,5];
    dbg!(&ar);
    dbg!(&ar[3]);
    // ar[3] = 42; // panic!("cannot assign to immutable variable");
    let mut foo: [&str; 2] = ["Hello,", " bar"];
    dbg!(&foo);
    foo[1] = " world!";
    dbg!(&foo);
    let bar = foo.clone();
    dbg!(bar);
    
    let mut ar2: [i32; 4] = [42, 0, 0, 69];
    swap(&mut ar2, 0, 3);
    assert_eq!([69, 0, 0, 42], ar2);
}
```

The course book uses JavaScript for arrays. This is a dynamically typed language with dynamically sized arrays. In Rust, you should specify the types held in the array and the number of elements so the compiler can adequately allocated enough memory to store the data. 

Note, nearly everything in JavaScript is really an object, or at least treated as such ([arrays included]([Array - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))). An array in JS does not have contiguous memory allocation optimizations that traditional arrays do. They are actually more like hashes, where perhaps some additional memory is allocated to account for some pushing. This allows for **sparse arrays**, where not every element needs to contain data. The array being more like an object has advantages though with the many different built-in methods you can use to manipulate memory. 

### Stacks

In <span style="text-decoration: underline;">Introduction to Algorithms</span> 4th edition, by Thomas Cormen and company, an MIT Press book, page 254 starts a lovely discussion about stacks and queues. A **stack** is a data structure of a sequence of elements where new new elements are only inserted at the end of the sequence, and only the elements at the same end are removed. 

When you add an elements, we call that `push()`, and removing an element is called `pop()`. In Rust, the `Vec` struct, short for "vector", is pretty much already an array based stack with `push()` and `pop()` methods, and many more. You could try to implement your own light-weight version of an array stack, probably have to use the `Option` struct to fill the array initially. 

Additionally, a stack can bleed into the topic of a list. First, to create a list we need nodes that point to each other. This is simple in JavaScript but challenging in Rust. [Understanding pointers in Rust | StackOverflow](https://stackoverflow.com/questions/31949579/understanding-and-relationship-between-box-ref-and) is a good look into pointers. It is good to cover though that in Rust, a reference, denoted with `&` is more for just borrowing data and the smart pointers actually own the data. 

```rust
#[derive(Debug, PartialEq, PartialOrd, Clone)]
pub struct DataNode<T> {
    value: T,
    previous_node: Option<Box<DataNode<T>>>,
}

#[derive(Debug, PartialEq, PartialOrd)]
pub struct Stack<T> {
    top: Option<Box<DataNode<T>>>,
}

impl<T> Stack<T> {
    pub fn new() -> Self {
        Stack { top: None }
    }
    pub fn push(&mut self, val: T) {
        let mut new_node: DataNode<T> = DataNode {
            value: val,
            previous_node: None,
        };

        match self.top.take() {
            Some(s) => {
                new_node.previous_node = Some(Box::new(*s));
                self.top = Some(Box::new(new_node));
            }
            None => {
                self.top = Some(Box::new(new_node));
            }
        }
    }
    pub fn pop(&mut self) -> Option<T> {
        // self.top will now be None
        let mut tippy_top = self.top.take();
        match tippy_top {
            None => {
                self.top = None;
                return None;
            }
            Some(box_data) => {
                // return tippytop value and store it's prev_node as Stack
                let mut raw_data: DataNode<T> = *box_data;
                self.top = raw_data.previous_node.take();
                return Some(raw_data.value);
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_make_stack() {
        let actual: Stack<i8> = Stack::new();
        let excpected: Stack<i8> = Stack { top: None };
        assert!(actual == excpected);
    }
    #[test]
    fn test_push_to_stack() {
        let obj1: DataNode<i32> = DataNode {
            value: 69,
            previous_node: None,
        };
        let obj2: DataNode<i32> = DataNode {
            value: 42,
            previous_node: Some(Box::new(obj1)),
        };
        let expected: Stack<i32> = Stack {
            top: Some(Box::new(obj2)),
        };
        let mut actual: Stack<i32> = Stack::new();
        actual.push(69);
        actual.push(42);
        assert_eq!(actual, expected);
    }
    #[test]
    fn test_pop_from_stack() {
        // test value poped and stack after
        let obj1: DataNode<i32> = DataNode {
            value: 69,
            previous_node: None,
        };
        let obj2: DataNode<i32> = DataNode {
            value: 42,
            previous_node: Some(Box::new(obj1.clone())),
        };
        let mut actual_stack: Stack<i32> = Stack {
            top: Some(Box::new(obj2)),
        };
        let actual_value: Option<i32> = actual_stack.pop();
        let expected_value: Option<i32> = Some(42);
        let expected_stack: Stack<i32> = Stack {
            top: Some(Box::new(obj1.clone())),
        };
        assert_eq!(actual_value, expected_value);
        assert_eq!(actual_stack, expected_stack);
    }
```

This is my implementation of linked-list Stack in Rust. It took a minute to make, and I learned about the `Option.take()` method. It's an option wrapper for the [`std::mem` | rust-lang.org](https://doc.rust-lang.org/std/mem/index.html) crate. 

You may also want to implement methods or features to iterate through the list, view particular points without popping values, and maybe track the length. 

### Lists

Section 10.2, starting on page 258 of MIT's <span style="text-decoration: underline">Introduction to Algorithms</span>, begins the discussion of linked lists. A **Linked List** is a data structure where objects are arranged in a linear order, so one after another. It's a sequence of elements, much like an array or a stack. The Course Book says you always want to know the current position of the _cursor_ of the list. 

An array stores objects in a contiguous chunk of memory and the linear order is determined by the array indices. The order in a linked list is determined by a pointer in each object. A linked list should support typical operations such as:
+ `Search()`, returning a pointer to the value looking for or `Nil`.
+ `Insert()`,
+ `Delete()`
+ `Minimum()` and `Maximum()`
+ `Successor()`, for an ordered set, you would give a key and receive a pointer to the next larger element in the set.
+ `Predecessor()`, opposite of the former. 

The Course Book sounds to be considering a doubly linked list, where you point to the next and previous elements; but no, it's mainly like a stack but it travels up the list to the "cursor". A **Cursor** is the unique current position in a list, like which element we are focusing on currently. Maybe you stored a reference to it as a variable. For a Stack, the cursor always points to the top of the Stack; therefore, all operations can only apply to the top of the stack. 

Lists offer the possibility to change the value of the position of their cursor. The Course Book suggests that lists can easily be implement by a class with an _array_ as a private attribute in JavaScript. Rust could have a struct with a _vector_, which is like the dynamically sized array in JavaScript. When considering space and time complexity there are trade-offs between using dynamic arrays and linked lists. Consider inserting with an array. If you insert a node at the beginning instead of the end, then you shift everything down one memory address. That can be a lot of work. For a list, you just save the pointer on an existing node. However, try iterating through a linked list and the CPU will try pulling data from seemingly random places in memory, which can be a lot of work. 

The Couse Book provides a JavaScript implementation of a linked list, or a list with linked nodes as they say. It also has methods on the list for getting, removing and displaying elements at a cursor, and inserting elements.

> Insert List example here

### Non-Priority and Priority Queues

Starting on page 256 of <span style="text-decoration: underline">Introduction to Algorithms</span>, we look at the Queue data structure. Similar to a Stack, but the stack is _Last in First Out_ (LIFO), and a queue is _First in First Out_ (FIFO). This just means that the pop method removes the first element in the queue instead of the most recently applied. Also, the `insert()` operation should be called `enqueue()`, and the `delete()` or `pop()` method is called `dequeue()`. 

A queue has a _head_ and a _tail_. Elements are added to the tail and removed from the head. 

A **Priority Queue** is a data structure for maintaining a set of elements, each with an associated value called a **key**. A **Max-Priority Queue** would support the following operations:
+ `Insert(S, x, k)` inserts element `x` with key `k` into set `S`. 
+ `Maximum()` returns element with largest key.
+ `Extract-Max()` removes and returns the element with largest key.
+ `Increase_Key(S, x, k)` increases value of `x`'s key to `k`, apparently assumed to be at least as larges as the current key's value. 
	+ So no decreasing?

This would be good for a job scheduler on a computer to run the most important jobs first. 

There's also a **Min-Priority Queue** supporting the following operations:
+ `Insert(S, x, k)` inserts element `x` with key `k` into set `S`. 
+ `Minimum()` returns element with smallest key.
+ `Extract-Min()` removes and returns the element with smallest key.
+ `Decrease_Key(S, x, k)` decreases value of `x`'s key to `k`, apparently assumed to be at least as small as the current key's value. 
	+ So no increasing?

This is good for an _event-driven simulator_. If the elements are representations of events and they must be simulated in order of their time of occurrence, the key can be the time value. 

Then, the **non-priority queue** runs strictly on a first in first out basis. I think this is slightly easier to implement and would be a better start of an example...

Trying to implement a linked-list non-priority queue in Rust is actually a huge pain... Stumbled across this [Learn Rust with Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) guide. Some languages don't care, but Rust cares about safety. Check out [Module std::cell | docs.rust-lang](https://doc.rust-lang.org/std/cell/index.html). You either have one mutable reference or several immutable references. We dive down a dark path of memory manipulation where we need the reference counter `Rc` struct and `RefCell` struct. 

I'm not saying this is t he best or even correct implementation at this point. But it works through a few tests. 

```rust
#[derive(Debug, Clone, PartialEq, PartialOrd)]
pub struct NonPriorityQueueNode<T> {
    pub value: T,
    pub next: Option<Rc<RefCell<NonPriorityQueueNode<T>>>>,
}

impl<T> NonPriorityQueueNode<T> {
    fn new(val: T) -> Self {
        Self {
            value: val,
            next: None,
        }
    }
}

#[derive(Debug, Clone, PartialEq, PartialOrd)]
pub struct NonPriorityQueue<T> {
    pub head: Option<Rc<RefCell<NonPriorityQueueNode<T>>>>,
    pub tail: Option<Rc<RefCell<NonPriorityQueueNode<T>>>>,
}

impl<'a, T> NonPriorityQueue<T>
where
    T: Clone,
{
    pub fn new() -> Self {
        NonPriorityQueue {
            head: None,
            tail: None,
        }
    }
    pub fn enqueue(&mut self, val: T) {
        let new_node = Rc::new(RefCell::new(NonPriorityQueueNode::new(val)));
        match self.tail.take() {
            None => {
                self.tail = Some(Rc::clone(&new_node));
                self.head = Some(Rc::clone(&new_node));
            }
            Some(ref_cnt) => {
                let mut end_elm: RefMut<'_, NonPriorityQueueNode<T>> = (*ref_cnt).borrow_mut();
                (*end_elm).next = Some(Rc::clone(&new_node));
                self.tail = Some(Rc::clone(&new_node));
            }
        }
    }
    pub fn dequeue(&mut self) -> Option<T> {
        match self.head.take() {
            None => {
                return None;
            }
            Some(old_head) => {
                self.head = (*old_head).borrow_mut().next.take();
                if let None = self.head {
                    self.tail = None;
                }
                let rv: T = (*old_head).borrow().value.clone();
                Some(rv)
            }
        }
    }
}
```

Basically, when you use the `tail` for a quicker execution of `enqueue()`, you will, at best, have multiple references. And you need a mutable reference to add another node to the tail. But that isn't allowed necessarily in Rust's memory model without going down unsafe code. The `RefCell` allows for inner mutability of immutable structures, and the `Rc` allows for multiple owners, or references. 

The Course Book states non-priority queues behave like lists with cursor positions always equal to zero. 

For a priority queue, it sounds like items are still put into a queue and there's a method like `get_priority_position()` to find the highest (or lowest) priority. A priority queue node structure would be similar to the non-priority queue node except it would have a `priority` attribute, or whatever you want to call it. So, the `enqueue()` would place elements/nodes on the back of the queue, and the `dequeue()` would remove the one with the highest priority. 

My other argument would be to place nodes in the list according to priority, and then pop them off as normal. On average, you wouldn't need to traverse the entire list as you would with the other method. 

### Binary Trees and Binary Search Trees

Appendix B.5 of <span style="text-decoration: underline">Introduction to Algorithms</span> starts a discussion on trees on page 1,169. It begins with the _free tree_, which resembles a mind map to me. Section B.5.2 beginning on page 1,171 discusses a _rooted tree_, which has a distinguished vertex we call the **root** node. This begins a hierarchy of nodes, where higher nodes (closer to root) are **ancestors** of lower nodes (further from root). And nodes further from root are **descendants** of nodes closer. 

You can look at a **subtree rooted at x** which is just pretending that some descendant `x` is the root of the tree and taking it from there. We also have all the other terms related to family from **parent** and **child** to **siblings** as well. 

finally, a node without children is a **leaf** (back to tree talk), or an **external node**. All other nodes are classified as **internal nodes**. If a node has $n$ children, is of **degree** $n$. We also have a concept of **depth**, which are nodes from root. And the **level** of a tree is a set of all nodes at a particular depth. We say the **height** is the greatest depth of a tree. And **ordered trees** is a rooted tree where its children of each node are ordered. 

Section B.5.3, starting on page 1,173, begins the discussion of Binary and Position Trees. A **Binary Tree** is an ordered tree where each node has at most two children. The tree has three _disjoint_ sets of nodes:
+ The **root** node (big daddy).
+ A binary tree called its **left subtree**.
+ A binary tree called its **right subtree**.

An **empty tree** or **null tree** is a binary tree with no nodes. 

binary tree 1173
full binary tree 1174... 