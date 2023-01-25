import React, { useContext } from "react";
import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBookContext();
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
