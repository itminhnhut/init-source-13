import React from 'react';
import classNames from 'classnames';
import useLanguage, {
  LANGUAGE_KEY,
  LANGUAGE_TAG,
} from '@/hooks/useLanguage';
const ToggleLanguage = () => {
  const { currentLanguage, setLanguage } =
    useLanguage();

  return (
    <div
      onClick={() => setLanguage()}
      className='cursor-pointer flex items-center justify-center relative rounded-full bg-gray-1 h-9 w-24'
    >
      <div
        className={classNames(
          'w-12 h-full  rounded-full transition-all bg-white absolute  top-1/2 -translate-y-1/2',
          {
            'left-0':
              currentLanguage === LANGUAGE_TAG.VI,
            'left-1/2':
              currentLanguage === LANGUAGE_TAG.EN,
          }
        )}
      />
      {Object.keys(LANGUAGE_TAG).map((key) => (
        <div
          key={key}
          className={classNames(
            'w-1/2 z-[1] text-center uppercase transition-colors text-white',
            {
              'text-black':
                LANGUAGE_TAG[
                  key as LANGUAGE_KEY
                ] === currentLanguage,
            }
          )}
        >
          {LANGUAGE_TAG[key as LANGUAGE_KEY]}
        </div>
      ))}
    </div>
  );
};

export default ToggleLanguage;
