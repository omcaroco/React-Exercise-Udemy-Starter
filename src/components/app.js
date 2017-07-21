import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        <SearchBar updateText={(songName) => this.setState({ song: songName }) }/>
        {initialMessage}
      </div>
    );
  }
}
