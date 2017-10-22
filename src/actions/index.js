import axios from 'axios';

export const BLOG_SELECTED = 'BLOG_SELECTED';
export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOG = 'GET_BLOG';
export const CREATE_BLOG = 'CREATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

const API_KEY = '76235476547';
const ROOT_URL = 'http://localhost:55397';
const API = 'post';

export function selectBlog(blog){
    return {
        type: BLOG_SELECTED,
        payload: blog
    };
}

export function getBlogs(){
    const response = axios.get(`${ROOT_URL}?key=${API_KEY}`);

    return {
        type: GET_BLOGS,
        payload: response
    };
}

export function createBlog(props){
    const response = axios.post(`${ROOT_URL}/${API}/?key=${API_KEY}`, props);

    return {
        type: CREATE_BLOG,
        payload: response
    };
}

export function getBlog(id){
    const response = axios.get(`${ROOT_URL}/${API}/?key=${API_KEY}&id=${id}`);
    
    return {
        type: GET_BLOG,
        payload: response
    };
}

export function deleteBlog(id){
    const response = axios.delete(`${ROOT_URL}/${API}/?key=${API_KEY}&id=${id}`);

    return {
        type: DELETE_BLOG,
        payload: response
    };
}