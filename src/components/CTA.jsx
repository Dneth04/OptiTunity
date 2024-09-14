/*   eslint-disable no-unused-vars */
import styles from "../style";
import Button from './Button';
const CTA = () => (
    <section className={`${styles.flexCenter} 
    ${styles.marginY} ${styles.padding} sm:flex-row flex-col 
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}
         style={{ fontSize: '40px', lineHeight: '62px' }}>
        Eager to discover
        <span className="text-pink-gradient">   what’s coming next?  </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        We’re developing innovative strategies to introduce new features, such as 
        <span className="text-gradient font-bold"> Cold-mail generation </span>,
        <span className="text-gradient font-bold"> LinkedIn post generation </span>,
       <span className="text-gradient font-bold">  flashcard creation  </span>
      for top entrance exam preparation, and tools to help you 
      <span className="text-gradient font-bold">  excel in any interview  </span>, along with many other exciting enhancements.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
)

export default CTA
