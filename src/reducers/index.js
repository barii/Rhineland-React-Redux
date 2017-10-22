import { combineReducers } from 'redux';
import Blogs from './blogs';
import Blog from './blog';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  blogs: Blogs,
  blog: Blog,
  form: formReducer
});

export default rootReducer;
