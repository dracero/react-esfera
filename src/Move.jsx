import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import {useGLTF } from "@react-three/drei";
import {useSelector} from 'react-redux'
import { useController } from "@react-three/xr"
import { useBox } from "@react-three/cannon"
import * as THREE from "three"


const Move  = () => {
  const model = useRef();
  const rightController = useController("right")
  const [ref, api] = useBox(() => ({ type: "Kinematic" }))
  //Acá importa el color y las geometrías, para cambiar el color hay que cambiar el tipo de material
  const { nodes, materials} = useGLTF("/ejeConVector.glb");
  //Acá estoy usando Hooks de Redux
  const normal = useSelector(state => state.vector.disnor)
  const  torque = useSelector(state => state.vector.distor)
  const  peso = useSelector(state => state.vector.diswei)
  const  friccion = useSelector(state => state.vector.disfric)
  //const { actions } = useAnimations(animations, group);
  useFrame((state) => {
    if (!rightController) {
      return
    }
    const { grip: controller } = rightController
    const forward = new THREE.Vector3(1, 1, 1)
    forward.applyQuaternion(controller.quaternion)
    const position = new THREE.Vector3().copy(controller.position).add(forward)
    api.position.set(position.x, position.y, position.z)
    api.rotation.set(controller.rotation.x, controller.rotation.y, controller.rotation.z)
  })

 return (
 <mesh ref={ref} dispose={null} scale={[1, 1, 1]}> 
  <group >
    <group name="Scene" dispose={null} position = {[2, 0, -5]} ref={model}>
        <group
          name="Plane"
          position={[-5.29, 10.59, -7.28]}
          rotation={[1.58, 0.01, -1.56]}
        />
        <mesh
          name="Cylinder001" //eje con ruedas
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.004"]}
          position={[-1.91, 0.72, -0.29]}
          rotation={[1.58, 0.01, -1.56]}
          scale={[1, 0.48, 1]}
        />
        {torque ?<mesh //torque
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.007"]}
          position={[1.64, 0.73, -0.3]}
          rotation={[0.01, -0.02, -1.57]}
          scale={[1.04, 1.16, 1]}
        /> : null
        }
        {peso ?
         <mesh
         name="Cylinder002" //peso
         castShadow
         receiveShadow
         geometry={nodes.Cylinder002.geometry}
         material={materials["Material.006"]}
         position={[-1.81, -0.77, -0.33]}
         rotation={[-0.08, 1.15, -3.06]}
         scale={[1.04, 1.16, 1]}
       />: 
        null}
        {normal ? 
        <group>
        <mesh
          name="Cylinder004" //normal
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.005"]}
          position={[-4.75, -0.04, -0.49]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />,
        <mesh
          name="Cylinder011" //normal
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["Material.005"]}
          position={[0.63, -0.01, -0.25]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />,
        <mesh
          name="Cylinder006" //normal
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.001"]}
          position={[-4.75, -0.04, -0.49]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />,
        <mesh
          name="Cylinder008" //nomal
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.008"]}
          position={[-4.75, -0.04, -0.49]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />,
                 <mesh
          name="Cylinder009" //normal
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["Material.009"]}
          position={[-4.75, -0.04, -0.49]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />,
        <mesh
          name="Cylinder010" //norma
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["Material.010"]}
          position={[-4.75, -0.04, -0.49]}
          rotation={[0.41, 0.01, 0.02]}
          scale={[1.04, 1, 0.97]}
        />
        </group>: null}
        {friccion ?
        <group>
        <mesh
          name="Cylinder007" //rozamiento
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.002"]}
          position={[-4.48, -0.73, -2.12]}
          rotation={[-1.12, 0.01, -0.04]}
          scale={[1.04, 1.16, 1]}
        />
        <mesh
          name="Cylinder005" //rosamiento
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.003"]}
          position={[-4.48, -0.73, -2.12]}
          rotation={[-1.12, 0.01, -0.04]}
          scale={[1.04, 1.16, 1]}
        />
         <mesh
          name="Cylinder003" //rosamiento
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.003"]}
          position={[0.52, -0.76, -1.86]}
          rotation={[-1.12, 0.01, -0.04]}
          scale={[1.04, 1.16, 1]}
        />
       </group>:
       null} 
      </group> 
  </group> 
  </mesh>
  );}

useGLTF.preload("/ejeConVector.glb");


export default Move
