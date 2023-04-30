// Subtree of Another Tree
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

const isSameTree = (p, q) =>{
    if(!p && !q){
        return true;
    }

    if(!p || !q){
        return false;
    }

    if(p.val !== q.val){
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const isSubtree = (s,t) =>{
    if(!s) return false;

    if(isSameTree(s,t)){
        return true;
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

const s = {
    val: 3,
    left: {
      val: 4,
      left: { val: 1, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: { val: 5, left: null, right: null },
  };
  
  const t = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
  };
  
  console.log(isSubtree(s, t)); // true
  