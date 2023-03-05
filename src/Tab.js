import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Tab.css';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%'}}>
       <div className="banner">
      <img src = "clogo.png" alt="logo" classname = "clogo" />
      </div>
      <Tabs 
      value={value} 
      onChange={handleChange} 
      textColor="inherit"
      indicatorColor="#fffff"
      aria-label="nav tabs example"
      style={{float: 'right'}}>
       
        <LinkTab label="환영합니다" href="/drafts" />
        <LinkTab label="예배시간" href="/trash" />
        <LinkTab label="찾아오시는 길" href="/spam" />
        <LinkTab label="교회 생활" href="/spam"/>
      </Tabs>
    </Box>
    
  );
}

