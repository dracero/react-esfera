import React, { useRef} from "react";
import {useGLTF } from "@react-three/drei";
//import { VRCanvas } from "@react-three/xr";

const Move  = (props) => {
  const group = useRef();
  const { nodes, materials} = useGLTF("/ejeConVector.glb");
  //const { actions } = useAnimations(animations, group);

  //acá es donde tengo que poner las funciones para ir g
  const rozamieto = 
     <mesh
     name="Cylinder005"
     castShadow
     receiveShadow
     geometry={nodes.Cylinder005.geometry}
     material={materials["Material.003"]}
     position={[-6.17, -0.02, -3.17]}
     rotation={[-1.57, 0.01, -0.04]}
     scale={[1.04, 1.16, 1]}
   />
  return (
    <group ref={group} {...props} dispose={null}  position = {[2, -5, -1]}>
    <group name="Scene">
      <group
        name="Plane"
        position={[-5.29, 10.59, -7.28]}
        rotation={[1.58, 0.01, -1.56]}
      />
      <mesh
        name="Cylinder001"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.004"]}
        position={[-3.6, 2.09, -2.01]}
        rotation={[1.58, 0.01, -1.56]}
        scale={[1, 0.48, 1]}
      />
      <mesh
        name="Cylinder"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.007"]}
        position={[-0.05, 2.1, -2.02]}
        rotation={[0.01, -0.02, -1.57]}
        scale={[1.04, 1.16, 1]}
      />
      <mesh
        name="Cylinder002"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.006"]}
        position={[-3.5, 0.6, -2.05]}
        rotation={[-0.08, 1.15, -3.06]}
        scale={[1.04, 1.16, 1]}
      />
      <mesh
        name="Cylinder004"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.005"]}
        position={[-3.58, 3.55, -2.12]}
        rotation={[-0.05, 0.01, 0.02]}
        scale={[1.04, 1.16, 1]}
      />
       {rozamieto}
      <mesh
        name="Cylinder003"
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.003"]}
        position={[-1.25, 0, -2.84]}
        rotation={[-1.57, 0.01, -0.04]}
        scale={[1.04, 1.16, 1]}
      />
    </group>
  </group>
  );
}

useGLTF.preload("/ejeConVector.glb");


export default Move
