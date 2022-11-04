import React from 'react';
import InputField from './components/InputField';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
    <span className="headers">Taskify</span>
     <InputField />
    </div>
  );
}

export default App;
