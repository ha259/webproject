import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './compoments/navbar';
import Homepage from './compoments/homepage';
import Eventpage from './compoments/events/eventspage';
import Login from './compoments/logging/login';
import Createacount from './compoments/logging/createacount';
import Member from './compoments/members/members';
import About from './compoments/aboutus/about';
import Contactpage from './compoments/contact/contactpage';
import './App.css';
import Notfound from './compoments/notfoundpage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path='login' element={<Login />} />
            <Route path='events/eventspage' element={<Eventpage />} />
            <Route path='logging/createacount' element={<Createacount />} />
            <Route path='members/members' element={<Member />} />
            <Route path='aboutus/about' element={<About />} />
            <Route path='contact/contactpage' element={<Contactpage />} />
            <Route path='*' element={<Notfound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
