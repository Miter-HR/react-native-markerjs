"use strict";

import LinearMarkerBase from "./LinearMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const LineMarker = props => {
  const {
    x1,
    y1,
    x2,
    y2
  } = props;
  const d = `M ${x1} ${y1} L ${x2} ${y2}`;
  return /*#__PURE__*/_jsx(LinearMarkerBase, {
    ...props,
    typeName: "LineMarker",
    d: d
  });
};
export default LineMarker;
//# sourceMappingURL=LineMarker.js.map