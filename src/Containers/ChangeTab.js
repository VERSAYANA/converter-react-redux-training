import { connect } from 'react-redux';
import Selector from '../Components/Selector';

const activeTab = (state) => state.find(t => t.active === true);
const invisibleTabs = (state) => state.filter(t => t.location === false);


const mapStateToProps = (state) => ({
  location: activeTab(state).location,
  current: activeTab(state).name,
  invisibleTabs: invisibleTabs(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeTab: (location, newTab) => {
    dispatch({
      type: 'CHANGE_TABS',
      location,
      newTab
    });
  }
});

const ChangeTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector);

export default ChangeTab;
