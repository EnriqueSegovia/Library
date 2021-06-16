const ADD_SECTION = 'section/add'
const SELECT_SECTION = 'section/select'

/*
id
name
*/

export const addSection = payload => ({
    type: ADD_SECTION,
    payload: {
        ...payload,
        id: Math.random().toString(36),
    }
})

export const selectSection = payload => ({
    type: SELECT_SECTION,
    payload,
})

const initialState = {
    data: [{ id: 1, name: 'Default'}],
    selected: 1,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SECTION:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case SELECT_SECTION: 
            return {
                ...state,
                selected: action.payload,
                selectedStyle: [{backgroundColor: "#3f454e", color: "#fff", borderColor: "#1a1e21"}]
            }
    
        default:
            return state
    }
}