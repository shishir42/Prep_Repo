// Bubbling and capturing are two types of event propagation mechanisms in JavaScript that determine the order in which event handlers are executed in the DOM (Document Object Model) tree.

// Bubbling: When an event is triggered on a DOM element, the event will first be handled by the innermost element where it occurred, and then propagate outward to its parent elements until it reaches the outermost element (i.e., the document object). This process is called bubbling.

// <!DOCTYPE html>
// <html>
// <body>

// <div id="outer">
//   <div id="inner">
//     <button id="btn">Click me!</button>
//   </div>
// </div>

// <script>
// document.getElementById("btn").addEventListener("click", function() {
//   console.log("Button clicked!");
// });
// </script>

// </body>
// </html>

// In this example, we have a button inside a nested set of div elements. When the user clicks on the button, the event will first be handled by the button's event listener, and then it will propagate outward to the inner div element, and then to the outer div element, before finally reaching the document object. In the console, we will see the message "Button clicked!" printed out first, followed by the messages "Inner div clicked!" and "Outer div clicked!" in that order.

// Capturing: Capturing works the opposite way of bubbling, where the event is first handled by the outermost element and then propagated inward to its child elements until it reaches the innermost element where the event occurred.

// To demonstrate capturing, you can add the third argument to the addEventListener() function call, and set it to true, like this:

// document.getElementById("btn").addEventListener("click", function() {
//     console.log("Button clicked!");
//   }, true);


// Now when you click the button, the message "Outer div clicked!" will be printed out first, followed by "Inner div clicked!" and finally "Button clicked!".

// In general, bubbling is more commonly used than capturing, as it follows the natural flow of the DOM tree. But both techniques can be useful in certain situations, such as when you want to handle events at a specific level in the hierarchy of elements.