class TreeNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.tree = TreeNode()

    def insert(self, word: str) -> None:
        cur = self.tree
        for c in word:
            if c not in cur.children:
                cur.children[c] = TreeNode()
            cur = cur.children[c]
        cur.end = True

    def search(self, word: str) -> bool:
        cur = self.tree
        for c in word:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        return cur.end

    def startsWith(self, prefix: str) -> bool:
        cur = self.tree
        for c in prefix:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        return True

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
