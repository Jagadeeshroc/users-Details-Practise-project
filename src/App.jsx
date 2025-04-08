import React from 'react';
import Contacts from './components/Contacts'
import 'tailwindcss';
class App extends React.Component{
  render(){
    return(
      <>
      <h1 className='font-bold text-5xl'>Contacts</h1>
      <Contacts />


      </>
    )
  }
}

export default App;