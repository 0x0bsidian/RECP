import styles from './Tuto.module.sass';
import { AiOutlineClose } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { next, prev, selectCurrent, setCurrent, setOverlay } from '../../../store/slices/tutos';
import { selectScrollTop, setWindowScrollTop } from '../../../store/slices/scroll';

const LENGTH = 5;

export default function Tuto({ 
  id, 
  msg, 
  offset = {
    x: 50,
    y: 0
  }, 
  target, 
  getTarget,
  center = false,
  overlay = true,
  navigation = true,
  closable = true,
  children,
  delay = false,
  show = true
}) {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [pos, setPos] = useState({ x: '50%', y: '50vh' })

  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);
  const scrollTop = useSelector(selectScrollTop)

  useEffect(() => {
    if (current == id) {
      dispatch(setOverlay(overlay))

      if (delay) {
        setTimeout(() => {
          dispatch(next())
        }, delay)
      }
    }
  }, [current])

  useEffect(() => {
    if (getTarget)
      target = getTarget()
    if (target && target.current) {
      
      if (current == id) {
        setPos(target.current.getBoundingClientRect())
        target.current.style.zIndex = 102
      }
      else
        if (id != 8)
          target.current.style.zIndex = 0
    }
  }, [current, target, scrollTop])

  useEffect(() => {
    if (current == id && getTarget)
      dispatch(setWindowScrollTop(getTarget().current.getBoundingClientRect().y))
  }, [current])
  

  const fade = () => {
    setFading(true)

    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  return (
    <>
      {(visible && current == id && show) &&
        <div
          className={[styles.tuto, fading ? styles.fading : ''].join(' ')}
          style={{
            left: center ? '50vw' : pos.x + offset.x,
            top: center ? '50vh' : pos.y + offset.y,
            transform: center ? 'translate(-50%, -50%)' : ''
          }}
        >
          {closable &&
            <div
              className={styles.close}
              onClick={() => { dispatch(setCurrent(0)) }}
            >
              <AiOutlineClose />
            </div>
          }
          <p>{msg}</p>
          {children &&
            <div className={styles.content}>
              {children}
            </div>
          }
          {navigation && current != 1 &&
            <div className={styles.navigation}>
                <button 
                  className='btn btn-reverse'
                  onClick={() => { dispatch(prev()) }}
                >
                  <GrFormPrevious />
                </button>
                <div>
                  {
                    [...Array(LENGTH).keys()].map(i => (
                      <button 
                        key={i}
                        className={current == i + 1 ? styles.active : ""}
                        onClick={() => { dispatch(setCurrent(i + 1)) }}
                      ></button>
                    ))
                  }
                </div>
                {current != LENGTH &&
                  <button
                    className='btn'
                    onClick={() => { dispatch(next()) }}
                  >
                    <GrFormNext />
                  </button>
                }
            </div>
          }
        </div>
      }
    </>
  )
}
  