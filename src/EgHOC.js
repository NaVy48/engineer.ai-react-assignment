import React from 'react';
import api from './apiFake';

const EgHOC = function(WrappedComponent, url) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        data: null
      };

      this.keyEventListener = this.keyEventListener.bind(this);
    }

    componentDidMount() {
      window.addEventListener("keydown", this.keyEventListener, false);
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.keyEventListener, false);
    }

    keyEventListener() {
      const response = api(url); // later should be asynchronous
      this.setState({data: response})
    }

    render() {
      return (
        <WrappedComponent data={this.state.data}></WrappedComponent>
      );
    }
  }
}
export default EgHOC;
