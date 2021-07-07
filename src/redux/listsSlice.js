import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lists:  [
  {
    id: 'list1',
    title: 'To Do',
    todos: [
      {
        id: 'todo1',
        title: 'Do grocery',
      },
      {
        id: 'todo2',
        title: 'Do laundry',
      },
      {
        id: 'todo3',
        title: 'Organize meeting',
      },
    ]
  },
  {
    id: 'list2',
    title: 'In Process',
    todos: [
      {
        id: 'todo1',
        title: 'Do grocery',
      },
    ]
  },
]
}

export const listSlice = createSlice({
  name: 'listsToolkit',
  initialState,
  reducers: {
    addList(state, action) {
      state.lists.push({title: action.payload})
    },
    generateListId(state, action) {
      state.lists.push({id: action.payload})
    }
  },
})

export const { addList, generateListId} = listSlice.actions

export default listSlice.reducer