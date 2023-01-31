import { Cloud, Float, MeshDistortMaterial } from "@react-three/drei";
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
      let randX = randInt(-50, 50);
      let randY = randInt(-30, 30);
      let randZ = randInt(-15, -10);
      let randSize = randInt(2, 3)
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
  const randDist = randInt(.4, .5);
  const randSpeed = randInt(1, 3)
  const randRad = randInt(.5, 1);
  const randEmis = randInt(10, 100);


  return (
    <Float>
      <mesh castShadow receiveShadow {...props} >
        <MeshDistortMaterial
          color="#ffffff"
          emissive='#ffffff'
          emissiveIntensity={randEmis}
          distort= {randDist}
          speed={randSpeed}
          radius={randRad}
        />
        <sphereGeometry />
      </mesh>
    </Float>
  )


}


export default Background;
