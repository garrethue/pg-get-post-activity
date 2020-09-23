import React, { Fragment, useEffect, useState } from "react";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBooks;
