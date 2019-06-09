import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('Home')
@observer
class HelloWorld extends React.Component {
  render () {
    const { Home } = this.props;
    return (
      <div>
        <h3>Home</h3>
        <p>{Home.message}</p>
      </div>
    );
  }
}

export default HelloWorld;
