const ADD_BOOKS = 'books/add'

/*
id
name
section_id
*/

export const addBooks = payload => ({
    type: ADD_BOOKS,
    payload: {
        ...payload,
        id: Math.random().toString(36),
    }
})

const initialState = {
    data: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOKS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
    
        default:
            return state
    }
}