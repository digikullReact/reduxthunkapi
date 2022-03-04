
import './App.css';
import { Row, Col } from 'antd';
import Add from  "./components/Add"
import Show from  "./components/Show"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';


function App() {
  return (
    <div className="App"  style={{marginTop:"50px"}}>
 <Row>
 <Col span={10}  offset={6}>
<BrowserRouter>
<Header/>

    <Routes>
      <Route path="/add" element={<Add />}/>
      <Route path="/show" element={<Show />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
        
    </Routes>
  </BrowserRouter>
  </Col>

</Row>

    </div>
  );
}

export default App;
