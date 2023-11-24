class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        path = path.split("/")
        for dir_str in path:
            if dir_str == "..":
               stack and stack.pop()
            elif dir_str not in [".", "", ".."]:
                stack.append(dir_str)

        return "/" + "/".join(stack)

# class Solution:
#     def simplifyPath(self, path: str) -> str:
#         stack = ["/"]
#         ops = set(["..", ".", ""])
#         dir_str = ""
#         for i in range(1, len(path)):
#             if path[i] == "/":
#                 if dir_str in ops:
#                     if dir_str == "" or dir_str == ".":
#                         dir_str = ""
#                         continue
#                     else:
#                         if len(stack) > 1:
#                             stack.pop()
#                 else:
#                     dir_str = "/" + dir_str if len(stack) > 1 else dir_str
#                     stack.append(dir_str)
#                 dir_str = ""
#             else:
#                dir_str += path[i]

#         if dir_str == "..":
#             if len(stack) > 1:
#                 stack.pop()
#         elif dir_str not in ops:
#             dir_str = "/" + dir_str if len(stack) > 1 else dir_str
#             stack.append(dir_str)

#         return "".join(stack)
