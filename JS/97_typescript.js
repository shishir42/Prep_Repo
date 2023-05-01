// How do you use javascript libraries in typescript file
// It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in our TypeScript files without getting compilation errors, the only solution is declare keyword along with a variable declaration. For example, let's imagine you have a library called customLibrary that doesn’t have a TypeScript declaration and have a namespace called customLibrary in the global namespace. You can use this library in typescript code as below,
// declare var customLibrary;

// In the runtime, typescript will provide the type to the customLibrary variable as any type. The another alternative without using declare keyword is below


var customLibrary: any;