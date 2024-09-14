
/* eslint-disable no-unused-vars */
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Prob = () => {
  return (
    <section id="Challenges" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Google" 
        className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%]
      h-[50%] rounded-full white__gradient"/>
      <div  className="absolute z-[0] -left-1/2 bottom-0 
      w-[100%]
      h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
      <h2 
  className={styles.heading2} 
  style={{ fontSize: '35px', lineHeight: '52px' }}>
    Navigating through the <br className="sm:block hidden" />
    Challenges in the Job market </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The current job market poses significant challenges for students and recent graduates. With intense competition and resources scattered across numerous platforms, preparing for employment has become overwhelming and inefficient, leading
 to missed opportunities and heightened stress.
        </p>
      </div>
      
    </section>
  )
}

export default Prob
