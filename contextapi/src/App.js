import logo from './logo.svg';
import './App.css';
/* import Home from './Home';
import Form from './Form'; */
import Router from './Router';
import { Link ,Navigate,Outlet} from 'react-router-dom';
import Crazy from './Cc';

function App() {
  const gogoogle = ()=>{
    console.log("okay");
    
  }
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/makeup'>makeup</Link>
      <Link to='/skincare'>skincare</Link>
      <button onClick={gogoogle}>google</button>
   
      <Router/>
      
    </div>
   
  );
}

export default App;
