import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({
    front,
    back,
    setIsFlippedS
}: {
    front: string,
    back: string,   
    setIsFlippedS: Function
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlippedS(!isFlipped)
        setIsFlipped(!isFlipped);
        
    };

    return (
        <div
            className="w-full perspective-[2000px]"
            onClick={handleFlip}
        >
            <motion.div
                className={`h-[300px] lg:w-[400px] w-[260px] mx-auto text-4xl cursor-pointer relative ${isFlipped ? 'rotate-y-180' : ''}`}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 shadow-md rounded-lg p-3 [backface-visibility:hidden]"
                >
                    {front}
                </div>

                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 shadow-md rounded-lg p-3 [backface-visibility:hidden]"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    {back}
                </div>
            </motion.div>
        </div>

    );
};

export default Flashcard;
