import React, { Fragment } from 'react';
import './App.css';
import { element } from 'prop-types';
const store = ['','','']


function Column() {
  
  return (
    <tr>
      <td>Tênis</td
      <td>Roupa</td>          
      
    </tr>
    
  )
    }


function App() {
  const renderColumns = (element, key) =>(
    <Fragment> key={`column-${key}`})>
    <Column />
    </Fragment>
  )
  return (
   <Table>
     <tr>
      {store.map(renderColumns)}
     </tr>
   </Table>
    
    
     
  )
}

export default App;