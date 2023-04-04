import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [slabiBurazi, setSlabiBurazi] = useState([]);

  function buki(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, inputValue]);
    setInputValue('');

    
  }

  function pusiKurac() {
    setSlabiBurazi([...slabiBurazi, inputValue]);
    setInputValue("kurac");

  }

  return (
    <div>
      <h1>SHEEESH NIGGA BRO </h1>
      <input type="text" value={inputValue} onChange={buki} />
      <button onClick={handleAddTodo}>Dodaj   buraza</button>
      <button onClick={pusiKurac}>Dodaj slabega bukija</button>
      <h2>Sheesh nigga bro-ji</h2>

      <ul>


        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

<h2>slabi burazi</h2>
      <ul>
          {slabiBurazi.map((slabiBurazi, index)=> (
            <li key={index}> {slabiBurazi}</li>
          ))}

        </ul>
    </div>
  );
}

export default App;
