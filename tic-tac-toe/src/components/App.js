import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./Head";
import Main from "./Main"

const App = () => (
  <Router>
    <div>
        <Header/>  
        <hr />
        <Main />
    </div>
  </Router>
);

export default App;