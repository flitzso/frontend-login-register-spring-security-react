import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
 
function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;