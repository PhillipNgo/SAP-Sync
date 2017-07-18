Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _reactNative = require('react-native');

var ExponentKeepAwake = _reactNative.NativeModules.ExponentKeepAwake;
var KeepAwake = (_temp = _class = function (_Component) {
  babelHelpers.inherits(KeepAwake, _Component);

  function KeepAwake() {
    babelHelpers.classCallCheck(this, KeepAwake);
    return babelHelpers.possibleConstructorReturn(this, (KeepAwake.__proto__ || Object.getPrototypeOf(KeepAwake)).apply(this, arguments));
  }

  babelHelpers.createClass(KeepAwake, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ExponentKeepAwake.activate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ExponentKeepAwake.deactivate();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return KeepAwake;
}(_react.Component), _class.activate = ExponentKeepAwake.activate, _class.deactivate = ExponentKeepAwake.deactivate, _temp);
exports.default = KeepAwake;