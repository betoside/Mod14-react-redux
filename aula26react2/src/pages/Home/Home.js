import React, { Component } from 'react';

export class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            ip:''
        }
    }

    componentDidMount(){
        fetch('http://ip.jsontest.com/')
            .then((r)=>{
                return r.json()
            })
            .then((json)=>{
                console.log(json);
                this.setState({ip:json.ip});
            });
    }


    render(){
        return(
            <div>
                <strong>Página Home</strong>

                <div>
                    {this.state.ip == '' &&
                        <p><i>Carregando...</i></p>
                    }
                    {this.state.ip != '' &&
                        <p>Seu IP é <i> {this.state.ip} </i></p>
                    }
                </div>

                {/* <link to=''>Ir para a página <strong>Sobre</strong> </link> */}
            </div>
        );
    }
}

// export default Home;