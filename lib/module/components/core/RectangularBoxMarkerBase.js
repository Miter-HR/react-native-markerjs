"use strict";

import MarkerBase from "./MarkerBase.js";
import { G } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";
const RectangularBoxMarkerBase = props => {
  const {
    left,
    top,
    width,
    height,
    rotationAngle
  } = props;
  return /*#__PURE__*/_jsx(MarkerBase, {
    ...props,
    children: /*#__PURE__*/_jsx(G, {
      transform: `rotate(${rotationAngle ?? 0}, ${left + width / 2}, ${top + height / 2})`,
      children: /*#__PURE__*/_jsx(G, {
        transform: `translate(${left}, ${top})`,
        children: props.children
      })
    })
  });
};
export default RectangularBoxMarkerBase;
//# sourceMappingURL=RectangularBoxMarkerBase.js.map