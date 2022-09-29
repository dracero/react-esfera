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
  const [value,setValue]=useState(false)

  
  useEffect(() => {
     dispatch(allActions.vectorActions.friction(value))
     dispatch(allActions.vectorActions.normal(value))
     dispatch(allActions.vectorActions.weight(value))
     dispatch(allActions.vectorActions.torque(value))
  }, [])
  const setfriction = () =>{
    setValue(!value)
    dispatch(allActions.vectorActions.friction(value))
  }
  const setnormal = () =>{
    setValue(!value)
    dispatch(allActions.vectorActions.normal(value))
  }
  const setweight = () =>{
    setValue(!value)
    dispatch(allActions.vectorActions.weight(value))
  }
  const settorque = () =>{
    setValue(!value)
    dispatch(allActions.vectorActions.torque(value))
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
