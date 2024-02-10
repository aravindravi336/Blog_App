
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SIgnUp from './components/SIgnUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<SIgnUp/>}/>
  <Route path='/signin' element = {<SignIn/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
