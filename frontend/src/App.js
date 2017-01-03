import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
     constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/tutorial`)
            .then(res => {
                const posts = res.data.map(obj => obj);
                this.setState({posts});
            });
    }

    render() {
        return (
            <div>
                <h1>{"Office of Shared Knowledge"}</h1>
                <div className="floated-img">
                {this.state.posts.map(post =>
                        <a href={post.link}>
                        <figure>
                            <img src={post.image} alt=""/>
                            <figcaption>{post.description}</figcaption>
                        </figure>
                        </a>
                )}
                </div>
            </div>
        );
    } 
}

export default App;
