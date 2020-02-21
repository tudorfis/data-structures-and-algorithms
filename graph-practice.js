
const Graph = require('./graph')

const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')

graph.addEdge('A', 'B')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
graph.addEdge('A', 'C')

graph.traverseInDepthLoop('A')
graph.traverseBreadthFirstLoop('A')