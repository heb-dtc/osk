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
                    <input type="text" value={this.props.name} />
                </label>
                <label>
                    Link:
                    <input type="text" value={this.props.link} />
                </label>
                <label>
                    Description:
                    <input type="text" value={this.props.description} />
                </label>
                <label>
                    Image:
                    <input type="text" value={this.props.image} />
                </label>
            </div>
        );
    }
}

export default TutorialView;
