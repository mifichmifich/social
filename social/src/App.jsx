import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/dialogs/dialogs';
import Users from './components/Users/users';
import Foto from './components/foto/folo';
import { Content } from './components/Content/Content';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      {/* <Content /> */}
      {/* <Profile />
      <Dialogs /> */}
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs' element={<Dialogs />} />
        <Route path='/users' element={<Users />} />
        <Route path='/foto' element={<Foto />} />
      </Routes>
    </div>
  )
}

export default App;


