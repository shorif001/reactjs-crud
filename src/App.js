 import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Content from './Components/Content/Content';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserList from './Components/UserList/UserList';
import UserUpdate from './Components/UserUpdate/UpdateUser';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/content" component={Content} />
      <Route  path="/userlist" component={UserList} />
      <Route  path="/update" component={UserUpdate} />
    </Switch>
    </>
  );
}

export default App;
