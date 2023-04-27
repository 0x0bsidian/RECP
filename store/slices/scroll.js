import { createSlice } from "@reduxjs/toolkit"

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scrollTop: 0,
  },
  reducers: {
    setScrollTop(state, { payload }) {
      state.scrollTop = payload;
    },
    setWindowScrollTop(state, { payload }) {
      if (payload < window.innerHeight / 2)
        payload = 0

      window.scrollTo({
        top: payload - 50,
        behavior: 'smooth',
      });
      state.scrollTop = payload;
    }
  },
})


// selectors
export const selectScrollTop = state => state.scroll.scrollTop

//actions
export const { setScrollTop, setWindowScrollTop } = scrollSlice.actions

export default scrollSlice.reducer