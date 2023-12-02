import ReactPaginate from 'react-paginate';

interface IPagination {
  page: number;
  total: number;
  limit: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  onClickPage: (page: any) => void;
}

const Pagination = ({
  page,
  total,
  limit,
  onNext,
  onPrevious,
  onClickPage,
  totalPages,
}: IPagination) => {
  const numberOfItem = limit * page;

  return (
    <div className='flex items-center justify-between bg-white'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <span
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          onClick={onPrevious}>
          Previous
        </span>
        <span
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          onClick={onNext}>
          Next
        </span>
      </div>

      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <p className='text-sm text-gray-700'>
          Showing <span className='font-medium'> {numberOfItem} </span>of{' '}
          <span className='font-medium'> {total} </span> results
        </p>

        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={onClickPage}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel='<'
          renderOnZeroPageCount={null}
          containerClassName={
            'isolate inline-flex -space-x-px rounded-md shadow-sm'
          }
          pageClassName={
            'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
          pageLinkClassName={'page-link'}
          previousClassName={
            'cursor-pointer relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
          previousLinkClassName={'page-link'}
          nextClassName={
            'cursor-pointer relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
          nextLinkClassName={'page-link'}
          breakClassName={
            'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
          breakLinkClassName={'page-link'}
          activeClassName={'bg-indigo-600 text-white'}
        />
      </div>
    </div>
  );
};

export default Pagination;
