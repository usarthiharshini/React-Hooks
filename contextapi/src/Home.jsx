import { useContext } from 'react';
import {appContext} from './Context'
import './index.css'


function Home() {
    const name = useContext(appContext)
    return ( <h3 className='name'>
       {name}
    </h3> );
}

export default Home;