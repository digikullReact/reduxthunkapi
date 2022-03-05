import React from 'react'
import { PageHeader,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../utils/customvalidation';



const Header = () => {
  const navigate=useNavigate();
  const tokenExists=checkToken();

  const moveToPage=(page)=>{
    navigate(page)

  }

  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Notes App"
    subTitle="Please Login To Continue"
    extra={[
      
        <Button key="3"  style={ tokenExists ? { display:'none'} : {}} onClick={()=>moveToPage("/login")}>Login</Button>,
        <Button key="2" style={ tokenExists ? { display:'none'} : {}} onClick={()=>moveToPage("/signup")}>Signup</Button>,
        <Button key="4"  style={ !tokenExists ? { display:'none'} : {}} onClick={()=>moveToPage("/add")}>Add</Button>,
        <Button key="5" style={ !tokenExists ? { display:'none'} : {}} onClick={()=>moveToPage("/show")}>Show</Button>,
        <Button key="6" style={ !tokenExists ? { display:'none'} : {}} onClick={logout}>Logout</Button>,
       
      ]}
  />
  )
}

export default Header