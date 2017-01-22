import React, { Component } from 'react';
import axios from 'axios';
import Flavor from '../Constants';

class EditTutorial extends Component {
     constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(Flavor.BASE_URL + `/tutorial`)
            .then(res => {
                const posts = res.data.map(obj => obj);
                this.setState({posts});
            });
    }

    render() {
        return (
            <div>
                <h1>{"Edit tutorial"}</h1>
                <select name="select">
                    {this.state.posts.map(post =>
                        <option value="">{post.link}</option>
                    )}
                </select>
            </div>
        );
    } 
}

export default EditTutorial;
