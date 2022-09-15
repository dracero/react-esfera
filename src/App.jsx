import React, { useRef } from "react";
import Move from "./Move";
import { OrbitControls, useGLTF,} from "@react-three/drei";
import { VRCanvas } from "@react-three/xr";
//import { Canvas } from "react-three-fiber";

const App  = (props) => {
  return (
   <VRCanvas>
      <ambientLight />
      <spotLight />
       <Move />
    <OrbitControls  />
  </VRCanvas>  
  );
}

export default App
