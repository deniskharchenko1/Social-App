import {GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR} from '../types';

const initialState = {
    isLoading: false,
    error: '',
    fetchedUsers: [],   // оставить ли название fetched или лучше get
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, 
                isLoading: true}
        case GET_USERS_SUCCESS:
            return {...state, 
                isLoading: false,
                fetchedUsers: action.payload  
            }
        case GET_USERS_ERROR:
            return {...state, 
                isLoading: false,
                error: action.payload,  
            }
        default: return state
    }
}