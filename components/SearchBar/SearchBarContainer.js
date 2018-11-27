import React from "react";
import PropTypes from "prop-types";
import SearchBarPresenter from "./SearchBarPresenter";

export default class extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => false
  };

  state = {
    value: ""
  };

  updateValue = text => {
    this.setState({
      value: text
    });
  };

  clearValue = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    return (
      <SearchBarPresenter
        value={value}
        onSubmit={onSubmit}
        updateValue={this.updateValue}
        clearValue={this.clearValue}
      />
    );
  }
}
