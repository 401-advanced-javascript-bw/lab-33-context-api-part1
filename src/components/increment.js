import React from 'react';

import { CounterContext } from './context/counter-context';

export default class Increment extends React.Component {
  static contextType = CounterContext;
  render() {
    return <button onClick={this.context.incrementCount}> + </button>;
  }
}
