function findItinerary(tickets) {
    const flights = new Map();
    for (const [src, dest] of tickets) {
      if (!flights.has(src)) {
        flights.set(src, []);
      }
      flights.get(src).push(dest);
    }
  
    // Find the starting airport
    let start = "";
    for (const [src, dest] of tickets) {
      if (!flights.has(dest)) {
        start = dest;
        break;
      }
    }
  
    // Create the itinerary
    const itinerary = [start];
    while (itinerary.length < tickets.length + 1) {
      const lastAirport = itinerary[itinerary.length - 1];
      const destinations = flights.get(lastAirport);
      const nextAirport = destinations.shift();
      itinerary.push(nextAirport);
    }
  
    return itinerary;
  }
  
  const tickets = [["JFK", "KUL"], ["BKK", "JFK"], ["KUL", "BKK"]];
  const itinerary = findItinerary(tickets);
  console.log(itinerary); // Output: ["JFK", "KUL", "BKK", "JFK"]
  