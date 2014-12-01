Data Structures
===============

> In computer science, a data structure is a particular way of
> organizing data in a computer so that it can be used efficiently.
> -- <cite>[Wikipedia][data_structure]</cite>

__Common Data Structures__

* Arrays
* Linked Lists
* Trees

and [more][list_of_structures], including

* Hashes
* Stacks/Queues
* Graphs
* Sets

A couple of those look familiar from JavaScript and Ruby. `Arrays` and
`Hashes` are present in both languages. (In JavaScript, hashes are
called Objects). Most of your programming needs can be solved using
one of those popular structures. However, to call yourself a good
Computer Scientist you should be knowledable about a few others.

__For the most part, in your day-to-day programming, stick to the data
structures provided by your language. Don't start your first day on
some job by implementing your own linked list.__

Array
-----

You probably have a good understanding of Arrays from using them in
your day-to-day programming. They are one of the simplest and most
common data structures.

```Ruby
foods = ["kale", "broccoli", "carrots"]
foods[0] # accesses the first element (i.e., "kale")
foods[1] # accesses the second element (i.e., "broccoli")
```

### Efficiency ###

Remember the quote at the top of the page.  Not only do we want to
organize data, but we want to do it _efficiently_. Let's think about
how good or bad Arrays might be for:

* retrieving an element
    * from the beginning
    * from the middle
    * from the end
* changing an element
* removing an element
* adding an element

To do this, we may want to pause and think about how Arrays are
stored in memory. What _is_ an Array, really?

-------------------------------------------------------------------------

#### Memory ####

Q: What's a bit?  
A: A _binary digit_. 0 or 1.

Q: What's a byte?  
A: Eight bits.

Q: What is a word?  
A. It's a slot in memory. Computers rarely give you control over
individual bits or even bytes. On a 32-bit machine, you get access to
words or slots of 32 bits (or 4 bytes). On a 64-bit machine, you get
access to words that are 64 bits (or 8 bytes).

In other words, An array of 10 integers needs 10 sequential memory
_slots_ to store the data. On a 64-bit machine, this would be 640
sequential bits (or 80 bytes). On a 32-bit machine, it would be half
that.

> ... an array of 10 32-bit integer variables, with indices 0 through
> 9, may be stored as 10 words at memory addresses 2000, 2004, 2008,
> ... 2036, so that the element with index i has the address 2000 +
> 4 × i.
> -- <cite>[Wikipedia][wiki_array]</cite>

-------------------------------------------------------------------------

Linked List
-----------

A __Linked List__ (or __Singly Linked List__) is another way of
organizing a list of elements.

Instead of requesting _n_ contiguous memory locations, you just create
_n_ nodes (or vertices) and link them yourself.  Each node can be
stored anywhere in memory, and you also store where to find the next
element in the list in each node.

There is also a version called a __Doubly Linked List__ that has links
going in both directions. So, instead of each node having a only a
`next` property, they also have a `previous` property.

### Efficiency ###

We already thought about the performance characteristics of the
following for Arrays.  How do they compare for Linked Lists?

* retrieving an element
    * from the beginning
    * from the middle
    * from the end
* changing an element
* removing an element
* adding an element

### Exercise ###

__Implement a Linked List__

1. Need to create a representation of a Node (or Vertex).
2. Create a linked list consisting of 3 vertices.
3. Write a function to calculate the length of a list.
4. Write a function to add an element.
5. Write a function to remove an element.

Tree
----

In a way, a Tree is like a more generalized version of a Linked List
where each Node can have more than one child.

### Exercise ###

__Implement a Tree__

1. Need to create a representation of a Node (or Vertex).
2. Write a function to add one Node as a child of another.
3. Write a function to search a Tree for a value.

### Specific Types of Trees ###

* Binary Trees
    - Each node has zero, one, or two children. This assertion makes
      many tree operations simple and efficient.
* Binary Search Trees
    - A binary tree where any left child node has a value less than
      its parent node and any right child node has a value greater
      than or equal to that of its parent node.
* Heaps
    - See [wikibooks][wiki_heaps] for proper definition.
    - Simplified version: a (usually binary) tree where the biggest
      element is always at the top.
* [Tries][wiki_tries]
    - Useful for autocompletion.

Big-O Notation
--------------

> In computer science, big O notation is used to classify
> algorithms by how they respond (e.g., in their processing time
> or working space requirements) to changes in input size.
> -- <cite>[Wikipedia][wiki_bigo]</cite>

Since a big issue when discussing data structures is their efficiency
in the face of certain tasks, we want to use a common language to
discuss such (in)efficiencies. Normally, we are interested in how much
memory or processing time is needed to complete the task depending on
the size of the input. We often let _n_ be a stand in for the input
size.

So, an algorithm that is O(1), is said to be "Big O of 1" or
"constant", and does not vary depending on the size of the input. This
is good. This is fast even for very large _n_.

An algorithm that is O(n), is said to be "Big O of _n_" or "linear", and
this indicates that the resources required grow proportionally to the
size of the input. This is reasonable performace.

Another that is O(n^2), is said to be "Big O of _n_ squared" and it means
the resources grow in proportion to the square of the input. This is
slow. Think of really big numbers and then think of them squared.

See the [Cheat Sheet][bigo_cheat] for some other common time
(processing time) and space (memory) complexities and their notations.

Resources
---------

* [Data Structure on Wikipedia][data_structure]
* [Array on Wikipedia][wiki_array]
* [Trees on Wikibooks][wiki_trees]
* [Heaps on Wikibooks][wiki_heaps]
* [Big-O Cheat Sheet][bigo_cheat]

[data_structure]: http://en.wikipedia.org/wiki/Data_structure
[list_of_structures]: http://en.wikipedia.org/wiki/List_of_data_structures
[wiki_array]: http://en.wikipedia.org/wiki/Array_data_structure
[wiki_trees]: http://en.wikibooks.org/wiki/Data_Structures/Trees
[wiki_heaps]: http://en.wikibooks.org/wiki/Data_Structures/Min_and_Max_Heaps
[wiki_tries]: http://en.wikipedia.org/wiki/Trie
[wiki_bigo]: http://en.wikipedia.org/wiki/Big_O_notation
[bigo_cheat]: http://bigocheatsheet.com/
