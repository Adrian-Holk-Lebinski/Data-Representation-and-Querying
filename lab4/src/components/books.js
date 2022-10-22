import React from 'react';
//import bookItem as a child of this class
import BookItem from './bookItem';

class Books extends React.Component {
    
  render() {
    // Map each book to a seperate BookItem and pass down all the information for the specific book
    return this.props.books.map(
        (book)=>{
            return <BookItem book={book}></BookItem>
        }
    );
  }
}

export default Books; 