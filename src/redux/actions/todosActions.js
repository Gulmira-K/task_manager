import { CONSTANTS } from './index'

export const addTodo = (listId, text) => {
  return {
    type: CONSTANTS.ADD_TODO,
    payload: { text, listId}
  }
}

export const editTodo = (todoId, listId, newText) => {
  return {
    type: CONSTANTS.EDIT_TODO,
    payload: {
      todoId,
      listId,
      newText
    }
  }
}

export const deleteTodo = (todoId, listId) => {
  return {
    type: CONSTANTS.DELETE_TODO,
    payload: {
      todoId,
      listId
    }
  }
}