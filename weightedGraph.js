
const PriorityQueue = require('./priorityQueue')

const _nodes = new WeakMap()
const _edges = new WeakMap()
const _paths = new WeakMap()

class WeightedGraph {
    static Node = class {
        static Edge = class {
            constructor(from, to, weight) {
                this.from = from
                this.to = to
                this.weight = weight
            }
        }

        constructor(value) {
            this.value = value
            _edges.set(this, [])
        }
        addEdge(from, to, weight) {
            const edges = _edges.get(this)
            edges.push(new WeightedGraph.Node.Edge(from, to, weight))
        }
        getEdges() {
            return _edges.get(this)
        }
    }
    static Path = class {
        constructor() {
            _paths.set(this, [])
        }
        add(node) {
            const paths = _paths.get(this)
            paths.push(node)
            _paths.set(this, paths)
        }
        print() {
            const paths = _paths.get(this)
            for (const node of paths)
                console.log(node.value)
        }
    }
    constructor() {
        _nodes.set(this, {})
    }
    get nodes() {
        return _nodes.get(this)
    }
    addNode(label) {
        const nodes = _nodes.get(this)

        nodes[label] = new WeightedGraph.Node(label)
        _nodes.set(this, nodes)
    }

    addEdge(from, to, weight) {
        const nodes = _nodes.get(this)
        
        if (!nodes[from]) this.addNode(from)
        if (!nodes[to]) this.addNode(to)

        nodes[from].addEdge(from, to, weight)
        nodes[to].addEdge(to, from, weight)
    }
    getShortestPath(from, to) {
        const nodes = _nodes.get(this)
        const distances = {}

        for (const key in nodes)
            distances[key] = Number.MAX_VALUE

        distances[from] = 0

        let previousNodes = []
        const visited = new Set()
        const queue = new PriorityQueue(nodes.length)

        queue.add(nodes[from])

        while (!queue.isEmpty()) {
            const current = queue.remove()
            visited.add(current)

            for (const edge of current.getEdges()) {
                if (visited.has(edge.to)) continue

                const newDistance = distances[current.value] + edge.weight

                if (newDistance < distances[edge.to]) {
                    distances[edge.to] = newDistance
                    
                    if (!previousNodes.includes(current))
                        previousNodes.push(current)
                    
                    queue.add(nodes[edge.to])
                }
            }
        }

        previousNodes.push(nodes[to])
        previousNodes = previousNodes.reverse()

        const path = new WeightedGraph.Path()
        while (previousNodes.length) 
            path.add(previousNodes.pop())

        return path
    }
    hasCycle() {
        const nodes = _nodes.get(this)
        const visited = new Set()
        let hasCycle = false

        const _hasCycle = (node, parent) => {
            if (hasCycle) return

            visited.add(node.value)
            for (const edge of node.getEdges()) {
                if (parent && edge.to === parent.value) continue

                if (visited.has(edge.to)) hasCycle = true

                _hasCycle(nodes[edge.to], node)
            }
        }

        for (const key in nodes) 
            if (!visited.has(key)) 
                _hasCycle(nodes[key], null)

        return hasCycle
    }
    getMinSpanningTree() {
        const nodes = _nodes.get(this)
        if (!Object.keys(nodes).length) return

        const tree = new WeightedGraph()
        const edgesQueue = new PriorityQueue(nodes.length)
        let startNode = nodes[Object.keys(nodes)[0]]
        
        for (const edge of startNode.getEdges())
            edgesQueue.add(edge)
        
        if (edgesQueue.isEmpty()) 
            return tree

        tree.addNode(startNode.value)

        while (Object.keys(tree.nodes).length < Object.keys(nodes).length) {
            const minEdge = edgesQueue.remove()

            if (tree.nodes[minEdge.to]) continue

            tree.addNode(minEdge.to)
            tree.addEdge(minEdge.from, minEdge.to, minEdge.weight)

            for (const edge of nodes[minEdge.to].getEdges())
                if (!tree.nodes[edge.to])
                    edgesQueue.add(edge)
        }

        return tree
    }
    print() {
        const nodes = _nodes.get(this)
        for (const key in nodes) {
            const edges = nodes[key].getEdges()

            if (edges.length) {
            
                let adjacents = []
                for (const edge of edges)
                    adjacents.push(`${edge.to}(${edge.weight})`)
                
                console.log(`${nodes[key].value} is connected with [ ${adjacents} ]`)
            }
        }
    }
}

module.exports = WeightedGraph
