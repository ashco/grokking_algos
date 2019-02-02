//? 8.1 - You work for a furniture company, and you have to ship furniture all over the country. You need to pack your truck with boxes. All the boxes are of different sizes, and you’re trying to maximize the space you use in each truck. How would you pick boxes to maximize space? Come up with a greedy strategy. Will that give you the optimal solution?

//! Put in the biggest box that you can and repeat. When you can no longer fit in the biggest box, put in the next biggest box that will fit and repeat until no more boxes will fit.

//? 8.2 - You’re going to Europe, and you have seven days to see everything you can. You assign a point value to each item (how much you want to see it) and estimate how long it takes. How can you maximize the point total (seeing all the things you really want to see) during your stay? Come up with a greedy strategy. Will that give you the optimal solution?

//! make a list of all activites, then assign a value to each one that is point val/time to see. Sort list and start doing highest value items first.

// A greedy algorithm is simple: at each step, pick the optimal move. In this case, each time you pick         a class, you pick the class that ends the soonest. In technical terms: at each step you pick the locally optimal solution, and in the end you’re left with the globally optimal solution.

let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

let stations = {};
stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

function findStations(statesNeeded, stations) {
  let finalStations = new Set();

  while (statesNeeded) {
    let bestStation = null;
    let statesCovered = new Set();
    for (station in stations) {
      let covered = statesNeeded && stations[station];
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    // console.log(statesNeeded);
    // statesNeeded.delete(statesCovered);
    statesCovered.forEach(state => {
      statesNeeded.delete(state);
    });
    // console.log(statesNeeded);
    finalStations.add(bestStation);
    delete stations[bestStation];
  }
  return finalStations;
}

console.log(findStations(statesNeeded, stations));
