import { CONSTANTS } from '../actions/index'

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_OCCURED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  }
}

export const editListTitle = (listId, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listId,
      newTitle
    }
  }
}

export const deleteList = listId => {
  return {
      type: CONSTANTS.DELETE_LIST,
      payload: {listId}
  }
}
