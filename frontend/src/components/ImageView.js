import React, {Component, NameFrom } from 'react';
import placeholder from '../static/placeholder.png';

class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.src,
            caption: props.alt
        };
        this.handleLoadError = this.handleLoadError.bind(this);
    }

    handleLoadError() {
        this.setState({url: placeholder});
    }

    render() {
        return <img src={this.state.url} alt={this.state.caption} onError={this.handleLoadError} />;
    }
}

export default ImageView;

