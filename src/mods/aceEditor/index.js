import React, {Component} from 'react';
import AceEditor from 'react-ace';

export default class Mod extends Component {

  onChange = (v) => {
    console.log(v);
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
      />
    );
  }
}
