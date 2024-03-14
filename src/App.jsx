import { useState } from "react"; 
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'

export const App = () => {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
      const updatedBooks = books.map((book) => {
        if(book.id === id) {
          return {...book, title: newTitle}
        };
        
        return book;
      });

      setBooks(updatedBooks)
    };

    const deleteBookById = (id) => {
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      });

      setBooks(updatedBooks);
    };

    const handleCreate = (title) => {
        const updatedBoobks = [
          ...books,
          { 
            id: Math.round(Math.random() * 9999),
            title}
        ];

        setBooks(updatedBoobks);
    };

  return (
    <div className="app">
      <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
        <BookCreate onCreate={handleCreate}/>
    </div>
  )
}

export default App;