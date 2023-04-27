import { useEffect, useState } from 'react';
import styles from './Invert.module.sass';
import Particle from './Particle';

export default function Invert({ pos }) {
  const NUMBER_PARTICLE = 15;
  const [particles, setParticles] = useState([])
  // const [isInit, setIsInit] = useState(false)
  // let id = 0;

  // const addParticle = async () => {
  //   setParticles(prev => [...prev, id]);
  //   setTimeout(() => {
  //     setParticles(prev => prev.filter(particle => particle != id));
  //   }, 5000);
  //   id++
  // }

  useEffect(() => {
    // if (!isInit) {
    //   const id = setInterval(async () => {
    //     await addParticle()
    //   }, 1000);
    // }
  
    // setIsInit(true)
    // return () => {
    //   clearInterval(id);
    // }

    let tab = []
    for (let i = 0; i < NUMBER_PARTICLE; i++) {
      tab.push(i)
    }
    setParticles(tab)
  }, [])

  return (
      <div className={styles.invert} style={{
          left: pos.x,
          top: pos.y
      }}>
        {
          particles.map((particle, i) => <Particle key={i} x={Math.random() * 100} y={Math.random() * 100} size={Math.random() * 10 + 5} />)
        }
      </div>
  )
}