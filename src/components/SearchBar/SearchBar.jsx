import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  Header,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchSpan,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim());
    onSubmit(searchName);
    event.target.reset();
  };
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <FcSearch />
          <SearchSpan>Search</SearchSpan>
        </SearchButton>

        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;
