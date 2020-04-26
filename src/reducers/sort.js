import * as types from './../const/index'
var initialState = {
  by: 'name',
  value: 1
}

var sortReducer = (state = initialState, action) => {
  if ( action.type === types.SORT ) {
    let { by, value } = action.sort
    state = {
      by,
      value
    }
    return {...state}
  }
  return state
}
export default sortReducer