// Implement Min Stack: Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(value){
        this.stack.push(value);
        if(this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(value);
        }
    }

    pop(){
        const val = this.stack.pop();
        if(val === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }

        return val;
    }

    top(){
        return this.stack[this.stack.length-1];
    }

    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}


/*********************/
class MinStack_L{
    constructor(){
        this.stack = [];
        this.minStack = Infinity;
    }
    
    push(value){
        this.stack.push(value);
        if(value <= this.minStack[this.minStack.length - 1]){
            this.minStack = value;
        }
    }

    pop(){
        const val = this.stack.pop();

        if(val === this.minStack){
            this.minStack = this.stack.pop();
        }

        return val;
    }

    top() {
        return this.stack[this.stack.length - 1];
      }
    
      getMin() {
        return this.minVal;
      }
}