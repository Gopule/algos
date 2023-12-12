class ListNode:
    def __init__(self, url, prev=None):
        self.url = url
        self.prev = prev
        self.next = None

class BrowserHistory:
    def __init__(self, homepage: str):
        self.cur = ListNode(homepage)

    def visit(self, url: str) -> None:
        new_page = ListNode(url, self.cur)
        self.cur.next = new_page
        self.cur = new_page

    def back(self, steps: int) -> str:
        while steps > 0 and self.cur.prev:
            steps -= 1
            self.cur = self.cur.prev
        return self.cur.url

    def forward(self, steps: int) -> str:
        while steps > 0 and self.cur.next:
            steps -= 1
            self.cur = self.cur.next
        return self.cur.url
