import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div>
                <Link to='/books'>
                    <a>SEARCH BOOKS</a>
                </Link>
                <Link>
                    <a>My LIBRARY</a>
                </Link>
            </div>
        )
    }
}
