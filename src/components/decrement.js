import React from 'react';

import { CounterContext } from './context/counter-context';

export default class Decrement extends React.Component {
  static contextType = CounterContext;
  render() {
    return <button onClick={this.context.decrementCount}> - </button>;
  }
}
