import React,{useState} from 'react'
import { Input ,Button,Alert} from 'antd';
import { login } from '../thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';






const Login = () => {

  const dispatch =useDispatch();
  const navigate=useNavigate();
  const initState={
    email:"",
    password:""

}
    const [state,setState]=useState(initState)

    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})

    }

    const loginApp=()=>{
      dispatch(login(state)).then(data=>{
       if(!data.error){
        setState(initState);
        // Move to another page
        navigate("/show");

       }
       else{
        alert("Wrong Username Password");
       }
      
       
      })

    }


  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Login Here</h1>
        </div>


<Input size="large" placeholder="Email"  value={state.email}   name="email" style={{marginTop:"20px"}}   onChange={handleChange}/><br/>
            <Input size="large" placeholder="Password"  name="password" value={state.password}   style={{marginTop:"20px"}}  onChange={handleChange} /><br/>

            <Button type="primary" size="large" style={{marginTop:"20px"}} onClick={loginApp}>
             Login
            </Button>
    </div>
  )
}

export default Login