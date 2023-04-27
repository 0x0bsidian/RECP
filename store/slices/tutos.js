import { createSlice } from "@reduxjs/toolkit"

const tutosSlice = createSlice({
  name: 'tutos',
  initialState: {
    current: 1,
    overlay: false,
    password: 'ad9d7ef14370167f68fdd7a058b1c0a0b3ebc4414a7a4f40ce3fb2e9dd0eea7b0bea1a9f9aae0194e0e50382a86739e02005fbfc82a826eb46d391c7838b0a1d'
  },
  reducers: {
    next(state) {
      state.current++;
    },
    prev(state) {
      state.current--;
    },
    setCurrent(state, { payload }) {
      state.current = payload
      if (payload == 0) {
        document.cookie = "tutorial_passed=true; SameSite=None; Secure";
      }
    },
    setOverlay(state, { payload }) {
      state.overlay = payload
    }
  },
})


// selectors
export const selectCurrent = state => state.tutos.current
export const selectOverlay = state => state.tutos.overlay
export const selectPassword = state => state.tutos.password

//actions
export const { next, prev, setCurrent, setOverlay } = tutosSlice.actions

export default tutosSlice.reducer