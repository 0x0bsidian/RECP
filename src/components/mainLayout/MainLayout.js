import styles from './MainLayout.module.sass';
import { useDispatch, useSelector } from 'react-redux'
import Header from '@/components/header/Header';
import { useEffect, useState } from 'react';
import Invert from '@/components/Invert/Invert';
import { gsap } from 'gsap/dist/gsap';
import Navbar from '@/components/navbar/Navbar';
import WelcomeAnim from '@/components/welcomeAnim/WelcomeAnim';
import City from '@/components/city/City';
import Tuto from '@/components/tuto/Tuto';
import Overlay from '@/components/overlay/Overlay';
import Notifs from '../notifs/Notifs';
import anim, { selectAll } from '../../../store/slices/anim';
import { selectScrollTop, setScrollTop } from '../../../store/slices/scroll';
import { selectCurrent } from '../../../store/slices/tutos';

export default function MainLayout({ children }) {
  const [invertPos, setInvertPos] = useState({ x: 0,  y: 0})
  const [tl, setTl] = useState(null)

  const dispatch = useDispatch()
  const scrollTop = useSelector(selectScrollTop)
  const animAll = useSelector(selectAll)
  const current = useSelector(selectCurrent)

  useEffect(() => {
    const _tl = gsap.timeline();

    _tl.fromTo('.header', {
      opacity: 0,
      yPercent: -100
    },{
      yPercent: 0,
      opacity: 1,
      duration: 1,
    })
    .fromTo('.header .title', {
      xPercent: -100,
      opacity: 0,
    },{
      xPercent: 0,
      opacity: 1,
      duration: 1
    })
    .reversed(current != 0 ? true : false);
    setTl(_tl)
  }, [])

  useEffect(() => {
    if (tl && animAll)
      tl.play();
  }, [animAll])

  const onMouseMove = (e) => {
    e.preventDefault()
    setInvertPos({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollTop(window.scrollY));
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }} /* onMouseMove={onMouseMove} */
      >
          <Overlay />
          {/* <Invert pos={invertPos}/> */}
          {/* <City /> */}
          <Navbar />
          <Header />
          {children}
        </div>
        <Notifs />
    </>
  )
}
  