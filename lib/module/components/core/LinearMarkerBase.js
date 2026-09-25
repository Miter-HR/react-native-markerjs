"use strict";

import MarkerBase from "./MarkerBase.js";
import { G, Path } from 'react-native-svg';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const LinearMarkerBase = ({
  d,
  startTerminatorD,
  endTerminatorD,
  strokeColor,
  strokeWidth,
  strokeDasharray,
  children,
  zoomFactor = 1,
  scaleStroke = true,
  ...props
}) => {
  return /*#__PURE__*/_jsx(MarkerBase, {
    ...props,
    children: /*#__PURE__*/_jsxs(G, {
      children: [/*#__PURE__*/_jsx(Path, {
        d: d,
        ...props,
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: Math.max((strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1), 20 // ensure a minimum stroke width for interaction
        )
      }), /*#__PURE__*/_jsx(Path, {
        d: d,
        ...props,
        fill: "transparent",
        stroke: strokeColor,
        strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1),
        strokeDasharray: strokeDasharray
      }), startTerminatorD && /*#__PURE__*/_jsx(Path, {
        d: startTerminatorD,
        ...props,
        fill: "transparent",
        stroke: strokeColor,
        strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1)
      }), endTerminatorD && /*#__PURE__*/_jsx(Path, {
        d: endTerminatorD,
        ...props,
        fill: "transparent",
        stroke: strokeColor,
        strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1)
      }), children]
    })
  });
};
export default LinearMarkerBase;
//# sourceMappingURL=LinearMarkerBase.js.map