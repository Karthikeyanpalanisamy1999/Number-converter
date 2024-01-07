import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Deoc from './Deci to oct';
import Debi from './deci to bin';
import Dehe from './Deci to hex';
import Hexa from './Heax';
function App() {  
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/deoc' element={<Deoc/>}></Route>
      <Route path='/debi' element={<Debi/>}></Route>
      <Route path='/dehe' element={<Dehe/>}></Route>
      <Route path='/hexa' element={<Hexa/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
