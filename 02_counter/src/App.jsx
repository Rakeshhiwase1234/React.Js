// import { useState } from "react";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [counter, setCounter] = useState(10);

//   const addValue = () => {
//     setCounter(counter + 1);
//   };

//   const removeValue = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <h1>Start from react</h1>
//       <h3>counter value : {counter}</h3>
    
//     <hr></hr>
//       <button onClick={addValue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>Remove value</button>

//       <p>footer: {counter}</p>
//     </>
//   );
// }


// export default App;






               //  ASSIGMENT 

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Start from react</h1>
      <h3>counter value : {counter}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>footer: {counter}</p>
    </>
  );
}

export default App;


