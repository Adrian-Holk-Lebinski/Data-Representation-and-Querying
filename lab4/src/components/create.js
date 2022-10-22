import React from "react";

export class Create extends React.Component {
    constructor(props) {
        super(props);
        //Binding handlesubmit and the changebook elements
        this.submit = this.submit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.changeCover = this.changeCover.bind(this);
        //define state
        this.state = {
            title: '',
            cover: '',
            author: '',
            Url: ''
        }
    }
    //to take the form
    submit(e) {
        e.preventDefault();
        console.log(`${this.state.title}, ${this.state.cover}, ${this.state.author}, ${this.state.Url} `)

        //reset form
        this.setState({
            title: '', 
            cover: '', 
            author: '', 
            Url: ''
        })
    }


    //functions to change book info
    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    changeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    changeUrl(e) {
        this.setState({
            Url: e.target.value
        })
    }
    changeCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    render() {
        return (
            <div style={{width: "40%"}}>

                <h3>Hello form create component </h3>
                <form onSubmit={this.submit}>

                    {/* Form for getting book info */}
                    <div className="form-group">

                        <label>Add Book Title: </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.changeTitle}/>

                        <label>Add Book Cover: </label>
                        <input type="text" className="form-control" value={this.state.cover} onChange={this.changeCover}/>

                        <label>Add Book Author: </label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.changeAuthor}/>

                        <label>Add Book url: </label>
                        <input type="text" className="form-control" value={this.state.Url} onChange={this.changeUrl}/>

                        {/* The submit button */}
                        <input type="submit" value="Submit" />

                    </div>
                </form>

            </div>
        );
    }
}