import React, { Component } from 'react';
import axios from 'axios';
import Flavor from '../Constants';
import TutorialView from './TutorialView';

class EditTutorial extends Component {
     constructor() {
        super();

         this.state = {
             tutorials: [],
             default: 'select something',
             currentName: '',
             currentLink: '',
             currentDescription: '',
             currentImage: ''
         };

        this.onTutorialSelected = this.onTutorialSelected.bind(this);
    }

    componentDidMount() {
        axios.get(Flavor.BASE_URL + `/tutorial`)
            .then(res => {
                const posts = res.data.map(obj => obj);
                this.setState({tutorials: posts});
            });
    }

    onTutorialSelected(event) {
        this.setState({currentName: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>{"Edit tutorial"}</h1>
                <select name="select" onChange={this.onTutorialSelected} value={this.state.currentName}>
                    <option value={this.state.default}>{this.state.default}</option>
                    {this.state.tutorials.map(tutorial =>
                        <option value={tutorial.name}>{tutorial.name}</option>
                    )}
                </select>
                <TutorialView name={this.state.currentName} link={this.state.currentLink} description={this.state.currentDescription} image={this.state.currentImage} />
            </div>
        );
    } 
}

export default EditTutorial;
