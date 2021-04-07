import React from 'react';
import { Route } from 'react-router-dom';
import Search from './search/Search';
import BookInfo from './search/BookInfo'

const history = createBrowserHistory();

export default(
    <Route history={history}>
        <Route path='books' component={Search}/>
        <Route path='books/:id' component={BookInfo}/>
    </Route>
)