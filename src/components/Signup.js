import React,{useState} from 'react'
import { Input ,Button,Alert} from 'antd';
import { signup } from '../thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const initialState={
    email:"",
    password:"",
    name:""

}

  const [state,setState]=useState(initialState)


  const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

const loginApp=()=>{
  dispatch(signup(state)).then(data=>{
    setState(initialState);
    navigate("/show");

  })

}
  return (
    <div>
    <div style={{textAlign:"center"}}>
        <h1>Signup Here</h1>
    </div>

    <Input size="large" placeholder="Name"  value={state.name}   name="name" style={{marginTop:"20px"}}   onChange={handleChange}/><br/>

<Input size="large" placeholder="Email"  value={state.email}   name="email" style={{marginTop:"20px"}}   onChange={handleChange}/><br/>
        <Input size="large" placeholder="Password"  name="password" value={state.password}   style={{marginTop:"20px"}}  onChange={handleChange} /><br/>

        <Button type="primary" size="large" style={{marginTop:"20px"}} onClick={loginApp}>
         Signup
        </Button>
</div>
  )
}

export default Signup