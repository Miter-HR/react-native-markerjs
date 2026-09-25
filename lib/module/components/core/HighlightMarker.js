"use strict";

import ShapeMarkerBase from "./ShapeMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const HighlightMarker = props => {
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
    typeName: "HighlightMarker",
    d: d
  });
};
export default HighlightMarker;
//# sourceMappingURL=HighlightMarker.js.map