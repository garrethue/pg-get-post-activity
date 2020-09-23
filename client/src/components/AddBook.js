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

  render() {
    return (
      <div>
        <h1 className="text-center mt-5">Add a Book:</h1>
        <form className="d-flex mt-5">
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
            value={this.state.title}
            onChange={(event) => this.changeTitle(event.target.value)}
            placeholder="title"
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
