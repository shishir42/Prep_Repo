// IObserver and ICommand are both interfaces in C# that are commonly used in event-driven programming.

// IObserver is part of the Observer pattern, and is used to define objects that can be notified of changes to the state of another object (called the Subject).
// ICommand is used to define objects that represent an action or command that can be executed. They are typically used to decouple the sender of the command from the receiver that executes the command.

// Here are some examples of how to use these interfaces in C#:

// IObserver Example
// Suppose we have a TemperatureSensor class that measures the temperature in a room and notifies any observers when the temperature changes. Here's how we could define the TemperatureSensor class using IObservable and IObserver interfaces:

class TemperatureSensor : IObservable<double>
{
    private List<IObserver<double>> observers;
    private double temperature;

    public TemperatureSensor()
    {
        observers = new List<IObserver<double>>();
        temperature = 0.0;
    }

    public IDisposable Subscribe(IObserver<double> observer)
    {
        if (!observers.Contains(observer))
            observers.Add(observer);
        return new Unsubscriber(observers, observer);
    }

    public double Temperature
    {
        get { return temperature; }
        set
        {
            if (value != temperature)
            {
                temperature = value;
                foreach (var observer in observers)
                    observer.OnNext(temperature);
            }
        }
    }

    private class Unsubscriber : IDisposable
    {
        private List<IObserver<double>> _observers;
        private IObserver<double> _observer;

        public Unsubscriber(List<IObserver<double>> observers, IObserver<double> observer)
        {
            _observers = observers;
            _observer = observer;
        }

        public void Dispose()
        {
            if (_observer != null && _observers.Contains(_observer))
                _observers.Remove(_observer);
        }
    }
}

// In this code, we define a TemperatureSensor class that implements the IObservable<double> interface. This interface requires us to implement a Subscribe method that allows observers to subscribe to our temperature sensor.
// When the temperature changes, we notify all the observers by calling their OnNext method with the new temperature value.
// Here's how we could define an Observer class that implements the IObserver<double> interface:

class TemperatureDisplay : IObserver<double>
{
    private IDisposable unsubscriber;

    public void Subscribe(IObservable<double> observable)
    {
        unsubscriber = observable.Subscribe(this);
    }

    public void Unsubscribe()
    {
        unsubscriber.Dispose();
    }

    public void OnCompleted()
    {
        Console.WriteLine("Temperature sensor has completed transmitting data");
    }

    public void OnError(Exception error)
    {
        Console.WriteLine("Temperature sensor has encountered an error: {0}", error.Message);
    }

    public void OnNext(double value)
    {
        Console.WriteLine("Temperature: {0}", value);
    }
}

// In this code, we define a TemperatureDisplay class that implements the IObserver<double> interface. This interface requires us to implement a OnCompleted, OnError, and OnNext method.
// When we want to observe the TemperatureSensor, we create a new instance of TemperatureDisplay, and call its Subscribe method, passing in the TemperatureSensor instance we want to observe.

// var sensor = new TemperatureSensor();
// var display1 = new TemperatureDisplay();
// var display2 = new TemperatureDisplay();

// display1.Subscribe(sensor);
// display2


// Here's an example of how to use the ICommand interface in C#. Suppose we have a Calculator class that performs basic arithmetic operations. We want to create a simple calculator application that has buttons for each operation (addition, subtraction, multiplication, and division).
// Here's how we could define a Calculator class that implements the ICommand interface for each operation:

class Calculator
{
    private double result = 0.0;

    public double Result
    {
        get { return result; }
    }

    public ICommand AddCommand
    {
        get { return new SimpleCommand(Add); }
    }

    public ICommand SubtractCommand
    {
        get { return new SimpleCommand(Subtract); }
    }

    public ICommand MultiplyCommand
    {
        get { return new SimpleCommand(Multiply); }
    }

    public ICommand DivideCommand
    {
        get { return new SimpleCommand(Divide); }
    }

    private void Add()
    {
        double value = GetInputValue();
        result += value;
    }

    private void Subtract()
    {
        double value = GetInputValue();
        result -= value;
    }

    private void Multiply()
    {
        double value = GetInputValue();
        result *= value;
    }

    private void Divide()
    {
        double value = GetInputValue();
        result /= value;
    }

    private double GetInputValue()
    {
        // Get input value from the user interface
        return 0.0;
    }
}

// In this code, we define a Calculator class that has a Result property and four ICommand properties (AddCommand, SubtractCommand, MultiplyCommand, and DivideCommand). Each ICommand property returns a new instance of a SimpleCommand class that takes a delegate method as a parameter.
// Here's how we could define the SimpleCommand class:

class SimpleCommand : ICommand
{
    private Action executeMethod;

    public SimpleCommand(Action executeMethod)
    {
        this.executeMethod = executeMethod;
    }

    public bool CanExecute(object parameter)
    {
        return true;
    }

    public void Execute(object parameter)
    {
        executeMethod();
    }

    public event EventHandler CanExecuteChanged;
}

// In this code, we define a SimpleCommand class that implements the ICommand interface. The SimpleCommand class takes an Action delegate as a parameter in its constructor, which is the method that will be executed when the command is executed.
// The CanExecute method always returns true, indicating that the command can be executed at any time. The Execute method simply calls the delegate passed to the constructor.
// Finally, we create the user interface with four buttons, each bound to one of the ICommand properties on the Calculator class. When the user clicks one of the buttons, the corresponding command is executed.
// var calculator = new Calculator();

// var addButton = new Button();
// addButton.Content = "Add";
// addButton.Command = calculator.AddCommand;

// var subtractButton = new Button();
// subtractButton.Content = "Subtract";
// subtractButton.Command = calculator.SubtractCommand;

// var multiplyButton = new Button();
// multiplyButton.Content = "Multiply";
// multiplyButton.Command = calculator.MultiplyCommand;

// var divideButton = new Button();
// divideButton.Content = "Divide";
// divideButton.Command = calculator.DivideCommand;

// // Add buttons to the user interface...
// In this code, we create four Button controls and set their Command property to one of the ICommand properties on the Calculator class. When the user clicks one of the

