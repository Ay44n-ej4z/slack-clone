import './App.css';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() { 
const [{user}, dispatch] = useStateValue();



  return (
    <div className="App">
      <Router>
        {!user ?(<Login />
        ): (
          <>
          <Header />
          <div className = "app_body">
           <Sidebar />
           <Switch>
             <Route path = "/room/:roomId">
               <Chat />
               
             </Route>
             <Route path = "/">
               <h1>Hello World</h1>
               
             </Route>
           </Switch>
         </div> 
         </>   
        )}
      
      </Router>
    </div>
  );
}

export default App;
