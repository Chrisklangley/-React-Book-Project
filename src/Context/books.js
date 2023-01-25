import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };

  const editBookById = async (id, newTitle) => {
    const body = {
      title: newTitle,
    };

    const res = await axios.put(`http://localhost:3001/books/${id}`, body);

    const updatedbooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedbooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooklist = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooklist);
  };

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", { title });
    setBooks([...books, res.data]);
  };

  const valuesToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    getBooks,
  };

  return (
    <BookContext.Provider value={valuesToShare}>
      {children}
    </BookContext.Provider>
  );
};

export { Provider };

export default BookContext;
