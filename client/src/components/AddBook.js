import React, { Component } from "react";

export default class AddBook extends Component {
  state = {
    author: "",
    title: "",
    published: "",
  };

  //change state functions
  changeAuthor = (value) => {
    const newAuthor = value;
    this.setState({ author: newAuthor });
  };
  changeTitle = (value) => {
    const newTitle = value;
    this.setState({ title: newTitle });
  };
  changePublished = (value) => {
    const newPublished = value;
    this.setState({ published: newPublished });
  };

  //submit form
  onSubmitForm = async (event) => {
    try {
      const body = {
        title: this.state.title,
        author: this.state.author,
        published: this.state.published,
      };

      const response = await fetch("http://localhost:5000/add-a-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-center mt-5">the Bookstore</h1>
        <hr />
        <form className="d-flex mt-5" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={(event) => this.changeTitle(event.target.value)}
            placeholder="title"
          />
          <input
            type="text"
            className="form-control"
            value={this.state.author}
            onChange={(event) => this.changeAuthor(event.target.value)}
            placeholder="author"
          />
          <input
            type="text"
            className="form-control"
            value={this.state.published}
            onChange={(event) => this.changePublished(event.target.value)}
            placeholder="published"
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
