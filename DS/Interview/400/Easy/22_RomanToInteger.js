// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

function romanToInt(s) {
    const romanToIntMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
    ]);
  
    let result = 0;
    let i = 0;
  
    while (i < s.length) {
      const current = romanToIntMap.get(s[i]);
      const next = romanToIntMap.get(s[i + 1]);
  
      if (next && next > current) {
        result += next - current;
        i += 2;
      } else {
        result += current;
        i += 1;
      }
    }
  
    return result;
  }
  
  // example usage
  console.log(romanToInt('III')); // 3
  console.log(romanToInt('IV')); // 4
  console.log(romanToInt('IX')); // 9
  console.log(romanToInt('LVIII')); // 58
  console.log(romanToInt('MCMXCIV')); // 1994
  