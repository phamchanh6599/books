import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from 'images/search.svg';

interface ISearchInput {
  placeHolder?: string;
  onSearch: (key: string) => void;
}

const SearchInput = ({ placeHolder, onSearch }: ISearchInput) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onHandleSearch = () => {
    onSearch(search?.trim());
  };

  return (
    <div className='relative'>
      <input
        type='text'
        id='default-search'
        className='block w-full px-4 py-3 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeHolder || 'Search books by name'}
        value={search}
        onChange={onChangeSearch}
      />
      <div
        className='pointer-cursor absolute inset-y-0 end-0 flex items-center pe-3'
        onClick={onHandleSearch}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default React.memo(SearchInput);
