import { useReducer, useState } from "react";
import './index.css'
function Form() {

    const [show,setShow] = useState(false)

    const reducer=(state,action)=>{
        switch(action.type){
            case 'ADD_NAME':{
                return {
                    ...state,
                    name: action.payload
                }
            }
            case 'INC_AGE':{
                return {
                    ...state,
                    age: action.payload
                }
            }
            case 'ADD_DRAFT':{
                return {
                    ...state,
                    draft: action.payload
                }
            }
            case 'ADD_HOBBY':{
                return {
                    ...state,
                    hobbies: [...state.hobbies,state.draft],
                    draft:''
                }
            }
            case 'ADD_STATUS':{
                return {
                    ...state,
                    status: action.payload
                }
            }
            case 'ADD_DESC':{
                return {
                    ...state,
                    desc: [...state.desc,state.draft],
                    draft:''
                }
            }

        }
    }

    const initialState={
        name:'',
        age:20,
        hobbies:[],
        status:'',
        desc:[],
        draft:''

    }

    const [state,dispatch] = useReducer(reducer,initialState);
    
    console.log(state);

    return ( 
   <main className="form">
      {!show && <> <div>
        <label htmlFor="name">Name</label>
      <input type="text" value={state.name} onChange={(e)=>dispatch({type:'ADD_NAME',payload:e.target.value})}/>
      </div>
      <div>
        <label htmlFor="age">Age</label>
      <input type="number" value={state.age} onChange={(e)=>dispatch({type:'INC_AGE',payload:e.target.value})} />
      </div>
        <div>
            <label htmlFor="hobbies">Hobbies</label>
        <input type="text" value={state.draft} onChange={(e)=>dispatch({type:'ADD_DRAFT',payload:e.target.value})}/>
        <button  onClick={(e)=>dispatch({type:'ADD_HOBBY'})}>add hobby</button>
        </div>
       
       <div>
        <label htmlFor="status">Relationship Status</label>
       <input type="text" value={state.status} onChange={(e)=>dispatch({type:'ADD_STATUS',payload:e.target.value})}/>
       </div>
       <div>
        <label htmlFor="desc">Description</label>
       <input type="text" value={state.draft} onChange={(e)=>dispatch({type:'ADD_DRAFT',payload:e.target.value})}/>
        <button  onClick={(e)=>dispatch({type:'ADD_DESC'})}>description</button>
       </div>
       
        <button onClick={()=>setShow(true)}>submit</button></>
    }
    {show && <>
      <h3>Name:{state.name}</h3>
      <h3>Age: {state.age}</h3>
      <ul>
        {state.hobbies.map((hobby)=> <li>{hobby}</li>)}
      </ul>
      <h4>Relationship Status: {state.status}</h4>
    </>}
    </main> );
}

export default Form;