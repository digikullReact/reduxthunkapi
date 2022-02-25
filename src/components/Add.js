import React ,{useState} from  "react";
import { Input ,Button,Alert} from 'antd';
import {createNotes} from "../thunks";
import {useDispatch} from "react-redux";
import {checkDescription, checkTag, checkTitle} from "../utils/customvalidation";



function Add() {
    const dispatch=useDispatch();
    const initialState={
        title:"",
        description:"",
        tag:""
    }
    const [state,setState]=useState(initialState);
    const [alerts,setAlerts]=useState({
        message:"",
        type:"success",
        status:false
    })


    const handleChange=(event)=>{

        setState({...state,[event.target.name]:event.target.value})

    }

    const addData=()=>{
      if(  checkTitle(state.title) &&
        checkDescription(state.description) &&
        checkTag(state.tag))
      {
          dispatch(createNotes(state)).then(data=>{
              setAlerts({
                  message:"Success Fully Added Notes",
                  type:"success",
                  status:true

              })

              setState(initialState)


          }).catch(err=>{

              setAlerts({
                  message:"Error In Creating Notes",
                  type:"error",
                  status:true

              })



          })
      }

      else{
          alert("Title ,Tag And Description should be of length 5");

          return false;
      }


    }

    return (
        <div style={{marginLeft:"30px"}} >
            {
                alerts.status? <Alert message={alerts.message} type={alerts.type}  />:""
            }




            <h1>Add Notes</h1>
            <Input size="large" placeholder="Title" name="title"  value={state.title}   onChange={handleChange} />
            <Input size="large" placeholder="Description"  value={state.description}   name="description" style={{marginTop:"20px"}}   onChange={handleChange}/><br/>
            <Input size="large" placeholder="Tag"  name="tag" value={state.tag}   style={{marginTop:"20px"}}  onChange={handleChange} /><br/>

            <Button type="primary" size="large" style={{marginTop:"20px"}} onClick={addData}>
               Add Notes
            </Button>


        </div>
    );
}

export default Add;
