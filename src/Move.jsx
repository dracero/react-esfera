// i need to importo useThree to adjust the camera position
import * as THREE from "three";
import React, { useRef, useState, useEffect} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";

const Move = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/esfera.glb");
  const { actions } = useAnimations(animations, group);
  let [removeMesh, setRemoveMesh] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [inicio, setInicio] = useState(false);
 
  
  const removeMeshAfterFrames = () => {
    if (isPlaying) {
      setIsPlaying(false)
      actions["fall"].paused = true;
    } else {
      setIsPlaying(true)
      actions["fall"].paused = false;
    }
  }

  const reinicioMove = () => {
     actions["fall"].reset();
     setRemoveMesh(false)
  }

  useEffect(() => {
    actions["fall"].play();
    let camera = new THREE.OrthographicCamera(75, window.innerWidth / window.innerHeight, 2, 1);
  }, []);
  

 return (
  <group ref={group} {...props} dispose={null}>
   <group>
      <group name="Scene">
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          position={[0, 0.006, -0.558]}
          scale={2}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.001"]}
          position={[0.086, 2.486, -0.519]}
          scale={0.5}
        />
      </group>
    </group>
  <Html position={[2, 3, 0]}>
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <button onClick={removeMeshAfterFrames}>Movement</button>
          <button onClick={reinicioMove}>Reinicio</button>
        </div>
  </Html>
 </group>
 );
};//end move

useGLTF.preload("/esfera.glb");

export default Move;