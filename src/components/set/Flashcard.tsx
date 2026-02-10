/* eslint-disable */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({
    front,
    back,
    setIsFlippedS,
    ref
}: {
    front: string,
    back: string,   
    setIsFlippedS: Function
    ref: React.RefObject<HTMLDivElement> | null
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlippedS(!isFlipped)
        setIsFlipped(!isFlipped);
        
    };

    return (
        <div
            className="w-[80vw] h-[300px] [@media(max-height:597px)]:h-[330px] xl:h-[400px] [@media(max-height:597px)]:pt-2 xl:pt-6 overflow-hidden mx-auto md:mx-0 md:w-full perspective-[2000px] font-semibold"
            onClick={handleFlip}
            ref={ref}
        >
            <motion.div
                className={`h-[200px] [@media(max-height:597px)]:h-[290px] xl:h-[300px] w-full lg:w-[400px] w-[260px] mx-auto cursor-pointer relative ${isFlipped ? 'rotate-y-180' : ''}`}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white/50 dark:bg-neutral-800/50 border border-gray-300 dark:border-neutral-600 shadow-xl rounded-[3rem] lg:rounded-5xl p-3 px-6 [backface-visibility:hidden]"
                    style={{
                        fontSize: front.length > 40 ? "1rem" : front.length > 20 ? '1.3rem' : '2rem',
                    }}
                >
                    {front}
                </div>

                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white/50 dark:bg-neutral-800/50 border border-gray-300 dark:border-neutral-600 shadow-xl rounded-[3rem] lg:rounded-5xl p-3 px-6 [backface-visibility:hidden]"
                    style={{ transform: 'rotateY(180deg)', fontSize: back.length > 40 ? "1rem" : back.length > 20 ? '1.3rem' : '2rem' }}
                >
                    {back}
                </div>
            </motion.div>
        </div>

    );
};

export default Flashcard;
