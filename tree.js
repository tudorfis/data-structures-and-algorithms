
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
    breadthFirst(nodeArr) {
        if (!nodeArr && this.root) {
            console.log(this.root.value)
            nodeArr = [this.root.leftChild, this.root.rightChild]
        }
        
        const newNodeArr = []

        for (const node of nodeArr) {
            if (node) console.log(node.value)

            if (node.leftChild) newNodeArr.push(node.leftChild)
            if (node.rightChild) newNodeArr.push(node.rightChild)
        }

        if (newNodeArr.length > 0)
            this.breadthFirst(newNodeArr)
    }
    preOrderTraversal(node) {
        node = (node || this.root)

        console.log(node.value)

        if (node.leftChild)
            this.preOrderTraversal(node.leftChild)

        if (node.rightChild)
            this.preOrderTraversal(node.rightChild)
    }
    inOrderTraversal(node) {
        node = (node || this.root)

        if (node.leftChild)
            this.inOrderTraversal(node.leftChild)

        console.log(node.value)

        if (node.rightChild)
            this.inOrderTraversal(node.rightChild)
    }
    postOrderTraversal(node) {
        node = (node || this.root)

        if (node.leftChild)
            this.postOrderTraversal(node.leftChild)

        if (node.rightChild)
            this.postOrderTraversal(node.rightChild)

        console.log(node.value)
    }
}

// breadth-first traversal      - root, next-level, next-level ...
// pre-order traversal          - root, left, right
// in-order traversal           - left, root, right
// post-order traversal         - left, right, root

const tree = new Tree()

tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(6)
tree.insert(14)
tree.insert(3)
tree.insert(8)
tree.insert(24)
tree.insert(26)

console.log('------BREADTH FIRST-------')
tree.breadthFirst()
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