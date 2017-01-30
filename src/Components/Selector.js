import React from 'react';

const Selector = ({ location, current, invisibleTabs, changeTab }) => {
  let selectedOption;
  return(
    <div id="selector-container">
      <form id="selector" onSubmit={e => {e.preventDefault();changeTab(location, selectedOption.value)}}>
        <select ref={node => {selectedOption = node}}>
          {invisibleTabs.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
        </select>
        <input type="submit" value="Submit"/>
      </form>
      {/* <button onClick={() => changeTab(2, 'Volume')}>Submit</button> */}
    </div>
  )
};

export default Selector;
