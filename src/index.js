const dayKorean = ['일', '월', '화', '수', '목', '금', '토']

export function convert(date) {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const dayLeft = targetDate.getDate() - today.getDate()

    switch (dayLeft) {
        case -2:
            return '그저께'
        case -1:
            return '어제'
        case 0:
            return '오늘'
        case 1:
            return '내일'
        case 2:
            return '모레'
    }

    const dayOfWeek = today.getDay()
    const startOfThisWeek = new Date(today)
    startOfThisWeek.setDate(today.getDate() - dayOfWeek)

    const msPerWeek = 7 * 24 * 60 * 60 * 1000
    const weekDiff = Math.floor((targetDate.getTime() - startOfThisWeek.getTime()) / msPerWeek)

    switch (weekDiff) {
        case -2:
            return `저저번 주 ${dayKorean[targetDate.getDay()]}`
        case -1:
            return `저번 주 ${dayKorean[targetDate.getDay()]}`
        case 0:
            return `이번 주 ${dayKorean[targetDate.getDay()]}`
        case 1:
            return `다음 주 ${dayKorean[targetDate.getDay()]}`
        case 2:
            return `다다음 주 ${dayKorean[targetDate.getDay()]}`
        default:
            if (weekDiff > 0) {
                return `${weekDiff}주 뒤 ${dayKorean[targetDate.getDay()]}`
            } else {
                return `${-weekDiff}주 전 ${dayKorean[targetDate.getDay()]}`
            }
    }
}
