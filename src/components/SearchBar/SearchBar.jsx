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
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      return;
    }
    onSubmit(query);
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
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;
