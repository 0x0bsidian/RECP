import '@/styles/globals.css'
import '@/styles/classes.sass'
import store from '../../store/index'
import { Provider } from 'react-redux'
import Notifs from '../../src/components/notifs/Notifs';
import Header from '@/components/header/Header';
import { useEffect, useState } from 'react';
import Invert from '@/components/Invert/Invert';
import { gsap } from 'gsap/dist/gsap';
import Navbar from '@/components/navbar/Navbar';
import WelcomeAnim from '@/components/welcomeAnim/WelcomeAnim';
import MainLayout from '@/components/mainLayout/MainLayout';
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <Analytics />
      </MainLayout>
    </Provider>
  )
}
