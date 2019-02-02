// way to map out path from node to node.
const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

// console.log(Object.keys(graph['start']));
// console.log(graph['start']['a']);
// console.log(graph);

// way to keep track of cost (time, distance, value, etc) to get to node.
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// way to keep track of best path;
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

// need a way to keep track of all nodes you process
const processed = [];

// 1. While we have nodes to process..
// 2. Grab the node that is closest to the start
// 3. Update Costs for it's neighbors
// 4. If any of the neighbors costs were updated, update the parent's too
// 5. Mark this node processed. Repeat.

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (node in costs) {
    // go through each node
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      // if it's the lowest cost so far and hasn't been processed yet..
      lowestCost = cost; // set as lowest cost node
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

function dijkstrasAlgo(graph, costs, parents) {
  // find the lowest cost node that you haven't processed yet
  let node = findLowestCostNode(costs);
  // if you've processed all the nodes, this while loop is done
  while (node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];
    // go through all neighbors of this node
    for (n in Object.keys(neighbors)) {
      let newCost = cost + neighbors[n];
      // if its cheaper to get to this neighbor by going through this node..
      if (costs[n] > newCost) {
        // update the cost for this node
        costs[n] = newCost;
        // this node becomes the new parent for this neighbor
        parents[n] = node;
      }
    }
    // mark this node as processed
    processed.push(node);
    // find the next node to process and loop
    node = findLowestCostNode(costs);
  }
}

dijkstrasAlgo(graph, costs, parents);
