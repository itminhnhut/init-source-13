import Image from 'next/image';
import HeaderTabs from './HeaderTabs';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 w-full'>
      <div className='flex justify-between max-w-screen-xxl mx-auto px-4 h-20 '>
        <Image
          src='/images/sci-logo.svg'
          width={118}
          height={46}
          alt='sci-logo'
        />
        <HeaderTabs />
      </div>
    </header>
  );
};

export default Header;
