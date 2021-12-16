import React from 'react';
import './App.css';

const Sum = () => {
  return (
      <button type= "submit">+</button>
  )
}

const App1 = () => {
  const [n1, setN1] = React.useState('');
  const [n2, setN2] = React.useState('');
  const [result, setResult] = React.useState('Resultado');

  const handleNumberChange = e => {
    if("n1" === e.target.id){
      setN1(Number(e.target.value))  
    } else {
      setN2(Number(e.target.value))
    }
  }

  const handleChangeResult = e => {
    setResult(n1 + n2)
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>{process.env.REACT_APP_APP_TITTLE}</h1>
      <div onChange= {handleNumberChange}>
        <input type= "number" id= "n1"/>
        <input type= "number" id= "n2"/>
      </div>
      
      <form onSubmit= {handleChangeResult}>
        <Sum /><br/>
      </form>
      <div className= "result">
        {result}
      </div>
    </div>
  );
} 

export default App1;