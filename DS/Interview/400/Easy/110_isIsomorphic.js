// Input: s = "egg", t = "add"
// Output: true

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const mapST = new Map();
    const mapTS = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s.charAt(i);
        const charT = t.charAt(i);
        
        if (!mapST.has(charS) && !mapTS.has(charT)) {
            mapST.set(charS, charT);
            mapTS.set(charT, charS);
        } else if (mapST.get(charS) !== charT || mapTS.get(charT) !== charS) {
            return false;
        }
    }
    
    return true;
};


console.log(isIsomorphic('egg', 'add'));