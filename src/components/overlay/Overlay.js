import { useSelector } from 'react-redux';
import styles from './Overlay.module.sass';
import { selectCurrent, selectOverlay } from '../../../store/slices/tutos';
import { useEffect, useState } from 'react';

export default function Overlay() {
  const current = useSelector(selectCurrent)
  const overlay = useSelector(selectOverlay)

  // const [display, setDisplay] = useState('block')

  // useEffect(() => {
  //   if (overlay)
  //     setDisplay('block')
  //   else
  //     setTimeout(() => {
  //       setDisplay('none')
  //     }, 500);
  // }, [overlay, current])

  return (
    <>
    {current != 0 &&
      <div
        className={styles.overlay}
        style={{
          opacity: current != 0 && overlay ? 1 : 0,
        }}
      >
      </div>
    }
    </>
  )
}
  