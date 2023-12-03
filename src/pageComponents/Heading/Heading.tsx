import { useContext, useCallback } from 'react';

import { BookContext } from 'context/BookContext';
import SearchInput from 'core-component/SearchInput/SearchInput';
import Logo from 'images/logo.png';
import BackgroundHeader from 'images/header-background.jpg';

const Heading = () => {
  const { setSearchParam } = useContext(BookContext);

  const onSearch = useCallback((key: string) => {
    setSearchParam(key);
  }, []);

  return (
    <div className='h-80 md:h-[28rem]'>
      <div className='flex h-full bg-slate-100 px-4 md:px-0'>
        <div className='w-full md:w-6/12 md:px-4 md:py-2'>
          <img className='w-20 h-20' src={Logo} alt='logo' />

          {/* Welcome  */}
          <div className='mb-12 w-60 md:w-full mt-2'>
            <p className='text-stone-500'> Welcome back, Winn!</p>
            <p className='font-semibold text-2xl'>
              {' '}
              What do you want to read today ?
            </p>
          </div>

          {/* Search  */}
          <div className='w-full md:w-96'>
            <SearchInput onSearch={onSearch} />
          </div>
        </div>

        {/* Background on desktop */}
        <div className='w-6/12 hidden md:flex'>
          <img className='w-full ' src={BackgroundHeader} alt='background' />
        </div>
      </div>
    </div>
  );
};

export default Heading;
