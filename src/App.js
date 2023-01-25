import React, { useEffect, useContext } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import BookContext from "./Context/books";

function App() {
  const { getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <React.Fragment>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />

        <BookCreate />
      </div>
    </React.Fragment>
  );
}

export default App;
