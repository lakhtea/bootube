import React, { useState } from "react";

export default function Searchbar({
  onTermSubmitUser,
  onTermSubmit,
  history,
  myRef,
}) {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);

    onTermSubmitUser(term).then(() =>
      history.push(`/results?search_query=${term}`)
    );
  };

  return (
    <form
      ref={myRef}
      id="search-form"
      className="search-form"
      onSubmit={onFormSubmit}
    >
      <div className="search">
        <input
          className="search-bar"
          type="text"
          onChange={onInputChange}
          value={term}
          placeholder="Search"
        />
      </div>
      <button className="search-button">
        <span className="material-icons">search</span>
      </button>
    </form>
  );
}
