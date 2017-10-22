import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getBlog, deleteBlog} from '../actions/index';
import {Link} from 'react-router';

class BlogShow extends Component{
    componentWillMount(){
        this.props.getBlog(this.props.params.id);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onDeleteClick(){
        this.props.deleteBlog(this.props.params.id)
            .then(() => { this.context.router.push('/'); });
    }

    render(){
        if(!this.props.blog){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Back to Home</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
                <h1>{this.props.blog.title}</h1>
                <div>{this.props.blog.content}</div>
            </div>
        );
        
    }
}

function mapStateToProps(state){
    return { blog: state.blog };
}

export default connect(mapStateToProps, { getBlog, deleteBlog })(BlogShow);