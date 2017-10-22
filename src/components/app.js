import React, { Component } from 'react';
import Blogs from '../containers/blogs';
import Blog from '../containers/blog';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
