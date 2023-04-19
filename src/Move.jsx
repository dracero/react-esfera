import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";

const Move = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cupula.glb");
  const { actions } = useAnimations(animations, group);
  let [removeMesh, setRemoveMesh] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const removeMeshAfterFrames = () => {
    if (isPlaying) {
      console.log("llega")
      setIsPlaying(false)
      actions["movimiento"].paused = true;
    } else {
      setIsPlaying(true)
      actions["movimiento"].paused = false;
    }
  }

  const reinicioMove = () => {
     actions["movimiento"].reset();
     setRemoveMesh(false)
  }

  useEffect(() => {
    actions["movimiento"].play();
  },[]);

 return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="NurbsPath001"
          position={[0, 1.8, -3.27]}
          rotation={[0, 1.33, 0]}
          scale={[1.44, 1, 1.03]}
        >
          <group
            name="Sphere003"
            position={[-2.61, -0.35, 0.76]}
            rotation={[-2.39, 0.03, -1.49]}
            scale={[0.98, 0.7, 0.98]}
          >
            {!removeMesh && (
              <mesh
                name="Sphere006"
                castShadow
                receiveShadow
                geometry={nodes.Sphere006.geometry}
                material={materials["Material.004"]}
              />
            )}
            <mesh
              name="Sphere006_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere006_1.geometry}
              material={materials.bola}
            />
            {!removeMesh && (
              <mesh
                name="Sphere006_2"
                castShadow
                receiveShadow
                geometry={nodes.Sphere006_2.geometry}
                material={materials["Material.003"]}
              />
            )}
          </group>
        </group>
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={[0, -4.7, 0.26]}
          scale={2}
        />
      </group>
      <Html position={[0, 0, 0]}>
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <button onClick={removeMeshAfterFrames}>Movement</button>
          <button onClick={() => setRemoveMesh(true)}>Salida</button>
          <button onClick={reinicioMove}>Reinicio</button>
        </div>
      </Html>
    </group>
  );
};

useGLTF.preload("/cupula.glb");

export default Move;
