import React, { Component } from 'react';
import axios from 'axios';

export default class BookInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        axios.get('http://localhost:4000/api/describeBook').then(response => this.setState({ data: response.data })).catch();
         
    }
    
    render() {
        console.log(this.state.data.volumeInfo)
        return (
            <div>
               <p>{this.state.data.kind}</p>
               <img src={this.state.data.volumeInfo?.imageLinks.smallThumbnail} />
               <p>{this.state.data.volumeInfo?.title}</p>
               <p>{this.state.data.volumeInfo?.authors}</p>
               <p>{this.state.data.volumeInfo?.description}</p>
               <p>{this.state.data.volumeInfo?.publishedDate}</p>
            </div>
        )
    }
}