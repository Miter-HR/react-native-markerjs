"use strict";

import { Path } from 'react-native-svg';
import MarkerBase from "./MarkerBase.js";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const FreehandMarker = ({
  points,
  strokeColor,
  strokeWidth,
  strokeDasharray,
  children,
  zoomFactor = 1,
  scaleStroke = true,
  ...props
}) => {
  return /*#__PURE__*/_jsxs(MarkerBase, {
    ...props,
    children: [points.length > 0 && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Path, {
        d: `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`,
        ...props,
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: Math.max((strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1), 20 // ensure a minimum stroke width for interaction
        )
      }), /*#__PURE__*/_jsx(Path, {
        d: `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`,
        ...props,
        fill: "transparent",
        stroke: strokeColor,
        strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1),
        strokeDasharray: strokeDasharray
      })]
    }), children]
  });
};
export default FreehandMarker;
//# sourceMappingURL=FreehandMarker.js.map