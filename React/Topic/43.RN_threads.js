
// The React Native app contains the following thread:

// React Native UI Thread (Main Thread): This thread is used for the layout of the mobile app.
// React Native JavaScript Thread: It is a thread where our business logic will run. It means JS thread is a place where our JavaScript code is executed.
// React Native Modules Thread: Sometimes, our app needs access to platform API, which happens as a part of native module thread.
// React Native Render Thread: This thread is used to generate actual OpenGL commands used to draw the app UI.

// Shadow Thread: it's a background thread. We can calculate a layout created using React library inside React Native by this thread.
// MAIN/UI Thread: It's the main thread on which our app runs.
// JavaScript Thread: it executes the main Javascript code.