import { createSlice } from "@reduxjs/toolkit"

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isNavCollapsed: false,
  },
  reducers: {
    setIsNavCollapsed(state, {payload}) {
      state.isNavCollapsed = payload.isNavCollapsed;
    }
  },
})


// selectors
export const selectIsNavCollapsed = state => state.navbar.isNavCollapsed

//actions
export const { setIsNavCollapsed } = navbarSlice.actions

export default navbarSlice.reducer