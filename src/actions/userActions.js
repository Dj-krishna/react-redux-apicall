import { getUserApi } from '../Api/api';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../userTypes/userTypes"

 
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => dispatch => {
        dispatch(fetchUsersRequest)
        getUserApi().then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        }).catch(err => {
            const errorMsg = err.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }

