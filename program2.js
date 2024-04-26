function longestSubstring(s) {
    // Handle empty string case
    if (!s) return 0;

    let longest = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      while (charSet.has(currentChar)) {
        charSet.delete(s[left]);
        left++;
      }
  
      charSet.add(currentChar);
  
      longest = Math.max(longest, right - left + 1);
    }
  
    return longest;
  }
module.exports = { longestSubstring };
