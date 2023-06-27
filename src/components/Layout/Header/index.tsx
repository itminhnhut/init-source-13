import Image from 'next/image';
import dynamic from 'next/dynamic';
import ToggleLanguage from './ToggleLanguage';

const HeaderTabs = dynamic(
  () => import('./HeaderTabs'),
  { ssr: false }
);

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 w-full'>
      <div className='flex justify-between items-center md:mx-[110px] px-4 h-20 '>
        <Image
          src='/images/sci-logo.svg'
          width={118}
          height={46}
          alt='sci-logo'
        />
        <HeaderTabs />
        <ToggleLanguage />
      </div>
    </header>
  );
};

export default Header;
