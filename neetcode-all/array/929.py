class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
      emails_map = set()
      count = 0
      for email in emails:
        unf_name, domain = email.split("@")
        name = "".join(unf_name.split("+")[0].split("."))
        fin_email = name + "@" + domain
        if fin_email not in emails_map:
          count += 1
          emails_map.add(fin_email)
      print(emails_map)
      return count
