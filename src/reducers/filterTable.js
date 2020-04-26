import * as types from './../const/index'
var initialState = {
  filter: {
    name: '',
    status: -1
  },
  keywordSearch: ''
}
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TASK :
      state.filter = {
        name: action.filter.name,
        status: action.filter.status
      }
      return {...state}

    case types.SEARCH_TASK :
      state.keywordSearch = action.keyword
      return {...state}
    default: return state
  }
  return state

}
export default myReducer