import React, { Component } from 'react';

export class Requisicaolista extends Component{

    constructor(props){
        super(props);
        this.state = {
            lista:[
                {nome:'johnny', idade:30}, 
                {nome:'pimenta', idade:40}, 
                {nome:'inglaterra', idade:50}
            ]
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(r => r.json())
            .then(json => {
                this.setState({lista:json});
            })
        
    }


    render(){
        return(
            <div>
                <strong>Página Requisição de Lista</strong>

                {this.state.lista.length == 0 &&
                    <p> <i>carregando...</i> </p>
                }

                {this.state.lista.length > 0 &&
                    <div>
                        <ul>
                            {this.state.lista.map((item)=>{
                                return(
                                    <li>#{item.id} - {item.title} anos</li>
                                );
                            })}
                        </ul>
                    </div>
                }

                {/* <link to=''>Ir para a página <strong>Sobre</strong> </link> */}
            </div>
        );
    }
}