
'use strict';

var NativeModules = require('NativeModules');
var Promise = require('Promise');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

var AccessibilityManager = NativeModules.AccessibilityManager;

var VOICE_OVER_EVENT = 'voiceOverDidChange';

var _subscriptions = new Map();

var AccessibilityInfo = {
  fetch: function fetch() {
    return new Promise(function (resolve, reject) {
      AccessibilityManager.getCurrentVoiceOverState(resolve, reject);
    });
  },

  addEventListener: function addEventListener(eventName, handler) {
    var listener = RCTDeviceEventEmitter.addListener(VOICE_OVER_EVENT, handler);
    _subscriptions.set(handler, listener);
    return {
      remove: AccessibilityInfo.removeEventListener.bind(null, eventName, handler)
    };
  },

  removeEventListener: function removeEventListener(eventName, handler) {
    var listener = _subscriptions.get(handler);
    if (!listener) {
      return;
    }
    listener.remove();
    _subscriptions.delete(handler);
  }

};

module.exports = AccessibilityInfo;