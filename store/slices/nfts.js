import { createSlice } from "@reduxjs/toolkit"
import { nfts } from "/data/nfts.json"

const nftsSlice = createSlice({
  name: 'nfts',
  initialState: {
    all: nfts,
  },
  reducers: {
    changeOwner: (state, {payload}) => {
      const { nft, newOwner } = payload
      console.log(state.all.find((n) => n.id == nft.id), nft, newOwner)
      state.all.find((n) => n.id == nft.id).owner = newOwner
    }
  },
})


// selectors
export const selectAll = state => state.nfts.all
export const selectByOwner = ({address}) => (state) => {
  if (!address || address === '')
    return []
  return state.nfts.all.filter(nft => nft.owner == address)
}

//actions
export const { changeOwner } = nftsSlice.actions

export default nftsSlice.reducer