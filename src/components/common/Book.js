import React, {Component} from "react";
import PropTypes from "prop-types";
import Changer from "./Changer";

class Book extends Component {
  static propTypes = {
    book: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired
      }),
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      shelf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }),
    changeShelf: PropTypes.func.isRequired
  };
  
  render(){
    const { imageLinks, title, authors, shelf } = this.props.book;
    const { changeShelf, book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${imageLinks.smallThumbnail})` }}
            />
            <Changer
              defaultShelf={shelf}
              thisBook={book}
              changeShelf={changeShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors
              ? authors.map(author => (
                <span key={author} className="book-authors__author">
                  {author}
                </span>
              ))
              : null}
          </div>
        </div>
      </li>
    );
  }
}

export default Book