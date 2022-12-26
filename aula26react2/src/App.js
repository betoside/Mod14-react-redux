import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Home /> */}
                    <Route exact path="/b7-Frontend-Zero-Ao-Pro/Mod14-react-redux/aula26react2/public/" component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;