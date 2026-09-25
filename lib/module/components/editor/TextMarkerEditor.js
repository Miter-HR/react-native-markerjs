"use strict";

import RectangularBoxMarkerBaseEditor from "./RectangularBoxMarkerBaseEditor.js";
import { jsx as _jsx } from "react/jsx-runtime";
const TextMarkerEditor = ({
  marker,
  mode,
  selected,
  gestureStartLocation,
  gestureMoveLocation,
  zoomFactor = 1,
  scaleStroke = true,
  disableInteraction = false,
  children,
  onSelect,
  onMarkerChange,
  onMarkerCreate,
  onTextMarkerEdit
}) => {
  const requestEdit = () => {
    onTextMarkerEdit?.(marker);
  };
  return /*#__PURE__*/_jsx(RectangularBoxMarkerBaseEditor, {
    marker: marker,
    children: children,
    mode: mode,
    selected: selected,
    gestureStartLocation: gestureStartLocation,
    gestureMoveLocation: gestureMoveLocation,
    zoomFactor: zoomFactor,
    scaleStroke: scaleStroke,
    disableInteraction: disableInteraction,
    onSelect: onSelect,
    onMarkerChange: onMarkerChange,
    onMarkerCreate: onMarkerCreate,
    isResizable: false,
    onTap: requestEdit,
    onLongPress: requestEdit
  });
};
export default TextMarkerEditor;
//# sourceMappingURL=TextMarkerEditor.js.map