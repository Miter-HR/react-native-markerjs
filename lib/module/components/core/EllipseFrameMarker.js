"use strict";

import ShapeOutlineMarkerBase from "./ShapeOutlineMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const EllipseFrameMarker = props => {
  const {
    width,
    height
  } = props;
  const d = `M ${width / 2} 0 
       a ${width / 2} ${height / 2} 0 1 0 0 ${height} 
       a ${width / 2} ${height / 2} 0 1 0 0 -${height} z`;
  return /*#__PURE__*/_jsx(ShapeOutlineMarkerBase, {
    ...props,
    typeName: "EllipseFrameMarker",
    d: d
  });
};
export default EllipseFrameMarker;
//# sourceMappingURL=EllipseFrameMarker.js.map