import {CONSTANTS} from '../actions'

let listId = 2
let todoId = 5

const initialState = [
  {
    title: 'To Do',
    id: `list${0}`,
    todos: [
      {
        id: `todo${0}`,
        text: 'bla bla bla'
      },
      {
        id: `todo${1}`,
        text: 'some text'
      },
    ]
  },
  {
    title: 'In process',
    id: `list${1}`,
    todos: [
      {
        id: `todo${2}`,
        text: 'bla bla bla'
      },
      {
        id:  `todo${3}`,
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
        id: `list${listId}`,
        todos: [],
      }
      listId += 1
      return [...state, newList]
    
    case CONSTANTS.ADD_TODO:
      const newTodo = {
        text: action.payload.text,
        id:  `todo${todoId}`,
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
    
    case CONSTANTS.DRAG_OCCURED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload

      const newTodoState = [...state]

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const todo = list.todos.splice(droppableIndexStart, 1)
        list.todos.splice(droppableIndexEnd, 0, ...todo)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id)
        
        const todo = listStart.todos.splice(droppableIndexStart, 1)

        const listEnd = state.find(list => droppableIdEnd === list.id)

        listEnd.todos.splice(droppableIndexEnd, 0, ...todo)

      }

      return newTodoState
    
    default:
      return state
  }
}

export default listsReducer