 import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Content from './Components/Content/Content';
import Error from './Components/Error';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Protected from './Components/Protected';
import UserList from './Components/UserList/UserList';
import UserUpdate from './Components/UserUpdate/UpdateUser';


// https://www.youtube.com/watch?v=HPBuLS04ojE
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Navbar/>
    {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log Out</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>}
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/about" component={About} />
      <Route  path="/content" component={<Protected isLoggedIn={isLoggedIn}>
        <Content/>
      </Protected>} />
      <Route  path="/userlist" component={UserList} />
      <Route  path="/update" component={UserUpdate} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
