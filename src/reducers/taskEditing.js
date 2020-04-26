import { EDIT_TASK } from './../const/index'
var initialState = {}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TASK :
      state = action.task
      return {...state}
    default: return state
  }
  return state

}
export default myReducer