class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let removedNode = this.tail;
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
  shift() {
    let removedHead = this.head;
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length || !this.head) return null;
    let mid = Math.floor(this.length / 2) + 1;
    let current;
    if (index <= mid) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    else {
      node.val = val;
      return true;
    }
  }
  insert(index, val) {
    let newNode = new Node(val);
    if (index === 0) return !!this.unshift(val);
    else if (index === this.length) return !!this.push(val);
    else {
      let next = this.get(index);
      if (!next) return false;
      else {
        let prev = next.prev;
        newNode.next = next;
        newNode.prev = next.prev;
        prev.next = newNode;
        next.prev = newNode;
        this.length++;
        return true;
      }
    }
  }
  remove(index) {
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      let removedNode = this.get(index);
      if (!removedNode) return null;
      else {
        let next = removedNode.next;
        let prev = removedNode.prev;
        prev.next = next;
        next.prev = prev;
        removedNode.next = null;
        removedNode.prev = null;
        return removedNode;
      }
    }
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    for (let i = this.length - 1; i >= 0; i--) {
      let next = current.prev;
      current.next = next;
      current.prev = prev;
      prev = current;
      current = current.next;
    }
    return this;
  }
}

let list = new doublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
//list.pop()
// list.shift()
// list.unshift(0)
// list.get(5)
// list.set(1, 'changed-1')
// list.insert(1, 'changed-1')
// list.remove(1)
// list.reverse()
console.log(list);
