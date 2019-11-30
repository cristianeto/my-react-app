import React, { Component } from 'react'

export default class Posts extends Component {
    /** Obteniendo datos con LifeCylcleMethods */
    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        console.log(data)
        this.setState({posts:data})
    }
    state = {
        posts: []
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <ul className="posts">
                    {   this.state.posts.map((post) =>{
                        return <li key={post.id} className="posts_item">
                            <h3>{post.title}</h3>
                            <div>{post.title}</div>
                            </li>
                        } )
                    }
                </ul>
            </div>
        )
    }
}
