import {GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR} from '../types';

const initialState = {
    isLoading: false,
    error: '',
    fetchedComments: [],   
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMMENTS:
            return {...state, 
                isLoading: true}

        case GET_COMMENTS_SUCCESS:
            return {...state,
                isLoading: false,
                fetchedComments: action.payload          
            }

        case GET_COMMENTS_ERROR:
            return {...state,
                isLoading: false,
                error: action.payload     
            }
        default: return state
    }
}