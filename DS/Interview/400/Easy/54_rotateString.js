// Rotate String
// Topics: String;String Matching
// Input: s = "abcde", goal = "cdeab"
// Output: true

const canShiftIntoString = (s, goal)=>{
    if(s.length !== goal.length){
        return false;
    }

    for(let i=0; i<s.length; i++){
        const shifted = s.substring(i) + s.substring(0,i); // shift s by i characters
        if (shifted === goal) {
            return true;
        }
    }

    return false;
}

const s = "abcde";
const goal = "cdeab";
console.log(canShiftIntoString(s, goal)); // Output: true