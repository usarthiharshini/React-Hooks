 import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Error from './Error';
import Form from './Form';
import Makeup from './Components/Makeup';
import Lips from './Components/Lips';
import Face from './Components/Face';
import Eyes from './Components/Eyes';
import Skincare from './Components/Skincare';
import Moisturiser from './Components/Moisturiser';
import Facewash from './Components/FaceWash';
import Sunscreen from './Components/Sunscreen';
 function Router() {
    return ( 
        <Routes>
         <Route path='/' element={<Home/>}/>
           <Route path='/makeup' element={<Makeup/>} >
              <Route path='lips' element={<Lips/>} />
              <Route path='face' element={<Face/>} />
              <Route path='eyes' element={<Eyes/>} />
           </Route>
           <Route path='/skincare'  element={<   Skincare/>}  >
              <Route path='moist' element={<Moisturiser/>} />
              <Route path='facewash' element={<Facewash/>} />
              <Route path='sunscreen' element={<Sunscreen/>} />
           </Route>
          {/*  <Route path='/form' element={<Form/>} />
           <Route path='*' element={<Error/>} /> */}
        </Routes>
     );
 }
 
 export default Router;