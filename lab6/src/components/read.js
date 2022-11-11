import axios from 'axios';
import React from 'react';
//import books as a child of this class
import Books from './books';
class Read extends React.Component {
  constructor(props) {
    super(props);
    //initialise our state
    this.state = {
      books: [
        {
          "title": "",
          "isbn": "",
          "pageCount": 0,
          "thumbnailUrl": "",
          "status": "",
          "authors": [],
          "categories": []
        }
      ]
    }
  }

  componentDidMount() {
    // Get books from API linked and assign it to state
    axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({
                books:response.data.mybooks
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    
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