// The preventDefault() method is a built-in method in JavaScript that is used to prevent the default behavior of an HTML element.

// The preventDefault() method is used to prevent this default behavior from occurring. It is commonly used in event listeners, where you can listen for an event such as a form submission or a link click, and then call preventDefault() to prevent the default behavior from occurring.

const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from being submitted
  // Do something else, such as send an AJAX request or perform form validation
});

// The stopPropagation() method is a built-in method in JavaScript that is used to stop the propagation of an event from bubbling up the DOM tree.

// The stopPropagation() method is used to stop the event from propagating any further up the DOM tree. It is commonly used in event listeners, where you can listen for an event on a child element and then call stopPropagation() to prevent the event from triggering any event listeners on parent elements.

const button = document.querySelector('#myButton');

button.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop the click event from propagating
  // Do something else, such as open a modal or show a tooltip
});

// In this example, we add an event listener to the button that listens for the click event. When the event is triggered, we call stopPropagation() on the event object to prevent the click event from propagating any further up the DOM tree. We can then perform other actions, such as opening a modal or showing a tooltip, without any unintended effects from parent elements.