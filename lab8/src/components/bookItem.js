import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

class BookItem extends React.Component {
    render() {
        return (
            // Output all the information about the book in a card format
            <div>
                <Card className="text-center" >
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.book.author}</Card.Title>
                        <Card.Img src={this.props.book.cover} className="Book-img"/>
                    </Card.Body>
                    {/* Link to the edit page and pass ID of book with it */}
                    <Link to={'/edit/' + this.props.book._id} className = "btn btn-primary">Edit</Link>
                </Card>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
export default BookItem