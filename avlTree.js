
class AVLTree {
    static AVLNode = class AVLNode {
        constructor(value) {
            this.value = value
            this.leftChild = null
            this.rightChild = null
            this.height = 0
        }
    }
    constructor() {
        this.root = null
    }
    print() {
        console.log(`${JSON.stringify(this, null, 4)}`)
    }
    insert(value) {
        this.root = this._insert(this.root, value)
    }
    _insert(root, value) {
        if (!root) return new AVLTree.AVLNode(value)

        if (value < root.value)
            root.leftChild = this._insert(root.leftChild, value)
        else 
            root.rightChild = this._insert(root.rightChild, value)
        
        this._setHeight(root)
        root = this._setBalance(root)

        return root;
    }
    _height(node) {
        return (node === null) ? -1 : node.height
    }
    _setHeight(node) {
        node.height = Math.max(
            this._height(node.leftChild),
            this._height(node.rightChild)
        ) + 1
    }
    _leftRotate(root)  {
        const newRoot = root.rightChild

        root.rightChild = newRoot.leftChild
        newRoot.leftChild = root

        this._setHeight(root)
        this._setHeight(newRoot)

        return newRoot
    }
    _rightRotate(root)  {
        const newRoot = root.leftChild

        root.leftChild = newRoot.rightChild
        newRoot.rightChild = root

        this._setHeight(root)
        this._setHeight(newRoot)

        return newRoot
    }
    _setBalance(root) {
        if (this._isLeftHeavy(root)) {
            
            if (this._getBalanceFactor(root.leftChild) < 0) 
                root.leftChild = this._leftRotate(root.leftChild)
            
            return this._rightRotate(root)
        }

        else if (this._isRightHeavy(root)) {
            
            if (this._getBalanceFactor(root.rightChild) > 0) 
                root.rightChild = this._rightRotate(root.rightChild)
            
            return this._leftRotate(root)
        }

        return root
    }
    _getBalanceFactor(node) {
        if (!node) return -1
        return (this._height(node.leftChild) - this._height(node.rightChild))
    }
    _isLeftHeavy(node) {
        return (this._getBalanceFactor(node) > 1)
    }
    _isRightHeavy(node) {
        return (this._getBalanceFactor(node) < -1)
    }
}

/**
    10
        20 (-1)  
            30
    leftRotate(10)

    10
        30 (1) balanceFactor(root.right) > 0
    20
    rightRotate(30)
    leftRotate(10)
 */

const tree = new AVLTree()

tree.insert(10)
tree.insert(20)
tree.insert(15)
tree.insert(30)

tree.print()