"use strict";

import { Circle, G } from 'react-native-svg';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Grip = ({
  x,
  y,
  strokeColor = '#0ea5e9',
  fillColor = 'rgba(255,255,255,0.9)',
  flipColors = false,
  zoomFactor = 1,
  ...props
}) => {
  return /*#__PURE__*/_jsxs(G, {
    ...props,
    children: [/*#__PURE__*/_jsx(Circle, {
      cx: x,
      cy: y,
      r: 10 / zoomFactor,
      fill: "transparent",
      stroke: "transparent",
      strokeWidth: 0
    }), /*#__PURE__*/_jsx(Circle, {
      cx: x,
      cy: y,
      r: 5 / zoomFactor,
      fill: flipColors ? strokeColor : fillColor,
      stroke: flipColors ? fillColor : strokeColor,
      strokeWidth: 1 / zoomFactor
    })]
  });
};
export default Grip;
//# sourceMappingURL=Grip.js.map