import React, { useState } from "react";
import BookEdit from "./BookEdit";

import useBookContext from "../hooks/use-books-context";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setEditBook] = useState(false);
  const { deleteBookById, editBookById } = useBookContext();

  const handleClick = () => {
    deleteBookById(book.id);
  };
  const handleEdit = () => {
    setEditBook(!showEdit);
  };

  const handleSubmit = () => {
    setEditBook(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed//${book.id}/300/200`} alt="books" />
      {content}
      <div className="actions"></div>
      <button className="edit" onClick={handleEdit}>
        edit
      </button>
      <button className="delete" onClick={handleClick}>
        delete this Book
      </button>
    </div>
  );
}

export default BookShow;
