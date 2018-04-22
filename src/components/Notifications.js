import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import Notification from './Notification';

class Notifications extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    onRequestHide: PropTypes.func,
    enterTimeout: PropTypes.number,
    leaveTimeout: PropTypes.number
  };

  static defaultProps = {
    notifications: [],
    onRequestHide: () => {},
    enterTimeout: 400,
    leaveTimeout: 400
  };

  handleRequestHide = notification => () => {
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide(notification);
    }
  };

  render() {
    const { notifications, enterTimeout, leaveTimeout } = this.props;
    const className = classnames('notification-container', {
      'notification-container-empty': notifications.length === 0
    });
    return (
      <div className={className}>
        <ReactCSSTransitionGroup
          transitionName="notification"
          transitionEnterTimeout={enterTimeout}
          transitionLeaveTimeout={leaveTimeout}
        >
          {notifications.map(notification => {
            return (
              <Notification
                key={notification.id}
                type={notification.type}
                position={notification.position}
                title={notification.title}
                message={notification.message}
                showCloseButton={notification.showCloseButton}
                timeOut={notification.timeOut}
                onClick={notification.onClick}
                bgColor={notification.bgColor}
                iconClassName={notification.iconClassName}
                onRequestHide={this.handleRequestHide(notification)}
              />
            );
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Notifications;
