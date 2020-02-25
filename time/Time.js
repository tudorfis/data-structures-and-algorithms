
class Time {
    static parse(str = '') {
        const hourMinuteArr = str.trim().split(':')

        if (hourMinuteArr.length !== 2)
            throw new Error('Invalid hour minute string provided')

        const hours = parseInt(hourMinuteArr[0])
        const minutes = parseInt(hourMinuteArr[1])

        const invalidHours = isNaN(hours) || hours > 24 || hours < 0
        const invalidMinutes = isNaN(minutes) || minutes > 59 || minutes < 0

        if (invalidHours || invalidMinutes)
            throw new Error('Invalid hour minute string provided')

        return { hours, minutes }
    }
}

module.exports = Time