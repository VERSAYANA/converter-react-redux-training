import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Mass extends Component {

  sourceValue(e) {
    this.props.store.raw = e.target.value || '';
    this.props.store.type = e.target.id;
  }
  selectInput(e) {
    e.target.setSelectionRange(0, e.target.value.length);
  }

  render() {
    const { getValue } = this.props.store;
    const units = ['Gram', 'Kilogram', 'Pound', 'Ounce'].map((unit, i) => <div key={i}><span>{unit}</span><input id={unit} value={eval("getValue."+unit+" ||''")} onChange={this.sourceValue.bind(this)} onClick={this.selectInput.bind(this)} /></div>);
    return(
      <div>
        {units}
      </div>
    );
  }
}

export default Mass;
