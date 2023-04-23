// What steps can you take to resolve persistent memory leak issues?

// A memory leak occurs when memory that is no longer needed by an app remains in the app rather than being returned to the operating system. This is one of the most common causes of performance issues.

// In theory, memory management is handled automatically by the garbage collector. However, this process is still prone to errors. Debugging tools can be used to identify memory leak issues. Some of the most common causes for issues are:

// Timers and listeners in componentDidMount
// Inline styles
// Closure scope leaks
// The use of console.log

// Debugging can identify the root of the memory leak; once it has been removed, the issue should be resolved.


// Imagine you have an app which is a series of lists of images (e.g. like Instagram). The app seems to crash at random. What steps can we take to investigate and mitigate this in React Native?

// Often, and especially on the Android platform, lists of images are not properly recycled when scrolling. Their memory is never garbage collected, nor is it manually freed at a lower level. This leads to out-of-memory (OOM) crashes that can occur seemingly at random as the app’s memory is exhausted.

// We can investigate this by profiling the app’s heap memory usage in either Xcode or Android Studio. If you scroll through a list of images and notice the heap usage steadily climbing without ever dipping, it probably means that your images aren’t being recycled properly.

// To mitigate this, we can check which list implementation we are using. In modern versions of React Native, ListView should never be used; ensure that the FlatList component is handling the rendering instead. If this is not sufficient after tuning, you can try making your images lower resolution.
