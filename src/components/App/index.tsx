import { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [ user, setUser ] = useState('');
  const [ cpu, setCpu ] = useState('');
  const [ result, setResult ] = useState('');
  
  console.log(user);
  console.log(cpu);

  const chooseRock = () => {
    setUser('rock');
    chooseCpu();
  }

  const choosePaper = () => {
    setUser('paper');
    chooseCpu();
  }

  const chooseScissors = () => {
    setUser('scissors');
    chooseCpu();
  }

  const chooseCpu = () => {
      let x = Math.floor((Math.random() * 3 ) + 1 );
      switch (x) {
          case 1:
              setCpu("rock");
              break;
          case 2:
              setCpu("paper");
              break;
          case 3:
              setCpu("scissors");
              break;
      }
  }
  
  useEffect(() => {
    if ( user === cpu && user !== "" && cpu !== "") {
      setResult("you both picked the same. its a tie");
      }
      else if( (user === "paper" && cpu === "rock") || (user === "scissors" && cpu === "paper") || (user === "rock" && cpu === "scissors") ) {
      setResult("you won");
      }                    
      else if ( (user === "scissors" && cpu === "rock") || (user === "paper" && cpu === "scissors") || (user === "rock" && cpu === "paper") ) {
      setResult("the cpu won");
      }
  },[user, cpu])


  return (
    <div className="App">
      <h1 className='header'>rock paper scissors</h1>
      <div className='left'>
        <button className='button' value='rock' onClick={chooseRock}>rock</button>
        <button className='button' value='paper' onClick={choosePaper}>paper</button>
        <button className='button' value='scissors' onClick={chooseScissors}>scissors</button>
        <h3 className='result'>{result}</h3>
      </div>
      <div className="right">
        <h2>you picked:</h2>
        <h3 className="user">{user}</h3>
        <h2>cpu picked:</h2>
        <h3 className='cpu'>{cpu}</h3>
      </div>
    </div>
  );
}

export default App;
