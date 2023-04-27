import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user' 
import notifsReducer from './slices/notifs' 
import navbarReducer from './slices/navbar' 
import nftsReducer from './slices/nfts'
import tutosReducer from './slices/tutos'
import animReducer from './slices/anim'
import scrollReducer from './slices/scroll'

const store = configureStore({
  reducer: {
    user: userReducer,
    notifs: notifsReducer,
    navbar: navbarReducer,
    nfts: nftsReducer,
    tutos: tutosReducer,
    anim: animReducer,
    scroll: scrollReducer
  }
})

export default store