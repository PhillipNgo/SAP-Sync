Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, ref) {
    var styleProperties = [];

    var extractedProps = {
        opacity: (0, _extractOpacity2.default)(props.opacity),
        propList: styleProperties
    };

    if (props.id) {
        extractedProps.name = props.id;
    }

    if (props.clipPath) {
        babelHelpers.extends(extractedProps, (0, _extractClipPath2.default)(props));
    }

    babelHelpers.extends(extractedProps, (0, _extractStroke2.default)(props, styleProperties));
    babelHelpers.extends(extractedProps, (0, _extractFill2.default)(props, styleProperties));

    if (props.transform) {
        extractedProps.matrix = (0, _extractTransform2.default)(props.transform);
    } else {
        extractedProps.matrix = (0, _extractTransform2.default)(props);
    }

    babelHelpers.extends(extractedProps, (0, _extractResponder2.default)(props, ref));

    return extractedProps;
};

var _extractFill = require('./extractFill');

var _extractFill2 = babelHelpers.interopRequireDefault(_extractFill);

var _extractStroke = require('./extractStroke');

var _extractStroke2 = babelHelpers.interopRequireDefault(_extractStroke);

var _extractTransform = require('./extractTransform');

var _extractTransform2 = babelHelpers.interopRequireDefault(_extractTransform);

var _extractClipPath = require('./extractClipPath');

var _extractClipPath2 = babelHelpers.interopRequireDefault(_extractClipPath);

var _extractResponder = require('./extractResponder');

var _extractResponder2 = babelHelpers.interopRequireDefault(_extractResponder);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = babelHelpers.interopRequireDefault(_extractOpacity);