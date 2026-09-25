"use strict";

import ShapeOutlineMarkerBase from "./ShapeOutlineMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const FrameMarker = props => {
  const {
    width,
    height
  } = props;
  const d = `M 0 0 
      H ${width} 
      V ${height} 
      H 0 
      V 0 Z`;
  return /*#__PURE__*/_jsx(ShapeOutlineMarkerBase, {
    ...props,
    typeName: "FrameMarker",
    d: d
  });
};
export default FrameMarker;
//# sourceMappingURL=FrameMarker.js.map