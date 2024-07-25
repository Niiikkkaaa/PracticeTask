import { configureStore } from '@reduxjs/toolkit';

import tabsSlice from './slices/tabsSlice';
import todosSlice from './slices/todosSlice';

export const store = configureStore({
  reducer: {  todos: todosSlice.reducer, tabs: tabsSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>