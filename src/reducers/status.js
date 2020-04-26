import * as types from './../const/index'
var initialState = {
  isShowForm: false
}

var statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_FORM :
      state.isShowForm = action.status
      return {...state}
    default: return state
  }
  return state

}
export default statusReducer