import React, { useState } from 'react';
import classNames from 'classnames';
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className='cursor-pointer flex items-center justify-center relative rounded-full bg-gray-1 h-9 w-24'
    >
      <div
        className={classNames(
          'w-12 h-full  rounded-full transition-all bg-white absolute  top-1/2 -translate-y-1/2',
          {
            'left-0': toggle,
            'left-1/2': !toggle,
          }
        )}
      />
      <div className='w-1/2 z-[1] text-center'>
        VI
      </div>
      <div className='w-1/2 z-[1] text-center'>
        EN
      </div>
    </div>
  );
};

export default Toggle;
