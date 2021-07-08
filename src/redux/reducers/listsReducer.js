import {CONSTANTS} from '../actions'

let listId = 2
let todoId = 5

const initialState = [
  {
    title: 'To Do',
    id: 0,
    todos: [
      {
        id: 0,
        text: 'bla bla bla'
      },
      {
        id: 1,
        text: 'some text'
      },
    ]
  },
  {
    title: 'In process',
    id: 1,
    todos: [
      {
        id: 0,
        text: 'bla bla bla'
      },
      {
        id: 1,
        text: 'some text'
      },
    ]
  },
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        id: listId,
        todos: [],
      }
      listId += 1
      return [...state, newList]
    
    case CONSTANTS.ADD_TODO:
      const newTodo = {
        text: action.payload.text,
        id: todoId,
      }
      todoId += 1

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            todos: [...list.todos, newTodo]
          }
        } else {
          return list
        }
      })

      return newState
    
    default:
      return state
  }
}

export default listsReducer