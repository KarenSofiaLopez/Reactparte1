/*import logo from './logo.svg';*/
/*import './App.css';*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
//import ContactoPage from './pages/ContactoPage';
import HomePage from'./pages/HomePage';
//import NosotrosPage from './pages/NosotrosPage';
//import NovedadesPage from './pages/NovedadesPage';


function App(){
  return (
    <div className="App">
      <Header></Header>
      <Nav/>
      <Footer/>

    </div>
  );
}
export default App;

