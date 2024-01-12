class Codec:
    def __init__(self):
        self.key = 1
        self.dict = {}

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        self.dict[self.key] = longUrl
        self.key += 1
        return self.key - 1

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        return self.dict[shortUrl]
