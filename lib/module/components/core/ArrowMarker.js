"use strict";

import LinearMarkerBase from "./LinearMarkerBase.js";
import { jsx as _jsx } from "react/jsx-runtime";
const ArrowMarker = ({
  arrowType = 'end',
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
  const getArrowProperties = () => {
    const arrowHeight = 10 + strokeWidth * 2;
    const arrowWidth = Math.min(Math.max(5, strokeWidth * 2), strokeWidth + 5);
    const arrowDipFactor = 0.7; // arrow base "bend factor"

    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    return {
      arrowHeight: arrowHeight / (scaleStroke ? zoomFactor : 1),
      arrowDipFactor,
      angle,
      arrowWidth: arrowWidth / (scaleStroke ? zoomFactor : 1)
    };
  };
  const getStartTerminatorPath = () => {
    const {
      arrowHeight,
      arrowDipFactor,
      angle,
      arrowWidth
    } = getArrowProperties();

    // Start arrow
    const startArrowBasePoint = {
      x: x1 + arrowHeight * arrowDipFactor * Math.cos(angle),
      y: y1 + arrowHeight * arrowDipFactor * Math.sin(angle)
    };
    const startArrowTipBasePoint = {
      x: x1 + arrowHeight * Math.cos(angle),
      y: y1 + arrowHeight * Math.sin(angle)
    };
    const startArrowSide1 = {
      x: startArrowTipBasePoint.x + arrowWidth * Math.sin(angle),
      y: startArrowTipBasePoint.y - arrowWidth * Math.cos(angle)
    };
    const startArrowSide2 = {
      x: startArrowTipBasePoint.x - arrowWidth * Math.sin(angle),
      y: startArrowTipBasePoint.y + arrowWidth * Math.cos(angle)
    };
    const startSegment = arrowType === 'start' || arrowType === 'both' ? `M ${startArrowBasePoint.x} ${startArrowBasePoint.y}
    L ${startArrowSide1.x} ${startArrowSide1.y} L ${x1} ${y1} L ${startArrowSide2.x} ${startArrowSide2.y} L ${startArrowBasePoint.x} ${startArrowBasePoint.y}
    L ${startArrowBasePoint.x} ${startArrowBasePoint.y}` : ``;
    return startSegment;
  };
  const getEndTerminatorPath = () => {
    const {
      arrowHeight,
      arrowDipFactor,
      angle,
      arrowWidth
    } = getArrowProperties();

    // End arrow
    const endArrowBasePoint = {
      x: x2 - arrowHeight * arrowDipFactor * Math.cos(angle),
      y: y2 - arrowHeight * arrowDipFactor * Math.sin(angle)
    };
    const endArrowTipBasePoint = {
      x: x2 - arrowHeight * Math.cos(angle),
      y: y2 - arrowHeight * Math.sin(angle)
    };
    const endArrowSide1 = {
      x: endArrowTipBasePoint.x + arrowWidth * Math.sin(angle),
      y: endArrowTipBasePoint.y - arrowWidth * Math.cos(angle)
    };
    const endArrowSide2 = {
      x: endArrowTipBasePoint.x - arrowWidth * Math.sin(angle),
      y: endArrowTipBasePoint.y + arrowWidth * Math.cos(angle)
    };
    const endSegment = arrowType === 'end' || arrowType === 'both' ? `M ${endArrowBasePoint.x} ${endArrowBasePoint.y} 
    L ${endArrowSide1.x} ${endArrowSide1.y} L ${x2} ${y2} L ${endArrowSide2.x} ${endArrowSide2.y} L ${endArrowBasePoint.x} ${endArrowBasePoint.y} Z` : ``;
    return endSegment;
  };
  const startTerminatorD = arrowType === 'start' || arrowType === 'both' ? getStartTerminatorPath() : undefined;
  const endTerminatorD = arrowType === 'end' || arrowType === 'both' ? getEndTerminatorPath() : undefined;
  return /*#__PURE__*/_jsx(LinearMarkerBase, {
    ...props,
    typeName: "ArrowMarker",
    d: d,
    startTerminatorD: startTerminatorD,
    endTerminatorD: endTerminatorD
  });
};
export default ArrowMarker;
//# sourceMappingURL=ArrowMarker.js.map