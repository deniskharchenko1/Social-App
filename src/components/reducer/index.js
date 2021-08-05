
const initialState = {
    peopleList: [],
    postList: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PEOPLELIST_LOADED':
            return {
                peopleList: action.payload
            };
        default: 
            return state;
    }

}

export default reducer;