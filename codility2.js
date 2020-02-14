
function solution1(A) {
    if (!A || A.length === 0) throw Error('IllegalArgumentException')
    
    let possibleTrees = 0
    let nextTreeIsBigger

    for (let treeIndex = 0; treeIndex < A.length - 1; treeIndex++) {

        if (treeIndex > 0) {
            if (nextTreeIsBigger === null) {
                possibleTrees++
                treeIndex++

            } else if (nextTreeIsBigger && Math.sign(A[treeIndex] - A[treeIndex + 1]) !== 1) {
                possibleTrees++
                treeIndex++
            }
            else if (!nextTreeIsBigger && Math.sign(A[treeIndex] - A[treeIndex + 1]) !== -1) {
                possibleTrees++
                treeIndex++
            }
        }

        switch (Math.sign(A[treeIndex] - A[treeIndex + 1])) {
            case 0: nextTreeIsBigger = null; break;
            case 1: nextTreeIsBigger = false; break;
            case -1: nextTreeIsBigger = true; break;
        }
            
    }

    return possibleTrees
}

function solution2(A) {
    if (!A || A.length === 0) throw Error('IllegalArgumentException')
    
    

    const isB = (i, j) => {
        switch (Math.sign(A[i] - A[j])) {
            case 0: return null;
            case 1: return false;
            case -1: return true;
        }
    }

    let pT = 0

    for (let i = 0; i < A.length; i++) { 

        let pB
        let nB

        if (A[i - 1]) pB = isB(i-1, i)
        if (A[i + 1]) nB = isB(i, i+1)

        if ((pB === null || nB === null) 
            || (pB === true && nB === false 
                || pB === false && nB === true)) {
            pT++
            i++
        }
    }

    return pT
}


function solution3(A) {
    if (!A || A.length === 1) return 0
    if (A.length === 2 && A[0] === A[1]) return 1
    
    let pos = 0
    for (let i = 1; i < A.length - 1; i++) { 

        let pB = Math.sign(A[i-1] - A[i])
        let nB = Math.sign(A[i] - A[i+1])

        if (!pB || !nB || pB === nB) {
            pos++
            i += 2
        }
    }

    return pos
}

const arr = []
while (true) {
    if (arr.length === 10000000) break
    arr.push(Math.floor(Math.random(1,100) * 100))
}

const start = new Date().getTime()

// console.log(solution1(arr))
// console.log(solution2(arr))
// console.log(solution3(arr))

console.log(((new Date().getTime() - start) / 1000).toFixed(5) + ' seconds')
