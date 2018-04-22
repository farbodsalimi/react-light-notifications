import { EventEmitter } from 'events';
import uuidv4 from 'uuid/v4';
import { TYPES } from '../constants/types';

class NotificationManager extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {function} options.onClick
   * @param {string} type
   */
  create(options, type) {
    const defaultOptions = {
      id: uuidv4(),
      type: type || TYPES.INFO,
      title: null,
      message: null,
      timeOut: 5000
    };

    if (options && options.priority) {
      this.queue.unshift(Object.assign(defaultOptions, options));
    } else {
      this.queue.push(Object.assign(defaultOptions, options));
    }

    this.emitChange();
  }

  checkOptions(input) {
    if (typeof input === 'string') return { message: input };
    else return input;
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {string} options.position
   * @param {function} options.onClick
   */
  info(options) {
    this.create(this.checkOptions(options), TYPES.INFO);
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {string} options.position
   * @param {function} options.onClick
   */
  success(options) {
    this.create(this.checkOptions(options), TYPES.SUCCESS);
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {string} options.position
   * @param {function} options.onClick
   */
  warning(options) {
    this.create(this.checkOptions(options), TYPES.WARNING);
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {string} options.position
   * @param {function} options.onClick
   */
  error(options) {
    this.create(this.checkOptions(options), TYPES.ERROR);
  }

  /**
   *
   * @param {object} options
   * @param {string} options.title
   * @param {string} options.message
   * @param {bool} options.showCloseButton
   * @param {bool} options.timeOut
   * @param {bool} options.priority
   * @param {function} options.onClick
   * @param {function} options.bgColor
   * @param {function} options.iconClassName
   */
  custom(options) {
    this.create(this.checkOptions(options), TYPES.CUSTOM);
  }

  remove(notification) {
    this.queue = this.queue.filter(n => notification.id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit(TYPES.CHANGE, this.queue);
  }

  addChangeListener(callback) {
    this.addListener(TYPES.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(TYPES.CHANGE, callback);
  }
}

export default new NotificationManager();
