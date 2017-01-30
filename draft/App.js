import React, { Component } from 'react';
import './App.css';
import './w3.css';
import { observer } from 'mobx-react';


@observer
class App extends Component {

  clickTab(e){
    if (this.props.store.sortedTabs[e].active === false) {
    for (var i = 0; i <= 3; i++) {
      this.props.store.sortedTabs[i].active = false;
      this.props.store.sortedTabs[i].class = 'tabs';
    }
    this.props.store.sortedTabs[e].active = true;
    this.props.store.sortedTabs[e].class = 'tabs active-tab';
  }
}
  // selectNewTab(e) {
  //   this.props.store.diactiveTabs[e.target.value].active = true;
  //   this.props.store.diactiveTabs[e.target.value].class = 'tabs active-tab';
  //   this.props.store.diactiveTabs[e.target.value].location = this.props.store.activeTab[0].location;
  //
  //   this.props.store.activeTab[0].class = 'tabs';
  //   this.props.store.activeTab[0].location = false;
  //   this.props.store.activeTab[0].active = false;
  // }


  render() {
    const { sortedTabs, activeTab, diactiveTabs } = this.props.store;
    const selectInput = diactiveTabs.map((tab, i) => <option key={i} value={i}>{tab.type}</option>);
    return (
      <div>
        <div onClick={this.clickTab.bind(this,sortedTabs[0].location)} className={sortedTabs[0].class}><span className="tab-text">{sortedTabs[0].type}</span></div>
        <div onClick={this.clickTab.bind(this,sortedTabs[1].location)} className={sortedTabs[1].class}><span className="tab-text">{sortedTabs[1].type}</span></div>
        <div onClick={this.clickTab.bind(this,sortedTabs[2].location)} className={sortedTabs[2].class}><span className="tab-text">{sortedTabs[2].type}</span></div>
        <div onClick={this.clickTab.bind(this,sortedTabs[3].location)} className={sortedTabs[3].class}><span className="tab-text">{sortedTabs[3].type}</span></div>
        {/* <select onChange={this.selectNewTab.bind(this)}>
          <option value={activeTab[0].type}>{activeTab[0].type}</option>
          {selectInput}
        </select> */}
        {activeTab[0].render}
      </div>
    );
  }
}

export default App;
