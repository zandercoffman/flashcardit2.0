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
                    ? "w-[88vw] max-w-[28rem] h-[34svh] min-h-[220px] max-h-[320px]"
                    : "w-[min(68vw,38rem)] mb-10 h-[min(52vh,32rem)] min-h-[260px] [@media(max-height:597px)]:h-[220px]"
            } [@media(max-height:597px)]:pt-2 xl:pt-4 overflow-hidden mx-auto perspective-[2000px] font-semibold`}
            onClick={handleFlip}
            ref={ref}
        >
            <motion.div
                className={`${
                    isMobile
                        ? "h-full w-full"
                        : "h-full w-full"
                } mx-auto cursor-pointer relative ${isFlipped ? 'rotate-y-180' : ''}`}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white/50 dark:bg-neutral-800/50 border border-gray-300 dark:border-neutral-600 shadow-md rounded-[2rem] lg:rounded-5xl p-4 sm:p-6 text-center [backface-visibility:hidden]"
                    style={{
                        fontSize: isMobile
                            ? front.length > 70 ? "1rem" : front.length > 35 ? "1.15rem" : "1.35rem"
                            : front.length > 70 ? "1.1rem" : front.length > 35 ? "1.4rem" : "1.9rem",
                    }}
                >
                    {front}
                </div>

                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white/50 dark:bg-neutral-800/50 border border-gray-300 dark:border-neutral-600 shadow-md rounded-[2rem] lg:rounded-5xl p-4 sm:p-6 text-center [backface-visibility:hidden]"
                    style={{
                        transform: 'rotateY(180deg)',
                        fontSize: isMobile
                            ? back.length > 80 ? "0.95rem" : back.length > 40 ? "1.1rem" : "1.3rem"
                            : back.length > 80 ? "1.05rem" : back.length > 40 ? "1.3rem" : "1.8rem"
                    }}
                >
                    {back}
                </div>
            </motion.div>
        </div>

    );
};

export default Flashcard;
