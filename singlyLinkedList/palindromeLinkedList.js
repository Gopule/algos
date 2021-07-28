function isPalindrome(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result.join("") === result.reverse().join("");
}
