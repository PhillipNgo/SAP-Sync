Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    if (!props.id) {
        return null;
    }

    var stops = {};
    _react.Children.forEach(props.children, function (child) {
        if (child.type === _Stop2.default) {
            if (child.props.stopColor && child.props.offset) {
                var offset = (0, _percentToFloat2.default)(child.props.offset);

                stops[offset] = (0, _color2.default)(child.props.stopColor).alpha((0, _extractOpacity2.default)(child.props.stopOpacity));
            }
        } else {
            console.warn('`Gradient` elements only accept `Stop` elements as children');
        }
    });

    var sorted = _lodash2.default.sortBy(_lodash2.default.map(stops, function (stop, offset) {
        return { stop: stop, offset: offset };
    }), 'offset');

    var gradient = [];

    sorted.forEach(function (_ref) {
        var stop = _ref.stop;

        var channels = stop.rgbaArray();
        gradient.push(channels[0] / 255);
        gradient.push(channels[1] / 255);
        gradient.push(channels[2] / 255);
        gradient.push(channels[3]);
    });

    gradient.push.apply(gradient, babelHelpers.toConsumableArray(sorted.map(function (_ref2) {
        var offset = _ref2.offset;
        return +offset;
    })));

    var gradientTransform = void 0;
    if (props.transform) {
        gradientTransform = (0, _extractTransform2.default)(props.transform);
    } else {
        gradientTransform = (0, _extractTransform2.default)(props);
    }

    return {
        gradient: gradient,
        name: props.id,
        gradientTransform: gradientTransform,
        gradientUnits: _PATTERN_UNITS2.default[props.gradientUnits] || 0
    };
};

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _color = require('color');

var _color2 = babelHelpers.interopRequireDefault(_color);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = babelHelpers.interopRequireDefault(_extractOpacity);

var _extractTransform = require('./extractTransform');

var _extractTransform2 = babelHelpers.interopRequireDefault(_extractTransform);

var _PATTERN_UNITS = require('../PATTERN_UNITS');

var _PATTERN_UNITS2 = babelHelpers.interopRequireDefault(_PATTERN_UNITS);

var _percentToFloat = require('../percentToFloat');

var _percentToFloat2 = babelHelpers.interopRequireDefault(_percentToFloat);

var _Stop = require('../../elements/Stop');

var _Stop2 = babelHelpers.interopRequireDefault(_Stop);