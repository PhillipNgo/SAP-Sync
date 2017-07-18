var _reactNative = require('react-native');

var ExponentConstants = _reactNative.NativeModules.ExponentConstants;


var manifest = void 0;
if (ExponentConstants && ExponentConstants.manifest) {
  manifest = _reactNative.NativeModules.ExponentConstants.manifest;
  if (typeof manifest === 'string') {
    manifest = JSON.parse(manifest);
  }
}

module.exports = babelHelpers.extends({}, _reactNative.NativeModules.ExponentConstants, {
  manifest: manifest
});