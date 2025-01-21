export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        timeZone: 'UTC' // Ensure the date is interpreted in UTC
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}