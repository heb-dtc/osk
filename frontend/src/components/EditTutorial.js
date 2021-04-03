import React, { Component } from 'react';
import axios from 'axios';
import Flavor from '../Constants';
import TutorialView from './TutorialView';

const DEFAULT_ID = -1;
const SELECT_PLACEHOLDER = "select something";

function filterById(idValue, tutorials) {
    var id = Number(idValue);
    tutorials.map(tutorial => {
        if (id === tutorial.id) {
            return tutorial;
        }
    });
    return {id: -1, name: '', link: '', description: '', image: ''};
}

class EditTutorial extends Component {
     constructor() {
        super();

         this.state = {
             tutorials: [],
             id: DEFAULT_ID
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
        var selectedId = event.target.value
        this.setState({id: selectedId})
    }

    render() {
        return (
            <div>
                <h1>{"Edit tutorial"}</h1>
                <select name="select" onChange={this.onTutorialSelected} value={this.state.id}>
                    <option value={DEFAULT_ID}>{SELECT_PLACEHOLDER}</option>
                    {this.state.tutorials.map(tutorial =>
                        <option value={tutorial.id}>{tutorial.name}</option>
                    )}
                </select>
                <TutorialView tutorial={filterById(this.state.id, this.state.tutorials)} />
            </div>
        );
    } 
}

export default EditTutorial;
