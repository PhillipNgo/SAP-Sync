

'use strict';

var Platform = require('Platform');
var TVEventHandler = require('TVEventHandler');

function emptyFunction() {}

var BackHandler = void 0;

if (Platform.isTVOS) {
  var _tvEventHandler = new TVEventHandler();
  var _backPressSubscriptions = new Set();

  _tvEventHandler.enable(this, function (cmp, evt) {
    if (evt && evt.eventType === 'menu') {
      var backPressSubscriptions = new Set(_backPressSubscriptions);
      var invokeDefault = true;
      var subscriptions = [].concat(babelHelpers.toConsumableArray(backPressSubscriptions)).reverse();
      for (var i = 0; i < subscriptions.length; ++i) {
        if (subscriptions[i]()) {
          invokeDefault = false;
          break;
        }
      }

      if (invokeDefault) {
        BackHandler.exitApp();
      }
    }
  });

  BackHandler = {
    exitApp: emptyFunction,

    addEventListener: function addEventListener(eventName, handler) {
      _backPressSubscriptions.add(handler);
      return {
        remove: function remove() {
          return BackHandler.removeEventListener(eventName, handler);
        }
      };
    },

    removeEventListener: function removeEventListener(eventName, handler) {
      _backPressSubscriptions.delete(handler);
    }

  };
} else {

  BackHandler = {
    exitApp: emptyFunction,
    addEventListener: function addEventListener() {
      return {
        remove: emptyFunction
      };
    },

    removeEventListener: emptyFunction
  };
}

module.exports = BackHandler;