"use strict";

import ShapeMarkerBase from "./ShapeMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const EllipseMarker = props => {
  const {
    width,
    height
  } = props;
  const d = `M ${width / 2} 0 
       a ${width / 2} ${height / 2} 0 1 0 0 ${height} 
       a ${width / 2} ${height / 2} 0 1 0 0 -${height} z`;
  return /*#__PURE__*/_jsx(ShapeMarkerBase, {
    ...props,
    typeName: "EllipseMarker",
    d: d
  });
};
export default EllipseMarker;
//# sourceMappingURL=EllipseMarker.js.map