// The singleton pattern is a creational design pattern that ensures that a class has only one instance and provides a global point of access to that instance. This pattern is commonly used when we need to restrict the number of instances of a class for some reason, such as limiting access to a shared resource or ensuring that a configuration object is only created once.

class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance; // Return the existing instance if it exists
        }

        // Initialize the instance
        this._data = {};

        // Save the instance for future use
        Database.instance = this;
    }

    setData(key, value) {
        this._data[key] = value;
    }

    getData(key) {
        return this._data[key];
    }
}

// Usage:
const db1 = new Database();
db1.setData('foo', 'bar');

const db2 = new Database();
console.log(db2.getData('foo')); // Output: "bar"


//   In this example, we define a Database class that has a private _data property and two methods, setData() and getData(). In the constructor, we check if an instance of the class already exists, and if so, we return the existing instance instead of creating a new one. If an instance does not exist, we initialize the _data property and save the instance for future use.

// When we create new instances of the Database class, we always get the same instance, because the constructor ensures that only one instance exists. We can then use the setData() and getData() methods to store and retrieve data in the database.

// A real-world example of the singleton pattern is a logging service that is shared across an application. In this case, we want to ensure that there is only one instance of the logging service, so that all log messages are written to the same file or stream. By using the singleton pattern, we can ensure that all parts of the application use the same logging service instance.

