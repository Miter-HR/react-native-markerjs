"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rect, Text, TSpan } from 'react-native-svg';
import RectangularBoxMarkerBase from "./RectangularBoxMarkerBase.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TextMarker = ({
  strokeColor,
  strokeWidth,
  strokeDasharray,
  children,
  zoomFactor = 1,
  scaleStroke = true,
  text,
  fontFamily,
  fontSize,
  color,
  ...props
}) => {
  const lines = text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/);

  // Use the stored font size (dashboard markerjs3 does this). The stock RN
  // renderer derived fontSize from box height and set the first TSpan dy to
  // that full line-height, which put the baseline at the bottom of the box.
  const fontSizePx = fontSize?.units === 'rem' ? fontSize.value * 16 : fontSize?.value ?? 16;
  const padding = props.padding ?? 2;
  // markerjs3 TextBlock.positionText for a single line:
  // y = padding + textHeight/2 + lineHeight/3 + offsetY (offsetY = padding)
  const firstBaseline = padding * 2 + fontSizePx * 5 / 6;
  return /*#__PURE__*/_jsxs(RectangularBoxMarkerBase, {
    ...props,
    children: [/*#__PURE__*/_jsx(Rect, {
      x: 0,
      y: 0,
      width: props.width,
      height: props.height,
      fill: "transparent",
      stroke: "transparent"
    }), children, /*#__PURE__*/_jsx(Text, {
      textAnchor: "middle",
      children: lines.map((line, lineno) => /*#__PURE__*/_jsx(TSpan, {
        fill: color,
        fontFamily: fontFamily,
        fontSize: `${fontSizePx}px`,
        x: props.width / 2,
        dy: lineno === 0 ? firstBaseline : fontSizePx,
        children: line
      }, lineno))
    })]
  });
};
export default TextMarker;
//# sourceMappingURL=TextMarker.js.map