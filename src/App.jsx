/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import { Navbar, Hero, Stats, Tools, Prob, Testimonials, Clients, CTA, Footer, Solutions, RSVP } from './components';

const App = () => (
  <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={
          <>
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
                <Tools />
                <Prob />
                <Solutions />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </>
        } />

        {/* RSVP Page Route (new page without Navbar or other sections) */}
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </div>
  </Router>
);

export default App;
