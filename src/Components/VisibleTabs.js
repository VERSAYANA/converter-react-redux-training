import React from 'react';

const VisibleTabs = ({ tabs, active }) => {
  return(
    <div id="tabs-container">
      {tabs.map((t, i) => <div className={t.class} onClick={() => active(t.location)} key={i}><span>{t.name}</span></div>)}
    </div>
  )
};

export default VisibleTabs;
