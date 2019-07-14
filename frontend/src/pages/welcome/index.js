import React, { Component } from 'react';

import HelloComponent from 'Components/HelloComponent';
import InputFile from 'Components/InputFileComponent';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Bom dia',
    };
  }

  render() {
    return (
      <div>
        <HelloComponent message={this.state.message} />
        <InputFile />
      </div>

    );
  }
}

export default Welcome;
