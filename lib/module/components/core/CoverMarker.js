"use strict";

import ShapeMarkerBase from "./ShapeMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const CoverMarker = props => {
  const {
    width,
    height
  } = props;
  const d = `M 0 0 
      H ${width} 
      V ${height} 
      H 0 
      V 0 Z`;
  return /*#__PURE__*/_jsx(ShapeMarkerBase, {
    ...props,
    typeName: "CoverMarker",
    d: d
  });
};
export default CoverMarker;
//# sourceMappingURL=CoverMarker.js.map