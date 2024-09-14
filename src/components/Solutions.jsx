/* eslint-disable no-unused-vars */
import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
const Solutions = () => {
  return (
    <section id="Solution" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Solution</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <span className="text-gradient font-bold"> Optinity </span>
        addresses this critical gap by providing a feasible solution to streamline the preparation process. Our mission is to offer clear, structured guidance in an environment where clarity is often lacking, empowering you to confidently pursue
           and secure the opportunities you deserve.</p>
           {/* <Button styles="mt-10"/> */}
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="soln" className="w-[100%] h-[100%]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%]
      h-[50%] rounded-full white__gradient"/>
      <div  className="absolute z-[0] -left-1/2 bottom-0 
      w-[100%]
      h-[50%] rounded-full pink__gradient"/>
      
      </div>
    </section>
  )
}

export default Solutions
