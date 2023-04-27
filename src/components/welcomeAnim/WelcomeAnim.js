import { Canvas } from '@react-three/fiber'
import styles from './WelcomeAnim.module.sass'
import { CycleRaycast, Plane, meshPhongMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'

export default function WelcomeAnim() {
  const [mouse, setMouse] = useState({x: 0, y: 0})

  const mouseMove = (e) => {
    setMouse({
      x: (e.clientX / innerWidth) * 2 - 1,
      y: -(e.clientY / innerHeight) * 2 + 1
    })
  }

  return (
    <div className={styles.container} onMouseMove={mouseMove}>
      <Canvas>
        <CycleRaycast
          keyCode={9} // Keyboard events (default: 9 [Tab])
          onChanged={(objects, cycle) => console.log(objects, cycle)}
          onClick={(objects, cycle) => console.log(objects, cycle)}
        />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, -1]} />
        <directionalLight position={[0, -1, 1]} />
        <mesh>
          <Plane args={[400, 400, 50, 50]} width={400} height={400} widthSegments={50} heightSegments={50}>
            <meshPhongMaterial color="hotpink" />
          </Plane>
        </mesh>
      </Canvas>
    </div>
  )
}