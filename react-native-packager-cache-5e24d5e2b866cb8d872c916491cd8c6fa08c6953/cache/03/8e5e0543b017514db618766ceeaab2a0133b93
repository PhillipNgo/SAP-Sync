
'use strict';

var React = require('React');

var StaticContainer = function (_React$Component) {
  babelHelpers.inherits(StaticContainer, _React$Component);

  function StaticContainer() {
    babelHelpers.classCallCheck(this, StaticContainer);
    return babelHelpers.possibleConstructorReturn(this, (StaticContainer.__proto__ || Object.getPrototypeOf(StaticContainer)).apply(this, arguments));
  }

  babelHelpers.createClass(StaticContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !!nextProps.shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      var child = this.props.children;
      return child === null || child === false ? null : React.Children.only(child);
    }
  }]);
  return StaticContainer;
}(React.Component);

module.exports = StaticContainer;