import React from 'react'
import {motion} from 'framer-motion'

const Loader=(props)=>{

    const loaderVariants ={
        animateOne:{
            x:[-20,20],
            y:[0,-0],
            transition:{
                x:{
                    yoyo:Infinity,
                    duration: 0.5,
                    ease: 'easeInOut'
                    
                },
                y:{
                    yoyo:Infinity,
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            }

        }
    }

    return(
        <>
        <motion.div
        variants={loaderVariants}
        animate="animateOne"
        className="loader">

        </motion.div>
        </>
    )
}
export default Loader