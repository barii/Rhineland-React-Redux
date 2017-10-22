import {BLOG_SELECTED, GET_BLOG} from '../actions/index';

export default function(state = null, action){
    switch(action.type){
        case BLOG_SELECTED:
            return action.payload;
        case GET_BLOG:
            return action.payload.data;
    }
    return state;
}