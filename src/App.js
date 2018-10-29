import React, { Component } from "react";
import parkPic from "./parkingpic.jpeg";
import "./App.css";
import "antd/dist/antd.css";
import Filters from "./components/filters.js";
import SearchAndFilter from "./components/searchAndFilter.js";
import Lists from "./components/list.js";
import {
  Collapse,
  BackTop,
  Divider,
  Layout,
  Menu,
  Icon,
  Button,
  Drawer,
  Popover
} from "antd";
import db from "./components/firebase.js";
import { item } from "./components/constants.js";
import airplane from "./airplane.png";

const { Header, Footer, Sider, Content } = Layout;
const Panel = Collapse.Panel;

class App extends Component {
  state = {
    firstTest: "",
    secondTest: "",
    collapsed: false,
    prisVal: [1, 20],
    resaVal: [2, 20],
    biltvätt: false,
    kostnadsfriTransfer: null,
    inomhusparkering: null,
    sistadygn: null,
    kostnadsfriTransfer: null,
    bilservice: null,
    privatTransfer: null,
    klädförvaring: undefined,
    sortering: "nada",
    onscroll: 0
  };

  handleCheckboxChange = e => {
    this.setState(prevState => ({ [e]: !prevState[e] }))
  };
  handlePrisChange = e => {
    this.setState({ prisVal: e });
  };
  handleResaChange = e => {
    this.setState({ resaVal: e });
  };

  handleRadioChange = e => {
    this.setState({ sortering: e });
  };


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  sortFunction(sortering) {
    if (sortering === "billigast") {
      item.sort((a, b) => {
        return a.pris.vecka - b.pris.vecka;
      });
    }
    if (sortering === "billigastDag") {
      item.sort((a, b) => {
        return a.pris.dygnPris - b.pris.dygnPris;
      });
    }
    if (sortering === "snabbast") {
      item.sort((a, b) => {
        return a.restid - b.restid;
      });
    }
    if (sortering === "bäst") {
      item.sort((a, b) => {
        let A = a.restid * 10;
        let B = b.restid * 10;
        return a.restid - b.restid && a.pris.dygnPris - b.pris.dygnPris;
      });
    } else return null;
  }

  render() {
    this.sortFunction(this.state.sortering);
    console.log("app.js ITEM", item);
    return (
      <Layout onScroll={console.log("scrolling working")}>
        <Layout className="Layout">
          <div className="appTitle">
            <h1>
              <img src={airplane} className="App-logo" alt="logo" />
              Arlandaparkeringar.se
            </h1>
            <h2>Jämför långtidsparkeringar på Arlanda</h2>
          </div>
          <Icon className="arrowDown" type="arrow-down" />
        </Layout>

        <Layout
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1100px",
            minHeight: "1000px"
          }}
        >
          <SearchAndFilter
            className="searchAndFilter"
            handleRadioChange={this.handleRadioChange}
          />

          <Collapse className="collapse" bordered={false}>
            <Panel
              showArrow={false}
              style={{ cursor: "pointer !important" }}
              className="filterButton"
              header={
                <a>
                  <Icon type="filter" />
                  Filtrera mera!
                </a>
              }
              key="1"
            >
              <Filters
                handleCheckboxChange={this.handleCheckboxChange}
                handlePrisChange={this.handlePrisChange}
                handleResaChange={this.handleResaChange}
                prisVal={this.state.prisVal}
                resaVal={this.state.resaVal}
                checked={this.state.checked}
                biltvätt={this.state.biltvätt}
                privatTransfer={this.state.privatTransfer}
                bilservice={this.state.bilservice}
                klädförvaring={this.state.klädförvaring}
                kostnadsfriTransfer={this.state.kostnadsfriTransfer}
                inomhusparkering={this.state.inomhusparkering}
                sistadygn={this.state.sistadygn}
              />
            </Panel>
          </Collapse>

          <Content className="content">
            <Divider>Parkeringar</Divider>

            <Lists
              listData={item}
              prisVal={this.state.prisVal}
              resaVal={this.state.resaVal}
              checked={this.state.checked}
              biltvätt={this.state.biltvätt}
              privatTransfer={this.state.privatTransfer}
              bilservice={this.state.bilservice}
              klädförvaring={this.state.klädförvaring}
              kostnadsfriTransfer={this.state.kostnadsfriTransfer}
              inomhusparkering={this.state.inomhusparkering}
              sistadygn={this.state.sistadygn}
            />
          </Content>
        </Layout>

        <BackTop />

        <Footer>Copyright etc</Footer>
      </Layout>
    );
  }
}

export default App;
