import React from 'react';
//import books as a child of this class
import Books from './books';
class Read extends React.Component {
  constructor(props) {
    super(props);
    //initialise our state
    this.state = {books:[
      {
      "title": "",
      "isbn": "",
      "pageCount": 0,
      "thumbnailUrl": "",
      "status": "",
      "authors": [],
      "categories": []
      }
      ]}
  }

  componentDidMount() {
    // Get books from API linked and assign it to state
    fetch('https://jsonblob.com/api/jsonblob/1027219693823606784')
      .then(response => response.json())
      .then(data => this.setState({books: data}));
  }
  render() {
    return (
      <div>
        {/* pass down our book information down to the books.js file */}
        <h1><Books books={this.state.books}></Books></h1>
      </div>
    );
  }
}

export default Read; 