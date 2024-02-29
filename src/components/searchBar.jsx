import React, { useState } from "react";

export default function SearchBar({ handleSubmit, isLoading }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleErrorOnEmpty = () => {
    setError("error");

    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const submitHandler = (e) => {
    let emptyBool = searchTerm === "";
    setIsEmpty(emptyBool);
    console.log(isEmpty);
    if (emptyBool) {
      handleErrorOnEmpty();
    } else {
      handleSubmit(e, searchTerm);
    }
  };

  const handleSubmitOnEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitHandler(e);
    }
  };

  return (
    <main>
      <form className='search-bar' id={error}>
        <input
          type='text'
          placeholder='Search for any word...'
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSubmitOnEnter}
        />
        <svg
          id='searchIcon'
          onClick={submitHandler}
          disabled={isLoading}
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'>
          <path
            fill='none'
            stroke='#A445ED'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
          />
        </svg>
      </form>
      {error !== "" && (
        <p className='search__error body--medium'>Whoops, can't be empty...</p>
      )}
    </main>
  );
}
