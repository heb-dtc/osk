import React, { Component, NameForm } from 'react';
import axios from 'axios';

class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            link: '', 
            description: '', 
            image: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleLinkChange(event) {
        this.setState({link: event.target.value});
    }
    
    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }
    
    handleImageChange(event) {
        this.setState({image: event.target.value});
    }

    handleSubmit(event) {
        axios.post('http://localhost:8081/tutorial', {name: this.state.name, link: this.state.link,
            description: this.state.description, image: this.state.image})
            .then(res => {
                if (res.data.status === 0 ) {
                    alert('The tuturial ' + this.state.name + 'was successfully added!');
                } else {
                    alert('Something went wrong'); 
                }
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>{"Add tutorial"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Link:
                        <input type="text" value={this.state.link} onChange={this.handleLinkChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        Image:
                        <input type="text" value={this.state.image} onChange={this.handleImageChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddTutorial;
