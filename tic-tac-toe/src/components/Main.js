import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import Home from "./Home";
import Trade from "./Trade";
import Recommend from "./Recommend";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/trade" component={Trade} />
                <Route path="/recommend" component={Recommend} />   
            </div>
        );
    }
}

export default Main;