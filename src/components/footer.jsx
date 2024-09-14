
/* eslint-disable no-unused-vars */

import styles from '../style';
import { footerlogo } from '../assets';
import { footerLinks, socialMedia} from '../constants';
const footer = () => (
<section id= "ABOUT_US" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex-1 flex flex-col justify-start mr-10">
      <img src={footerlogo} alt="optitunity" className="w-[246px] h-[100px] object-contain"/>
      <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
        An new way to optimize your oppourtunity that’s optitunity.
      </p>
    </div>
    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
      <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          Story Behind US
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">
          Optitunity began as a spark of frustration—we both, as students at BITS Pilani, 
          found ourselves navigating the daunting world of job hunting and realized that something crucial was missing. 
          The countless hours spent sifting through fragmented advice, outdated tips, and 
          scattered resources left us with one pressing question: why isn’t there an easier way? 
          We discovered similar platforms like Roadmap.ai, but we wanted to create something more—an enhanced version with additional features.
          Drawing from the insights gained during our 7-week fellowship program, 
          we set out to build a platform that reflects our unique vision and learnings.
        </p>
      </div>
    </div>
  </div>


  <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      2024 Optitunity. Made as part of Headstarter fellowship program as the Final project. All Rights Reserved!
    </p>
    <div className="flex flex-row md:mt-0 mt-6">
    {socialMedia.map((social, index) => ( 
  <div key={social.id} className="flex flex-col items-center">
    <a href={social.link} target="_blank" rel="noopener noreferrer">
      <img
        src={social.icon}
        alt={social.id}
        className={`w-[21px] h-[21px] object-contain cursor-pointer 
          ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
      />
    </a>
    <span className="text-sm mt-2 text-gradient font-bold"> {social.name} </span>
  </div>
))}

      
    </div>
  </div>
  {/* Back to Top Arrow */}
{/* Back to Top Arrow */}
<br></br>
<div className="w-12 h-12 flex flex-col justify-center items-center">
  <a href="#" className="back-to-top">
    <div className="arrow-container">
      <span className="arrow-up">&#9650;</span>
    </div>
  </a>
  <span className="back-to-top-text">Top</span> {/* Text label */}
</div>

</section>

  )

export default footer
