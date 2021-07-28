var maxNumberOfBalloons = function (text) {
  let memo = {
    b: 1,
    a: 1,
    l: 1,
    o: 1,
    n: 1,
  };
  for (let cv of text) {
    if (memo[cv]) {
      memo[cv]++;
    }
  }
  for (let key in memo) {
    memo[key]--;
  }
  let total = 0;
  let broke = false;
  while (!broke) {
    for (let key in memo) {
      if (memo[key] >= 2 && (key === "l" || key === "o")) {
        memo[key] -= 2;
        total += 2;
      }
      if (memo[key] >= 1 && (key === "a" || key === "b" || key === "n")) {
        memo[key]--;
        total++;
      }
      if ((key === "l" || key === "o") && memo[key] < 2) broke = true;
      if (memo[key] <= 0) broke = true;
    }
  }
  return Math.floor(total / 7);
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(
  maxNumberOfBalloons(
    "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
  )
);
console.log(maxNumberOfBalloons("lloo"));
