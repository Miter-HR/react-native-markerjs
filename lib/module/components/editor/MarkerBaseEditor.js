"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { G } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";
const MarkerBaseEditor = ({
  marker,
  mode = 'select',
  zoomFactor = 1,
  scaleStroke = true,
  disableInteraction = false,
  children,
  onSelect,
  ...props
}) => {
  return /*#__PURE__*/_jsx(G, {
    onStartShouldSetResponder: () => !disableInteraction,
    ...props,
    children: children
  });
};
export default MarkerBaseEditor;
//# sourceMappingURL=MarkerBaseEditor.js.map