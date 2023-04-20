
    import React from 'react';
    import { AudioOutlined } from '@ant-design/icons';
    import { Input, Select } from 'antd';
    const { Search } = Input;
    import headerstyles from '../styles/header.module.css';

    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );
    const onSearch = (value) => console.log(value);

export default function SearchBox()
{
    return(
        <div className={headerstyles.options}>
            <Select defaultValue="All Products" style={{width:150,marginTop:0}} 
            options={[
                {
                value:'A',
                label:'A',
            },{
                value:'B',
                label:'B',
            },{
                value:'C',
                label:'C',
            },{
                value:'D',
                label:'D',
            },{
                value:'E',
                label:'E',
            },
                

            ]}
            />
            <Search placeholder="Search" onSearch={onSearch} style={{width:500,borderRadius: 50}}
/>
    </div>
    
    );
}
