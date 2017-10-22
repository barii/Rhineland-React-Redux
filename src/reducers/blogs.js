import {GET_BLOGS} from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case GET_BLOGS:
            return action.payload.data;
    }
    return state;
}