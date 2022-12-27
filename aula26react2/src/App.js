import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Config from './Config';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Requisicaolista } from './pages/Requisicaolista';
import { RequisicaoPost } from './pages/RequisicaoPost'

class App extends Component{
    render(){
        return(
            <BrowserRouter basename={Config.BASE_URL}>
                    
                    <Header />
                    
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/Sobre' element={<Sobre />} />
                        <Route path='/Requisicaolista' element={<Requisicaolista />} />
                        <Route path='/RequisicaoPost' element={<RequisicaoPost />} />
                    </Routes>
                    
            </BrowserRouter>
        );
    }
}
export default App;