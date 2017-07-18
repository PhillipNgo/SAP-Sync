Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, ref) {
    var extractedProps = {};

    _lodash2.default.forEach(_props.responderProps, function (v, key) {
        var value = props[key];
        if (props[key]) {
            if (!extractedProps.responsible && key !== 'pointerEvents') {
                extractedProps.responsible = true;
            }

            extractedProps[key] = value;
        }
    });

    _lodash2.default.every(_props.touchableProps, function (v, key) {
        if (!props[key]) {
            return true;
        }

        extractedProps.responsible = true;
        babelHelpers.extends(extractedProps, {
            onStartShouldSetResponder: ref.touchableHandleStartShouldSetResponder,
            onResponderTerminationRequest: ref.touchableHandleResponderTerminationRequest,
            onResponderGrant: ref.touchableHandleResponderGrant,
            onResponderMove: ref.touchableHandleResponderMove,
            onResponderRelease: ref.touchableHandleResponderRelease,
            onResponderTerminate: ref.touchableHandleResponderTerminate
        });

        return false;
    });

    return extractedProps;
};

var _props = require('../props');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);