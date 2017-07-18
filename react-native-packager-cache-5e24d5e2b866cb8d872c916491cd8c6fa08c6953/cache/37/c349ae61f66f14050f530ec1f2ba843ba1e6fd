Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return transformToMatrix(props2transform(props), props.transform ? props2transform(props.transform) : null);
};

var _Matrix2D = require('../Matrix2D');

var _Matrix2D2 = babelHelpers.interopRequireDefault(_Matrix2D);

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var pooledMatrix = new _Matrix2D2.default();

function transformToMatrix(props, transform) {
    pooledMatrix.reset();
    appendTransform(props);

    if (transform) {
        appendTransform(transform);
    }

    return pooledMatrix.toArray();
}

function appendTransform(transform) {
    pooledMatrix.appendTransform(transform.x + transform.originX, transform.y + transform.originY, transform.scaleX, transform.scaleY, transform.rotation, transform.skewX, transform.skewY, transform.originX, transform.originY);
}

function universal2axis(universal, axisX, axisY, defaultValue) {
    var coords = [];
    var x = void 0;
    var y = void 0;
    if (_lodash2.default.isString(universal)) {
        coords = universal.split(/\s*,\s*/);
        if (coords.length === 2) {
            x = +coords[0];
            y = +coords[1];
        } else if (coords.length === 1) {
            x = y = +coords[0];
        }
    } else if (_lodash2.default.isNumber(universal)) {
        x = y = universal;
    }

    axisX = +axisX;
    if (!isNaN(axisX)) {
        x = axisX;
    }

    axisY = +axisY;
    if (!isNaN(axisY)) {
        y = axisY;
    }

    return [x || defaultValue || 0, y || defaultValue || 0];
}

function props2transform(props) {
    var _universal2axis = universal2axis(props.origin, props.originX, props.originY),
        _universal2axis2 = babelHelpers.slicedToArray(_universal2axis, 2),
        originX = _universal2axis2[0],
        originY = _universal2axis2[1];

    var _universal2axis3 = universal2axis(props.scale, props.scaleX, props.scaleY, 1),
        _universal2axis4 = babelHelpers.slicedToArray(_universal2axis3, 2),
        scaleX = _universal2axis4[0],
        scaleY = _universal2axis4[1];

    var _universal2axis5 = universal2axis(props.skew, props.skewX, props.skewY),
        _universal2axis6 = babelHelpers.slicedToArray(_universal2axis5, 2),
        skewX = _universal2axis6[0],
        skewY = _universal2axis6[1];

    var _universal2axis7 = universal2axis(props.translate, _lodash2.default.isNil(props.translateX) ? props.x : props.translateX, _lodash2.default.isNil(props.translateY) ? props.y : props.translateY),
        _universal2axis8 = babelHelpers.slicedToArray(_universal2axis7, 2),
        translateX = _universal2axis8[0],
        translateY = _universal2axis8[1];

    return {
        rotation: +props.rotation || +props.rotate || 0,
        scaleX: scaleX,
        scaleY: scaleY,
        originX: originX,
        originY: originY,
        skewX: skewX,
        skewY: skewY,
        x: translateX,
        y: translateY
    };
}