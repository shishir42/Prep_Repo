// Implement DOM APIs: document.getElementsByClassName, document.getElementsByTagName

// here are the implementations of document.getElementsByClassName and document.getElementsByTagName:

// document.getElementsByClassName: The getElementsByClassName function returns an array-like object of all elements with a given class name.

document.getElementsByClassName = function(className) {
    const elements = [];
    const allElements = document.getElementsByTagName("*");
    for(let i=0; i<allElements.length; i++) {
      if(allElements[i].classList.contains(className)) {
        elements.push(allElements[i]);
      }
    }
    return elements;
  }

//   document.getElementsByTagName: The getElementsByTagName function returns an array-like object of all elements with a given tag name.

document.getElementsByTagName = function(tagName) {
    return document.querySelectorAll(tagName);
  }
// Note: The querySelectorAll function returns a NodeList object instead of an array, but it can be converted to an array using the Array.from() method if needed.

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Example</title>
// </head>
// <body>
//   <div class="container">
//     <h1>Title</h1>
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p>
//   </div>
//   <script>
//     const container = document.getElementsByClassName("container")[0];
//     const paragraphs = container.getElementsByTagName("p");
//     for(let i=0; i<paragraphs.length; i++) {
//       console.log(paragraphs[i].textContent);
//     }
//   </script>
// </body>
// </html>


// In this example, we first select the container element using getElementsByClassName, and then we select all the p elements inside the container using getElementsByTagName. Finally, we loop through the p elements and log their text content to the console. The output should be:

// Paragraph 1
// Paragraph 2
