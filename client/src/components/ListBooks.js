import React, { useEffect, useState } from "react";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();

      setBooks(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/delete-a-book/${id}`,
        {
          method: "DELETE",
        }
      );
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered mt-5 text-center">
        <thead>
          <tr>
            <th className="headers">Title</th>
            <th className="headers">Author</th>
            <th className="headers">Published</th>
            <th className="headers">Read?</th>
            <th className="headers-2"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
              <td>{book.read}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEntry(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
