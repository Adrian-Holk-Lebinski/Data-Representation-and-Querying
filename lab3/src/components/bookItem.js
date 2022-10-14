import React from "react";
import Card from 'react-bootstrap/Card';

class BookItem extends React.Component {
    render() {
        return (
            // Output all the information about the book in a card format
            <div>
                <Card className="text-center" >
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.book.authors[0]}</Card.Title>
                        <Card.Img src={this.props.book.thumbnailUrl} className="Book-img"/>
                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
export default BookItem