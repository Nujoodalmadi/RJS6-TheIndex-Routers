import React, { Component } from "react";

import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  //   filterColor = color => {
  //     let filterColor = this.props.filteredBooks.filter(
  //       book => book.color === color
  //     );
  //   };

  render() {
    const colorName = this.props.match.params.colorName;
    let books = this.state.filteredBooks;

    if (colorName) {
      books = books.filter(book => book.color === colorName);
    }

    return (
      <div>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
