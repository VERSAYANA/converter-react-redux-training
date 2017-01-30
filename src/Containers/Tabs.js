import { connect } from 'react-redux';
import VisibleTabs from '../Components/VisibleTabs'

const sortTabs = (state) => {

  return state.reduce((sort, tab, i) => {
    if(tab.location !== false) {
      sort[tab.location - 1] = {
        ...tab,
        class: 'tabs'
      };

      if (tab.active === true) {
        sort[tab.location - 1] = {
          ...tab,
          class: 'tabs active'
        };
      }
    }

    return sort;
  },[])

};

const mapStateToProps = (state) => ({
  tabs: sortTabs(state)
});

const mapDispatchToProps = (dispatch) => ({
  active: (location) => {
    dispatch({
      type: 'ACTIVE_TAB',
      location
    });
  }
});

const Tabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTabs);

export default Tabs;
