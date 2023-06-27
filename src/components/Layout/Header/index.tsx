import Image from 'next/image';

const Header = () => {
  return (
    <div className='h-20 flex justify-between max-w-screen-xxl mx-auto px-4'>
      <Image
        src='/images/sci-logo.svg'
        width={118}
        height={46}
        alt='sci-logo'
      />
      <div>
        
      </div>
    </div>
  );
};

export default Header;
