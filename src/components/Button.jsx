/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Any additional logic before navigating
    navigate('/rsvp');
  };

  return (
    <button 
      type="button" 
      className={`py-4 px-6 font-poppins 
        font-medium text-[18px] text-primary
        bg-blue-gradient rounded-[10px] 
        outline-none ${styles} rounded-[10px]`}
      onClick={handleClick}
    >
      RSVP NOW!
    </button>
  );
};

export default Button;
