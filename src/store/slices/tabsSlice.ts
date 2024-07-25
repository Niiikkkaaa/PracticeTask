import { createSlice } from '@reduxjs/toolkit'

const tabsSlice = createSlice({
  name: 'tabsSlice',
  initialState: {
    activeTab: 0,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab =  action.payload;
    }
  },
})


export const { setActiveTab } = tabsSlice.actions

export default tabsSlice;
