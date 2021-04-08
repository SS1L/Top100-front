import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
import './style.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className='menu'>
                <div>
                    <Link className='list-item' to='/books'>
                        SEARCH BOOKS
                    </Link>
                </div>
                <div>
                    <Link className='list-item'>
                        My LIBRARY
                    </Link>
                </div>
            </div>
        )
    }
}
