import React, { useRef, useEffect, useState} from "react";
import Move from "./Move";
import { OrbitControls, useGLTF,} from "@react-three/drei";
import { VRCanvas } from "@react-three/xr";
import { Button } from "@mui/material";
//import { Canvas } from "react-three-fiber";
import {useDispatch} from 'react-redux'
import allActions from './actions/allActions'
import {Provider} from 'react-redux'
import store from "./store/store"

const App  = (props) => {
  const dispatch = useDispatch()
  const [nvalue,setNValue]=useState(false)
  const [fvalue,setFValue]=useState(false)
  const [wvalue,setWValue]=useState(false)
  const [tvalue,setTValue]=useState(false)
  
  useEffect(() => {
     dispatch(allActions.vectorActions.friction(fvalue))
     dispatch(allActions.vectorActions.normal(nvalue))
     dispatch(allActions.vectorActions.weight(wvalue))
     dispatch(allActions.vectorActions.torque(tvalue))
  })
  const setfriction = () =>{
    setFValue(!fvalue)
    dispatch(allActions.vectorActions.friction(fvalue))
  }
  const setnormal = () =>{
    setNValue(!nvalue)
    dispatch(allActions.vectorActions.normal(nvalue))
  }
  const setweight = () =>{
    setWValue(!wvalue)
    dispatch(allActions.vectorActions.weight(wvalue))
  }
  const settorque = () =>{
    setTValue(!tvalue)
    dispatch(allActions.vectorActions.torque(tvalue))
  }

  return (
  
  <div class="boardCanvas"
  style={{ width: "80vw", height: "40vw" }} > 
  <Button variant="outlined" onClick={setfriction}>Rozamiento</Button>
  <p></p>
  <Button variant="outlined" onClick={setnormal}>Normal</Button>
  <p></p>
  <Button variant="outlined" onClick={setweight}>Peso</Button>
  <p></p>
  <Button variant="outlined" onClick={settorque}>Torque</Button>
  <VRCanvas>
      <ambientLight />
      <spotLight />
      <Provider store={store}>  
       <Move />
      </Provider> 
    <OrbitControls  />
  </VRCanvas> 
</div>

  );
}

export default App
