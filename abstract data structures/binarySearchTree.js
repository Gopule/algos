class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    let current = this.root;
    if (!this.root) this.root = newNode;
    else {
      while (current) {
        if (val === current.val) return undefined;
        if (val > current.val && current.right) {
          current = current.right;
        } else if (val < current.val && current.left) {
          current = current.left;
        } else break;
      }
      val > current.val ? (current.right = newNode) : (current.left = newNode);
    }
    return this;
  }
  // insert(val) { // refactor
  //   let newNode = new Node(val)
  //   let current = this.root
  //   if (!this.root) this.root = newNode
  //   else {
  //     while (true) {
  //       if (val === current.val) return undefined
  //       if (val > current.val) {
  //         if(!current.right) {
  //           current.right = newNode
  //           return this
  //         } else {
  //           current = current.right
  //         }
  //       } else if (val < current.val){
  //         if(!current.left) {
  //           current.left = newNode
  //           return this
  //         } else {
  //           current = current.left
  //         }
  //       }
  //     }
  //   }
  // }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        return true;
      }
    }
    return false;
  }
  BFSiterative() {
    //iterative solution
    let queue = [];
    let visited = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  DFSPreorder() {
    //recursive solution
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(61);
tree.insert(73);
tree.insert(62);
tree.insert(26);
tree.insert(60);
// tree.BFSiterative()
// tree.DFSPreorder()
// tree.DFSPostorder()
// tree.DFSInorder()
console.log(tree);
