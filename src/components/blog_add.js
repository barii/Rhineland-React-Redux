import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createBlog} from '../actions/index';


class BlogAdd extends Component{
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createBlog(props)
        .then(() => {
            this.context.router.push('/');
        });
    }

    render(){
        const { fields:{ title, content }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <h3>Add New Blog Post</h3>
               <div className="form-group">
                   <label>Title</label>
                   <input type="text" className="form-control" {...title}/>
               </div>

               <div className="form-group">
                   <label>Content</label>
                   <textarea type="text" className="form-control" {...content}/>
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        ); 
    };
}

export default reduxForm({
    form: 'BlogAddForm',
    fields: ['title', 'content']
}, null, { createBlog })(BlogAdd);