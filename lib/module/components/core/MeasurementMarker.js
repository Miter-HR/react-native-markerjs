"use strict";

import LinearMarkerBase from "./LinearMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const MeasurementMarker = ({
  ...props
}) => {
  const {
    x1,
    y1,
    x2,
    y2,
    strokeWidth = 3,
    zoomFactor = 1,
    scaleStroke = true
  } = props;
  const d = `M ${x1} ${y1} L ${x2} ${y2}`;
  const getTerminatorProperties = () => {
    const tipLength = 5 + strokeWidth * 3;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    return {
      tipLength: tipLength / (scaleStroke ? zoomFactor : 1),
      angle
    };
  };
  const getStartTerminatorPath = () => {
    const {
      tipLength,
      angle
    } = getTerminatorProperties();
    const startSide1 = {
      x: x1 + tipLength * Math.sin(angle),
      y: y1 - tipLength * Math.cos(angle)
    };
    const startSide2 = {
      x: x1 - tipLength * Math.sin(angle),
      y: y1 + tipLength * Math.cos(angle)
    };
    const result = `M ${startSide1.x} ${startSide1.y}
      L ${startSide2.x} ${startSide2.y}`;
    return result;
  };
  const getEndTerminatorPath = () => {
    const {
      tipLength,
      angle
    } = getTerminatorProperties();
    const endSide1 = {
      x: x2 + tipLength * Math.sin(angle),
      y: y2 - tipLength * Math.cos(angle)
    };
    const endSide2 = {
      x: x2 - tipLength * Math.sin(angle),
      y: y2 + tipLength * Math.cos(angle)
    };

    // svg path for the arrow
    const result = `M ${endSide1.x} ${endSide1.y} L ${endSide2.x} ${endSide2.y}`;
    return result;
  };
  return /*#__PURE__*/_jsx(LinearMarkerBase, {
    ...props,
    typeName: "ArrowMarker",
    d: d,
    startTerminatorD: getStartTerminatorPath(),
    endTerminatorD: getEndTerminatorPath()
  });
};
export default MeasurementMarker;
//# sourceMappingURL=MeasurementMarker.js.map