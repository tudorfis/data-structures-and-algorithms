
const Graph = require('./graph')
const WeightedGraph = require('./weightedGraph')

// const graph = new Graph()

// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')

// graph.addEdge('A', 'B')
// graph.addEdge('B', 'C')
// graph.addEdge('C', 'A')
// graph.addEdge('D', 'A')

// console.log(graph.hasCycle());

const wg = new WeightedGraph()

// wg.addNode('A')
// wg.addNode('B')
// wg.addNode('C')
// wg.addNode('D')
// wg.addNode('E')

// wg.addEdge('A', 'B', 3)
// wg.addEdge('A', 'D', 2)
// wg.addEdge('A', 'C', 4)
// wg.addEdge('D', 'C', 1)
// wg.addEdge('B', 'D', 6)
// wg.addEdge('B', 'E', 1)
// wg.addEdge('D', 'E', 5)

// wg.print()

// console.log('A -> B', wg.getShortestPath('A', 'B'))
// console.log('A -> C', wg.getShortestPath('A', 'C'))
// console.log('A -> D', wg.getShortestPath('A', 'D'))

// const path = wg.getShortestPath('A', 'E')
// path.print()

// wg.addNode('A')
// wg.addNode('B')
// wg.addNode('C')

// wg.addEdge('A', 'B', 0)
// wg.addEdge('B', 'A', 0)
// wg.addEdge('C', 'A', 0)

// console.log(wg.hasCycle())

wg.addNode('A')
wg.addNode('B')
wg.addNode('C')
wg.addNode('D')

wg.addEdge('A', 'B', 3)
wg.addEdge('B', 'D', 4)
wg.addEdge('C', 'D', 5)
wg.addEdge('A', 'C', 1)
wg.addEdge('B', 'C', 2)

wg.print()
console.log('---------------')

const tree = wg.getMinSpanningTree()
tree.print()
