import React from 'react';
import './design/app.scss';

import CounterContext from './components/context/counter-context';
import Decrement from './components/decrement';
import Increment from './components/increment';
import Counter from './components/counter';

class App extends React.Component {
  render() {
    return (
      <CounterContext>
        <div className="counter">
          <h1>Counter</h1>
          <Counter />
          <div>
            <Decrement />
            <Increment />
          </div>
        </div>
      </CounterContext>
    );
  }
}

export default App;
