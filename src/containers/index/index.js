import React, {Component} from 'react';
import { connect } from 'react-redux';
import {actions} from 'reducers';
import Promise from 'bluebird';
import { Helmet } from 'react-helmet';
import Ajax from '../../utils/ajax';
import Require from '../../utils/require';

import "./index.scss";


class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataStructures: [],
      difficults: [],
      algorithms: [],
      dataStructure: 'linear',
      difficult: '0',
      content: ''
    }
  }
  componentDidMount() {
    this.getDataStructures();
    this.getDifficults();
    this.getAlgorithm();
  }
  getDataStructures () {
    Ajax({
      api: 'getDataStructures',
      data: {}
    }, (res) => {
      this.setState({
        dataStructures: res
      });
    });
  }
  getDifficults () {
    Ajax({
      api: 'getDifficults',
      data: {}
    }, (res) => {
      this.setState({
        difficults: res
      });
    });
  }
  getAlgorithm() {
    Ajax({
      api: 'getAlgorithm',
      data: {}
    }, (res) => {
      this.setState({
        algorithms: res
      });
    });
  }
  clickAlgorithmItem = (e) => {
    // import(`../../data/${e.key}`).then((res) => {
    //   this.setState({
    //     content: String(res.default)
    //   })
    // });
    Require(e.key, (res) => {
      this.setState({
        content: res
      })
    }, () => {});
  }
  render() {
    const {dataStructures, difficults, algorithms, dataStructure, difficult, content} = this.state;
    return (
      <div className="page">
        
      </div>
    );
  }
}

export default connect(({}) => ({}), actions)(Index);

