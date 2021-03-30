import React, { Component } from 'react';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const data = this.state.data;
        console.log(data)
        return (
            <div>
                All work
            </div>
        )
    }
}