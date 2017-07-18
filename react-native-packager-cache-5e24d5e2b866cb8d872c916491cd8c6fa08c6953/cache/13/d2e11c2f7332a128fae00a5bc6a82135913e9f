'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _reactNative = require('react-native');

var _AssetRegistry = require('react-native/Libraries/Image/AssetRegistry');

var _AssetRegistry2 = babelHelpers.interopRequireDefault(_AssetRegistry);

var _AssetSourceResolver = require('react-native/Libraries/Image/AssetSourceResolver');

var _AssetSourceResolver2 = babelHelpers.interopRequireDefault(_AssetSourceResolver);

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = babelHelpers.interopRequireDefault(_resolveAssetSource);

var _Constants = require('./Constants');

var pickScale = function pickScale(meta) {

  var scale = meta.scales.length > 1 ? _AssetSourceResolver2.default.pickScale(meta.scales, _reactNative.PixelRatio.get()) : 1;
  var index = meta.scales.findIndex(function (s) {
    return s === scale;
  });
  var hash = meta.fileHashes[index] || meta.fileHashes[0];

  var suffix = '/' + meta.name + (scale === 1 ? '' : '@' + scale + 'x') + '.' + meta.type + '?platform=' + _reactNative.Platform.OS + '&hash=' + meta.hash;

  if (/^https?:/.test(meta.httpServerLocation)) {
    return {
      uri: meta.httpServerLocation + suffix,
      hash: hash
    };
  }

  if (_Constants.manifest.xde) {
    return {
      uri: _Constants.manifest.bundleUrl.match(/^https?:\/\/.*?\//)[0] + meta.httpServerLocation.replace(/^\/?/, '') + suffix,
      hash: hash
    };
  }

  return {
    uri: 'https://d1wp6m56sqw74a.cloudfront.net/~assets/' + hash,
    hash: hash
  };
};

var Asset = (_temp = _class = function () {
  function Asset(_ref) {
    var name = _ref.name,
        type = _ref.type,
        hash = _ref.hash,
        uri = _ref.uri,
        width = _ref.width,
        height = _ref.height;
    babelHelpers.classCallCheck(this, Asset);

    this.name = name;
    this.type = type;
    this.hash = hash;
    this.uri = uri;
    if (typeof width === 'number') {
      this.width = width;
    }
    if (typeof height === 'number') {
      this.height = height;
    }

    this.downloading = false;
    this.downloaded = false;
    this.downloadCallbacks = [];
  }

  babelHelpers.createClass(Asset, [{
    key: 'downloadAsync',
    value: function downloadAsync() {
      var _this = this;

      var path, exists, md5, uri, _ref2, _ref3;

      return regeneratorRuntime.async(function downloadAsync$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.downloaded) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              if (!this.downloading) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
                return _this.downloadCallbacks.push({ resolve: resolve, reject: reject });
              }));

            case 5:
              return _context.abrupt('return');

            case 6:
              this.downloading = true;

              _context.prev = 7;
              path = 'ExponentAsset-' + this.hash + '.' + this.type;
              exists = void 0, md5 = void 0, uri = void 0;
              _context.next = 12;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentFileSystem.getInfoAsync(path, {
                cache: true,
                md5: true
              }));

            case 12:
              _ref2 = _context.sent;
              exists = _ref2.exists;
              md5 = _ref2.md5;
              uri = _ref2.uri;

              if (!(!exists || md5 !== this.hash)) {
                _context.next = 24;
                break;
              }

              _context.next = 19;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentFileSystem.downloadAsync(this.uri, path, { cache: true, md5: true }));

            case 19:
              _ref3 = _context.sent;
              md5 = _ref3.md5;
              uri = _ref3.uri;

              if (!(md5 !== this.hash)) {
                _context.next = 24;
                break;
              }

              throw new Error('Downloaded file for asset \'' + this.name + '.' + this.type + '\' ' + 'failed MD5 integrity check');

            case 24:
              this.localUri = uri;
              this.downloaded = true;
              this.downloadCallbacks.forEach(function (_ref4) {
                var resolve = _ref4.resolve;
                return resolve();
              });
              _context.next = 33;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context['catch'](7);

              this.downloadCallbacks.forEach(function (_ref5) {
                var reject = _ref5.reject;
                return reject(_context.t0);
              });
              throw _context.t0;

            case 33:
              _context.prev = 33;

              this.downloading = false;
              this.downloadCallbacks = [];
              return _context.finish(33);

            case 37:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this, [[7, 29, 33, 37]]);
    }
  }], [{
    key: 'fromModule',
    value: function fromModule(moduleId) {
      if (Asset.byModule[moduleId]) {
        return Asset.byModule[moduleId];
      }

      var meta = _AssetRegistry2.default.getAssetByID(moduleId);
      meta.moduleId = moduleId;

      var _pickScale = pickScale(meta),
          uri = _pickScale.uri,
          hash = _pickScale.hash;

      var asset = new Asset({
        name: meta.name,
        type: meta.type,
        hash: hash,
        uri: uri,
        width: meta.width,
        height: meta.height
      });
      Asset.byModule[moduleId] = asset;
      return asset;
    }
  }]);
  return Asset;
}(), _class.byModule = {}, _temp);
exports.default = Asset;

_resolveAssetSource2.default.setCustomSourceTransformer(function (resolver) {
  if (!resolver.asset.moduleId) {
    return resolver.fromSource(pickScale(resolver.asset).uri);
  }
  var asset = Asset.fromModule(resolver.asset.moduleId);
  return resolver.fromSource(asset.downloaded ? asset.localUri : asset.uri);
});