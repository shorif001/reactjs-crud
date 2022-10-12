 import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Content from './Components/Content/Content';
import Error from './Components/Error';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import UserList from './Components/UserList/UserList';
import UserUpdate from './Components/UserUpdate/UpdateUser';

// https://www.youtube.com/watch?v=HPBuLS04ojE
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/about" component={About} />
      <Route  path="/content" component={Content} />
      <Route  path="/userlist" component={UserList} />
      <Route  path="/update" component={UserUpdate} />
      <Route component={Error} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
