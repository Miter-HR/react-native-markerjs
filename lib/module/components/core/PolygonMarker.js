"use strict";

import { Path } from 'react-native-svg';
import MarkerBase from "./MarkerBase.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const PolygonMarker = ({
  points,
  fillColor,
  children,
  strokeWidth,
  strokeColor,
  strokeDasharray,
  scaleStroke = false,
  zoomFactor = 1,
  ...props
}) => {
  return /*#__PURE__*/_jsxs(MarkerBase, {
    ...props,
    children: [points.length > 0 && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Path, {
        d: `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')} Z`,
        ...props,
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: Math.max((strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1), 20 // ensure a minimum stroke width for interaction
        )
      }), /*#__PURE__*/_jsx(Path, {
        d: `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')} Z`,
        ...props,
        fill: fillColor ?? 'transparent',
        stroke: strokeColor,
        strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1),
        strokeDasharray: strokeDasharray
      })]
    }), children]
  });
};
export default PolygonMarker;
//# sourceMappingURL=PolygonMarker.js.map