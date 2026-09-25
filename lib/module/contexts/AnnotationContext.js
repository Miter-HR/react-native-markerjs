"use strict";

import React, { createContext, useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const AnnotationContext = /*#__PURE__*/createContext(undefined);
export const useAnnotationContext = () => {
  const ctx = useContext(AnnotationContext);
  if (!ctx) throw new Error('useAnnotationContext must be used within AnnotationProvider');
  return ctx;
};
export const AnnotationProvider = ({
  children
}) => {
  const [annotation, setAnnotation] =
  // React.useState<AnnotationState>(testState);
  React.useState(null);
  const handleAnnotationChange = newAnnotation => {
    setAnnotation(newAnnotation);
  };
  return /*#__PURE__*/_jsx(AnnotationContext.Provider, {
    value: {
      annotation,
      setAnnotation: handleAnnotationChange
    },
    children: children
  });
};
//# sourceMappingURL=AnnotationContext.js.map