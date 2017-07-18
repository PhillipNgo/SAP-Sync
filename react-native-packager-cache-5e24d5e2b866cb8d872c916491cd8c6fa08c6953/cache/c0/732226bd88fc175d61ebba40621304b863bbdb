
'use strict';

var NativeEventEmitter = require('NativeEventEmitter');

var _require = require('NativeModules'),
    StatusBarManager = _require.StatusBarManager;

var StatusBarIOS = function (_NativeEventEmitter) {
  babelHelpers.inherits(StatusBarIOS, _NativeEventEmitter);

  function StatusBarIOS() {
    babelHelpers.classCallCheck(this, StatusBarIOS);
    return babelHelpers.possibleConstructorReturn(this, (StatusBarIOS.__proto__ || Object.getPrototypeOf(StatusBarIOS)).apply(this, arguments));
  }

  return StatusBarIOS;
}(NativeEventEmitter);

module.exports = new StatusBarIOS(StatusBarManager);