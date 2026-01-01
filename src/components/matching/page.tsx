interface Set {
    title: string;
    vocab: [string, string][];
}

import { useMemo } from "react"
import { motion } from "framer-motion"


export default function Matching({
    currentSet
}: {
    currentSet: Set
}) {

    const rows = 4;
    const cols = 4;

    const shuffledWords = useMemo(() => {
        const flatWords = currentSet.vocab.flatMap(([a, b]) => [a, b])

        return flatWords
            .sort(() => Math.random() - 0.5)
            .slice(0, 16)
    }, [currentSet])


    return <section className="w-full h-full p-2">
        <section className="w-full h-full p-2">
            <section className={`grid grid-cols-${cols} grid-rows-${rows} gap-4`}>
                {shuffledWords.map((word, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {word}
                    </motion.div>
                ))}
            </section>
            <section>
                
            </section>
        </section>
    </section>
}1