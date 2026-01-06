const overrideNo = true;
const isLocal = window.location.hostname === "localhost"

export const print = (thing: string | number) => {
    if (isLocal || !overrideNo) console.log(thing)
}