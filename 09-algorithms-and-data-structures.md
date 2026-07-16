---
title: Algorithms and Data Structures Fundamentals
category: Computer Science
id: SE-ALG-001
---

# Algorithms and Data Structures Fundamentals

An algorithm is a finite sequence of steps used to solve a problem.

A data structure is a method of organising and storing data so that it can be accessed and modified efficiently.

## Characteristics of an Algorithm

A valid algorithm should have:

- Clearly defined inputs
- Clearly defined outputs
- Unambiguous steps
- A finite number of steps
- Effective and executable operations

## Time Complexity

Time complexity describes how an algorithm's running time grows as the input size increases.

It is commonly expressed using Big O notation.

## Space Complexity

Space complexity describes how much additional memory an algorithm requires as the input size increases.

## Big O Notation

Big O notation represents an upper bound on algorithm growth.

Common complexity classes include:

- O(1): constant time
- O(log n): logarithmic time
- O(n): linear time
- O(n log n): linearithmic time
- O(n²): quadratic time
- O(2ⁿ): exponential time
- O(n!): factorial time

## Constant Time

An O(1) operation takes approximately the same amount of time regardless of input size.

Example:

Accessing an array element by index.

## Linear Time

An O(n) algorithm may examine every element once.

Example:

Searching an unsorted list.

## Logarithmic Time

An O(log n) algorithm repeatedly reduces the problem size.

Example:

Binary search on a sorted array.

## Quadratic Time

An O(n²) algorithm commonly contains two nested loops over the input.

Example:

Comparing every element with every other element.

## Array

An array stores elements in contiguous memory locations.

Advantages:

- Fast indexed access
- Simple structure
- Efficient iteration

Limitations:

- Fixed size in some languages
- Inserting or deleting elements in the middle may be expensive

Accessing an element by index is normally O(1).

## Linked List

A linked list consists of nodes connected using references.

Each node normally contains:

- Data
- A reference to the next node

A doubly linked list also contains a reference to the previous node.

Advantages:

- Dynamic size
- Efficient insertion and deletion when the node location is known

Limitations:

- No direct indexed access
- Additional memory is required for references

## Stack

A stack follows the Last In, First Out principle.

Common operations include:

- Push: add an element
- Pop: remove the most recently added element
- Peek: inspect the top element

Applications include:

- Function calls
- Undo operations
- Expression evaluation
- Depth-first search

## Queue

A queue follows the First In, First Out principle.

Common operations include:

- Enqueue: add an element to the rear
- Dequeue: remove an element from the front
- Front or peek: inspect the first element

Applications include:

- Task scheduling
- Print queues
- Message processing
- Breadth-first search

## Priority Queue

A priority queue removes elements according to priority instead of insertion order.

It is commonly implemented using a heap.

## Hash Table

A hash table stores key-value pairs.

A hash function converts a key into an array position.

Average-case search, insertion, and deletion can be O(1).

## Collision

A collision occurs when two keys produce the same hash-table position.

Common collision-handling techniques include:

- Chaining
- Linear probing
- Quadratic probing
- Double hashing

## Tree

A tree is a hierarchical data structure consisting of nodes and edges.

Important terms include:

- Root
- Parent
- Child
- Sibling
- Leaf
- Subtree
- Height
- Depth

## Binary Tree

A binary tree allows each node to have at most two children.

These children are commonly called the left child and right child.

## Binary Search Tree

A binary search tree follows this ordering rule:

- Values smaller than a node are placed in its left subtree
- Values greater than a node are placed in its right subtree

Search, insertion, and deletion are O(log n) on average in a balanced tree.

They may become O(n) when the tree is highly unbalanced.

## Tree Traversal

Common depth-first traversals include:

### Preorder

Visit:

1. Root
2. Left subtree
3. Right subtree

### Inorder

Visit:

1. Left subtree
2. Root
3. Right subtree

Inorder traversal of a binary search tree produces values in sorted order.

### Postorder

Visit:

1. Left subtree
2. Right subtree
3. Root

## Graph

A graph consists of:

- Vertices, also called nodes
- Edges connecting vertices

Graphs may be:

- Directed or undirected
- Weighted or unweighted
- Connected or disconnected
- Cyclic or acyclic

## Breadth-First Search

Breadth-first search, or BFS, explores nodes level by level.

It normally uses a queue.

BFS can find the shortest path in an unweighted graph.

Its typical complexity is:

O(V + E)

where V is the number of vertices and E is the number of edges.

## Depth-First Search

Depth-first search, or DFS, explores one path as deeply as possible before backtracking.

It normally uses recursion or a stack.

Its typical complexity is:

O(V + E)

## Linear Search

Linear search examines elements one by one.

Time complexity:

O(n)

It works on both sorted and unsorted data.

## Binary Search

Binary search repeatedly divides a sorted search range into two halves.

Time complexity:

O(log n)

Binary search requires the data to be sorted.

## Bubble Sort

Bubble sort repeatedly compares neighbouring elements and swaps them when they are in the wrong order.

Average and worst-case complexity:

O(n²)

It is simple but inefficient for large collections.

## Selection Sort

Selection sort repeatedly selects the smallest remaining element and places it in its correct position.

Time complexity:

O(n²)

## Insertion Sort

Insertion sort builds a sorted section one element at a time.

Average and worst-case complexity:

O(n²)

It can perform well on small or nearly sorted collections.

## Merge Sort

Merge sort divides the collection into smaller parts, sorts them, and merges them.

Time complexity:

O(n log n)

Additional memory is normally required during merging.

## Quick Sort

Quick sort selects a pivot and partitions elements around it.

Average-case complexity:

O(n log n)

Worst-case complexity:

O(n²)

Its practical performance is often very good when pivots are selected effectively.

## Recursion

Recursion occurs when a function calls itself.

A recursive solution requires:

- A base case
- A recursive case
- Progress toward the base case

Incorrect recursion may cause infinite calls or stack overflow.

## Divide and Conquer

Divide and conquer solves a problem by:

1. Dividing it into smaller subproblems
2. Solving the subproblems
3. Combining their solutions

Examples include:

- Merge sort
- Quick sort
- Binary search

## Greedy Algorithm

A greedy algorithm chooses the locally best option at each step.

A greedy strategy produces an optimal solution only for suitable problems.

Examples include:

- Kruskal's algorithm
- Prim's algorithm
- Dijkstra's algorithm with non-negative edge weights

## Dynamic Programming

Dynamic programming solves overlapping subproblems and stores their results.

Two common approaches are:

- Memoization: top-down recursion with stored results
- Tabulation: bottom-up table construction

Dynamic programming is useful when a problem has:

- Overlapping subproblems
- Optimal substructure
