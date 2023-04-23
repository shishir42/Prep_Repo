// async and defer are attributes that can be added to the <script> tag in HTML to control when JavaScript code is loaded and executed on a web page. While both attributes are used to improve page performance and avoid blocking the rendering of a page, they work in different ways.

// The async attribute indicates that the script should be executed asynchronously, meaning that it will not block the rendering of the page while it is being downloaded and executed. When the browser encounters a script tag with the async attribute, it will download and execute the script in parallel with the rest of the page content, without waiting for the script to finish executing before continuing to parse the page. This can result in the script executing out of order relative to other scripts or page content.

// Here's an example:

{/* <body>
  <script async src="script1.js"></script>
  <script async src="script2.js"></script>
  <script async src="script3.js"></script>
</body> */}

// In the above example, all three scripts will be downloaded in parallel with the rest of the page content, and will execute as soon as they are downloaded, even if they finish executing out of order.

// The defer attribute, on the other hand, indicates that the script should be executed after the page has finished parsing, but before the DOMContentLoaded event fires. This means that the script will not block the rendering of the page, but will be executed in the order that it appears in the HTML document. This can be useful for scripts that need to access or modify the page content.

// <body>
//   <script defer src="script1.js"></script>
//   <script defer src="script2.js"></script>
//   <script defer src="script3.js"></script>
// </body>

// In the above example, all three scripts will be downloaded in parallel with the rest of the page content, but will not execute until after the page has finished parsing. They will execute in the order that they appear in the HTML document.

// In summary, both async and defer are used to improve page performance and avoid blocking the rendering of a page, but they work in different ways. The async attribute allows scripts to be downloaded and executed in parallel with the rest of the page content, while the defer attribute allows scripts to be downloaded in parallel, but executed after the page has finished parsing.

