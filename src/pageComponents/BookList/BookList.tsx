import { useContext, useCallback, useMemo } from 'react';

import { BookContext } from 'context/BookContext';
import BookCard from 'core-component/BookCard/BookCard';
import Pagination from 'core-component/Pagination/Pagination';
import NoImage from 'images/no-image.jpg';

const BookList = () => {
  const { books, pagination, setPagination } = useContext(BookContext);
  const totalPages = useMemo(
    () => Math.round(pagination.total / pagination.limit),
    [pagination.limit, pagination.total]
  );

  const handleNextPage = useCallback(() => {
    if (pagination.page === totalPages) return;
    const nextPage = pagination.page + 1;
    setPagination({
      ...pagination,
      page: nextPage,
    });
  }, [pagination, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (pagination.page === 1) return;
    const previousPage = pagination.page - 1;

    setPagination({
      ...pagination,
      page: previousPage,
    });
  }, [pagination]);

  const handleGoToPage = useCallback(
    (page: any) => {
      setPagination({
        ...pagination,
        page: page?.selected + 1,
      });
    },
    [pagination]
  );

  const handleClickToCopy = useCallback(async (key: string) => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.REACT_APP_BOOK}/${key}`
      );
    } catch (err) {
      console.log('Can not copy', err);
    }
  }, []);

  if (!books?.length)
    return <div className='text-center text-2xl font-bold'>No Books Found</div>;

  return (
    <div>
      <span className='text-2xl font-semibold mb-8 block'>Featured Books</span>

      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
        {books?.map((book) => {
          return (
            <BookCard
              key={book.keyOf}
              image={book?.bookCover || NoImage}
              title={book.name}
              author={book.authors}
              publishYears={book.publishYear}
              keyOf={`${process.env.REACT_APP_BOOK}/${book.keyOf}`}
              onClick={() => handleClickToCopy(book.keyOf)}
            />
          );
        })}
      </div>

      {!!books?.length && (
        <div className='m-3'>
          <Pagination
            totalPages={totalPages}
            total={pagination.total}
            page={pagination.page}
            limit={pagination.limit}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
            onClickPage={handleGoToPage}
          />
        </div>
      )}
    </div>
  );
};

export default BookList;
