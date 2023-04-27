const simplifyPath = (path) =>{
    const stack = [];
    const dirs = path.split('/');

    for(let dir of dirs){
        if(dir === ".."){
            stack.pop();
        }else if(dir && dir!== "."){
            stack.push(dir);
        }
    }

    return '/' + stack.join('/');
}


const path = '/a/./b/../../c/';
const simplifiedPath = simplifyPath(path);
console.log(simplifiedPath); // Output: '/c'