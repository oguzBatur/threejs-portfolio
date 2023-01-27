import { Cloud, Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import { randInt } from "three/src/math/MathUtils"

interface IBackground {

  props?: JSX.IntrinsicElements['group'];
  ballCount: number
}

function Background({ props, ballCount }: IBackground) {
  const mapBalls = () => {
    const ballArray = new Array(ballCount)
    ballArray.fill(1);
    return ballArray.map((b, i) => {
      console.log('Ball: ', i);
      let randX = randInt(-10, 10);
      let randY = randInt(-20, 20);
      let randZ = randInt(-10, -5);
      let randSize = randInt(1, 3)
      return (
        <Ball key={`ball: ${i}`} scale={[randSize, randSize, randSize]} position={[randX, randY, randZ]} />
      )
    });
  }
  return (
    <group {...props}>
      {mapBalls()}
    </group>
  )


}


function Ball(props: JSX.IntrinsicElements['mesh']) {
  const randDist = randInt(.5, 1);
  const randSpeed = randInt(1, 3)
  const randEmis = randInt(50, 100);


  return (
    <Float>
      <mesh {...props} >
        <MeshDistortMaterial
          color="#ffffff"
          emissive='#ffffff'
          emissiveIntensity={randEmis}
          distort= {randDist}
          speed={randSpeed}
        />
        <sphereGeometry />
      </mesh>
    </Float>
  )


}


export default Background;
