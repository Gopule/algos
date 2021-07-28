function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// {
//   "nodes": [
//     {"id": "1", "left": "2", "right": "3", "value": 1},
//     {"id": "2", "left": "4", "right": "5", "value": 2},
//     {"id": "3", "left": "6", "right": "7", "value": 3},
//     {"id": "4", "left": "8", "right": "9", "value": 4},
//     {"id": "5", "left": "10", "right": null, "value": 5},
//     {"id": "6", "left": null, "right": null, "value": 6},
//     {"id": "7", "left": null, "right": null, "value": 7},
//     {"id": "8", "left": null, "right": null, "value": 8},
//     {"id": "9", "left": null, "right": null, "value": 9},
//     {"id": "10", "left": null, "right": null, "value": 10}
//   ],
//   "root": "1"
// }
