import React, { Component } from 'react';

export class RequisicaoPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            lista:[]
        }

    }

    componentDidMount(){

        let corpo = {
            title:'Post novo',
            body:'Conteúdo do Post novo',
            userId:'1'
        };

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify({corpo}), // só aceita strings
            headers:{
                "Content-type":"application/json;charset=UTF-8"
            }
        })
        .then(r => r.json())
        .then(json => {
            console.log(json);
        })
    }

    render(){
        return(
            <div>
                <strong>Requisição Post</strong>

                
            </div>
        );
    }
}

// export default RequisicaoPost;