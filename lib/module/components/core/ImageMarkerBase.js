"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { G, Rect, SvgXml } from 'react-native-svg';
import RectangularBoxMarkerBase from "./RectangularBoxMarkerBase.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ImageMarkerBase = ({
  strokeColor,
  strokeWidth,
  strokeDasharray,
  zoomFactor = 1,
  scaleStroke = true,
  svgString,
  children,
  ...props
}) => {
  return /*#__PURE__*/_jsxs(RectangularBoxMarkerBase, {
    ...props,
    children: [/*#__PURE__*/_jsxs(G, {
      children: [svgString && /*#__PURE__*/_jsx(SvgXml, {
        xml: svgString,
        width: props.width,
        height: props.height
      }), /*#__PURE__*/_jsx(Rect, {
        x: 0,
        y: 0,
        width: props.width,
        height: props.height,
        fill: "transparent",
        stroke: "transparent"
      })]
    }), children]
  });
};
export default ImageMarkerBase;
//# sourceMappingURL=ImageMarkerBase.js.map