const initialState = {
    uid: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UID':
            return {
                ...state,
                uid: action.value,
            }
    }
    return state;
}

export default reducer;