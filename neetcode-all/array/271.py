class Codec:
    def encode(self, strs):
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    def decode(self, s):
        ans, i = [], 0
        while i < len(s):
            j = i
            while s[j] != "#": j+=1
            length = int(s[i:j])
            ans.append(s[j+1:j+1 + length])
            i = j + length + 1
        return ans
