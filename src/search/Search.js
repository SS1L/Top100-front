import React, { Component } from "react";
import axios from 'axios';
import { FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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

    showId(bookId) {
        console.log(bookId);
        localStorage.setItem('bookId', bookId)
    }

    render() {
        console.log(this.state.data)
        let book = this.state.data.map((item) => {
            return (
                <div className='book-info' key={item.id}>
                    <div>
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} />
                    </div>
                    <div >
                        <h1 className='book-name'>{item.volumeInfo.title}</h1>
                        <p className='book-author'>by {item.volumeInfo.authors}</p>
                        <p>{item.volumeInfo.categories}</p>
                        <Link to={`books/${item.id}`}>
                            <button onClick={() => { this.showId(item.id) }}>Show Info</button>
                        </Link>
                        {/* <FiMoreVertical key={item.id}/> */}
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
                </div>
            </div>
        )
    }
}