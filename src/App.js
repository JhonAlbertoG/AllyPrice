import Inicio from './paginas/Inicio'
import Registro from './paginas/Registro'
import Login from './paginas/Login'
import Buscar from './paginas/Buscar'
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Buscar" element={<Buscar/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
