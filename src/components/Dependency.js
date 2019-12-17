import React, { Component } from 'react'

export default class Dependency extends Component {
    /** Obteniendo datos con LifeCylcleMethods */
    async componentDidMount(){
        const response = await fetch('http://localhost/proyectosinvestigacion/public/api/auth/dependency?api_token=HFUB1qzp69nEbtycJGb4VbB9KxaejORbyS32L7LSPkcKCwrFeWIIxs3QkBmn');
        const data = await response.json()
        console.log(data)
        this.setState({dependencies:data})
    }
    state = {
        dependencies: []
    }
    
    render() {
        return (
            <div>
                <h1>Dependencias</h1>
                <ul className="dependencies">
                    {   this.state.dependencies.map((dependency) =>{
                        return <li key={dependency.id_dependency} className="posts_item">
                            <h3>{dependency.name_dependency}</h3>
                            <div>{dependency.name_dependency}</div>
                            </li>
                        } )
                    }
                </ul>
            </div>
        )
    }
}
