import logo from './logo.svg';
import './App.css';
import { ParentComponent } from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';


function App() {
  return (
   <div className="App">
    <header className='App-header'>
    <h1>Proyecto 01-Componentes en React</h1>
    </header>
    <ParentComponent/>
    </div>
  );
}

export default App;
