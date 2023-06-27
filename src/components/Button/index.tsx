import { FC, ReactNode } from 'react';

import Image from 'next/image';
import { styled } from 'styled-components';

interface LayoutI {
  children: ReactNode;
}

const StyledButton = styled.div`
  transition: all 0.1s ease-out;
  /* z-index: 1; */
  &:hover {
    box-shadow: 0px 5px 30px 0px #8e32d8;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -2px;
    background-image: linear-gradient(
      90deg,
      rgba(240, 135, 255, 0) 0%,
      rgba(240, 135, 255, 1) 100%
    );
    border-radius: inherit;
  }
`;

const Button: FC<LayoutI> = ({ children }) => {
  return (
    <StyledButton className=' px-6 py-4 text-lg font-medium rounded-full w-[190px] bg-gradient-2 cursor-pointer relative flex flex-row'>
      {children}
      <Image
        className='ml-[10px]'
        width={24}
        height={24}
        src='/images/button/ic_vector.svg'
        alt='vector'
      />
    </StyledButton>
  );
};

export default Button;
