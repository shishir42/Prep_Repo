//Stack

//encode string: 3[a]2[bc]
//decode string: aaabcbc

//encode string: 3[a2[c]]
//decode string: accaccacc

//encode string: 2[abc]3[cd]ef
//decode string: abcabccdcdef

//https://leetcode.com/problems/decode-string/solutions/216678/javascript-solution-stack/

// class Solution {
//     public String decodeString(String s) {
//         Stack<Integer> numStack = new Stack<>();
//         Stack<String> strStack = new Stack<>();
//         StringBuilder sb = new StringBuilder();
//         int n=s.length();
//         for (int i=0; i<n; ++i){
//             char c = s.charAt(i);
//             if (Character.isDigit(c)){
//                 int num = c-'0';
//                 while (i+1 < n && Character.isDigit(s.charAt(i+1))){
//                     num = num*10 + s.charAt(i+1)-'0';
//                     i++;
//                 }
//                 numStack.push(num);
//             }
//             else if (c == '[') {
//                 strStack.push(sb.toString());
//                 sb = new StringBuilder();
//             }
//             else if (c == ']'){
//                 int repeats = numStack.pop();
//                 StringBuilder temp = new StringBuilder(strStack.pop());
//                 for (int j=0; j<repeats; ++j){
//                     temp.append(sb);
//                 }
//                 sb = temp;
//             }
//             else
//                 sb.append(c);
//         }
//         return sb.toString();
//     }
// }