import React, { useState } from "react";

import useBookContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();
  const handleChage = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          className="input"
          type="text"
          name=""
          id=""
          value={title}
          onChange={handleChage}
        />
        <button className="button">Create Book!</button>
      </form>
    </div>
  );
}

export default BookCreate;
