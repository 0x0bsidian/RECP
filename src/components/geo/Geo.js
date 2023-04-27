import styles from './Geo.module.sass';

export default function Geo({ src, pos, size }) {
  return (
    <div className={styles.geo} style={{
      backgroundImage: `url(${src})`,
      left: `${pos.x}`,
      top: `${pos.y}`,
      width: `${size.w}`,
      height: `${size.h}`,
    }}></div>
  )
}