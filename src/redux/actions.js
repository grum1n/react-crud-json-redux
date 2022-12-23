import * as types from './actionType';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

