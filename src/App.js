import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList.js';
import PersonAdd from './components/PersonAdd.js';
function App() {
  return (
    <div ClassName="App">
      <PersonList/>
      <PersonAdd/>
    </div>
  )
}

export default App;
