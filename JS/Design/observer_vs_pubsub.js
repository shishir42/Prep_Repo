// Observer design pattern and publish/subscribe pattern are two different design patterns used in software engineering.

// Observer design pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. This pattern involves two types of objects: the observer and the subject. The observer subscribes to the subject and gets notified whenever the subject changes its state. This pattern is commonly used in user interface programming, where the user interface components need to be updated whenever the underlying data changes.

// On the other hand, publish/subscribe pattern is a messaging pattern that decouples the senders and receivers of messages. In this pattern, publishers produce messages and send them to a message broker, which is responsible for distributing the messages to one or more subscribers who have expressed interest in receiving those messages. This pattern is commonly used in distributed systems, where different components of the system need to communicate with each other without knowing the details of the other components.

// Both patterns have their own strengths and weaknesses, and the choice of which pattern to use depends on the specific requirements of the system being designed. The observer pattern is best suited for situations where a one-to-many dependency exists between objects, and the subscribers need to be notified whenever the subject changes its state. The publish/subscribe pattern is best suited for situations where there is a need for asynchronous communication between components of a distributed system.

// Observer Design Pattern Example in JavaScript
// Let's consider an example of a stock market application where users want to receive real-time updates on stock prices. The observer pattern can be used to implement this functionality. In this example, we have a Stock object that maintains the stock price and a set of observers that need to be notified whenever the stock price changes.

// Define the subject (stock)
class Stock {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
        this.observers = [];
    }

    // Add an observer to the list of observers
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer from the list of observers
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    // Notify all the observers when the stock price changes
    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }

    // Update the stock price and notify the observers
    setPrice(price) {
        this.price = price;
        this.notifyObservers();
    }
}

// Define the observer (user)
class User {
    constructor(name) {
        this.name = name;
    }

    // Update the user when the stock price changes
    update(stock) {
        console.log(`User ${this.name} received an update for stock ${stock.symbol}: ${stock.price}`);
    }
}

// Create a new stock and some users
const stock = new Stock('AAPL', 150.0);
const user1 = new User('John');
const user2 = new User('Jane');

// Add the users as observers to the stock
stock.addObserver(user1);
stock.addObserver(user2);

// Update the stock price
stock.setPrice(160.0);

//   In this example, we define the Stock object which maintains the stock price and a list of observers. We also define the User object which is an observer that gets notified whenever the stock price changes. We create a new Stock object and some User objects, add the users as observers to the stock, and then update the stock price. When the stock price changes, the observers are notified and their update method is called, which logs a message to the console.


// Publish/Subscribe Pattern Example in JavaScript
// Let's consider an example of a chat application where users can send messages to each other. The publish/subscribe pattern can be used to implement this functionality. In this example, we have a MessageBroker object that acts as a central message hub. Users can publish messages to the message broker, and the message broker will distribute the messages to all subscribers who are interested in receiving those messages.


// Define the message broker
class MessageBroker {
    constructor() {
        this.subscribers = {};
    }

    // Subscribe to a topic
    subscribe(topic, subscriber) {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = [];
        }
        this.subscribers[topic].push(subscriber);
    }

    // Unsubscribe from a topic
    unsubscribe(topic, subscriber) {
        if (!this.subscribers[topic]) {
            return;
        }
        this.subscribers[topic] = this.subscribers[topic].filter(s => s !== subscriber);
    }

    // Publish a message to a topic
    publish(topic, message) {
        if (!this.subscribers[topic]) {
            return;
        }
        this.subscribers[topic].forEach(subscriber => {
            subscriber.receiveMessage(topic, message);
        });
    }
}

// Define the user
class User_PubSub {
    constructor(name, messageBroker) {
        this.name = name;
        this.messageBroker = messageBroker;
        this.messageBroker.subscribe('chat', this);
    }

    // Receive a message from the message broker
    receiveMessage(topic, message) {
        console.log(`User ${this.name} received a message on topic ${topic}: ${message}`);
    }

    // Send a message to the chat
    sendMessage(message) {
        this.messageBroker.publish('chat', message);
    }

    // Unsubscribe from the chat
    unsubscribe() {
        this.messageBroker.unsubscribe('chat', this);
    }
}

// Create a new message broker and some users
const messageBroker = new MessageBroker();
const user_1 = new User_PubSub('John', messageBroker);
const user_2 = new User_PubSub('Jane', messageBroker);
const user_3 = new User_PubSub('Bob', messageBroker);

// Send some messages to the chat
user_1.sendMessage('Hello, everyone!');
user_2.sendMessage('Hey, John!');
user_3.sendMessage('What are you guys up to?');

// Unsubscribe some users from the chat
user_1.unsubscribe();
user_3.unsubscribe();

// Send some more messages to the chat
user_2.sendMessage('Anyone want to grab lunch?');
user_3.sendMessage('Sorry, I have a meeting. Maybe tomorrow?');

//   In this example, we define the MessageBroker object which acts as a central message hub. We also define the User object which is a subscriber that can receive messages from the message broker and publish messages to the message broker. We create a new MessageBroker object and some User objects, subscribe the users to the 'chat' topic, and then send some messages to the chat. When a message is sent to the chat, the message broker distributes the message to all subscribers who are interested in receiving messages on the 'chat' topic. We also demonstrate how users can unsubscribe from the chat topic and no longer receive messages.