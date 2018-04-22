import React from 'react';
import { NotificationContainer, NotificationManager } from '../../src';
import '../../src/style/index.scss';

const App = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Notifications</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>
            <button
              className="btn btn-primary"
              onClick={() => {
                NotificationManager.info({
                  title: 'Info',
                  message: 'Information notification message',
                  timeOut: 10000
                });
              }}
            >
              Info
            </button>
          </p>

          <p>
            <button
              className="btn btn-warning"
              onClick={() => {
                NotificationManager.warning({
                  title: 'Warn',
                  message: 'Warning notification message.'
                });
              }}
            >
              Warning
            </button>
          </p>

          <p>
            <button
              className="btn btn-danger"
              onClick={() => {
                NotificationManager.error({
                  title: 'Error',
                  message: 'Error notification message.'
                });
              }}
            >
              Error
            </button>
          </p>

          <p>
            <button
              className="btn btn-success"
              onClick={() => {
                NotificationManager.success({
                  title: 'Success',
                  message: 'Success notification message.'
                });
              }}
            >
              Success
            </button>
          </p>

          <p>
            <button
              style={{ backgroundColor: 'purple' }}
              className="btn btn-secondary"
              onClick={() => {
                NotificationManager.custom({
                  title: 'Custom',
                  message: 'Custom notification message.',
                  bgColor: 'purple',
                  iconClassName: 'custom-icon'
                });
              }}
            >
              Custom
            </button>
          </p>
        </div>
      </div>
    </div>

    <NotificationContainer />
  </div>
);

export default App;
