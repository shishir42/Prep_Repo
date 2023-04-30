// Maximum Population Year
// Input: logs = [[1993,1999],[2000,2010]]
// Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

// Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
// Output: 1960
// Explanation: 
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.

function maximumPopulationYear(years) {
    const population = new Array(101).fill(0); // initialize an array to store the population for each year
  
    for (const [birth, death] of years) { // loop through the input years and increment the corresponding population array indices
      for (let i = birth; i < death; i++) {
        population[i - 1950]++;
      }
    }
  
    let maxPopulation = 0;
    let maxPopulationYear = 0;
  
    for (let i = 0; i < population.length; i++) { // loop through the population array and find the year with maximum population
      if (population[i] > maxPopulation) {
        maxPopulation = population[i];
        maxPopulationYear = i + 1950;
      }
    }
  
    return maxPopulationYear;
  }

  
  const years = [
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
    [1980, 1991],
    [1990, 2001],
    [2000, 2011],
    [2010, 2021]
  ];
  
  const maxPopulationYear = maximumPopulationYear(years);
  
  console.log(maxPopulationYear); // prints 2000
  