// In C#, Func, Action, Delegate, Predicate, and Event are all types that are used to define and work with methods and events. Here's a brief explanation of each type with an example:
// 	1	Func: Func is a generic delegate that takes one or more arguments and returns a value. It can be used to define a method that takes input parameters and returns a result. For example:


// 	Func<int, int, int> sum = (x, y) => x + y;
// 	int result = sum(1, 2); // result = 3

// In this example, we define a Func delegate that takes two integer parameters and returns their sum. We then create an instance of the delegate and call it with two integer arguments.
// 	2	Action: Action is a generic delegate that takes one or more arguments and does not return a value. It can be used to define a method that takes input parameters and performs some action. For example:

// 	Action<string> print = (message) => Console.WriteLine(message);
// 	print("Hello, World!");


// In this example, we define an Action delegate that takes a string parameter and prints it to the console. We then create an instance of the delegate and call it with a string argument.
// 	3	Delegate: Delegate is a base class for all delegates in C#. It can be used to define a method that can be called asynchronously or to encapsulate a method with a different signature. For example:

// 	delegate void MyDelegate(string message);
// 	MyDelegate myDelegate = (message) => Console.WriteLine(message);
// 	myDelegate("Hello, World!");

// In this example, we define a custom delegate type MyDelegate that takes a string parameter and does not return a value. We then create an instance of the delegate and call it with a string argument.
// 	4	Predicate: Predicate is a generic delegate that takes one argument and returns a Boolean value. It can be used to define a method that takes an input parameter and tests it against some condition. For example:

// 	Predicate<int> isPositive = (x) => x > 0;
// 	bool result = isPositive(5); // result = true

	
// 	In this example, we define a Predicate delegate that takes an integer parameter and returns true if the integer is greater than 0. We then create an instance of the delegate and call it with an integer argument.
// 	5	Event: Event is a keyword in C# that is used to define an event. An event is a mechanism that allows a class to notify other classes or objects when something happens, such as a button click or a data update. For example:

class MyClass
{
    public event EventHandler SomethingHappened;

    public void DoSomething()
    {
        // Do something that might trigger the event
        OnSomethingHappened();
    }

    protected virtual void OnSomethingHappened()
    {
        SomethingHappened?.Invoke(this, EventArgs.Empty);
    }
}

class Program
{
    static void Main(string[] args)
    {
        MyClass myObj = new MyClass();
        myObj.SomethingHappened += (sender, e) => Console.WriteLine("Something happened!");
        myObj.DoSomething();
    }
}
// In this example, we define a MyClass class that has an event named SomethingHappened. The class also has a method named DoSomething that performs some action and then raises the SomethingHappened event. We then create an instance of the MyClass class and subscribe to

// Sure! Here's a brief explanation of the purpose and usage of each type:
// 	1	Func: Func is used when you need to define a method that takes input parameters and returns a result. It's often used with LINQ methods that take a lambda expression as a parameter, such as Select, Where, and Aggregate.
// 	2	Action: Action is used when you need to define a method that takes input parameters and performs some action, such as printing to the console, updating a user interface, or logging data.
// 	3	Delegate: Delegate is used when you need to encapsulate a method with a different signature, or when you need to define a method that can be called asynchronously. Custom delegate types can be defined using the delegate keyword, or you can use the built-in Action and Func delegates.
// 	4	Predicate: Predicate is used when you need to define a method that takes an input parameter and tests it against some condition. It's often used with LINQ methods that filter collections based on a certain criterion.
// 	5	Event: Event is used when you need to define a mechanism for one class to notify other classes or objects when something happens. Events are often used in user interface programming, where a button click or a data update needs to trigger some action in another part of the program.
