
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Registration from './components/Registration';
import {Route , Routes} from 'react-router-dom'
import CreateAlert from './components/CreateAlert';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr></hr>
      <hr></hr>
      <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                  
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/registration" element={<Registration></Registration>}></Route>
                    <Route path="/createalert" element={<CreateAlert></CreateAlert>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
