import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import logo_bgtrans from './img/logo_bgtrans.png';
//import FirstPage from "./components/FirstPage";

export default class Log extends Component {
  render() {
    return (
    <div>
    {/* using CommonJS modules*/}
    {/*var Media = require("react-media");*/}
        <div style={{height: '100px', position: 'fixedHeader', background: '#9bcbd6'}}>
          <Layout fixedHeader>
            <Header transparent style={{color: 'white'}}>
              <div class="center">
                <a href="firstpage">
                  <img src={logo_bgtrans} height="50" alt="logo_bgtrans"/>
                </a>
              </div>



                  <Navigation>
                    <a href="/">Help</a>
                  </Navigation>
              </Header>
            <Drawer title="Settings">
                <Navigation>
                    <a href="/">Settings</a>
                    <a href="/">Your diary</a>
                    <a href="/">Add</a>
                    <a href="Sök">Blood</a>
                  </Navigation>
              </Drawer>
            <Content style={{backgroundColor: "#9bcbd6"}}>
            </Content>
          </Layout>
      </div>
    </div>
    );
  }
}
