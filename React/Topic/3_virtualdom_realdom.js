// what is DOM and its problem
// what is Virtual DOM, 
// how it solves DOM’s problems and 
// how React uses Virtual DOM.

// What is DOM?
// The DOM is an abstraction of a page’s HTML structure. It takes HTML elements and wraps them in an object with a tree-structure — maintaining the parent/child relationships of those nested HTML elements. This provides an API that allows us to traverse nodes (HTML elements) and manipulate them in a number of ways — such as adding nodes, removing nodes, editing a node’s content, etc.

// DOM has proven to be very inefficient and expensive when updating items.

// Consider a list of numbers, as shown below:
// [1,2,3,4,5]

// Suppose we wish to replace 3 with 6, we'll create an entirely new list, as shown below:
// [1,2,6,4,5]

// Another, more efficient way to do this is to go to the required index in the array and update it in place. This is a small example, but with thousands of nodes on a single page, the process of updating every node (re-rendering it) negatively affects the performance of the page.

// Knowing when to update
// There are a couple of ways in which components can tell when a data update occurs and whether or not it needs to re-render to the UI:

// Dirty Checking (slow) — Checks through all node’s data at a regular interval to see if there have been any changes. This is inefficient because it requires traversing every single node recursively to make sure it’s data isn’t “dirty” (out of date). This was used in AngularJS 1.x.

// Observable (fast) — Components are responsible for listening to when an update takes place. Since the data is saved on the state, components can simply listen to events on the state and if there is an update, it can re-render to the UI. React uses it.

//Virtual Dom 

// The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM. The virtual DOM gains it’s speed and efficiency from the fact that it’s lightweight. In fact, a new virtual DOM is created after every re-render.

//process of updating in React
//1.On the first load, ReactDOM.render() will create the Virtual DOM tree and real DOM tree.

//2. As React works on Observable patterns, when any event(like key press, left click, api response, etc.) occurred, Virtual DOM tree nodes are notified for state or props change.

//3. React compares the new virtual DOM tree with the previous one to determine what has changed.

//4. Based on the changes identified in step 3, React creates a minimal set of updates to apply to the real DOM.

//5. React compares Virtual DOM with real DOM and updates real DOM. This process is called Reconciliation. React uses Diffing algorithm techniques of Reconciliation.

//6. React applies the updates to the real DOM in a batched process, minimizing the number of actual DOM manipulations needed.

// Additional points regarding updates.
//1. Virtual DOM is pure JS file and light weight, So capturing any update in Virtual DOM is much faster than directly updating on Real DOM.

//2. React takes a few milliseconds before reconciliation. This allows react to bundle few processes. This increases efficiency and avoids unnecessary reprocessing. Because of this delay we should not rely on this.state.val just after setState().

//3. React does shallow comparison of props value. We need to handle deep comparison separately, immutable is the most common way to handle it.

// Additionally, React uses a concept called "reusable components" to further optimize the rendering process. When a component is reused multiple times in the same UI, React caches the component's previous rendering output and reuses it instead of rendering the component from scratch. This helps to reduce the number of DOM updates needed and improves performance.

//Real Dom Vs Virtual Dom 

//Real Dom: It is an abstraction of a page's HTML.
//Virtual DOM: It is an abstraction of an HTML DOM.

//Real Dom: It can manipulate on-screen elements.
//Virtual DOM: It cannot manipulate on-screen elements.

//Real Dom: Any change updates the entire DOM tree.
//Virtual DOM: Any change only updates the relevant node in the tree.

//Real Dom: Updating is slow and inefficient.
//Virtual DOM: Updating is fast and efficient.





// https://medium.com/devinder/react-virtual-dom-vs-real-dom-23749ff7adc9
// https://www.educative.io/answers/what-is-the-difference-between-virtual-and-real-dom-react