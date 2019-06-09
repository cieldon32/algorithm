import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Ajax from '../../utils/ajax';

import "./index.scss";


const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class App extends Component {
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
    const path = `../../data/${e.key}`;
    const mod = await import(path);
    console.log(mod)
    // import(path).then((res) => {
    //   this.setState({
    //     content: String(res)
    //   })
    // })
  }
  render() {
    const {dataStructures, difficults, algorithms, dataStructure, difficult, content} = this.state;
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            {
              difficults.length > 0 && difficults.map((item) => (
                <Menu.Item key={item.value}>{item.label}</Menu.Item>
              ))
            }
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                algorithms.length > 0 && algorithms.map((item,i) => (
                  <Menu.Item
                    key={item.value}
                    onClick={this.clickAlgorithmItem}
                  >{item.label}</Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <pre>
                {content}
              </pre>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('container'));