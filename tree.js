
class Tree {
    static Node = class Node {
        constructor(value) {
            this.value = value
            this.leftChild = null   // smaller
            this.rightChild = null  // bigger   
        }
    }
    constructor() {
        this.root = null
    }
    isEmpty() {
        return (this.root === null)
    }
    insert(value) {
        const node = new Tree.Node(value)

        if (this.isEmpty()) {
            this.root = node
            return
        }

        let current = this.root
        do {
            if (value > current.value) {
                if (current.rightChild === null) {
                    current.rightChild = node
                    break
                }
                current = current.rightChild

            } else if (value < current.value) {
                if (current.leftChild === null) {
                    current.leftChild = node
                    break
                }
                current = current.leftChild
            } else
                throw Error("No duplicates allowed")
        } while (true)
    }
    find(value) {
        let current = this.root
        while (current !== null) {
            if (value > current.value)
                current = current.rightChild

            else if (value < current.value)
                current = current.leftChild

            else return true
        }
        return false
    }
    /** my implementation */
    breadthFirstTraversal(nodeArr) {
        if (!this.root) return

        if (!nodeArr && this.root) {
            nodeArr = [];

            console.log(this.root.value)

            if (this.root.leftChild) 
                nodeArr.push(this.root.leftChild)

            if (this.root.rightChild)
                nodeArr.push(this.root.rightChild)
        }

        const newNodeArr = []

        for (const node of nodeArr) {
            if (node) console.log(node.value)

            if (node.leftChild) newNodeArr.push(node.leftChild)
            if (node.rightChild) newNodeArr.push(node.rightChild)
        }

        if (newNodeArr.length > 0)
            this.breadthFirstTraversal(newNodeArr)
    }
    preOrderTraversal(node) {
        if (!this.root) return

        node = (node || this.root)

        console.log(node.value)

        if (node.leftChild)
            this.preOrderTraversal(node.leftChild)

        if (node.rightChild)
            this.preOrderTraversal(node.rightChild)
    }
    inOrderTraversal(node) {
        if (!this.root) return

        node = (node || this.root)

        if (node.leftChild)
            this.inOrderTraversal(node.leftChild)

        console.log(node.value)

        if (node.rightChild)
            this.inOrderTraversal(node.rightChild)
    }
    postOrderTraversal(node) {
        if (!this.root) return

        node = (node || this.root)

        if (node.leftChild)
            this.postOrderTraversal(node.leftChild)

        if (node.rightChild)
            this.postOrderTraversal(node.rightChild)

        console.log(node.value)
    }
    height(node) {
        if (!this.root) return -1

        node = (node || this.root)

        const left = (!node.leftChild) ? 0 : this.height(node.leftChild)
        const right = (!node.rightChild) ? 0 : this.height(node.rightChild)

        return (1 + Math.max(left, right))
    }
    minValue(node) {
        if (!this.root) return -1

        node = (node || this.root)

        const left = (!node.leftChild) ? node.value : this.minValue(node.leftChild)
        const right = (!node.rightChild) ? node.value : this.minValue(node.rightChild)

        return Math.min(Math.min(left, right), node.value)
    }
    maxValue(node) {
        if (!this.root) return -1

        node = (node || this.root)

        const left = (!node.leftChild) ? node.value : this.maxValue(node.leftChild)
        const right = (!node.rightChild) ? node.value : this.maxValue(node.rightChild)

        return Math.max(Math.max(left, right), node.value)
    }
    equals(other) {
        if (!other) return false
        return this.equalsTree(this.root, other.root)
    }
    equalsTree(firstNode, secondNode) {
        if (firstNode === null && secondNode === null) return true

        if (firstNode !== null && secondNode !== null) {
            return (firstNode.value === secondNode.value) 
                && this.equalsTree(firstNode.leftChild, secondNode.leftChild)
                && this.equalsTree(firstNode.rightChild, secondNode.rightChild)
        }

        return false
    }
    buildNodeType1() {
        this.root = new Tree.Node(20)
        
        this.root.leftChild = new Tree.Node(10)
        this.root.rightChild = new Tree.Node(30)

        this.root.leftChild.leftChild = new Tree.Node(6)
        this.root.leftChild.rightChild = new Tree.Node(21)

        this.root.leftChild.leftChild.leftChild = new Tree.Node(3)
        this.root.leftChild.leftChild.rightChild = new Tree.Node(8)

        this.root.rightChild.leftChild = new Tree.Node(4)
    }
    isBinarySearchTree() {
        return this.traverseIsBinarySearchTree(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
    traverseIsBinarySearchTree(node, min, max) {
        if (node === null) return true

        if (node.value < min || node.value > max) return false

        return (this.traverseIsBinarySearchTree(node.leftChild, min, node.value - 1)
                && this.traverseIsBinarySearchTree(node.rightChild, node.value + 1, max))
    }
    nodesAtKDistance(distance) {
        const list = []
        this.getNodesAtDistance(this.root, distance, list)
        return list
    }
    getNodesAtDistance(node, distance, list) {
        if (!node) return

        if (distance === 0) {
            list.push(node.value)
            return
        }
        this.getNodesAtDistance(node.leftChild, distance - 1, list)
        this.getNodesAtDistance(node.rightChild, distance - 1, list)
    }
    printLevelOrderTraverse() {
        for (let distance = 0; distance < this.height(); distance++)
            console.log(this.nodesAtKDistance(distance))
    }
    size() {
        return this.traverseSize(this.root)
    }
    traverseSize(node) {
        if (!node) return 0        

        if (!node.leftChild && !node.rightChild) return 1

        return (1 + this.traverseSize(node.leftChild) + this.traverseSize(node.rightChild))
    }
    countLeaves() {
        return this.nodesAtKDistance(this.height()-1).length
    }
}

// breadth-first traversal      - root, next-level, next-level ...
// pre-order traversal          - root, left, right
// in-order traversal           - left, root, right
// post-order traversal         - left, right, root

const tree3 = new Tree()
tree3.buildNodeType1()

console.log('---IS BINARY SEARCH TREE---')
console.log(tree3.isBinarySearchTree())

console.log('---NODE AT K DISTANCE---')
console.log(tree3.nodesAtKDistance(2))
// 3, 8

console.log('---LEVEL ORDER TRAVERSE---')
tree3.printLevelOrderTraverse()
// [20],[10,30],[6,21,4],[3,8]

console.log('---SIZE---')
console.log(tree3.size())
// 8

console.log('---COUNT LEAVES---')
console.log(tree3.countLeaves())
// 2

console.log('---MAX VALUE---')
console.log(tree3.maxValue())
// 30





// console.log(`${JSON.stringify(tree3, null, 4)}`)


return

const tree = new Tree()
const tree2 = new Tree()

tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(6)
tree.insert(14)
tree.insert(3)
tree.insert(8)
tree.insert(24)
tree.insert(26)

tree2.insert(20)
tree2.insert(10)
tree2.insert(30)
tree2.insert(6)
tree2.insert(14)
tree2.insert(3)
tree2.insert(8)
tree2.insert(24)
tree2.insert(26)


console.log('------BREADTH FIRST-------')
tree.breadthFirstTraversal()
// 20, 10, 30, 6, 14, 24, 3, 8, 26 

console.log('------PRE-ORDER TRAVERSAL-------')
tree.preOrderTraversal()
// 20, 10, 6, 3, 8, 14, 30, 24, 26 

console.log('------IN-ORDER TRAVERSAL--------')
tree.inOrderTraversal()
// 3, 6, 8, 10, 14, 20, 24, 26, 30 

console.log('------POST-ORDER TRAVERSAL------')
tree.postOrderTraversal()
// 3, 8, 6, 14, 10, 26, 24, 30, 20 

console.log('-------TREE HEIGHT---------')
console.log(tree.height())
// 3

console.log('-------MIN VALUE---------')
console.log(tree.minValue())
// 3

console.log('-------EQUALS TREE---------')
console.log(tree.equals(tree2))
// true

console.log('---IS BINARY SEARCH TREE---')
console.log(tree3.isBinary())
// false

// console.log(`${JSON.stringify(tree, null, 4)}`)





// console.log(`${JSON.stringify(tree, null, 4)}`)

// tree.insert(7)
// tree.insert(4)
// tree.insert(9)
// tree.insert(13)
// tree.insert(17)
// tree.insert(1)
// tree.insert(15)
// tree.insert(6)
// tree.insert(14)
// tree.insert(8)
// tree.insert(10)
// tree.insert(11)
// tree.insert(12)
// tree.insert(16)

// console.log(tree.find(12))
// console.log(tree.find(102))
// console.log(tree.find(0))
// console.log(tree.find(18))
// console.log(tree.find(15))
// console.log(tree.find(9))

// console.log(`${JSON.stringify(tree, null, 4)}`)