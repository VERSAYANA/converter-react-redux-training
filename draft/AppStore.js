import { observable, computed } from 'mobx';
import React, { Component } from 'react';
import Length from './Components/Length/Length';
import LengthStore from './Components/Length/LengthStore';
import Mass from './Components/Mass/Mass';
import MassStore from './Components/Mass/MassStore';
import Pressure from './Components/Pressure/Pressure';
import PressureStore from './Components/Pressure/PressureStore';
import Time from './Components/Time/Time';
import TimeStore from './Components/Time/TimeStore';
import Volume from './Components/Volume/Volume';
import VolumeStore from './Components/Volume/VolumeStore';

class AppStore {
  length = {
    type: 'Length',
    active: true,
    location: 3,
    class: 'tabs active-tab',
    render: <Length store={LengthStore}/>
  };
  mass = {
    type: 'Mass',
    active: false,
    location: 0,
    class: 'tabs',
    render: <Mass store={MassStore}/>
  };
  pressure = {
    type: 'Pressure',
    active: false,
    location: 2,
    class: 'tabs',
    render: <Pressure store={PressureStore}/>
  };
  time = {
    type: 'Time',
    active: false,
    location: 1,
    class: 'tabs',
    render: <Time store={TimeStore}/>
  };
  volume = {
    type: 'Volume',
    active: false,
    location: false,
    class: 'tabs',
    render: <Volume store={VolumeStore}/>
  };

  @observable unitType = [this.length, this.mass, this.time, this.volume, this.pressure];

  visibles() {
    return this.unitType.filter(tab => tab.location !== false);
  }

  sortTabs() {
    var sortTabs = [];
    var visibles = this.visibles();
    visibles.forEach(function(v, i){
      if(v.location === 0) {
        sortTabs[0] = v;
      }
      if(v.location === 1) {
        sortTabs[1] = v;
      }
      if(v.location === 2) {
        sortTabs[2] = v;
      }
      if(v.location === 3) {
        sortTabs[3] = v;
      }
    });
    return sortTabs;
  }

  @computed get sortedTabs() {
    return this.sortTabs();
  }
  @computed get activeTab() {
    var sorted = this.sortTabs();
    return sorted.filter(tab => tab.active === true)
  }
  @computed get diactiveTabs() {
    return this.unitType.filter(unit => unit.location === false);
  }

}

export default new AppStore();
