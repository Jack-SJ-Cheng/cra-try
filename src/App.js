import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';


function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get('https://randomuser.me/api/');
      console.log(res.data);
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" class="btn btn-primary">Primary</button>
        {text}
        <Input id='sampleText' labelText='標籤' text={text} onChangeHandler={onChangeHandler} />
      </header>
    </div>
  );
}

export default App;
