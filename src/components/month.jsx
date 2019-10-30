import React from 'react';

export default class Month extends React.Component {

  constructor(props) {
    super(props);

    this.onMonthTextChange = this.onMonthTextChange.bind(this);
  }

  onMonthTextChange(event) {
    this.props.setMonthText(event.target.value)
  }

  render() {
    return (
      <div className="month">
        <h3>Month Name</h3>
        <textarea
          value={this.props.monthText}
          onChange={this.onMonthTextChange}
        ></textarea>
      </div>
    )
  }
}