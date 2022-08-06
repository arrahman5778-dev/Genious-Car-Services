import './App.css';
import { Routes, Route } from "react-router-dom"
import About from './components/Pages/Home/About/About';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import ServiceDetail from './components/Pages/Home/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
