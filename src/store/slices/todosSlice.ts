import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

import { INoteProps } from 'pages/BaseLayout/types';

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: {
    items: [] as Array<INoteProps>,
  },
  reducers: {
    addNote: (state, action) => {
      state.items = [{id: uuidv4(), note: action.payload, isActive: true}, ...state.items]
    },
    clearNote: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCompletedNotes: (state) => {
      state.items = state.items.filter((item) => item.isActive);
    },
    updateNoteStatus: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.isActive = !item.isActive;
        }
        return item;
      })
    }
  },
})


export const { addNote, clearNote, clearCompletedNotes, updateNoteStatus } = todosSlice.actions

export default todosSlice;


