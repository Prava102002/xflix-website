// import logo from './logo.svg';
import './App.css';

// Added: To use Switch and Route to route to Dashboard.
import {BrowserRouter, Route, Switch } from "react-router-dom";

// Added: To use <Dashboard />
import Dashboard from "./components/Dashboard";

// Added: To use VideoPage
import Videopage from "./components/Videopage";

// Added: To use API endpoint conveniently throughout all of the files in the project.
export const config = {
  // endpoint: `http://3.111.54.42:8082/v1`,
  endpoint: `https://xflix-backend-rp2q.onrender.com/v1`,
};


//

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/video/:id" component={Videopage} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
