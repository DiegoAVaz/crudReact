import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState()
  
  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values)
  }

  return (
    <div className="app-container">
      <div className='register-container'>
        <h1 className='register-title'>Scrim shop</h1>
        <input type="text" name='name' placeholder='Nome' className='register-input' onChange={handleChangeValues}/>
        <input type="text" name='cost' placeholder='Preço' className='register-input' onChange={handleChangeValues}/>
        <input type="text" name='category' placeholder='Categoria' className='register-input' onChange={handleChangeValues}/>
      </div>
      <button className='register-button' onClick={() => handleClickButton()}>Cadastrar</button>
    </div>
  );
}

export default App;
