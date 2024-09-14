/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins 
  font-medium text-[18px] text-primary
   bg-blue-gradient rounded-[10px] 
   outline-none ${styles} rounded-[10px]`}>
    RSVP NOW!
  </button>
);

export default Button;