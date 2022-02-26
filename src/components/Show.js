import React,{useEffect,useState} from  "react";
import { Table, Tag, Space } from 'antd';
import {useDispatch,useSelector} from "react-redux";
import {getNotes,deleteNotes,editNotes} from "../thunks";
import { Modal, Input } from 'antd';



function Show() {
    const initialState={
        title:"",
        description:"",
        tag:"",
        _id:""
    }
    const [state,setState]=useState(initialState);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const dispatch =useDispatch();
    const apiData=useSelector(state=>state.notes.notes)

    useEffect(()=>{
        dispatch(getNotes())

    },[])

    const showModal = (record) => {
        setIsModalVisible(true);
        setState({
            title:record.title,
            description:record.description,
            tag:record.tag,
            _id:record._id

        })
      };
    
      const handleOk = () => {

        //call the dispatcher

        dispatch(editNotes(state)).then(data=>{
            setIsModalVisible(false);

        })
     
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const deleteData=(id)=>{
        dispatch(deleteNotes(id)).then(data=>{
            alert("Data Deleted");
         
        })

    }


    const handleChange=(event)=>{

        setState({...state,[event.target.name]:event.target.value})

    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',

        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },

        {
            title: 'Tag',
            key: 'tag',
            dataIndex: 'tag',
            render: tag => (
                <>
                    <Tag color={"green"} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={()=>showModal(record)}>Edit {record.name}</a>
                    <a onClick={()=>deleteData(record._id)}>Delete</a>
                </Space>
            ),
        },
    ];


    return (
        <div  style={{marginLeft:"80px"}}>

            <h1>Notes Data</h1>
            <Table pagination={{ pageSize: 5 }}
                   rowKey={record => record._id}

                   columns={columns} dataSource={apiData} />

<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<Input size="large" placeholder="Title" name="title"  value={state.title}   onChange={handleChange} />
            <Input size="large" placeholder="Description"  value={state.description}   name="description" style={{marginTop:"20px"}}   onChange={handleChange}/><br/>
            <Input size="large" placeholder="Tag"  name="tag" value={state.tag}   style={{marginTop:"20px"}}  onChange={handleChange} /><br/>
      </Modal>
        </div>
    );
}

export default Show;
