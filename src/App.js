
import './App.css';
import { Row, Col } from 'antd';
import Add from  "./components/Add"
import Show from  "./components/Show"


function App() {
  return (
    <div className="App"  style={{marginTop:"200px"}}>

      <Row>
        <Col span={10}>

            <Add/>
        </Col>
        <Col span={10}>
            <Show/>


        </Col>
      </Row>

    </div>
  );
}

export default App;
