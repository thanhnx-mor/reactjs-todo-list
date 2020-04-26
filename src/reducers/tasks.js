import * as types from './../const/index'
import helpers from "./../utils/index"
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : []
var tasksReducer = ( state = initialState, action ) => {
  let index = ''
  switch (action.type) {

    case types.LIST_ALL :
      return state

    case types.ADD_TASK :
      let { name, id, status } = action.task
      state.push({
        name: name,
        id: helpers.generateID(),
        status
      })
      helpers.updateLocalStorage(state)
      return [...state]

    case types.DELETE_TASK :
      index = helpers.findIndex(action.taskId, state)
      state.splice(index, 1)
      helpers.updateLocalStorage(state)
      return [...state]

    case types.TOGGLE_STATUS :
      index = helpers.findIndex(action.id, state)
      state[index] = { ...state[index], status: !state[index].status }
      helpers.updateLocalStorage(state)
      return [...state]

    case types.UPDATE_TASK :
      index = helpers.findIndex(action.task.id, state)
      state[index] = action.task
      helpers.updateLocalStorage(state)
      return [...state]

    default: return state
  }
  return state
}
export default tasksReducer

