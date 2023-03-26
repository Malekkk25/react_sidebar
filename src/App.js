
import './App.css';
import {BrowserRouter , Routes ,Route, createBrowserRouter} from 'react-router-dom' ;
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import UserList from './pages/UserList';

function App() {
  return (

   <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/Userinfo' element={<UserList/>}/>
   </Routes>
   
   </BrowserRouter>
    
   </div>
  );
}

export default App;
