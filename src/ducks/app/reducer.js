import { CHANGE_SEARCH_TERM } from './actions'

const initialState = {
  searchTerm: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm
      }

    default:
      return state
  }
}
