Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSensorWrapper;

var _reactNative = require('react-native');

function createSensorWrapper(NativeSensorModule, eventName) {
  var SensorEventEmitter = new _reactNative.NativeEventEmitter(NativeSensorModule);

  var SensorWrapper = function () {
    function SensorWrapper() {
      babelHelpers.classCallCheck(this, SensorWrapper);
    }

    babelHelpers.createClass(SensorWrapper, [{
      key: 'hasListeners',
      value: function hasListeners() {
        return this.getListenerCount() > 0;
      }
    }, {
      key: 'getListenerCount',
      value: function getListenerCount() {
        return SensorEventEmitter.listeners(eventName).length;
      }
    }, {
      key: 'addListener',
      value: function addListener(listener) {
        var _this = this;

        if (_reactNative.Platform.OS === 'android') {
          if (!this.hasListeners()) {
            NativeSensorModule.startObserving();
          }
        }

        var emitterSubscription = SensorEventEmitter.addListener(eventName, listener);
        var originalRemove = emitterSubscription.remove;

        emitterSubscription.remove = function () {
          return _this.removeSubscription(emitterSubscription);
        };

        return emitterSubscription;
      }
    }, {
      key: 'removeAllListeners',
      value: function removeAllListeners() {
        if (_reactNative.Platform.OS === 'android') {
          NativeSensorModule.stopObserving();
        }

        return SensorEventEmitter.removeAllListeners(eventName);
      }
    }, {
      key: 'removeSubscription',
      value: function removeSubscription(subscription) {
        if (_reactNative.Platform.OS === 'android') {
          if (this.getListenerCount() === 1) {
            NativeSensorModule.stopObserving();
          }
        }

        return SensorEventEmitter.removeSubscription(subscription);
      }
    }, {
      key: 'setUpdateInterval',
      value: function setUpdateInterval(intervalMs) {
        NativeSensorModule.setUpdateInterval(intervalMs);
      }
    }]);
    return SensorWrapper;
  }();

  return new SensorWrapper();
}