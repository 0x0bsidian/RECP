import { createSlice } from "@reduxjs/toolkit"

const animSlice = createSlice({
  name: 'anim',
  initialState: {
    all: false,
  },
  reducers: {
    setAll(state, { payload }) {
      state.all = payload;
    }
  },
})


// selectors
export const selectAll = state => state.anim.all

//actions
export const { setAll } = animSlice.actions

export default animSlice.reducer