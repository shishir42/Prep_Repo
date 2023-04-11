var Subject = function () {
    const observers = [];

    return {
        subscribeObserver: function (observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(index);
            }
        },
        notifyAllObservers: function () {
            for (var i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            };
        }
    }
}

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + (index+1) + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!

// The Publish/Subscribe pattern, however, uses a topic/event channel that sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application-specific events that can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.
// This differs from the Observer pattern since any subscriber implementing an appropriate event handler to register for and receive topic notifications broadcast by the publisher.
// Many developers choose to aggregate the publish/subscribe design pattern with the observer though there is a distinction. Subscribers in the publish/subscribe pattern are notified through some messaging medium, but observers are notified by implementing a handler similar to the subject.