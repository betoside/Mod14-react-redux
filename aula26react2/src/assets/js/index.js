import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import Botao from './Botao';

class Sistema extends Component{

    render(){
        return(
            <div>
                <h3>Olá mundo!</h3>
                <Botao />
            </div>
        );
    }

}

ReactDOM.render(<Sistema />, document.getElementById('container'));