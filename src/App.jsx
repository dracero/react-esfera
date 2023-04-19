import Move from "./Move";
import { OrbitControls} from "@react-three/drei";
import { VRCanvas } from "@react-three/xr";
import {Provider} from 'react-redux'
import store from "./store/store"
import { Physics} from "@react-three/cannon"


const App  = () => {
   
  
  return (  
  <div className="boardCanvas"
  style={{ width: "80vw", height: "40vw" }} > 
  <VRCanvas referenceSpace="local">
    <ambientLight />
      <spotLight />
      <OrbitControls />
      <Provider store={store}> 
       <Physics>
           <Move  />  
       </Physics>    
      </Provider> 
  </VRCanvas> 
</div>

  );
}

export default App
