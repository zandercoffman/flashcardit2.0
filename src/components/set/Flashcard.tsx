/* eslint-disable */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSidebar } from '../ui/sidebar';

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
    const isMobile = useSidebar().isMobile;

    const handleFlip = () => {
        setIsFlippedS(!isFlipped)
        setIsFlipped(!isFlipped);
        
    };

    return (
        <div
            className={`${
                isMobile
                    ? "w-[85vw] h-[150px] sm:h-[180px]"
                    : "w-[min(30vw,38rem)] mb-12  h-[min(46vh,30rem)] [@media(max-height:597px)]:h-[220px]"
            } [@media(max-height:597px)]:pt-2 xl:pt-4 overflow-hidden mx-auto perspective-[2000px] font-semibold`}
            onClick={handleFlip}
            ref={ref}
        >
            <motion.div
                className={`${
                    isMobile
                        ? "h-[150px] w-[85vw] sm:h-[180px]"
                        : "h-full w-full"
                } mx-auto cursor-pointer relative ${isFlipped ? 'rotate-y-180' : ''}`}
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
