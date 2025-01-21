export const capitalizeText = (text: string): string => {
    const arrayText = text.split(' ')

    if(arrayText.length === 1) {
        const arrayLetters = arrayText[0].split('')
        arrayLetters[0] = arrayLetters[0].toUpperCase()
        return arrayLetters.join('')
    }

    const formatText = arrayText.map( word => {
        const arrayLetters = word.split('')
        arrayLetters[0] = arrayLetters[0].toUpperCase()
        return arrayLetters.join('')
    })

    return formatText.join(' ')
}