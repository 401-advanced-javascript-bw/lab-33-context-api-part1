import React from 'react';

export const CounterContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.count = 0;
    this.state.incrementCount = this.incrementCount;
    this.state.decrementCount = this.decrementCount;
  }

  incrementCount = () => this.setState({ count: this.state.count + 1 });
  decrementCount = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
