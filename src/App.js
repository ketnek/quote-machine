import React from 'react';
import './css/App.css';
import { FaYoutube } from 'react-icons/fa';


function App() {
  return (
    <div id='quote-box'>
      <p id='text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sed voluptatum id quam et. Sit deleniti omnis nobis autem, veritatis quam, rem, dolores ratione corrupti non esse unde odio eius?
      </p>
      <h3><FaYoutube className='icons' /></h3>

      <button id='new-quote'>New quote</button>
    </div>
  );
}

export default App;
