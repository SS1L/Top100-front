import React, { Component } from "react";
import axios from 'axios';
import Data from './Data';
import './style.css';


export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            data: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        let data = this.state.value
        axios.get('http://localhost:4000/api/book', { params: { data } }).then(response => this.setState({ data: response.data.items })).catch();

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        console.log(this.state.data)
        let book = this.state.data.map((item) => {
            return (
                <div className='book-info'>
                    <div>
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} />
                    </div>
                    <div>
                        <h1 className='book-name'>{item.volumeInfo.title}</h1>
                        <p className='book-author'>by {item.volumeInfo.authors}</p>
                        <p>{item.volumeInfo.categories}</p>
                        <p>{item.volumeInfo.description}</p>
                    </div>

                </div>
            )
        })
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} />
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <div>
                    {book.length ? book : <p>empty</p>}

                    {/* {this.state.data ? (
                        <p>{this.state.data.length}</p>
                    ): (
                        <p>Empty</p>
                    )}
                    { {this.state.data((book) => (
                        console.log(book)
                    ))} } */}
                </div>
            </div>
        )
    }
}