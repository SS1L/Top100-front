import React from 'react';
import { Route } from 'react-router-dom';
import Search from './search/Search';
import BookInfo from './search/BookInfo'

export default(
    <Route>
        <Route path='books' component={Search}/>
        <Route path='books/:id' component={BookInfo}/>
    </Route>
)