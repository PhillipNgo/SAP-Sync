Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _fbemitter = require('fbemitter');

var CTKNativeAdManager = _reactNative.NativeModules.CTKNativeAdManager,
    CTKNativeAdEmitter = _reactNative.NativeModules.CTKNativeAdEmitter;


var nativeAdEmitter = new _reactNative.NativeEventEmitter(CTKNativeAdEmitter);

var EVENT_DID_BECOME_VALID = 'AdsManagerDidBecomeValid';

var NativeAdsManager = function () {
  function NativeAdsManager(placementId) {
    var adsToRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    babelHelpers.classCallCheck(this, NativeAdsManager);
    this.isValid = false;
    this.eventEmitter = new _fbemitter.EventEmitter();

    this.placementId = placementId;
    this.adsToRequest = adsToRequest;

    this._listenForStateChanges();

    CTKNativeAdManager.init(placementId, adsToRequest);
  }

  babelHelpers.createClass(NativeAdsManager, [{
    key: '_listenForStateChanges',
    value: function _listenForStateChanges() {
      var _this = this;

      nativeAdEmitter.addListener('CTKNativeAdsManagersChanged', function (managers) {
        var isValidNew = managers[_this.placementId];
        var isValid = _this.isValid;

        if (isValid !== isValidNew && isValidNew) {
          _this.isValid = true;
          _this.eventEmitter.emit(EVENT_DID_BECOME_VALID);
        }
      });
    }
  }, {
    key: 'onAdsLoaded',
    value: function onAdsLoaded(func) {
      if (this.isValid) {
        setTimeout(func);
        return {
          remove: function remove() {}
        };
      }

      return this.eventEmitter.once(EVENT_DID_BECOME_VALID, func);
    }
  }, {
    key: 'disableAutoRefresh',
    value: function disableAutoRefresh() {
      CTKNativeAdManager.disableAutoRefresh(this.placementId);
    }
  }, {
    key: 'setMediaCachePolicy',
    value: function setMediaCachePolicy(cachePolicy) {
      CTKNativeAdManager.setMediaCachePolicy(this.placementId, cachePolicy);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.placementId;
    }
  }]);
  return NativeAdsManager;
}();

exports.default = NativeAdsManager;