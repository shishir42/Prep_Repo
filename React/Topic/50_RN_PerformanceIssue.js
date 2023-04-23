// What are the main performance issues in React Native and what causes them?

// High CPU usage: Offloading complex functions to the JavaScript thread can cause performance issues
// Memory leak: Information can be lost in the Bridge during the transfer from the Primary to the React Native domains, especially in Android apps
// Slow navigation: Multiple thread bridging can also cause slower navigation times

// There are several performance issues that can arise in React Native applications, and some of the main causes include:

// 1. Rendering performance: React Native relies heavily on rendering, and inefficient rendering can cause performance issues. This can happen when there are unnecessary re-renders, large numbers of components, or complex component hierarchies.

// 2. State management: State management is another area that can cause performance issues in React Native applications. When state is poorly managed, it can lead to unnecessary re-renders or trigger other expensive operations.

// 3. Memory usage: Memory usage is a critical issue for mobile applications, and React Native is no exception. Applications that consume too much memory can cause the device to slow down or even crash.

// 4. Network requests: Network requests can be slow and can cause performance issues in React Native applications, especially when they are made frequently or on a slow network connection.

// 5. JavaScript execution: JavaScript execution can also cause performance issues, especially when complex calculations are performed or when expensive operations are triggered.

// To address these issues, there are several best practices that React Native developers can follow, such as:

// 1. Minimizing re-renders: By using techniques such as shouldComponentUpdate or React.memo, developers can reduce the number of re-renders and improve rendering performance.

// 2. Optimizing state management: By using techniques such as state normalization or state selectors, developers can better manage state and reduce unnecessary re-renders.

// 3. Reducing memory usage: By using tools such as the Chrome DevTools or the React Native Performance Monitor, developers can identify memory leaks and optimize memory usage.

// 4. Optimizing network requests: By using techniques such as caching or batched requests, developers can reduce the number of network requests and improve network performance.

// 5. Optimizing JavaScript execution: By using techniques such as code splitting or lazy loading, developers can optimize JavaScript execution and reduce the load on the device.


// How can app performance be optimized in React Native?

// Remove all console statements
// Resize and scale down images
// Cache images internally
// Compress or convert raw JSON data
// Use code splitting for large lists
// Schedule animations
// Remove unnecessary libraries and features

// How can you optimize the performance of images in React Native?
// There are several useful tricks for optimizing the performance of images in React Native. These include:

// - Using image caching tools
// - Using PNG or WEBP formats rather than JPEG
// - Using smaller images
// - Reducing the number of renders

// several techniques for optimizing the performance of FlatList items. For example, we can:

// Avoid using 1080P HD images
// Optimize the maxToRenderPerBatch prop
// Use the getItemLayout prop
// Use the keyExtractor prop
// Use fewer views
// Optimize the windowSize prop

// ScrollView loads all data items on one screen for scrolling purposes. All the data is stored on RAM, which can cause performance issues for large amounts of data. 

// FlatList only displays items that are currently shown on the screen (10 by default), thus sidestepping any performance issues.

// Therefore, it is best to use FlatList for large datasets, whereas ScrollView can be used for smaller datasets.
