Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIconSetFromIcoMoon;

var _createIconSet = require('./create-icon-set');

var _createIconSet2 = babelHelpers.interopRequireDefault(_createIconSet);

function createIconSetFromIcoMoon(config, fontFamilyArg, fontFile) {
  var glyphMap = {};
  config.icons.forEach(function (icon) {
    glyphMap[icon.properties.name] = icon.properties.code;
  });

  var fontFamily = fontFamilyArg || config.preferences.fontPref.metadata.fontFamily;

  return (0, _createIconSet2.default)(glyphMap, fontFamily, fontFile || fontFamily + '.ttf');
}