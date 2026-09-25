"use strict";

import { Path } from 'react-native-svg';
import RectangularBoxMarkerBase from "./RectangularBoxMarkerBase.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ShapeOutlineMarkerBase = ({
  d,
  strokeColor,
  strokeWidth,
  strokeDasharray,
  children,
  zoomFactor = 1,
  scaleStroke = true,
  ...props
}) => {
  return /*#__PURE__*/_jsxs(RectangularBoxMarkerBase, {
    ...props,
    children: [/*#__PURE__*/_jsx(Path, {
      d: d,
      ...props,
      fill: "transparent",
      stroke: strokeColor,
      strokeWidth: (strokeWidth ?? 1) / (scaleStroke ? zoomFactor : 1),
      strokeDasharray: strokeDasharray
    }), children]
  });
};
export default ShapeOutlineMarkerBase;
//# sourceMappingURL=ShapeOutlineMarkerBase.js.map