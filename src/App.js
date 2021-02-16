import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <User  data={{name :'Nasir Malik' , age:'25'}} />
    </div>
  );
}

export default App;
