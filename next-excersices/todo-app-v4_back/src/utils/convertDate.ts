export const convertDate = (initialDate: string) => {
    const dateArray = initialDate.split('/')
    return dateArray.reverse().join('-')
}