import Move from "./Move";
import { OrbitControls} from "@react-three/drei";
import { VRCanvas } from "@react-three/xr";
import {Provider} from 'react-redux'
import store from "./store/store"
import { Physics} from "@react-three/cannon"


const App  = () => {
   
  
  return (  
  <div className="boardCanvas"
  style={{ width: "100vw", height: "40vw" }} > 
  <VRCanvas referenceSpace="local">
    <hemisphereLight intensity={1} />
      <OrbitControls />
      <Provider store={store}> 
       <Physics>
      //I neeed to rotate te cube on z axis
       <Move position={[0, -1, -9]} rotation={[0, -1.85, 0]}/> 
       </Physics>    
      </Provider> 
  </VRCanvas> 
</div>

  );
}

export default App
