// Dependency Injection (DI) is a design pattern in software development that allows for decoupling the components of an application by creating a separate object, the injector, that is responsible for supplying dependent objects with the necessary dependencies.

// In C#, dependency injection can be implemented in various ways, including constructor injection, property injection, and method injection. Here is an example of constructor injection:
// Suppose we have an interface ILogger that defines a method for logging messages. We also have a class MyClass that depends on an instance of ILogger to log messages:

// https://www.tutorialsteacher.com/core/dependency-injection-in-aspnet-core
// https://climbtheladder.com/dependency-injection-interview-questions/
// https://www.chubbydeveloper.com/dependency-injection-c-interview-questions/
// https://www.fullstack.cafe/blog/dependency-injection-interview-questions


// Inversion of Control (IoC) is a design principle that aims to decouple components in a software system. One way to achieve this is through the use of an IoC container, which is a framework that manages the creation and lifecycle of objects and their dependencies.

// In C#, an IoC container is typically implemented using a third-party library, such as Autofac, Ninject, or Unity. The container typically works by registering types and their dependencies with the container. When a component needs an instance of a type, it requests it from the container, which then provides an instance along with all its dependencies.

// The IoC container essentially acts as a factory for creating objects, but with the added benefit of being able to manage the dependencies between objects. This allows for greater flexibility and reusability in the software system, as well as easier maintenance and testing.

// Overall, an IoC container in C# helps to improve the modularization and maintainability of software systems by providing a centralized mechanism for managing object creation and dependencies.

// Inversion of Control (IoC) and Dependency Injection (DI) are closely related concepts in software development, but they are not exactly the same thing.

// IoC refers to the principle of designing software components in a way that allows for loose coupling between them. In an IoC architecture, the control of object creation and management is inverted from the components themselves to a centralized container or framework. The IoC container manages the creation and lifetime of objects, as well as their dependencies, and provides them to the components when needed.

// Dependency Injection, on the other hand, is a specific technique used to achieve IoC. DI is a pattern where dependencies of a component are "injected" into it, rather than the component creating or managing its own dependencies. The dependencies can be injected through various means, such as constructor injection, property injection, or method injection.

// In essence, Dependency Injection is one way of implementing Inversion of Control. It allows components to be loosely coupled and flexible, as they rely on dependencies being provided to them rather than having to create and manage them themselves.

// So, while IoC is a broader design principle, Dependency Injection is a specific technique that can be used to implement IoC in a software system.

public interface ILogger
{
    void Log(string message);
}

public class MyClass
{
    private ILogger _logger;
    
    public MyClass(ILogger logger)
    {
        _logger = logger;
    }
    
    public void DoSomething()
    {
        _logger.Log("Something happened.");
    }
}

// To inject the dependency, we can create a class that implements the ILogger interface and pass it to the constructor of MyClass. Here is an example:

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

public class Program
{
    static void Main(string[] args)
    {
        var logger = new ConsoleLogger();
        var myClass = new MyClass(logger);
        myClass.DoSomething();
    }
}


