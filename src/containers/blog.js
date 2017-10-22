import React, {Component} from 'react';
import {connect} from 'react-redux';

class Blog extends Component{
    render(){
        if(!this.props.blog){
            return <div>Select a blog.</div>
        }

        return (
            <div>
                <h1>{this.props.blog.title}</h1>
                <div>{this.props.blog.content}</div>
            </div>
        ); 
    };
}

function mapStateToProps(state){
    return {
        blog: state.blog
    };
}

export default connect(mapStateToProps)(Blog);