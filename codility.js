// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
    if (!S || S.length === 0) return 2
    
    const arrS = S.split(' ')
    const map = new Map()
    for (const index of arrS)
        map.set(index, true)

    const calculatePossibilites = (i, arrP) => {
        const checkPossibility = (i, arrL) => {
            for (const letter of arrL)  {
                const position = `${i.toString()}${letter}`
                if (map.get(position)) return false
                else map.set(position, true)
            }
                
            return true
        }

        let possibilities = 0
        
        for (const arrL of arrP)  {
            possibilities += checkPossibility(i, arrL) ? 1 : 0
        }  
            
        return possibilities
    }
    
    let possibilities = 0
    for (let i = 1; i <= N; i++) 
        possibilities += calculatePossibilites(i, [
            ['B','C','D','E'],
            ['D','E','F','G'],
            ['F','G','H','J']
        ])
        
    return possibilities
}

console.log(
    solution(3, '1A 2F 1C')
    )