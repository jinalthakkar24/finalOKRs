import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import HomeNew from './pages/HomeNew';

import Login from './pages/Login';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {treeResponse:""}; 
//   }

//   treeResponse(){
    
//   }
// }

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomeNew} />
      <Route exact path="/homeOld" component={Home} />
      <Redirect to="/" />
      </Switch>
  );
}

export default App;
