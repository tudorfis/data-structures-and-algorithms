
class StringManipulation {
    static countVowels(str = '') {
        if (!str.length) return 0

        const vowels = 'aeoui'
        let count = 0

        for (const ch of str.toLowerCase())
            if (vowels.match(ch)) count++

        return count
    }
    static reverse(str = '') {
        if (!str.length) return ''

        let reversed = ''
        for (let i = str.length - 1; i >= 0; i--)
            reversed += str.charAt(i)

        return reversed
    }
    static reverseWords(str = '') {
        if (!str.length) return ''

        const arr = str.split(' ')
        let reversed = ''
        for (let i = arr.length - 1; i >= 0; i--)
            reversed += `${arr[i]} `

        return reversed.slice(0, -1)
    }
    static isRotation(str1 = '', str2 = '') {
        if (str1.length !== str2.length) return false

        const rotation = {}
        let prevRot = ''

        for (const ch of str1) {
            if (!prevRot) {
                rotation[ch] = ''
                prevRot = ch
                continue
            }

            rotation[prevRot] = ch
            prevRot = ch
        }
        rotation[str1.charAt(str1.length - 1)] = str1.charAt(0)

        for (let i = 0; i < str2.length; i++)
            if (rotation[str2.charAt(i)] !== str2.charAt(i + 1 === str2.length ? 0 : i + 1))
                return false

        return true
    }
    static areRotations(str1 = '', str2 = '') {
        return (str1.length === str2.length && str1 + str1).includes(str2)
    }
    static removeDuplicates(str = '') {
        if (!str.length) return ''

        let output = ''

        for (const ch of str)

            if (!output.includes(ch))
                output += ch

        return output
    }
    static mostRepeated(str = '') {
        if (!str.length) return ''

        const map = {}
        let mostRepeatedCh, mostRepeatedNr

        for (const ch of str) {
            map[ch] = (map[ch] || 0) + 1

            if (!mostRepeatedCh && !mostRepeatedNr) {
                mostRepeatedCh = ch
                mostRepeatedNr = map[ch]
                continue
            }

            if (map[ch] > mostRepeatedNr) {
                mostRepeatedCh = ch
                mostRepeatedNr = map[ch]
            }
        }

        return `${mostRepeatedCh} (${mostRepeatedNr} times)`
    }
    static capitalizeWords(str = '') {
        if (!str.length) return ''

        let output = ''
        for (let word of str.trim().split(' '))
            if (word.trim().length)
                output += `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()} `


        return output.slice(0, -1)
    }
    static isPalindrom(str = '') {
        if (!str.length) return false

        for (let i = 0; i <= Math.floor(str.length / 2); i++)
            if (str.charAt(i) !== str.charAt(str.length - 1 - i))
                return false

        return true
    }
    static isPalindrome(str = '') {
        if (!str.length) return false

        const middle = Math.ceil(str.length / 2)

        return str.slice(0, middle - 1).split('').reverse().join('') === str.slice(middle + 1)
    }
    static isAnagram(str1 = '', str2 = '') {
        if (str1.length !== str2.length) return false

        if (str1 === str2) return true

        return str1.split('').sort().join('') === str2.split('').sort().join('')
    }
    static areAnagram(str1 = '', str2 = '') {
        if (str1 === str2) return true
        if (str1.length !== str2.length) return false

        const mapCount = new Array(26).fill(null)

        for (const ch of str1)
            mapCount[ch.charCodeAt() - 97]++

        for (const ch of str2)
            if (--mapCount[ch.charCodeAt() - 97] < 0)
                return false

        return true
    }
}

module.exports = StringManipulation
