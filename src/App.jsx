import React, { useRef } from "react";
import Move from "./Move";
import { OrbitControls, useGLTF,} from "@react-three/drei";
import { VRCanvas } from "@react-three/xr";
import { Button } from "@mui/material";
//import { Canvas } from "react-three-fiber";

const App  = (props) => {
  return (
  <div class="boardCanvas"
  style={{ width: "80vw", height: "40vw" }} > 
  <Button variant="outlined">Rozamiento</Button>
  <p></p>
  <Button variant="outlined">Normal</Button>
  <p></p>
  <Button variant="outlined">Peso</Button>
  <p></p>
  <Button variant="outlined">Torque</Button>
  <VRCanvas>
      <ambientLight />
      <spotLight />
       <Move />
    <OrbitControls  />
  </VRCanvas> 
</div>
  );
}

export default App
