import * as types from './actionType';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER
});

const userAdded = () => ({
    type: types.ADD_USER
});

const getUser = (user) => ({
    type: types.GET_SINGEL_USER,
    payload: user,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log('resp :', resp)
            dispatch(getUsers(resp.data));
        }).catch(error => console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log('resp :', resp)
            dispatch(userDeleted());
            dispatch(loadUsers()); //update users data fron json server
        }).catch(error => console.log(error))
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((resp) => {
            console.log('resp :', resp)
            dispatch(userAdded());
            dispatch(loadUsers());
        }).catch(error => console.log(error))
    }
}

export const getSingelUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log('resp :', resp)
            dispatch(getUser(resp.data));
        }).catch(error => console.log(error))
    }
}