Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processFontFamily = processFontFamily;
exports.isLoaded = isLoaded;
exports.isLoading = isLoading;
exports.loadAsync = loadAsync;
exports.style = style;

var _reactNative = require('react-native');

var _Asset = require('./Asset');

var _Asset2 = babelHelpers.interopRequireDefault(_Asset);

var _Constants = require('./Constants');

var _Constants2 = babelHelpers.interopRequireDefault(_Constants);

function nativeName(name) {
  return _Constants2.default.sessionId + '-' + name;
}

var loaded = {};
var loading = {};
var onLoadPromises = {};

function processFontFamily(name) {
  if (!name || _Constants2.default.systemFonts.includes(name) || name === 'System') {
    return name;
  }

  if (name.includes(_Constants2.default.sessionId)) {
    return name;
  }

  if (!isLoaded(name)) {
    if (__DEV__) {
      if (isLoading(name)) {
        console.error('You started loading \'' + name + '\', but used it before it finished loading\n\n' + '- You need to wait for Exponent.Font.loadAsync to complete before using the font.\n\n' + '- We recommend loading all fonts before rendering the app, and rendering only ' + 'Exponent.Components.AppLoading while waiting for loading to complete.');
      } else {
        console.error('fontFamily \'' + name + '\' is not a system font and has not been loaded through ' + 'Exponent.Font.loadAsync.\n\n' + '- If you intended to use a system font, make sure you typed the name ' + 'correctly and that it is supported by your device operating system.\n\n' + '- If this is a custom font, be sure to load it with Exponent.Font.loadAsync.');
      }
    }

    return 'System';
  }

  return 'ExponentFont-' + nativeName(name);
}

function isLoaded(name) {
  return !!loaded[name];
}

function isLoading(name) {
  return !!onLoadPromises[name];
}

function loadAsync(nameOrMap, uriOrModuleOrAsset) {
  var names, name, asset;
  return regeneratorRuntime.async(function loadAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof nameOrMap === 'object')) {
            _context.next = 5;
            break;
          }

          names = Object.keys(nameOrMap);
          _context.next = 4;
          return regeneratorRuntime.awrap(Promise.all(names.map(function (name) {
            return loadAsync(name, nameOrMap[name]);
          })));

        case 4:
          return _context.abrupt('return');

        case 5:
          name = nameOrMap;

          if (!loaded[name]) {
            _context.next = 10;
            break;
          }

          return _context.abrupt('return');

        case 10:
          if (!loading[name]) {
            _context.next = 15;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            onLoadPromises[name].push(resolve);
          }));

        case 13:
          _context.next = 34;
          break;

        case 15:
          loading[name] = true;
          onLoadPromises[name] = [];

          asset = void 0;

          if (!(typeof uriOrModuleOrAsset === 'string')) {
            _context.next = 22;
            break;
          }

          throw new Error('Loading fonts from remote URIs is temporarily not supported. Please download the font file and load it using require. See: https://docs.getexponent.com/versions/v8.0.0/guides/using-custom-fonts.html#downloading-the-font');

        case 22:
          if (typeof uriOrModuleOrAsset === 'number') {
            asset = _Asset2.default.fromModule(uriOrModuleOrAsset);
          } else {
            asset = uriOrModuleOrAsset;
          }

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(asset.downloadAsync());

        case 25:
          if (!asset.downloaded) {
            _context.next = 30;
            break;
          }

          _context.next = 28;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentFontLoader.loadAsync(nativeName(name), asset.localUri));

        case 28:
          _context.next = 31;
          break;

        case 30:
          throw new Error('Couldn\'t download asset for font \'' + name + '\'');

        case 31:

          loaded[name] = true;
          delete loading[name];
          if (onLoadPromises[name]) {
            onLoadPromises[name].forEach(function (resolve) {
              return resolve();
            });
            delete onLoadPromises[name];
          }

        case 34:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

function style(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ignoreWarning: false };

  if (!name) {
    return {
      fontFamily: undefined
    };
  }

  if (!loaded[name] && !options.ignoreWarning) {
    console.warn('[Exponent.Font] No font \'' + name + '\', or it hasn\'t been loaded yet');
  }
  return {
    fontFamily: 'ExponentFont-' + nativeName(name)
  };
}