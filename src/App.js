import './App.css';
import  Navbar from './components/Navbar';
import  Footer from './components/Footer';
import  Home from './components/Home';
import  Error from './components/Error';
import  Menu from './components/Menu';
import  Aboutus from './components/Aboutus';
import  Contactus from './components/Contactus';
import  Login from './components/Login';
import  RegistrationUser from './components/RegistrationUser'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
           <Route exact path="/Login" element={<Login />} />
          <Route path="/RegistrationUser" element={<RegistrationUser />}/>
          <Route element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
