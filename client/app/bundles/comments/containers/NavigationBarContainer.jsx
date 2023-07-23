import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BaseComponent from '../../../libs/components/BaseComponent.jsx';

import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';

function stateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  if (state.$$commentsStore) {
    return {
      commentsCount: state.$$commentsStore.get('$$comments').size,
      pathname: state.railsContext.pathname,
    };
  }
  return {};
}

class NavigationBarContainer extends BaseComponent {
  static propTypes = {
    commentsCount: PropTypes.number.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  render() {
    const { commentsCount, pathname } = this.props;

    return <NavigationBar {...{ commentsCount, pathname }} />;
  }
}

// Don't forget to actually use connect!
export default connect(stateToProps)(NavigationBarContainer);
