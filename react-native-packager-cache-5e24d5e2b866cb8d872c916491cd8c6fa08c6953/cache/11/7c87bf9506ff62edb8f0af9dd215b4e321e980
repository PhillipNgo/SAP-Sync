Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logInAsync = logInAsync;

var _reactNative = require('react-native');

var _Constants = require('./Constants');

var Constants = babelHelpers.interopRequireWildcard(_Constants);


var Google = _reactNative.NativeModules.ExponentGoogle;

function logInAsync(config) {
  var behavior, scopes, androidClientId, iosClientId, logInResult, userInfoResponse;
  return regeneratorRuntime.async(function logInAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          behavior = config.behavior;

          if (!behavior) {
            behavior = 'system';
          }

          if (behavior === 'system' && Constants.appOwnership !== 'standalone') {
            behavior = 'web';
          }

          scopes = config.scopes;

          if (!scopes) {
            scopes = ['profile', 'email'];
          }

          androidClientId = Constants.appOwnership === 'standalone' ? config.androidStandaloneAppClientId : config.androidClientId;
          iosClientId = Constants.appOwnership === 'standalone' ? config.iosStandaloneAppClientId : config.iosClientId;
          _context.next = 9;
          return regeneratorRuntime.awrap(Google.logInAsync({
            androidClientId: androidClientId,
            iosClientId: iosClientId,
            behavior: behavior,
            scopes: scopes
          }));

        case 9:
          logInResult = _context.sent;

          if (!(behavior === 'web')) {
            _context.next = 20;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: 'Bearer ' + logInResult.accessToken }
          }));

        case 13:
          userInfoResponse = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(userInfoResponse.json());

        case 16:
          userInfoResponse = _context.sent;
          return _context.abrupt('return', babelHelpers.extends({}, logInResult, {
            user: {
              id: userInfoResponse.id,
              name: userInfoResponse.name,
              givenName: userInfoResponse.given_name,
              familyName: userInfoResponse.family_name,
              photoUrl: userInfoResponse.picture,
              email: userInfoResponse.email
            }
          }));

        case 20:
          return _context.abrupt('return', logInResult);

        case 21:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}