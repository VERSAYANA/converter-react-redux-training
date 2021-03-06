import calLength from './UnitCalculation/calLength';
import calMass from './UnitCalculation/calMass';
import calPressure from './UnitCalculation/calPressure';
import calTime from './UnitCalculation/calTime';
import calVolume from './UnitCalculation/calVolume';
import firstState from './firstState';


const tab = (tab, action) => {
  switch (action.type) {

    case 'ACTIVE_TAB':
      if (tab.location !== action.location) {
        return {
          ...tab,
          active: false
        };
      }
      return {
        ...tab,
        active: true
      };

    case 'CHANGE_TABS':
      if (tab.location === action.location) {
        return {
          ...tab,
          active: false,
          location: false
        }
      }
      if (tab.name === action.newTab) {
        return {
          ...tab,
          active: true,
          location: action.location
        }
      }
      return tab;

    case 'CHANGE_VALUE':
      if (tab.name === action.tab) {
        switch (action.tab) {

          case 'Length':
            return {
              ...tab,
              units: calLength(action.unit, action.value)
            }

          case 'Mass':
            return {
              ...tab,
              units: calMass(action.unit, action.value)
            }

          case 'Pressure':
            return {
              ...tab,
              units: calPressure(action.unit, action.value)
            }

          case 'Time':
            return {
              ...tab,
              units: calTime(action.unit, action.value)
            }

          case 'Volume':
            return {
              ...tab,
              units: calVolume(action.unit, action.value)
            }

          default: return tab
        }
      }
      return tab;

    };
  };

const tabs = (state = firstState(), action) => {
  switch (action.type) {
    case 'ACTIVE_TAB':
      return state.map(t =>
        tab(t, action)
      );

    case 'CHANGE_TABS':
      return state.map(t =>
        tab(t, action)
      );

    case 'CHANGE_VALUE':
    return state.map(t =>
      tab(t, action)
    );
    default: return state;
  }
};

export default tabs;
