import React,{Component,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './component/InputNumber'



function App(){
  
  const [value,setValue] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e=>{}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}

export default App;

