import React from 'react';
import Lottie from "lottie-react";
import steamAnimation from "../assets/animations/Steam Pot.json";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
    return (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-gray-800 z-50"
            >
                    <Lottie animationData={steamAnimation} loop={true} className='-mr-1' style={{transform: 'translateX(50px)'}}/>

                    <div className="relative w-96 h-3 bg-amber-500/25 rounded-2xl overflow-hidden mt-4 mx-auto">
                        <div
                            className="absolute left-0 top-0 h-full bg-amber-700/75 transition-all"
                            style={{
                                width: '100%',
                                animation: 'loadingBar 2s linear forwards'
                            }}
                        />
                    </div>

                    <div className='text-[#92400E] buka-font buka-anim mt-4 px-3 bg-amber-700/25 rounded-4xl py-3 flex flex-row items-center'>
                        <div className='bg-amber-500/75 rounded-full h-3 w-3 mr-10'></div>
                        Buka
                        <div className='bg-amber-500/75 rounded-full h-3 w-3 ml-10'></div>
                    </div>
            </motion.div>
    );
};

export default Loading;
