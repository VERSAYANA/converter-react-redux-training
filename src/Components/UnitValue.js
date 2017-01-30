import React from 'react';

const UnitValue = ( {units, name, changeValue} ) => {

  return(
    <div className="flex">
      <div id="units-container">
        {units.map((u, i) => <div className="single-unit" key={i}><span>{u[0]}</span><input value={u[1]} onChange={(e) =>{e.preventDefault(); changeValue(name, u[0], e.target.value)}} /></div>)}
      </div>
    </div>
  );
};

export default UnitValue;
