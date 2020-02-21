
const PriorityQueue = require('./priorityQueue')

class Node {
    constructor(label) {
        this.label = label
    }
}

const _nodes = new WeakMap()
const _adjacencyList = new WeakMap()

class Graph {
    constructor() {
        _nodes.set(this, {})
        _adjacencyList.set(this, {})
    }
    addNode(label) {
        if (!label) return

        const nodes = _nodes.get(this)
        const adjacencyList = _adjacencyList.get(this)
        
        const node = new Node(label)

        if (!_nodes[label]) {
            nodes[label] = node
            _nodes.set(this, nodes)
        }

        if (!adjacencyList[label]) {
            adjacencyList[label] = []
            _nodes.set(this, nodes)
        }
    }
    addEdge(from, to) {
        if (!from || !to) return

        const nodes = _nodes.get(this)
        const adjacencyList = _adjacencyList.get(this)
        
        if (!nodes[from] || !nodes[to]) throw new Error('IllegalArgumentException')

        adjacencyList[from].push(to)
        _adjacencyList.set(this, adjacencyList)
    }

    removeNode(label) {
        if (!label) return

        const nodes = _nodes.get(this)
        const adjacencyList = _adjacencyList.get(this)
        
        delete adjacencyList[label]
        delete nodes[label]
        
        for (const source in adjacencyList) 
            this._removeItem(adjacencyList[source], label)

        _adjacencyList.set(this, adjacencyList)
        _nodes.set(this, nodes)

    }
    removeEdge(from, to) {
        if (!from || !to) return

        const nodes = _nodes.get(this)
        const adjacencyList = _adjacencyList.get(this)

        if (!nodes[from] || !nodes[to]) return

        this._removeItem(adjacencyList[from], to)
        _adjacencyList.set(this, adjacencyList)
    }
    traverseInDepth(label) {
        const adjacencyList = _adjacencyList.get(this)
        const visitedNodes = new Set()
        
        if (!label) {
            let maxSource = Object.keys(adjacencyList)[0]
        
            for (const source in adjacencyList) {
                const _l = (l) => adjacencyList[l].length
                maxSource = (_l(maxSource) < _l(source)) ? source : maxSource
            }

            
            label = maxSource
        }

        if (!_nodes.get(this)[label]) return
        
        const _traverseInDepth = (source) => {
            visitedNodes.add(source)

            for (const adjacent of adjacencyList[source])
                if (!visitedNodes.has(adjacent))
                    _traverseInDepth(adjacent)
        }
        _traverseInDepth(label)
        
        console.log(visitedNodes)
    }
    traverseInDepthLoop(label) {
        if (!_nodes.get(this)[label]) return

        const adjacencyList = _adjacencyList.get(this)
        const visitedNodes = new Set()
        const stack = []

        stack.push(label)
        
        while (stack.length) {
            const source = stack.pop()
            if (visitedNodes.has(source)) continue
                
            visitedNodes.add(source)
            for (const adjacent of adjacencyList[source]) 
                if (!visitedNodes.has(adjacent))
                    stack.push(adjacent)
        }

        console.log(visitedNodes)
    }
    traverseBreadthFirstLoop(label) {
        const nodes = _nodes.get(this)
        if (!nodes[label]) return

        const adjacencyList = _adjacencyList.get(this)
        const visitedNodes = new Set()
        const queue = new PriorityQueue(nodes.length)

        queue.add(label)
        
        while (!queue.isEmpty()) {
            const source = queue.remove()
            if (visitedNodes.has(source)) continue
                
            visitedNodes.add(source)

            for (const adjacent of adjacencyList[source]) 
                if (!visitedNodes.has(adjacent))
                    queue.add(adjacent)
        }

        console.log(visitedNodes)
    }
    topologicalSort(source) {
        const adjacencyList = _adjacencyList.get(this)
        const sortedNodes = []

        const _topologicalSorting = (source) => {
            if (adjacencyList[source].length)
                for (const adjacent of adjacencyList[source]) 
                    _topologicalSorting(adjacent)

            if (!sortedNodes.includes(source))
                sortedNodes.push(source)
        }
        _topologicalSorting(source)

        console.log(sortedNodes.reverse())
    }
    hasCycle() {
        const nodes = _nodes.get(this)
        const adjacencyList = _adjacencyList.get(this)
        let hasCycle = false

        const all = new Set()
        const visiting = new Set()
        const visited = new Set()
        
        for (const source in nodes)
            all.add(source)

        const _cycleDetection = (source) => {
            if (hasCycle) return 

            if (visiting.has(source))
                hasCycle = true

            if (all.has(source)) {
                all.delete(source)
                visiting.add(source)
            }

            for (const adjacent of adjacencyList[source]) 
                _cycleDetection(adjacent)

            if (visiting.has(source)) {
                visiting.delete(source)
                visited.add(source)
            }
        }

        for (const source of all) 
            if (!hasCycle) _cycleDetection(source)

        return hasCycle
    }
    
    print() {
        const adjacencyList = _adjacencyList.get(this)
        for (const source in adjacencyList)
            if (adjacencyList[source].length)
                console.log(`${source} is connected with [ ${adjacencyList[source]} ]`)
    }
    _removeItem(array, value) {
        const index = array.indexOf(value)

        if (index !== -1)
            array.splice(array.indexOf(value), 1)
    }
}

module.exports = Graph