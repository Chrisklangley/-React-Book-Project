import { useContext } from "react";
import BookContext from "../Context/books";

const useBookContext = () => {
  return useContext(BookContext);
};

export default useBookContext;
