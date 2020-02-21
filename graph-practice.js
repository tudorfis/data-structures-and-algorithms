
const Graph = require('./graph')

const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'A')
graph.addEdge('D', 'A')

console.log(graph.hasCycle());