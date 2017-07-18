
'use strict';

var FormData = require('FormData');
var NativeEventEmitter = require('NativeEventEmitter');
var RCTNetworkingNative = require('NativeModules').Networking;
var convertRequestBody = require('convertRequestBody');

var RCTNetworking = function (_NativeEventEmitter) {
  babelHelpers.inherits(RCTNetworking, _NativeEventEmitter);

  function RCTNetworking() {
    babelHelpers.classCallCheck(this, RCTNetworking);
    return babelHelpers.possibleConstructorReturn(this, (RCTNetworking.__proto__ || Object.getPrototypeOf(RCTNetworking)).call(this, RCTNetworkingNative));
  }

  babelHelpers.createClass(RCTNetworking, [{
    key: 'sendRequest',
    value: function sendRequest(method, trackingName, url, headers, data, responseType, incrementalUpdates, timeout, callback, withCredentials) {
      var body = convertRequestBody(data);
      RCTNetworkingNative.sendRequest({
        method: method,
        url: url,
        data: babelHelpers.extends({}, body, { trackingName: trackingName }),
        headers: headers,
        responseType: responseType,
        incrementalUpdates: incrementalUpdates,
        timeout: timeout,
        withCredentials: withCredentials
      }, callback);
    }
  }, {
    key: 'abortRequest',
    value: function abortRequest(requestId) {
      RCTNetworkingNative.abortRequest(requestId);
    }
  }, {
    key: 'clearCookies',
    value: function clearCookies(callback) {
      RCTNetworkingNative.clearCookies(callback);
    }
  }]);
  return RCTNetworking;
}(NativeEventEmitter);

module.exports = new RCTNetworking();