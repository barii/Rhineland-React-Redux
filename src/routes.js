import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Blogs from './containers/blogs';
import Blog from './containers/blog';
import BlogAdd from './components/blog_add';
import BlogShow from './components/blog_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Blogs} />
        <Route path="new" component={BlogAdd} />
        <Route path="blog/:id" component={BlogShow} />
    </Route>
);