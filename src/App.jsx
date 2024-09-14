/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './style';

import { Navbar, Hero, Stats,  Tools, Prob,
 Testimonials, Clients, CTA, Footer, 
  Solutions} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Tools />
        <Prob />
        <Solutions />
        <Clients />
        <CTA />
        <Footer />
      </div> 
    </div>
  </div>
);

export default App;
