// How to do something
/**
 * reducer:
 * - a function with parameters(state=initialState, action)
 * - we can use JS Switch for different action
 * - export the reducer
 */
const initialState = {
    items: [], // many posts
    item: {}  // single post
}

export default function(state=initialState, action) {
    switch (action.type) {
        case "FETCH_POSTS":
            return {
                ...state,
                items: action.payload
            }
        case "NEW_POST":
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

