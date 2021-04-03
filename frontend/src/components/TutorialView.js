import React, { Component } from 'react';

class TutorialView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                    <input type="text" value={this.props.tutorial.name} />
                </label>
                <label>
                    Link:
                    <input type="text" value={this.props.tutorial.link} />
                </label>
                <label>
                    Description:
                    <input type="text" value={this.props.tutorial.description} />
                </label>
                <label>
                    Image:
                    <input type="text" value={this.props.tutorial.image} />
                </label>
            </div>
        );
    }
}

export default TutorialView;
