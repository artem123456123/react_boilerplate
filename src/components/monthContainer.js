import React from 'react';
import { connect } from 'react-redux';

import { setMonthText } from '../store/month/actions';
import Month from './month';

class MonthContainer extends React.Component {
  render() {
    return (
      <Month monthText={this.props.monthText} setMonthText={this.props.setMonthText}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    monthText: state.month.monthText
  };
}

const mapDispatchToProps = {
  setMonthText
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthContainer);