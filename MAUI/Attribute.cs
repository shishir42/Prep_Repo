// In C#, an attribute is a declarative tag that is used to add metadata to a code element such as a class, method, property, or parameter. Attributes can be used for a variety of purposes such as adding information to the code that can be used at runtime, providing information to the compiler, or adding behavior to the code.
// Here is an example of how to use an attribute in C#:
[Serializable]
public class MyClass
{
    [Obsolete("Use NewMethod instead")]
    public void OldMethod()
    {
        // Code for old method
    }

    public void NewMethod()
    {
        // Code for new method
    }
}


// In this example, we have used two attributes:
// 	1	Serializable attribute: This attribute is used to mark the MyClass class as serializable, which means that its object can be converted to a binary format that can be saved to a file or sent over a network.
// 	2	Obsolete attribute: This attribute is used to mark the OldMethod method as obsolete, which means that it should not be used anymore. The attribute also specifies a message that should be displayed when the method is used, informing the user to use the NewMethod method instead.
// Attributes can also be used to customize the behavior of other code elements. For example, the Conditional attribute can be used to specify that a method should only be called when a specific compilation symbol is defined:

public class MyClass
{
    [Conditional("DEBUG")]
    public void DebugMethod()
    {
        // Code for debug method
    }
}


// In this example, the DebugMethod method is marked with the Conditional attribute, which specifies that the method should only be called when the DEBUG symbol is defined. This allows the method to be included in the compiled code only when debugging is enabled, reducing the size of the final executable.
// Attributes are a powerful feature of C# that can be used for a wide range of purposes. They are often used to add metadata to code elements, control compiler behavior, and add behavior to code elements at runtime.
