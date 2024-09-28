import './App.css';
 import Navbar from './components/Navbar.jsx';  // Adjusted import path
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Create from './components/Create.jsx';
import Read from './components/Read.jsx';
import Update from './components/Update.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route exact path="/create" element={<Create/>} />
  <Route exact path="/all" element={<Read/>} />
  <Route exact path="/update" element={<Update/>} />
</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
