const overrideNo = true;

export const print = (thing: string | number) => {
    if (!overrideNo) console.log(thing)
}