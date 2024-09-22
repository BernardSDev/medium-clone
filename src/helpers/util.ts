export function readingTime(text:string | undefined): number  {
    const wordsPerMinute = 200;
    const words = text?.trim().split(/\s+/).length; // Splits by spaces to get word count
    if(words === undefined) return 0;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
}