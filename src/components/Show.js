import React,{useEffect} from  "react";
import { Table, Tag, Space } from 'antd';
import {useDispatch,useSelector} from "react-redux";
import {getNotes} from "../thunks";



function Show() {

    const dispatch =useDispatch();
    const apiData=useSelector(state=>state.notes.notes)

    useEffect(()=>{
        dispatch(getNotes())

    },[])

    const columns = [
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
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];


    return (
        <div  style={{marginLeft:"80px"}}>
            <h1>Notes Data</h1>
            <Table columns={columns} dataSource={apiData} />
        </div>
    );
}

export default Show;
