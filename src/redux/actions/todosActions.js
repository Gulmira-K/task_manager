import { CONSTANTS } from './index'

export const addTodo = (listId, text) => {
  return {
    type: CONSTANTS.ADD_TODO,
    payload: { text, listId}
  }
}