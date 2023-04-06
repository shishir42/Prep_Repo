// Sure! Here's an example that demonstrates how to use the OnPropertyChanged event with subscription and unsubscription:

using System;
using System.ComponentModel;

class Person : INotifyPropertyChanged
{
    private string name;

    public event PropertyChangedEventHandler PropertyChanged;

    public string Name
    {
        get { return name; }
        set
        {
            if (name != value)
            {
                name = value;
                OnPropertyChanged("Name");
            }
        }
    }

    protected void OnPropertyChanged(string propertyName)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}

class Program
{
    static void Main(string[] args)
    {
        Person person = new Person();
        person.PropertyChanged += Person_PropertyChanged;

        person.Name = "John";

        person.PropertyChanged -= Person_PropertyChanged;

        person.Name = "Jane";
    }

    static void Person_PropertyChanged(object sender, PropertyChangedEventArgs e)
    {
        Console.WriteLine("{0} changed", e.PropertyName);
    }
}

// In this example, we have a Person class that implements the INotifyPropertyChanged interface and raises the PropertyChanged event when the Name property changes. The Main method subscribes to the PropertyChanged event, sets the Name property to "John", and then unsubscribes from the event before setting the Name property to "Jane".
// The Person_PropertyChanged method is the event handler that is invoked when the PropertyChanged event is raised. In this example, it simply writes a message to the console indicating which property has changed.
// When you run this example, you should see the following output:
// Name changed

// This output indicates that the PropertyChanged event was raised when the Name property was changed to "John", but was not raised when the Name property was changed to "Jane" because the event subscription was removed.


// Sure! Here's an example that demonstrates how to create a custom OnPropertyChanged event in C# using events and delegates:

using System;

public class Person
{
    private string name;

    public event PropertyChangedEventHandler PropertyChanged;

    public string Name
    {
        get { return name; }
        set
        {
            if (name != value)
            {
                name = value;
                OnPropertyChanged(nameof(Name));
            }
        }
    }

    protected virtual void OnPropertyChanged(string propertyName)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}

public delegate void PropertyChangedEventHandler(object sender, PropertyChangedEventArgs e);

public class PropertyChangedEventArgs : EventArgs
{
    public string PropertyName { get; private set; }

    public PropertyChangedEventArgs(string propertyName)
    {
        PropertyName = propertyName;
    }
}

public class Program
{
    static void Main(string[] args)
    {
        Person person = new Person();

        // Subscribe to the PropertyChanged event
        person.PropertyChanged += Person_PropertyChanged;

        // Change the Name property (which should raise the event)
        person.Name = "John";

        // Unsubscribe from the PropertyChanged event
        person.PropertyChanged -= Person_PropertyChanged;

        // Change the Name property again (which should not raise the event)
        person.Name = "Jane";
    }

    static void Person_PropertyChanged(object sender, PropertyChangedEventArgs e)
    {
        Console.WriteLine("{0} changed", e.PropertyName);
    }
}

// In this example, we have a Person class that has a Name property and a custom OnPropertyChanged event that is raised when the Name property changes. The PropertyChangedEventArgs class defines the PropertyName property that stores the name of the property that has changed.
// In the Main method, we create an instance of the Person class, subscribe to the PropertyChanged event, set the Name property to "John" (which should raise the event), unsubscribe from the PropertyChanged event, and set the Name property to "Jane" again (which should not raise the event).
// The Person_PropertyChanged method is the event handler that is invoked when the PropertyChanged event is raised. In this example, it simply writes a message to the console indicating which property has changed.
// When you run this example, you should see the following output:
// Name changed

