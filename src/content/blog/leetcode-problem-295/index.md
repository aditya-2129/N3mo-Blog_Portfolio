---
title: "LeetCode Problem 295: Find Median from Data Stream - A Comprehensive Guide"
summary: "Learn how to design a data structure that efficiently supports median queries using two heaps."
date: "2025-08-17"
draft: false
tags: [Blind 75, LeetCode, Algorithms, Data Structures, Heaps, Priority Queue]
---

LeetCode's Problem 295, "Find Median from Data Stream," requires designing a data structure that supports adding numbers and retrieving the median at any time. This challenge tests your understanding of heaps and dynamic data processing.

## Problem Statement

Implement the `MedianFinder` class:

- `MedianFinder()` initializes the object.
- `addNum(num)` adds the integer `num` from the data stream to the structure.
- `findMedian()` returns the median of all elements so far.

## Approach and Solutions

To maintain the median efficiently, we use two heaps:

- A max heap `small` to store the lower half of the numbers.
- A min heap `large` to store the upper half of the numbers.

We ensure the heaps are balanced so their sizes differ by at most one. The median is either the top of the larger heap or the average of both tops when sizes are equal.

### Python Solution

<div class="code-container">
  <pre><code class="language-python">
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap
        self.large = []  # min heap

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2
  </code></pre>
  <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

### JavaScript Solution

<div class="code-container">
  <pre><code class="language-javascript">
class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();
    }

    addNum(num) {
        this.small.enqueue(num);
        this.large.enqueue(this.small.dequeue().element);
        if (this.large.size() > this.small.size()) {
            this.small.enqueue(this.large.dequeue().element);
        }
    }

    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front().element;
        }
        return (this.small.front().element + this.large.front().element) / 2;
    }
}
  </code></pre>
  <button class="copy-button" onclick="copyCode(this)">Copy</button>
</div>

## Conclusion

By leveraging two heaps, `MedianFinder` achieves O(log n) insertion and O(1) median retrieval, making it well-suited for real-time data streams.

<script>
function copyCode(button) {
   const code = button.previousElementSibling.innerText;
   navigator.clipboard.writeText(code).then(() => {
       button.innerText = 'Copied!';
       setTimeout(() => {
           button.innerText = 'Copy';
       }, 2000);
   }).catch(err => {
       console.error('Failed to copy: ', err);
   });
}
</script>

<style>
.code-container {
   position: relative;
   margin-bottom: 1em;
}

.copy-button {
   position: absolute;
   top: 0;
   right: 0;
   padding: 0.5em;
   background: #4CAF50;
   color: white;
   border: none;
   cursor: pointer;
   font-size: 0.8em;
   border-radius: 3px;
}

.copy-button:hover {
   background: #45a049;
}
</style>

