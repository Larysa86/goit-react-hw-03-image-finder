import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Search, SearchForm, SearchFormBtn, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Search>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormBtn type='submit'>
            <BsSearch size='20px' />
          </SearchFormBtn>
          <Input
            name='search'
            className='input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </SearchForm>
      </Formik>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header> */