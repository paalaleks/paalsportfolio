import React from 'react';

const Shadow = ({ gradientDirection, positioned, visible }) => {
  return (
    <>
      <div
        className={`h-6 w-full opacity-30 from-color4 to-transparent absolute z-20 from-20%  ${positioned} ${gradientDirection} ${visible}`}
      />
      <div
        className={`h-6 w-full  opacity-30 from-color4 to-transparent absolute z-10 ${positioned} ${gradientDirection} ${visible}`}
      />
    </>
  );
};

export default Shadow;
