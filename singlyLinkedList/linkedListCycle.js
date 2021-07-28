function hasCycle(head) {
  let current = head;
  while (current) {
    current.val = "seen";
    if (!current.next) break;
    if (current.next.val === "seen") return true;
    current = current.next;
  }
  return false;
}
