class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let currentNode = this.head;
      let newTail = currentNode;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return this;
    }
  }
  // pop() {
  //   if (!this.head) {
  //     return this;
  //   } else if (this.length === 1) {
  //     this.head = null;
  //     this.tail = null;
  //     this.length--;
  //   } else {
  //     let currentNode = this.head;
  //     while (currentNode.next.next) {
  //       currentNode = currentNode.next;
  //     }
  //     this.tail = currentNode;
  //     currentNode.next = null;
  //     this.length--;
  //   }
  // }
  shift() {
    if (!this.head) return this;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let newHead = this.head.next;
      this.head = null;
      this.head = newHead;
      this.length--;
      return this;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (
      !this.head ||
      index > this.length ||
      index < 0 ||
      typeof index !== "number"
    )
      return null;
    let currentNode = this.head;
    for (let i = 0; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (
      !this.head ||
      index > this.length ||
      index < 0 ||
      typeof index !== "number"
    )
      return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    // for (let i = 0; i < this.length; i++){
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // }
    return this;
  }
  rotate(num) {
    while (num) {
      this.tail.next = this.head;
      this.tail = this.head;
      this.head = this.head.next;
      this.tail.next = null;
      num--;
    }
  }
}

let list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// list.pop()
// list.shift()
// list.unshift(0)
// list.get(2) // 3
// list.set(4, 'hey')
// list.insert(1, 2)
// list.reverse()
console.log(list);
