
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SIgnUp from './components/SIgnUp';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<SIgnUp/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
