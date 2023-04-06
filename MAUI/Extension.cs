// In C#, an extension is a feature that allows adding new methods to existing classes without modifying their source code. This feature is particularly useful when working with classes that are part of third-party libraries or are sealed, and cannot be modified directly.
// Here's an example of how to use extension methods in C#:

using System;

namespace ExtensionExample
{
    public static class StringExtensions
    {
        public static string Reverse(this string str)
        {
            char[] charArray = str.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string s = "hello world";
            Console.WriteLine(s.Reverse()); // Output: "dlrow olleh"
        }
    }
}

// In this example, we define an extension method called Reverse that takes a string and returns the reversed version of it. The method is defined in a static class called StringExtensions, and it uses the this keyword to indicate that it extends the string class.
// In the Main method, we create a string and call the Reverse method on it, which outputs the reversed version of the string.
// Note that the extension method must be defined in a static class and must be marked as static. Additionally, the first parameter of the extension method must be prefixed with the this keyword and specify the type that the method extends (in this case, string).


