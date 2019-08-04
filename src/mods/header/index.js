import React, {Component} from 'react';
import { connect } from 'react-redux';
import {actions} from 'reducers';

import "./index.scss";


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    
  }
  
  render() {
    return (
      <header className="header">
        
      </header>
    );
  }
}

export default connect(({}) => ({}), actions)(Header);