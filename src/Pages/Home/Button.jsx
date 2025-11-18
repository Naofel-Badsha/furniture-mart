import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({text}) => {
    return (
      <div className='mt-2 hover:underline'>
        <button className="text-sm text-orange-400 flex items-center justify-center gap-1">
          {text} <FaLongArrowAltRight className="mt-1" />
        </button>
      </div>
    );
};

export default Button;