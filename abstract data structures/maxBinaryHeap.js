class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(2);
heap.insert(1);
console.log(heap);

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }
//   insert(val) {
//     let i = this.values.length;
//     let j = Math.floor((i - 1) / 2);
//     this.values.push(val);
//     while (i >= 0) {
//       if (this.values[j] < val) {
//         let temp = this.values[j];
//         this.values[j] = this.values[i];
//         this.values[i] = temp;
//       }
//       i = j;
//       j = Math.floor((i - 1) / 2);
//     }
//     return this.values;
//   }
//   // insert(element) {
//   //   this.values.push(element)
//   //   this.bubbleUp()
//   // }
//   // bubbleUp() {
//   //   let index = this.values.length - 1
//   //   const element = this.values[index]
//   //   while(index > 0) {
//   //     let parentIndex = Math.floor((index-1)/2)
//   //     let parent = this.values[parentIndex]
//   //     // if (parent === element) return undefined
//   //     // if (parent < element) break
//   //     if (parent <= element) break
//   //     this.values[parentIndex] = element
//   //     this.values[index] = parent
//   //     index = parentIndex
//   //   }
//   // }
//   extractMax() {
//     let temp = this.values[0];
//     this.values[0] = this.values[this.values.length - 1];
//     this.values[this.values.length - 1] = temp;
//     let removedRoot = this.values.pop();
//     let i = 0;
//     while (i < this.values.length) {
//       let left = i * 2 + 1;
//       let right = i * 2 + 2;
//       if (
//         this.values[left] > this.values[right] &&
//         this.values[left] > this.values[i]
//       ) {
//         let temp = this.values[left];
//         this.values[left] = this.values[i];
//         this.values[i] = temp;
//         i = left;
//       } else if (
//         this.values[right] > this.values[left] &&
//         this.values[right] > this.values[i]
//       ) {
//         let temp = this.values[right];
//         this.values[right] = this.values[i];
//         this.values[i] = temp;
//         i = right;
//       } else break;
//     }
//     return removedRoot;
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(10);
// heap.insert(50);
// heap.insert(20);
// heap.insert(30);
// heap.insert(40);
// console.log(heap);
