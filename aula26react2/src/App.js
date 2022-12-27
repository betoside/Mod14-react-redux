import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Config from './Config';

import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';

class App extends Component{
    render(){
        return(
            <BrowserRouter basename={Config.BASE_URL}>
                    
                    <Header />
                    
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/Sobre' element={<Sobre />} />
                    </Routes>
                    
            </BrowserRouter>
        );
    }
}
export default App;