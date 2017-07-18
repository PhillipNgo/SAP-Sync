

'use strict';

var processColor = require('processColor');

var _require = require('NativeModules'),
    DevLoadingView = _require.DevLoadingView;

var HMRLoadingView = function () {
  function HMRLoadingView() {
    babelHelpers.classCallCheck(this, HMRLoadingView);
  }

  babelHelpers.createClass(HMRLoadingView, null, [{
    key: 'showMessage',
    value: function showMessage(message) {
      DevLoadingView.showMessage(message, processColor('#000000'), processColor('#aaaaaa'));
    }
  }, {
    key: 'hide',
    value: function hide() {
      DevLoadingView.hide();
    }
  }]);
  return HMRLoadingView;
}();

module.exports = HMRLoadingView;