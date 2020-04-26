import * as types from './../const/index'

export const onUpdateStatus = (id) => {
  return {
    type: types.TOGGLE_STATUS,
    id
  }
}
export const sortTable = (sort) => {
  return {
    type: types.SORT,
    sort
  }
}
export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
}

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}
export const deleteTask = (taskId) => {
  return {
    type: types.DELETE_TASK,
    taskId
  }
}

export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task
  }
}

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task
  }
}
export const showForm = (status) => {
  return {
    type: types.SHOW_FORM,
    status
  }
}
export const filterTask = (filter) => {
  return {
    type: types.FILTER_TASK,
    filter
  }
}
export const searchTask = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword
  }
}