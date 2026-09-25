"use strict";

import Grip from "./Grip.js";
import TextMarkerEditor from "./TextMarkerEditor.js";
import { useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const CalloutMarkerEditor = ({
  marker,
  onMarkerCreate,
  ...props
}) => {
  const {
    selected,
    disableInteraction,
    onMarkerChange,
    scaleStroke = true,
    zoomFactor = 1
  } = props;
  const [manipulationStartPosition, setManipulationStartPosition] = useState({
    x: 0,
    y: 0
  });
  const [manipulationStartTipPosition, setManipulationStartTipPosition] = useState({
    x: marker.tipPosition.x,
    y: marker.tipPosition.y
  });
  const handleMarkerCreate = newMarker => {
    const newCalloutMarker = newMarker;
    const defaultTipPosition = {
      x: newCalloutMarker.width / 4,
      y: newCalloutMarker.height + 20 / (scaleStroke ? zoomFactor : 1)
    };
    onMarkerCreate?.({
      ...newCalloutMarker,
      tipPosition: defaultTipPosition
    });
  };
  const handleResponderGrant = ev => {
    setManipulationStartPosition({
      x: ev.nativeEvent.pageX / zoomFactor,
      y: ev.nativeEvent.pageY / zoomFactor
    });
    setManipulationStartTipPosition({
      x: marker.tipPosition.x,
      y: marker.tipPosition.y
    });
  };
  const handleResponderMove = ev => {
    // Get absolute movement in screen coordinates
    const dx = ev.nativeEvent.pageX / zoomFactor - manipulationStartPosition.x;
    const dy = ev.nativeEvent.pageY / zoomFactor - manipulationStartPosition.y;

    // Convert rotation to radians
    const angle = (marker.rotationAngle || 0) * Math.PI / 180;

    // Transform the movement according to rotation
    const rotatedDx = dx * Math.cos(angle) + dy * Math.sin(angle);
    const rotatedDy = -dx * Math.sin(angle) + dy * Math.cos(angle);

    // Update the tip position based on the movement
    const newTipPosition = {
      x: manipulationStartTipPosition.x + rotatedDx,
      y: manipulationStartTipPosition.y + rotatedDy
    };
    const updatedMarker = {
      ...marker,
      tipPosition: newTipPosition
    };
    onMarkerChange?.(updatedMarker);
  };
  return /*#__PURE__*/_jsx(TextMarkerEditor, {
    marker: marker,
    onMarkerCreate: handleMarkerCreate,
    ...props,
    children: selected && !disableInteraction && /*#__PURE__*/_jsx(Grip, {
      x: marker.tipPosition.x,
      y: marker.tipPosition.y,
      zoomFactor: zoomFactor,
      onStartShouldSetResponder: () => {
        //setManipulationMode('resize');
        return true;
      },
      onResponderGrant: handleResponderGrant,
      onResponderMove: handleResponderMove
    })
  });
};
export default CalloutMarkerEditor;
//# sourceMappingURL=CalloutMarkerEditor.js.map