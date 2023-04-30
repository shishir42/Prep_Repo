// Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote, magazine) {
    const charCount = {};
    for (const char of magazine) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of ransomNote) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
    return true;
  }
  
  const ransomNote = "aa", magazine = "aab";
  console.log(canConstruct(ransomNote, magazine));
