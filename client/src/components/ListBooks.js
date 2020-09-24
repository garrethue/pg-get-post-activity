import React, { useEffect, useState } from "react";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // , {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   });

  const deleteEntry = async (id) => {
    try {
      console.log(id);
      const body = { id };
      console.log(body);
      //   const response = await fetch("http://localhost:5000/delete-a-book", {
      //     method: "DELETE",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   });
      //   const jsonData = await response.json();
      //   console.log(jsonData);
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
            <th className="headers-2"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
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
