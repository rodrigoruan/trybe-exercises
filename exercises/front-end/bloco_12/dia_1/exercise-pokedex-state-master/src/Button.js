import React from 'react';

const Button = ({ className, disabled, change, click, name }) => {
  return (
    <button className={className} disabled={disabled} onClickCapture={change} onClick={click}>
      {name}
    </button>
  );
};

export default Button;
