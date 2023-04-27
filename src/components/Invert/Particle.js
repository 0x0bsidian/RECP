import styles from './Invert.module.sass';

export default function Particle({ x, y, size }) {
  return (
      <div className={styles.particle} style={{
          transform: `translate(${x}px, ${y}px)`,
          width: `${size}px`,
          height: `${size}px`
      }}></div>
  )
}