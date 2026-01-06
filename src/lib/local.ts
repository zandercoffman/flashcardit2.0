const overrideNo = true;
const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost"

export const print = (thing: string | number) => {
    if (isLocal || !overrideNo) console.log(thing)
}