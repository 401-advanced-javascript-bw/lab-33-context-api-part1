import React from 'react';

import { CounterContext } from './context/counter-context';

export default class ContextProvider extends React.Component {
  render() {
    return (
      <>
        <CounterContext.Consumer>
          {context => {
            return (
              <>
                <span>{context.count}</span>
              </>
            );
          }}
        </CounterContext.Consumer>
      </>
    );
  }
}
