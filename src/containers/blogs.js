import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBlog, getBlogs} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class Blogs extends Component{
    componentWillMount(){
        this.props.getBlogs();
    }
    renderList(){
        return this.props.blogs.map((blog) => {
            return (
                <li key={blog.id}
                    onClick={() => this.props.selectBlog(blog)}
                    className="list-group-item">
                    <Link to={"blog/" + blog.id}>
                        {blog.title}
                    </Link>
                </li>
            );
        });
    }

    render(){
        return (
        <div>
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
            <div className="text-xs-right">
                <Link to="new" className="btn btn-primary">
                    Add New Blog Post
                </Link>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        blogs: state.blogs
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBlog: selectBlog, getBlogs: getBlogs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);