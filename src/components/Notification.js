import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Notification extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'custom']),
    title: PropTypes.node,
    message: PropTypes.node.isRequired,
    showCloseButton: PropTypes.bool,
    timeOut: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func,
    bgColor: PropTypes.string
  };

  static defaultProps = {
    type: 'info',
    title: null,
    message: null,
    showCloseButton: true,
    timeOut: 5000,
    onClick: () => {},
    onRequestHide: () => {}
  };

  componentDidMount = () => {
    const { timeOut } = this.props;
    if (timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, timeOut);
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
    this.requestHide();
  };

  requestHide = () => {
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide();
    }
  };

  renderCloseButton = () => {
    const { showCloseButton } = this.props;
    return showCloseButton ? (
      <span className="close-button" onClick={this.requestHide}>
        <i className="close-icon" />
      </span>
    ) : null;
  };

  renderTitle = () => {
    return this.props.title ? (
      <h4 className="title">{this.props.title}</h4>
    ) : null;
  };

  render() {
    const { type, message, iconClassName } = this.props;
    const classNames = classnames([
      'notification',
      `notification-${type}`,
      iconClassName
    ]);
    const style =
      type === 'custom' && this.props.bgColor
        ? { backgroundColor: this.props.bgColor }
        : null;

    return (
      <div className={classNames} style={style}>
        {this.renderCloseButton()}
        <div onClick={this.handleClick}>
          {this.renderTitle()}
          <div className="notification-message" role="alert">
            <div className="message">{message}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
