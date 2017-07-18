Object.defineProperty(exports, "__esModule", {
    value: true
});

function arrayDiffer(a, b) {
    if (a == null || b == null) {
        return true;
    }
    if (a.length !== b.length) {
        return true;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}

function fontDiffer(a, b) {
    if (a === b) {
        return false;
    }

    return a.fontSize !== b.fontSize || a.fontFamily !== b.fontFamily || a.fontStyle !== b.fontStyle || a.fontWeight !== b.fontWeight;
}

var ViewBoxAttributes = {
    minX: true,
    minY: true,
    vbWidth: true,
    vbHeight: true,
    align: true,
    meetOrSlice: true
};

var NodeAttributes = {
    name: true,
    matrix: {
        diff: arrayDiffer
    },
    opacity: true,
    clipRule: true,
    clipPath: true,
    propList: {
        diff: arrayDiffer
    },
    responsible: true
};

var FillAndStrokeAttributes = {
    fill: {
        diff: arrayDiffer
    },
    fillOpacity: true,
    fillRule: true,
    stroke: {
        diff: arrayDiffer
    },
    strokeOpacity: true,
    strokeWidth: true,
    strokeLinecap: true,
    strokeLinejoin: true,
    strokeDasharray: {
        diff: arrayDiffer
    },
    strokeDashoffset: true,
    strokeMiterlimit: true
};

var RenderableAttributes = babelHelpers.extends({}, NodeAttributes, FillAndStrokeAttributes);

var GroupAttributes = RenderableAttributes;

var UseAttributes = babelHelpers.extends({
    href: true,
    width: true,
    height: true
}, RenderableAttributes);

var SymbolAttributes = babelHelpers.extends({
    name: true
}, ViewBoxAttributes);

var PathAttributes = babelHelpers.extends({
    d: true
}, RenderableAttributes);

var TextAttributes = babelHelpers.extends({
    font: {
        diff: fontDiffer
    },
    textAnchor: true,
    deltaX: arrayDiffer,
    deltaY: arrayDiffer,
    positionX: true,
    positionY: true
}, RenderableAttributes);

var TextPathAttributes = babelHelpers.extends({
    href: true,
    startOffset: true
}, RenderableAttributes);

var TSpanAttibutes = babelHelpers.extends({
    content: true
}, TextAttributes);

var ClipPathAttributes = {
    name: true
};

var GradientAttributes = babelHelpers.extends({
    gradient: {
        diff: arrayDiffer
    },
    gradientUnits: true,
    gradientTransform: {
        diff: arrayDiffer
    }
}, ClipPathAttributes);

var LinearGradientAttributes = babelHelpers.extends({
    x1: true,
    y1: true,
    x2: true,
    y2: true
}, GradientAttributes);

var RadialGradientAttributes = babelHelpers.extends({
    fx: true,
    fy: true,
    rx: true,
    ry: true,
    cx: true,
    cy: true,
    r: true
}, GradientAttributes);

var CircleAttributes = babelHelpers.extends({
    cx: true,
    cy: true,
    r: true
}, RenderableAttributes);

var EllipseAttributes = babelHelpers.extends({
    cx: true,
    cy: true,
    rx: true,
    ry: true
}, RenderableAttributes);

var ImageAttributes = babelHelpers.extends({
    x: true,
    y: true,
    width: true,
    height: true,
    src: true,
    align: true,
    meetOrSlice: true
}, RenderableAttributes);

var LineAttributes = babelHelpers.extends({
    x1: true,
    y1: true,
    x2: true,
    y2: true
}, RenderableAttributes);

var RectAttributes = babelHelpers.extends({
    x: true,
    y: true,
    width: true,
    height: true,
    rx: true,
    ry: true
}, RenderableAttributes);

exports.PathAttributes = PathAttributes;
exports.TextAttributes = TextAttributes;
exports.TSpanAttibutes = TSpanAttibutes;
exports.TextPathAttributes = TextPathAttributes;
exports.GroupAttributes = GroupAttributes;
exports.ClipPathAttributes = ClipPathAttributes;
exports.CircleAttributes = CircleAttributes;
exports.EllipseAttributes = EllipseAttributes;
exports.ImageAttributes = ImageAttributes;
exports.LineAttributes = LineAttributes;
exports.RectAttributes = RectAttributes;
exports.UseAttributes = UseAttributes;
exports.SymbolAttributes = SymbolAttributes;
exports.LinearGradientAttributes = LinearGradientAttributes;
exports.RadialGradientAttributes = RadialGradientAttributes;
exports.ViewBoxAttributes = ViewBoxAttributes;