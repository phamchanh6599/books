import { useContext } from 'react';

import BookList from 'pageComponents/BookList/BookList';
import Heading from 'pageComponents/Heading/Heading';
import { BookContext } from 'context/BookContext';
import { ReactComponent as Loading } from 'images/loading.svg';

const App = () => {
  const { isLoading } = useContext(BookContext);

  return (
    <div className={`${isLoading ? 'pointer-events-none' : ''} bg-slate-50`}>
      {/* Show the list of books  */}
      {isLoading && (
        <div className='flex justify-center items-center w-full h-full bg-black/[.09] fixed z-50'>
          <Loading />
        </div>
      )}

      <div className='mb-10'>
        <Heading />
      </div>

      <div className='px-4'>
        <BookList />
      </div>
    </div>
  );
};

export default App;
