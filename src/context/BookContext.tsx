import { createContext, useState, useEffect } from 'react';
import { DEFAULT_PAGINATION } from 'constant/config';

interface IBooks {
  name: string;
  authors: string;
  publishYear: string;
  bookCover: string;
  keyOf: string;
}

interface IPagination {
  page: number;
  limit: number;
  total: number;
}

const initialData = {
  books: [] as IBooks[],
  isLoading: false,
  getBooks: () => {},
  setPagination: (pagination: IPagination) => {},
  setSearchParam: (searchParam: string) => {},
  pagination: {
    page: DEFAULT_PAGINATION.startPage,
    limit: DEFAULT_PAGINATION.limitPerPage,
    total: 0,
  },
};

export const BookContext = createContext(initialData);

const BookProvider = (props: any) => {
  const [books, setBooks] = useState<IBooks[]>([]);
  const [isLoading, setLoading] = useState(initialData.isLoading);
  const [pagination, setPagination] = useState<IPagination>(
    initialData.pagination
  );
  const [searchParam, setSearchParam] = useState('');

  const getBooks = async (
    searchKey: string = '',
    page: number = DEFAULT_PAGINATION.startPage,
    limit: number = DEFAULT_PAGINATION.limitPerPage
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BOOK}/search.json?q=${
          searchKey || '*'
        }&page=${page}&limit=${limit}`
      );
      const data = await response.json();

      /* For this case, I am using any for book because the API return a huge data and the data is not static, 
        but in a real projects with the real data, we should define an interface for this variable
      */
      const listBooks = data?.docs?.map((book: any) => {
        return {
          name: book?.title,
          authors: book?.author_name?.join(' ,'),
          publishYear: book?.publish_year
            ?.sort((a: number, b: number) => b - a)
            ?.join(' ,'),
          bookCover: book?.cover_i
            ? `${process.env.REACT_APP_COVER_BOOK}/b/id/${book?.cover_i}-M.jpg`
            : '',
          keyOf: book?.key || '',
        };
      });

      setPagination({
        ...pagination,
        total: data?.numFound,
      });
      setBooks(listBooks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks(searchParam, pagination.page, pagination.limit);
  }, [pagination.limit, pagination.page, searchParam]);

  const contextValue = {
    books,
    getBooks,
    isLoading,
    pagination,
    setPagination,
    setSearchParam,
  };

  return (
    <BookContext.Provider value={contextValue}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
